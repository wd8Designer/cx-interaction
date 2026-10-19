import * as THREE from 'three';
import { MAZE_GRID, CELL_SIZE, WALL_HEIGHT, gridToWorld } from '../maze/mazeData.js';

export class WorldScene {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.scene = new THREE.Scene();

    // High-contrast atmospheric gallery background
    const bgTone = new THREE.Color(0x18181b);
    this.scene.background = bgTone;
    this.scene.fog = new THREE.FogExp2(bgTone, 0.006);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(54, this.width / this.height, 0.1, 1000);
    this.camera.position.set(0, 9.5, 14);

    // High-performance renderer with ACES Filmic Tone Mapping
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap; // Ultra-fast hardware PCF
    this.container.appendChild(this.renderer.domElement);

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.setupRealisticLighting();
    this.buildMilkyMazeWorld();
    this.bindEvents();
  }

  setupRealisticLighting() {
    // 1. Natural Ambient Sky/Ground bounce
    const hemiLight = new THREE.HemisphereLight(0xf8f6f0, 0x222225, 1.2);
    hemiLight.position.set(0, 60, 0);
    this.scene.add(hemiLight);

    // 2. Main Architectural Sun / Skylight with optimized crisp shadow map
    const sunLight = new THREE.DirectionalLight(0xfff6ec, 2.1);
    sunLight.position.set(45, 80, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 180;
    const shadowD = 65;
    sunLight.shadow.camera.left = -shadowD;
    sunLight.shadow.camera.right = shadowD;
    sunLight.shadow.camera.top = shadowD;
    sunLight.shadow.camera.bottom = -shadowD;
    sunLight.shadow.bias = -0.0002;
    this.scene.add(sunLight);

    // 3. Cool Ambient Fill Light for rich shadow depth
    const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.85);
    fillLight.position.set(-45, 50, -35);
    this.scene.add(fillLight);

    // 4. Architectural recessed ceiling fixture meshes
    const corridorLights = [
      { x: 0, z: -18 }, { x: 0, z: 18 }, { x: -18, z: 0 }, { x: 18, z: 0 },
      { x: -12, z: -12 }, { x: 12, z: -12 }, { x: -12, z: 12 }, { x: 12, z: 12 },
      { x: -24, z: -18 }, { x: 24, z: -18 }, { x: -24, z: 18 }, { x: 24, z: 18 },
      { x: 0, z: -30 }, { x: 0, z: 30 }
    ];

    corridorLights.forEach(pos => {
      // Architectural recessed ceiling fixture
      const fixtureMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.05, 16),
        new THREE.MeshStandardMaterial({
          color: 0x161618,
          metalness: 0.85,
          roughness: 0.3,
          emissive: 0xfff3e3,
          emissiveIntensity: 0.3
        })
      );
      fixtureMesh.position.set(pos.x, 3.98, pos.z);
      this.scene.add(fixtureMesh);
    });

    // 5. Four Pavilion Strategic Area Warm Glows
    const pavilionGlows = [
      { x: 0, z: 0, color: 0xf26e65 },     // Home
      { x: -42, z: -42, color: 0xf5918a }, // About
      { x: 42, z: -42, color: 0xd94f47 },  // Services
      { x: -42, z: 42, color: 0xf59e0b }   // Projects
    ];
    pavilionGlows.forEach(p => {
      const pLight = new THREE.PointLight(p.color, 1.2, 28, 2.0);
      pLight.position.set(p.x, 3.2, p.z);
      this.scene.add(pLight);
    });
  }

  buildMilkyMazeWorld() {
    const rows = MAZE_GRID.length;
    const cols = MAZE_GRID[0].length;
    const totalWidth = cols * CELL_SIZE;
    const totalDepth = rows * CELL_SIZE;
    const PERIMETER_HEIGHT = 16.0; // Grand 16m perimeter walls completely enclosing the campus interior

    // 1. Honed Architectural Dark Terrazzo Floor (Strictly fitting the interior campus footprint)
    const floorGeo = new THREE.PlaneGeometry(totalWidth, totalDepth);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x222226,        // Deep architectural slate/terrazzo
      roughness: 0.28,        // Subtle specular gloss reflections
      metalness: 0.22,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Architectural floor tile expansion joints
    const grid = new THREE.GridHelper(totalWidth, Math.floor(totalWidth / CELL_SIZE), 0x36363d, 0x2b2b30);
    grid.position.y = 0.01;
    this.scene.add(grid);

    // Count wall blocks
    let wallCount = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (MAZE_GRID[r][c] === 1) wallCount++;
      }
    }

    // 2. Milky Porcelain Gallery Walls
    const wallGeo = new THREE.BoxGeometry(CELL_SIZE * 0.99, WALL_HEIGHT, CELL_SIZE * 0.99);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf5f3ee,        // Alabaster / milky porcelain
      roughness: 0.65,        // Architectural satin-matte finish
      metalness: 0.04,
    });

    // 3. Dark Titanium Baseboard Skirting (Crucial grounding contrast along wall bottom)
    const baseboardGeo = new THREE.BoxGeometry(CELL_SIZE * 1.005, 0.22, CELL_SIZE * 1.005);
    const baseboardMat = new THREE.MeshStandardMaterial({
      color: 0x161616,        // Dark titanium
      roughness: 0.35,
      metalness: 0.85
    });

    // 4. Coping Stone Trim on top of walls
    const topCapGeo = new THREE.BoxGeometry(CELL_SIZE * 1.015, 0.12, CELL_SIZE * 1.015);
    const topCapMat = new THREE.MeshStandardMaterial({
      color: 0x202022,        // Dark coping cap
      roughness: 0.4,
      metalness: 0.75
    });

    this.wallMesh = new THREE.InstancedMesh(wallGeo, wallMat, wallCount);
    this.wallMesh.castShadow = true;
    this.wallMesh.receiveShadow = true;

    this.baseboardMesh = new THREE.InstancedMesh(baseboardGeo, baseboardMat, wallCount);
    this.baseboardMesh.castShadow = true;
    this.baseboardMesh.receiveShadow = true;

    this.topCapMesh = new THREE.InstancedMesh(topCapGeo, topCapMat, wallCount);
    this.topCapMesh.castShadow = true;
    this.topCapMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let idx = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (MAZE_GRID[r][c] === 1) {
          const pos = gridToWorld(r, c);
          const isPerimeter = (r === 0 || r === rows - 1 || c === 0 || c === cols - 1);
          const h = isPerimeter ? PERIMETER_HEIGHT : WALL_HEIGHT;

          // Main Wall block: 16m grand perimeter walls vs 4m interior walls
          dummy.scale.set(1.0, isPerimeter ? (PERIMETER_HEIGHT / WALL_HEIGHT) : 1.0, 1.0);
          dummy.position.set(pos.x, h / 2, pos.z);
          dummy.updateMatrix();
          this.wallMesh.setMatrixAt(idx, dummy.matrix);

          // Baseboard Skirting along bottom
          dummy.scale.set(1.0, 1.0, 1.0);
          dummy.position.set(pos.x, 0.11, pos.z);
          dummy.updateMatrix();
          this.baseboardMesh.setMatrixAt(idx, dummy.matrix);

          // Coping stone on top of wall (at 16m for perimeter, 4m for interior)
          dummy.scale.set(1.0, 1.0, 1.0);
          dummy.position.set(pos.x, h + 0.06, pos.z);
          dummy.updateMatrix();
          this.topCapMesh.setMatrixAt(idx, dummy.matrix);

          idx++;
        }
      }
    }

    this.wallMesh.instanceMatrix.needsUpdate = true;
    this.baseboardMesh.instanceMatrix.needsUpdate = true;
    this.topCapMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(this.wallMesh);
    this.scene.add(this.baseboardMesh);
    this.scene.add(this.topCapMesh);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  update(delta) {
    // Subtle architectural parallax tracking
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
