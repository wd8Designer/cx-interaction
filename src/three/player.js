import * as THREE from 'three';
import { soundFX } from '../audio/soundFX.js';
import { MazeCollisionSystem } from '../maze/collision.js';
import { WALL_HEIGHT } from '../maze/mazeData.js';
import { findCorridorPath } from '../maze/pathfinding.js';

export class PlayerOrb {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.collision = new MazeCollisionSystem();

    // Robot dimensions & physics (Reduced, controlled, smooth speed)
    this.radius = 1.0;
    this.position = new THREE.Vector3(0, 0, 4.8); // In front of Pavilion 01
    this.velocity = new THREE.Vector3(0, 0, 0);

    // Responsive Movement Physics
    this.carSpeed = 0;
    this.maxSpeed = 20.0;
    this.dockTransition = null;

    this.headingAngle = Math.PI; // Faces North towards installation
    this.targetHeadingAngle = Math.PI;
    this.cameraYaw = Math.PI;
    this.cameraPitch = 0.28; // ~16 deg natural chase camera elevation
    this.cameraDistance = 6.6; // Optimal vehicle chase cam distance
    this.targetCameraDistance = 6.6;
    this.currentLookTarget = new THREE.Vector3(0, 1.25, 0);

    // Initial camera placement behind player at runner elevation
    const initHoriz = this.cameraDistance * Math.cos(this.cameraPitch);
    const initHeight = this.cameraDistance * Math.sin(this.cameraPitch);
    this.camera.position.set(0, 1.25 + initHeight, 4.8 + initHoriz);
    this.camera.lookAt(this.currentLookTarget);
    this.currentCamPos = this.camera.position.clone();
    this.isCameraOccluded = false;

