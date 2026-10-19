import * as THREE from 'three';

export class ParticleNebula {
  constructor(scene) {
    this.scene = scene;
    this.count = 350;

    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.count * 3);
    const colors = new Float32Array(this.count * 3);

    // Natural architectural ambient dust particles
    const colorWarm = new THREE.Color(0xf1ece1);
    const colorSlate = new THREE.Color(0x94a3b8);

    for (let i = 0; i < this.count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = Math.random() * 15 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;

      const c = Math.random() > 0.5 ? colorWarm : colorSlate;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.NormalBlending
    });

    this.points = new THREE.Points(geo, mat);
    this.scene.add(this.points);
  }

  update(delta) {
    this.points.rotation.y += delta * 0.01;
  }
}
