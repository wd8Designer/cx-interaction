import * as THREE from 'three';
import { STATIONS } from '../maze/mazeData.js';

export class WayfindingSystem {
  constructor(scene) {
    this.scene = scene;
    this.arrowChevrons = [];
    this.createFloorSignage();
  }

  createFloorSignage() {
    // 3D Directional Floor Chevrons at central hub (0, 0) with Cypherox brand colors
    const destinations = [
      { name: 'ABOUT', angle: -Math.PI * 0.75, color: 0xf5918a, x: -6, z: -6 },
      { name: 'SERVICES', angle: -Math.PI * 0.25, color: 0xd94f47, x: 6, z: -6 },
      { name: 'PROJECTS', angle: Math.PI * 0.75, color: 0xf59e0b, x: -6, z: 6 },
      { name: 'CONTACT', angle: Math.PI * 0.25, color: 0xf26e65, x: 6, z: 6 }
    ];

    destinations.forEach(dest => {
      const chevronGroup = new THREE.Group();
      chevronGroup.position.set(dest.x, 0.04, dest.z);
      chevronGroup.rotation.y = dest.angle;

      const arrowGeo = new THREE.ConeGeometry(0.7, 1.4, 3);
      const arrowMat = new THREE.MeshStandardMaterial({
        color: dest.color,
        roughness: 0.3,
        metalness: 0.7,
        emissive: dest.color,
        emissiveIntensity: 0.4
      });
      const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
      arrowMesh.rotation.x = -Math.PI / 2;
      arrowMesh.rotation.z = Math.PI;
      chevronGroup.add(arrowMesh);

      const plaqueGeo = new THREE.PlaneGeometry(2.4, 0.7);
      const plaqueMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 0.4,
        metalness: 0.8
      });
      const plaque = new THREE.Mesh(plaqueGeo, plaqueMat);
      plaque.rotation.x = -Math.PI / 2;
      plaque.position.z = -1.2;
      chevronGroup.add(plaque);

      this.scene.add(chevronGroup);
      this.arrowChevrons.push({ group: chevronGroup, baseY: 0.04, speed: 2.0 });
    });
  }

  update(playerPos) {
    const time = performance.now() * 0.001;

    this.arrowChevrons.forEach((item, i) => {
      item.group.position.y = item.baseY + Math.sin(time * 3 + i) * 0.03;
    });

    this.updateHUDCompass(playerPos);
  }

  updateHUDCompass(playerPos) {
    STATIONS.forEach(s => {
      const dx = s.x - playerPos.x;
      const dz = s.z - playerPos.z;
      const dist = Math.round(Math.sqrt(dx * dx + dz * dz));

      const angleRad = Math.atan2(dx, -dz);
      const angleDeg = Math.round(angleRad * (180 / Math.PI));

      const distEl = document.getElementById(`dist-${s.number}`);
      const arrowEl = document.getElementById(`arrow-${s.number}`);

      if (distEl) {
        distEl.textContent = dist < 4 ? 'ARRIVED' : `${dist}m`;
      }
      if (arrowEl) {
        arrowEl.style.transform = `rotate(${angleDeg}deg)`;
      }
    });
  }
}