    // Realistic Corridor Navigation State
    this.isAutoNavigating = false;
    this.activeWaypoints = [];
    this.currentWaypointIndex = 0;

    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };

    this.pulses = [];

    this.createAIRobot();
    this.bindControls();
  }

  createAIRobot() {
    this.robot = new THREE.Group();
    this.robot.position.set(0, 0, 0);

    // Ultra-Realistic Materials: Cypherox Porcelain, Dark Aeronautical Titanium, Matte Carbon, Polished Chrome, Signature Coral
    const porcelainMat = new THREE.MeshStandardMaterial({
      color: 0xfbfbfa,
      roughness: 0.18,
      metalness: 0.08
    });

    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1e2022,
      roughness: 0.32,
      metalness: 0.88
    });

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x141517,
      roughness: 0.65,
      metalness: 0.25
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd4d8df,
      roughness: 0.12,
      metalness: 0.96
    });

    const lensGlassMat = new THREE.MeshStandardMaterial({
      color: 0x06090f,
      roughness: 0.05,
      metalness: 0.95
    });

    const coralGlowMat = new THREE.MeshStandardMaterial({
      color: 0xf26e65,
      emissive: 0xd94f47,
      emissiveIntensity: 1.3,
      roughness: 0.2
    });

    const amberLedMat = new THREE.MeshBasicMaterial({
      color: 0xffb042
    });

    const cyanLedMat = new THREE.MeshBasicMaterial({
      color: 0xf5918a
    });

    // 1. MAIN AERODYNAMIC FUSELAGE
    this.fuselageGroup = new THREE.Group();
    this.fuselageGroup.position.set(0, 1.25, 0);

    // Contoured upper monocoque hull
    const upperHullGeo = new THREE.SphereGeometry(0.54, 32, 24);
    const upperHull = new THREE.Mesh(upperHullGeo, porcelainMat);
    upperHull.scale.set(0.95, 0.82, 1.15);
    upperHull.castShadow = true;
    upperHull.receiveShadow = true;
    this.fuselageGroup.add(upperHull);

    // Titanium structural keel & under-cradle
    const lowerKeelGeo = new THREE.CylinderGeometry(0.46, 0.32, 0.45, 24);
    const lowerKeel = new THREE.Mesh(lowerKeelGeo, titaniumMat);
    lowerKeel.position.y = -0.32;
    lowerKeel.castShadow = true;
    this.fuselageGroup.add(lowerKeel);

    // Carbon fiber spine accent strip
    const spineGeo = new THREE.BoxGeometry(0.14, 0.65, 0.95);
    const spine = new THREE.Mesh(spineGeo, carbonMat);
    spine.position.set(0, 0.12, -0.15);
    this.fuselageGroup.add(spine);

    // Flank cooling vent slats (left & right)
    for (let side of [-1, 1]) {
      for (let v = 0; v < 3; v++) {
        const ventGeo = new THREE.BoxGeometry(0.04, 0.025, 0.24);
        const vent = new THREE.Mesh(ventGeo, titaniumMat);
        vent.position.set(side * 0.44, -0.05 - v * 0.06, -0.1 + v * 0.05);
        vent.rotation.z = side * 0.2;
        this.fuselageGroup.add(vent);
      }
    }

    // 2. CHEST ARC REACTOR (Cypherox Signature Quantum Core)
    const coreBezelGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.06, 24);
    const coreBezel = new THREE.Mesh(coreBezelGeo, titaniumMat);
    coreBezel.rotation.x = Math.PI / 2;
    coreBezel.position.set(0, 0.06, 0.52);
    this.fuselageGroup.add(coreBezel);

    const coreInnerGeo = new THREE.SphereGeometry(0.11, 16, 16);
    this.coreOrb = new THREE.Mesh(coreInnerGeo, coralGlowMat);
    this.coreOrb.position.set(0, 0.06, 0.54);
    this.fuselageGroup.add(this.coreOrb);

    const coreLensGeo = new THREE.CircleGeometry(0.16, 24);
    const coreLens = new THREE.Mesh(coreLensGeo, lensGlassMat);
    coreLens.position.set(0, 0.06, 0.56);
    this.fuselageGroup.add(coreLens);

    // Telemetry collar LEDs
    const led1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.03), amberLedMat);
    led1.position.set(-0.12, 0.35, 0.42);
    this.fuselageGroup.add(led1);

    const led2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.03), cyanLedMat);
    led2.position.set(0.12, 0.35, 0.42);
    this.fuselageGroup.add(led2);

    this.robot.add(this.fuselageGroup);

    // 3. SENSOR POD / HEAD
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 1.82, 0.08);

    // Neck ring gimbal
    const neckRingGeo = new THREE.CylinderGeometry(0.26, 0.32, 0.1, 24);
    const neckRing = new THREE.Mesh(neckRingGeo, chromeMat);
    neckRing.position.y = -0.16;
    this.headGroup.add(neckRing);

    // Sleek aerodynamic canopy
    const headCanopyGeo = new THREE.SphereGeometry(0.42, 28, 20);
    const headCanopy = new THREE.Mesh(headCanopyGeo, porcelainMat);
    headCanopy.scale.set(0.96, 0.88, 1.08);
    headCanopy.castShadow = true;
    this.headGroup.add(headCanopy);

    // Optical sensor visor shroud (anodized dark titanium)
    const visorShroudGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.14, 24);
    const visorShroud = new THREE.Mesh(visorShroudGeo, titaniumMat);
    visorShroud.rotation.x = Math.PI / 2;
    visorShroud.position.set(0, 0.02, 0.36);
    this.headGroup.add(visorShroud);

    // Deep sapphire camera lens
    const lensGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.06, 24);
    const mainLens = new THREE.Mesh(lensGeo, lensGlassMat);
    mainLens.rotation.x = Math.PI / 2;
    mainLens.position.set(0, 0.02, 0.43);
    this.headGroup.add(mainLens);

    // Multi-element optical aperture ring
    const apertureRingGeo = new THREE.TorusGeometry(0.14, 0.02, 12, 24);
    const apertureRing = new THREE.Mesh(apertureRingGeo, chromeMat);
    apertureRing.position.set(0, 0.02, 0.45);
    this.headGroup.add(apertureRing);

    // Glowing coral pupil / focal core
    const pupilGeo = new THREE.SphereGeometry(0.06, 16, 16);
    this.eyeGlow = new THREE.Mesh(pupilGeo, coralGlowMat);
    this.eyeGlow.position.set(0, 0.02, 0.44);
    this.headGroup.add(this.eyeGlow);

    // Stereoscopic companion sensors (depth cameras)
    for (let side of [-1, 1]) {
      const stereoBezel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 16), titaniumMat);
      stereoBezel.rotation.x = Math.PI / 2;
      stereoBezel.position.set(side * 0.26, 0.02, 0.32);
      this.headGroup.add(stereoBezel);

      const stereoLens = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), lensGlassMat);
      stereoLens.position.set(side * 0.26, 0.02, 0.35);
      this.headGroup.add(stereoLens);
    }

    // Top-mounted continuous 360-degree LiDAR Puck
    const lidarBaseGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.06, 24);
    const lidarBase = new THREE.Mesh(lidarBaseGeo, titaniumMat);
    lidarBase.position.set(0, 0.38, 0.04);
    this.headGroup.add(lidarBase);

    this.lidarPuck = new THREE.Group();
    this.lidarPuck.position.set(0, 0.43, 0.04);

    const puckCylinderGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.08, 24);
    const puckMesh = new THREE.Mesh(puckCylinderGeo, carbonMat);
    this.lidarPuck.add(puckMesh);

    // LiDAR laser aperture slit
    const lidarLaserGeo = new THREE.BoxGeometry(0.06, 0.04, 0.16);
    const lidarLaser = new THREE.Mesh(lidarLaserGeo, coralGlowMat);
    lidarLaser.position.set(0.08, 0.0, 0);
    this.lidarPuck.add(lidarLaser);

    this.headGroup.add(this.lidarPuck);
    this.robot.add(this.headGroup);

    // 4. ARTICULATED FLANK THRUSTER PODS (Left & Right)
    this.thrusterL = this.createThrusterPod(porcelainMat, titaniumMat, chromeMat, coralGlowMat, -1);
    this.thrusterR = this.createThrusterPod(porcelainMat, titaniumMat, chromeMat, coralGlowMat, 1);
    this.robot.add(this.thrusterL);
    this.robot.add(this.thrusterR);

    // 5. UNDERCARRIAGE & ANTI-GRAV HOVER FIELD
    const repulsorHousingGeo = new THREE.CylinderGeometry(0.38, 0.28, 0.2, 24);
    const repulsorHousing = new THREE.Mesh(repulsorHousingGeo, titaniumMat);
    repulsorHousing.position.y = 0.72;
    this.robot.add(repulsorHousing);

    // Toroidal repulsor magnetic coil
    const repulsorCoilGeo = new THREE.TorusGeometry(0.34, 0.05, 16, 32);
    const repulsorCoil = new THREE.Mesh(repulsorCoilGeo, coralGlowMat);
    repulsorCoil.rotation.x = Math.PI / 2;
    repulsorCoil.position.y = 0.65;
    this.robot.add(repulsorCoil);

    // Stator induction teeth
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const toothGeo = new THREE.BoxGeometry(0.04, 0.08, 0.08);
      const tooth = new THREE.Mesh(toothGeo, chromeMat);
      tooth.position.set(Math.cos(angle) * 0.32, 0.68, Math.sin(angle) * 0.32);
      tooth.rotation.y = -angle;
      this.robot.add(tooth);
    }

    // Downward soft coral anti-gravity ground wash
    this.thrusterLight = new THREE.PointLight(0xf26e65, 1.4, 4.5);
    this.thrusterLight.position.set(0, 0.42, 0);
    this.robot.add(this.thrusterLight);

    // Floor Contact Shadow (Dark soft ambient occlusion beneath drone)
    const shadowGeo = new THREE.CircleGeometry(0.95, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x050505,
      transparent: true,
      opacity: 0.35
    });
    this.contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.contactShadow.rotation.x = -Math.PI / 2;
    this.contactShadow.position.y = 0.02;
    this.scene.add(this.contactShadow);

    // Local warm architectural illumination
    this.light = new THREE.PointLight(0xfff5ea, 1.3, 14);
    this.light.position.set(0, 1.8, 0.2);
    this.robot.add(this.light);

    this.scene.add(this.robot);
  }

  createThrusterPod(porcelainMat, titaniumMat, chromeMat, coralGlowMat, side) {
    const group = new THREE.Group();
    group.position.set(side * 0.72, 1.22, -0.05);

    // Hydraulic gimbal arm
    const gimbalArmGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.25, 12);
    const gimbalArm = new THREE.Mesh(gimbalArmGeo, chromeMat);
    gimbalArm.rotation.z = side * (Math.PI / 3);
    gimbalArm.position.set(-side * 0.12, 0, 0);
    group.add(gimbalArm);

    // Pivot knuckle
    const knuckleGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const knuckle = new THREE.Mesh(knuckleGeo, titaniumMat);
    knuckle.position.set(-side * 0.22, -0.04, 0);
    group.add(knuckle);

    // Nacelle pod sub-group (allows tilting)
    const nacelle = new THREE.Group();
    nacelle.name = 'nacelle';

    // Aerodynamic outer nacelle body
    const podGeo = new THREE.CylinderGeometry(0.14, 0.18, 0.58, 20);
    const pod = new THREE.Mesh(podGeo, porcelainMat);
    pod.rotation.x = Math.PI / 2;
    pod.castShadow = true;
    nacelle.add(pod);

    // Titanium front intake cowl
    const intakeCowlGeo = new THREE.CylinderGeometry(0.15, 0.14, 0.12, 20);
    const intakeCowl = new THREE.Mesh(intakeCowlGeo, titaniumMat);
    intakeCowl.rotation.x = Math.PI / 2;
    intakeCowl.position.z = 0.32;
    nacelle.add(intakeCowl);

    // Titanium rear exhaust vector nozzle
    const nozzleGeo = new THREE.CylinderGeometry(0.12, 0.17, 0.16, 20, 1, true);
    const nozzle = new THREE.Mesh(nozzleGeo, titaniumMat);
    nozzle.rotation.x = -Math.PI / 2;
    nozzle.position.z = -0.34;
    nacelle.add(nozzle);

    // Glowing coral ion thrust emitter core
    const emitterGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.06, 16);
    const emitter = new THREE.Mesh(emitterGeo, coralGlowMat);
    emitter.rotation.x = Math.PI / 2;
    emitter.position.z = -0.32;
    nacelle.add(emitter);

    // Vectoring stabilizer winglet
    const wingletGeo = new THREE.BoxGeometry(0.22, 0.03, 0.28);
    const winglet = new THREE.Mesh(wingletGeo, titaniumMat);
    winglet.position.set(side * 0.14, 0.04, -0.08);
    winglet.rotation.z = side * 0.15;
    nacelle.add(winglet);

    group.add(nacelle);
    return group;
  }

  bindControls() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      let keyUsed = false;
      if (e.code === 'KeyW' || e.code === 'ArrowUp') { this.keys.forward = true; keyUsed = true; }
      if (e.code === 'KeyS' || e.code === 'ArrowDown') { this.keys.backward = true; keyUsed = true; }
      if (e.code === 'KeyA' || e.code === 'ArrowLeft') { this.keys.left = true; keyUsed = true; }
      if (e.code === 'KeyD' || e.code === 'ArrowRight') { this.keys.right = true; keyUsed = true; }

      // Pressing WASD cancels auto-navigation and dock transition so player is in immediate control
      if (keyUsed) {
        this.isAutoNavigating = false;
        this.activeWaypoints = [];
        this.dockTransition = null;
        soundFX.playKeyStep();
        this.highlightHUDKey(e.code);
      }

      if (e.code === 'Space') {
        e.preventDefault();
        this.triggerPulse();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'KeyW' || e.code === 'ArrowUp') this.keys.forward = false;
      if (e.code === 'KeyS' || e.code === 'ArrowDown') this.keys.backward = false;
      if (e.code === 'KeyA' || e.code === 'ArrowLeft') this.keys.left = false;
      if (e.code === 'KeyD' || e.code === 'ArrowRight') this.keys.right = false;
      this.unhighlightHUDKey(e.code);
    });
  }

  highlightHUDKey(code) {
    let keyId = null;
    if (code === 'KeyW' || code === 'ArrowUp') keyId = 'key-w';
    if (code === 'KeyA' || code === 'ArrowLeft') keyId = 'key-a';
    if (code === 'KeyS' || code === 'ArrowDown') keyId = 'key-s';
    if (code === 'KeyD' || code === 'ArrowRight') keyId = 'key-d';
    if (code === 'Space') keyId = 'key-space';
    if (keyId) document.getElementById(keyId)?.classList.add('active-key');
  }

  unhighlightHUDKey(code) {
    let keyId = null;
    if (code === 'KeyW' || code === 'ArrowUp') keyId = 'key-w';
    if (code === 'KeyA' || code === 'ArrowLeft') keyId = 'key-a';
    if (code === 'KeyS' || code === 'ArrowDown') keyId = 'key-s';
    if (code === 'KeyD' || code === 'ArrowRight') keyId = 'key-d';
    if (code === 'Space') keyId = 'key-space';
    if (keyId) document.getElementById(keyId)?.classList.remove('active-key');
  }

  triggerPulse() {
    soundFX.playPulse();

    const ringGeo = new THREE.RingGeometry(0.5, 0.9, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf26e65,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });
    const wave = new THREE.Mesh(ringGeo, ringMat);
    wave.rotation.x = -Math.PI / 2;
    wave.position.set(this.position.x, 0.1, this.position.z);
    this.scene.add(wave);

    this.pulses.push({
      mesh: wave,
      scale: 1,
      maxScale: 20,
      opacity: 0.65
    });
  }

  navigateTo(targetX, targetZ, targetHeading = Math.PI) {
    soundFX.playWarp();
    this.targetSectionHeading = targetHeading;
    this.dockTransition = null;
    const waypoints = findCorridorPath(this.position, { x: targetX, z: targetZ });
    if (waypoints && waypoints.length > 0) {
      this.activeWaypoints = waypoints;
      this.currentWaypointIndex = 0;
      this.isAutoNavigating = true;
      this.velocity.set(0, 0, 0);
    } else {
      this.position.set(targetX, 0, targetZ);
      this.velocity.set(0, 0, 0);
      this.headingAngle = targetHeading;
      this.targetHeadingAngle = targetHeading;
    }
  }

  warpTo(targetX, targetZ, targetHeading = Math.PI) {
    this.navigateTo(targetX, targetZ, targetHeading);
  }

  // Smooth cinematic glide in front of section once when reached
  dockAtSection(station) {
    if (!station) return;
    const destX = station.frontX !== undefined ? station.frontX : station.x;
    const destZ = station.frontZ !== undefined ? station.frontZ : (station.z + 4.5);
    const destHeading = station.frontHeading !== undefined ? station.frontHeading : Math.PI;

    // Avoid redundant re-docking if user is already stopped in front of section
    const curDist = Math.hypot(this.position.x - destX, this.position.z - destZ);
    if (curDist < 0.35 && Math.abs(this.headingAngle - destHeading) < 0.2) return;

    this.dockTransition = {
      startX: this.position.x,
      startZ: this.position.z,
      startHeading: this.headingAngle,
      targetX: destX,
      targetZ: destZ,
      targetHeading: destHeading,
      elapsed: 0,
      duration: 0.65
    };

    this.isAutoNavigating = false;
    this.activeWaypoints = [];
    this.velocity.set(0, 0, 0);
    this.carSpeed = 0;
  }

  update(delta, mouse) {
    const time = performance.now() * 0.001;

    // Smooth camera distance zoom
    this.cameraDistance += (this.targetCameraDistance - this.cameraDistance) * Math.min(1.0, delta * 12.0);

    if (this.dockTransition) {
      // Smooth cinematic ease-out glide to front of section once
      this.dockTransition.elapsed += delta;
      const t = Math.min(1.0, this.dockTransition.elapsed / this.dockTransition.duration);
      const ease = 1 - Math.pow(1 - t, 3); // Smooth cubic ease-out

      this.position.x = THREE.MathUtils.lerp(this.dockTransition.startX, this.dockTransition.targetX, ease);
      this.position.z = THREE.MathUtils.lerp(this.dockTransition.startZ, this.dockTransition.targetZ, ease);

      const headingDiff = THREE.MathUtils.euclideanModulo(this.dockTransition.targetHeading - this.dockTransition.startHeading + Math.PI, Math.PI * 2) - Math.PI;
      this.headingAngle = this.dockTransition.startHeading + headingDiff * ease;
      this.targetHeadingAngle = this.headingAngle;

      this.velocity.set(0, 0, 0);
      this.carSpeed = 0;

      if (t >= 1.0) {
        this.position.x = this.dockTransition.targetX;
        this.position.z = this.dockTransition.targetZ;
        this.headingAngle = this.dockTransition.targetHeading;
        this.targetHeadingAngle = this.dockTransition.targetHeading;
        this.dockTransition = null;
      }
    } else if (this.isAutoNavigating && this.activeWaypoints.length > 0) {
      // Auto-Pilot Corridor Path Navigation (Drives autonomously along floor corridors)
      const wp = this.activeWaypoints[this.currentWaypointIndex];
      const dx = wp.x - this.position.x;
      const dz = wp.z - this.position.z;
      const dist = Math.hypot(dx, dz);
      const isFinal = this.currentWaypointIndex === this.activeWaypoints.length - 1;
      const threshold = isFinal ? 0.8 : 2.6;

      if (dist < threshold) {
        this.currentWaypointIndex++;
        if (this.currentWaypointIndex >= this.activeWaypoints.length) {
          this.isAutoNavigating = false;
          this.activeWaypoints = [];
          this.carSpeed = 0;
          this.velocity.set(0, 0, 0);
          if (this.targetSectionHeading !== undefined) {
            this.headingAngle = this.targetSectionHeading;
            this.targetHeadingAngle = this.targetSectionHeading;
            this.targetSectionHeading = undefined;
          }
        }
      } else {
        const moveDir = new THREE.Vector3(dx / dist, 0, dz / dist);
        const navSpeed = 19.5;
        this.carSpeed = navSpeed;
        this.velocity.copy(moveDir).multiplyScalar(navSpeed);
        this.position.addScaledVector(this.velocity, delta);

        // Turn car along corridor heading
        this.targetHeadingAngle = Math.atan2(dx, dz);
        const angleDiff = THREE.MathUtils.euclideanModulo(this.targetHeadingAngle - this.headingAngle + Math.PI, Math.PI * 2) - Math.PI;
        this.headingAngle += angleDiff * Math.min(1.0, delta * 8.0);
      }
      const navCollided = this.collision.resolveCollision(this.position, this.velocity, this.radius);
      if (navCollided) {
        this.carSpeed = Math.min(this.carSpeed, Math.hypot(this.velocity.x, this.velocity.z));
      }
    } else {
      // ==============================================================
      // NATURAL RESPONSIVE WASD MOVEMENT (NO ACCELERATOR, NO BRAKES)
      // W = Move Front (Forward)
      // S = Move Reverse (Backward)
      // A = Steer / Curve Left
      // D = Steer / Curve Right
      // ==============================================================
      const moveSpeed = 16.5; // Natural responsive speed (m/s)
      const turnSpeed = 2.8;  // Fast, agile turning rate (~160 deg/s)

      // Steering: [A] turns LEFT (+heading), [D] turns RIGHT (-heading)
      let steerInput = 0;
      if (this.keys.left) steerInput += 1.0;   // A = Turn Left
      if (this.keys.right) steerInput -= 1.0;  // D = Turn Right

      if (steerInput !== 0) {
        this.headingAngle += steerInput * turnSpeed * delta;
        this.targetHeadingAngle = this.headingAngle;
      }

      // Drive velocity: W = Front, S = Reverse
      if (this.keys.forward) {
        this.carSpeed = moveSpeed;
      } else if (this.keys.backward) {
        this.carSpeed = -moveSpeed * 0.85;
      } else if (this.keys.left || this.keys.right) {
        // Pressing A or D alone curves smoothly while turning
        this.carSpeed = moveSpeed * 0.70;
      } else {
        // Immediate clean stop when keys released (no accelerator or brake delay)
        this.carSpeed = 0;
      }

      const fwdX = Math.sin(this.headingAngle);
      const fwdZ = Math.cos(this.headingAngle);

      this.velocity.x = fwdX * this.carSpeed;
      this.velocity.z = fwdZ * this.carSpeed;

      this.position.addScaledVector(this.velocity, delta);
      const collided = this.collision.resolveCollision(this.position, this.velocity, this.radius);

      if (collided) {
        const tangentSpeed = this.velocity.x * fwdX + this.velocity.z * fwdZ;
        if (this.carSpeed > 0) this.carSpeed = Math.max(0, tangentSpeed);
        else if (this.carSpeed < 0) this.carSpeed = Math.min(0, tangentSpeed);
      }
    }

    // Vehicle Heading Alignment
    this.robot.rotation.y = this.headingAngle;

    // Hover Bobbing & Dynamic High-Speed Flight / Drive Banking
    const currentSpeed = Math.abs(this.carSpeed);
    const speedRatio = Math.min(1.0, currentSpeed / this.maxSpeed);
    const hoverY = 0.2 + Math.sin(time * 4.0) * 0.08;
    this.robot.position.set(this.position.x, this.position.y + hoverY, this.position.z);

    // Car Body Banking into Turns & Pitch under acceleration / braking
    const steerActive = (this.keys.left ? 1.0 : (this.keys.right ? -1.0 : 0));
    const targetRoll = steerActive * 0.18 * Math.min(1.0, currentSpeed / 5.0);
    const targetPitch = this.keys.forward ? -0.12 : (this.keys.backward ? 0.08 : 0);

    this.robot.rotation.z = THREE.MathUtils.lerp(this.robot.rotation.z, targetRoll, 0.18);
    this.robot.rotation.x = THREE.MathUtils.lerp(this.robot.rotation.x, targetPitch, 0.18);

    // Continuous 360-degree LiDAR scanning rotation
    if (this.lidarPuck) {
      this.lidarPuck.rotation.y += delta * 14.0;
    }

    // Articulated gimbal thrusters vectoring
    const nacelleL = this.thrusterL?.getObjectByName('nacelle');
    const nacelleR = this.thrusterR?.getObjectByName('nacelle');
    const thrusterPitch = -targetPitch * 1.4 + Math.sin(time * 5.0) * 0.04;
    if (nacelleL) nacelleL.rotation.x = thrusterPitch + (this.keys.left ? 0.08 : 0);
    if (nacelleR) nacelleR.rotation.x = thrusterPitch + (this.keys.right ? 0.08 : 0);

    // Core reactor breathing pulse
    if (this.coreOrb) {
      const pulse = 1.0 + Math.sin(time * 5.0) * 0.08;
      this.coreOrb.scale.setScalar(pulse);
    }
    if (this.thrusterLight) {
      this.thrusterLight.intensity = 1.3 + Math.sin(time * 7.0) * 0.25;
    }

    this.contactShadow.position.set(this.position.x, 0.02, this.position.z);
    this.contactShadow.scale.setScalar(1.0 + Math.sin(time * 3.5) * 0.05);

    // Kinetic Moving Outline on UI Elements
    const isMoving = currentSpeed > 0.35 || this.keys.forward || this.keys.backward || this.keys.left || this.keys.right;
    if (isMoving !== this.isMovingUIState) {
      this.isMovingUIState = isMoving;
      const controlsPill = document.getElementById('controls-pill');
      if (controlsPill) controlsPill.classList.toggle('moving-active', isMoving);
      const radarBox = document.getElementById('campus-radar-container');
      if (radarBox) radarBox.classList.toggle('moving-active', isMoving);
      const movingBadge = document.getElementById('moving-status-indicator');
      if (movingBadge) {
        movingBadge.classList.toggle('flex', isMoving);
        movingBadge.classList.toggle('hidden', !isMoving);
      }
    }

    // Pulses
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i];
      p.scale += delta * 18;
      p.opacity -= delta * 0.9;
      p.mesh.scale.set(p.scale, p.scale, 1);
      p.mesh.material.opacity = Math.max(0, p.opacity);

      if (p.opacity <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this.pulses.splice(i, 1);
      }
    }

    // Pure Centered Chase Camera firmly tracking directly behind the car's tail
    const camYawDiff = THREE.MathUtils.euclideanModulo(this.headingAngle - this.cameraYaw + Math.PI, Math.PI * 2) - Math.PI;
    this.cameraYaw += camYawDiff * Math.min(1.0, delta * 5.2);

    const camFwdX = Math.sin(this.cameraYaw);
    const camFwdZ = Math.cos(this.cameraYaw);

    const forwardLead = this.carSpeed >= 0 ? speedRatio * 0.75 : -0.3;
    const rawFocusPoint = new THREE.Vector3(
      this.position.x + camFwdX * forwardLead,
      this.position.y + 1.25,
      this.position.z + camFwdZ * forwardLead
    );

    // Smooth look target interpolation (removes jerky look-at snapping)
    this.currentLookTarget.lerp(rawFocusPoint, Math.min(1.0, delta * 15.0));

    // Centered chase camera behind the car along the longitudinal centerline
    const horizDist = this.cameraDistance * Math.cos(this.cameraPitch);
    const camHeight = this.cameraDistance * Math.sin(this.cameraPitch);
    const targetCam = new THREE.Vector3(
      this.currentLookTarget.x - camFwdX * horizDist,
      this.currentLookTarget.y + camHeight,
      this.currentLookTarget.z - camFwdZ * horizDist
    );

    // Keep camera strictly enclosed inside campus gallery (never shows outside)
    const maxBound = 52.0;
    targetCam.x = Math.max(-maxBound, Math.min(maxBound, targetCam.x));
    targetCam.z = Math.max(-maxBound, Math.min(maxBound, targetCam.z));

    // Smooth chase camera tracking
    const lerpFactor = 1.0 - Math.exp(-15.0 * delta);
    this.currentCamPos.lerp(targetCam, lerpFactor);

    this.camera.position.copy(this.currentCamPos);
    this.camera.lookAt(this.currentLookTarget);
  }
}
