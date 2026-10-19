import * as THREE from 'three';
import { soundFX } from '../audio/soundFX.js';

export class ZoneManager {
  constructor(scene) {
    this.scene = scene;
    this.currentActiveZone = null;

    this.zones = [
      {
        id: 'hero',
        name: 'Sector 01: Neural Nexus [Overview]',
        x: 0,
        z: 8,
        color: 0x00f0ff,
        radius: 6,
        targetSection: '#hero'
      },
      {
        id: 'services',
        name: 'Sector 02: Autonomous Matrix [Services]',
        x: -28,
        z: -18,
        color: 0x7b2cbf,
        radius: 7,
        targetSection: '#services'
      },
      {
        id: 'portfolio',
        name: 'Sector 03: Battle Deployments [Case Studies]',
        x: 28,
        z: -20,
        color: 0x00b4d8,
        radius: 7,
        targetSection: '#portfolio'
      },
      {
        id: 'calculator',
        name: 'Sector 04: ROI Quantum Reactor [Value Engine]',
        x: -24,
        z: 22,
        color: 0xffb703,
        radius: 7,
        targetSection: '#calculator'
      },
      {
        id: 'contact',
        name: 'Sector 05: Enterprise Portal [Cohort Booking]',
        x: 24,
        z: 24,
        color: 0xff0054,
        radius: 7,
        targetSection: '#booking'
      }
    ];

    this.zoneMeshes = [];
    this.initVisuals();
  }

  initVisuals() {
    this.zones.forEach((zone) => {
      // Circular energy platform
      const padGeo = new THREE.CylinderGeometry(zone.radius * 0.7, zone.radius * 0.7, 0.2, 32);
      const padMat = new THREE.MeshStandardMaterial({
        color: 0x0d1b2a,
        emissive: zone.color,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8
      });
      const padMesh = new THREE.Mesh(padGeo, padMat);
      padMesh.position.set(zone.x, 0.1, zone.z);
      this.scene.add(padMesh);

      // Glowing outer ring
      const ringGeo = new THREE.RingGeometry(zone.radius * 0.65, zone.radius * 0.75, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: zone.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.set(zone.x, 0.22, zone.z);
      this.scene.add(ringMesh);

      // Rotating inner holo prism
      const prismGeo = new THREE.OctahedronGeometry(1.6, 0);
      const prismMat = new THREE.MeshStandardMaterial({
        color: zone.color,
        emissive: zone.color,
        emissiveIntensity: 0.8,
        wireframe: true
      });
      const prism = new THREE.Mesh(prismGeo, prismMat);
      prism.position.set(zone.x, 3.2, zone.z);
      this.scene.add(prism);

      // Local beacon light
      const beaconLight = new THREE.PointLight(zone.color, 1.5, 12);
      beaconLight.position.set(zone.x, 3.0, zone.z);
      this.scene.add(beaconLight);

      this.zoneMeshes.push({
        zone,
        pad: padMesh,
        ring: ringMesh,
        prism: prism,
        light: beaconLight
      });
    });
  }

  update(playerPos, delta) {
    const time = performance.now() * 0.001;

    // Animate prisms and rings
    this.zoneMeshes.forEach(item => {
      item.prism.rotation.y += delta * 1.2;
      item.prism.position.y = 3.2 + Math.sin(time * 2 + item.zone.x) * 0.4;
      item.ring.rotation.z += delta * 0.4;
    });

    // Check collision / proximity with player orb
    let nearestZone = null;
    let minDistance = Infinity;

    for (const item of this.zones) {
      const dx = playerPos.x - item.x;
      const dz = playerPos.z - item.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < item.radius && dist < minDistance) {
        nearestZone = item;
        minDistance = dist;
      }
    }

    if (nearestZone && this.currentActiveZone?.id !== nearestZone.id) {
      this.currentActiveZone = nearestZone;
      soundFX.playHover();

      window.dispatchEvent(new CustomEvent('zoneTriggered', {
        detail: {
          zone: nearestZone
        }
      }));
    } else if (!nearestZone && this.currentActiveZone) {
      this.currentActiveZone = null;
      window.dispatchEvent(new CustomEvent('zoneExited'));
    }
  }
}
