import * as THREE from 'three';

// Procedural Canvas Texture Generator for Halo Backlit Plate (Soft Radial Coral Diffusion)
function createBacklightHaloTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Radial blur gradient centered behind the plaque
  const grad = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 20,
    canvas.width / 2, canvas.height / 2, 220
  );
  grad.addColorStop(0, 'rgba(242, 110, 101, 0.95)'); // Signature Cypherox Coral
  grad.addColorStop(0.35, 'rgba(245, 145, 138, 0.65)');
  grad.addColorStop(0.7, 'rgba(217, 79, 71, 0.25)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// Procedural Canvas Texture Generator for High-Res Cypherox Logo Signage Face
function createBacklitLogoCanvas(variant = 0) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 384;
  const ctx = canvas.getContext('2d');

  // 1. Deep Smoked Obsidian Acrylic Plaque Base
  ctx.fillStyle = '#0a0c12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle carbon/circuit coordinate pattern
  ctx.strokeStyle = 'rgba(242, 110, 101, 0.08)';
  ctx.lineWidth = 1;
  for (let x = 32; x < canvas.width; x += 32) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 32; y < canvas.height; y += 32) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  // Precision outer border in glowing coral
  ctx.strokeStyle = '#f26e65';
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

  // Corner tech ticks
  const tickLen = 22;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  // Top-left
  ctx.beginPath(); ctx.moveTo(12, 12 + tickLen); ctx.lineTo(12, 12); ctx.lineTo(12 + tickLen, 12); ctx.stroke();
  // Top-right
  ctx.beginPath(); ctx.moveTo(canvas.width - 12 - tickLen, 12); ctx.lineTo(canvas.width - 12, 12); ctx.lineTo(canvas.width - 12, 12 + tickLen); ctx.stroke();
  // Bottom-left
  ctx.beginPath(); ctx.moveTo(12, canvas.height - 12 - tickLen); ctx.lineTo(12, canvas.height - 12); ctx.lineTo(12 + tickLen, canvas.height - 12); ctx.stroke();
  // Bottom-right
  ctx.beginPath(); ctx.moveTo(canvas.width - 12 - tickLen, canvas.height - 12); ctx.lineTo(canvas.width - 12, canvas.height - 12); ctx.lineTo(canvas.width - 12, canvas.height - 12 - tickLen); ctx.stroke();

  // Top Neon Coral Accent Line
  const topGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  topGrad.addColorStop(0, '#f26e65');
  topGrad.addColorStop(0.5, '#ffffff');
  topGrad.addColorStop(1, '#f26e65');
  ctx.fillStyle = topGrad;
  ctx.fillRect(16, 16, canvas.width - 32, 4);

  // 2. Draw Iconic Geometric Cypherox Emblem (Left side)
  const emblemX = 145;
  const emblemY = 192;
  const emblemR = 68;

  // Outer glowing halo
  const emblemGlow = ctx.createRadialGradient(emblemX, emblemY, 10, emblemX, emblemY, emblemR + 30);
  emblemGlow.addColorStop(0, 'rgba(242, 110, 101, 0.45)');
  emblemGlow.addColorStop(1, 'rgba(242, 110, 101, 0)');
  ctx.fillStyle = emblemGlow;
  ctx.beginPath(); ctx.arc(emblemX, emblemY, emblemR + 30, 0, Math.PI * 2); ctx.fill();

  // Outer Faceted Hexagon
  ctx.save();
  ctx.translate(emblemX, emblemY);
  ctx.strokeStyle = '#f26e65';
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    const px = Math.cos(angle) * emblemR;
    const py = Math.sin(angle) * emblemR;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();

  // Inner Concentric Hexagon
  ctx.strokeStyle = '#f5918a';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    const px = Math.cos(angle) * (emblemR * 0.65);
    const py = Math.sin(angle) * (emblemR * 0.65);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();

  // Central Core Node & Radiating Crosshairs
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI) / 3;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * (emblemR * 0.3), Math.sin(angle) * (emblemR * 0.3));
    ctx.lineTo(Math.cos(angle) * (emblemR * 0.95), Math.sin(angle) * (emblemR * 0.95));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-Math.cos(angle) * (emblemR * 0.3), -Math.sin(angle) * (emblemR * 0.3));
    ctx.lineTo(-Math.cos(angle) * (emblemR * 0.95), -Math.sin(angle) * (emblemR * 0.95));
    ctx.stroke();
  }
  ctx.restore();

  // 3. Bold Cypherox Brand Typography
  const textLeft = 245;

  // Eyebrow Tag
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f26e65';
  ctx.fillText('CYPHEROX UK // ENTERPRISE AI & ENGINEERING', textLeft, 130);

  // Main Wordmark: CYPHEROX
  ctx.font = '800 66px "Poppins", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(242, 110, 101, 0.85)';
  ctx.shadowBlur = 18;
  ctx.fillText('CYPHEROX', textLeft, 204);
  ctx.shadowBlur = 0;

  // Dot Matrix Trademark
  ctx.fillStyle = '#f26e65';
  ctx.beginPath(); ctx.arc(textLeft + 395, 168, 5, 0, Math.PI * 2); ctx.fill();

  // Subtitle / Architectural Category
  const taglines = [
    'PRODUCTION AI • FULL-STACK SOFTWARE • CLOUD ARCHITECTURE',
    'AUTONOMOUS AGENTS • MULTI-MODEL SWARMS • VECTOR RAG',
    '11+ YEARS IN PRODUCTION • 130+ VETTED SENIOR ENGINEERS',
    'ISO27001 & SOC2 VERIFIED • LONDON & UK ENTERPRISES',
    'ZERO PROTOTYPE FRAGILITY • MISSION-CRITICAL AUTOMATION'
  ];
  const tag = taglines[variant % taglines.length];

  ctx.font = '500 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(tag, textLeft, 240);

  // Divider Line
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.fillRect(textLeft, 260, canvas.width - textLeft - 48, 1);

  // Bottom Telemetry Bar
  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#10b981';
  ctx.fillText('● SYSTEM ACTIVE  |  UK HEADQUARTERS  |  SLA: 99.99%', textLeft, 290);

  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'right';
  ctx.fillText(`UNIT #${String(variant + 1).padStart(2, '0')} // ARCHITECTURAL SIGN`, canvas.width - 48, 290);
  ctx.textAlign = 'left';

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  return texture;
}

// 14 Strategic Corridor Wall Faces distributed throughout the campus
export const BACKLIT_SIGNAGE_LOCATIONS = [
  // Northwest Corridors & Approach to Pavilion 02 (About)
  { id: 'sign-nw-corridor-1', x: -27.04, y: 2.35, z: -48, rotY: -Math.PI / 2, variant: 0 },
  { id: 'sign-nw-corridor-2', x: -20.96, y: 2.35, z: -42, rotY: Math.PI / 2, variant: 1 },

  // Northeast Corridors & Approach to Pavilion 03 (Services & AI)
  { id: 'sign-ne-corridor-1', x: 20.96, y: 2.35, z: -36, rotY: -Math.PI / 2, variant: 2 },
  { id: 'sign-ne-corridor-2', x: 8.96, y: 2.35, z: -24, rotY: -Math.PI / 2, variant: 3 },
  { id: 'sign-ne-junction',   x: 27.04, y: 2.35, z: -18, rotY: Math.PI / 2, variant: 4 },

  // East Artery Walkway
  { id: 'sign-east-artery-1', x: 27.04, y: 2.35, z: -12, rotY: Math.PI / 2, variant: 0 },

  // West Central Corridors
  { id: 'sign-west-central',  x: -30, y: 2.35, z: -3.04, rotY: Math.PI, variant: 1 },

  // Southwest Hub & Approach to Pavilion 04 (Projects)
  { id: 'sign-sw-hub',        x: -44.96, y: 2.35, z: 12, rotY: Math.PI / 2, variant: 2 },
  { id: 'sign-sw-wing',       x: -27.04, y: 2.35, z: 36, rotY: -Math.PI / 2, variant: 3 },

  // Southeast Hub & Approach to Pavilion 05 (London HQ & Contact)
  { id: 'sign-se-hub',        x: 12, y: 2.35, z: 15.04, rotY: 0, variant: 4 },
  { id: 'sign-se-corridor',   x: 44.96, y: 2.35, z: 18, rotY: -Math.PI / 2, variant: 0 },
  { id: 'sign-se-wing',       x: 27.04, y: 2.35, z: 36, rotY: Math.PI / 2, variant: 1 },

  // South Central Artery Corridors
  { id: 'sign-south-artery-1', x: -3.04, y: 2.35, z: 24, rotY: -Math.PI / 2, variant: 2 },
  { id: 'sign-south-artery-2', x: 3.04, y: 2.35, z: 30, rotY: Math.PI / 2, variant: 3 }
];

export class BacklitSignageManager {
  constructor(scene) {
    this.scene = scene;
    this.signs = [];
    this.haloTexture = createBacklightHaloTexture();
    this.createSignage();
  }

  createSignage() {
    // 1. Shared Materials
    const casingMat = new THREE.MeshStandardMaterial({
      color: 0x12141a,      // Dark obsidian titanium frame
      roughness: 0.32,
      metalness: 0.88
    });

    const coralBevelMat = new THREE.MeshStandardMaterial({
      color: 0xf26e65,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xd94f47,
      emissiveIntensity: 0.6
    });

    const haloMat = new THREE.MeshBasicMaterial({
      map: this.haloTexture,
      transparent: true,
      opacity: 0.82,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const protectiveGlassMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.04,
      metalness: 0.12,
      transparent: true,
      opacity: 0.14
    });

    BACKLIT_SIGNAGE_LOCATIONS.forEach((loc, idx) => {
      const group = new THREE.Group();
      group.position.set(loc.x, loc.y, loc.z);
      group.rotation.y = loc.rotY;

      // 1. Wall Halo Glow Plane (Emits diffuse coral backlight wash onto the wall behind the sign)
      // Placed at z = -0.015 relative to casing, right against the wall surface
      const haloGeo = new THREE.PlaneGeometry(2.8, 1.4);
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.z = -0.015;
      group.add(haloMesh);

      // 2. Titanium Outer Casing Tray (1.9m wide, 0.78m high, 0.07m deep)
      const casingGeo = new THREE.BoxGeometry(1.9, 0.78, 0.07);
      const casing = new THREE.Mesh(casingGeo, casingMat);
      casing.castShadow = true;
      casing.receiveShadow = true;
      group.add(casing);

      // 3. Glowing Coral Bevel Rim
      const rimGeo = new THREE.BoxGeometry(1.84, 0.72, 0.075);
      const rim = new THREE.Mesh(rimGeo, coralBevelMat);
      group.add(rim);

      // 4. Backlit Front Acrylic Sign Face with Cypherox Logo
      const faceTexture = createBacklitLogoCanvas(loc.variant);
      const faceGeo = new THREE.PlaneGeometry(1.78, 0.66);
      const faceMat = new THREE.MeshStandardMaterial({
        map: faceTexture,
        roughness: 0.25,
        metalness: 0.1,
        emissive: 0xffffff,
        emissiveMap: faceTexture,
        emissiveIntensity: 0.85
      });
      const faceMesh = new THREE.Mesh(faceGeo, faceMat);
      faceMesh.position.z = 0.04;
      group.add(faceMesh);

      // 5. Anti-Reflective Clear Glass Cover
      const glassGeo = new THREE.PlaneGeometry(1.8, 0.68);
      const glassMesh = new THREE.Mesh(glassGeo, protectiveGlassMat);
      glassMesh.position.z = 0.045;
      group.add(glassMesh);

      // 6. Subtle Ambient Backlight Point for dramatic corridor lighting
      if (idx % 2 === 0) {
        const signLight = new THREE.PointLight(0xf26e65, 0.9, 5.5, 2.0);
        signLight.position.set(0, 0, 0.35);
        group.add(signLight);
      }

      // Add to scene (mounted flush on wall, 0 obstruction to corridor road)
      this.scene.add(group);
      this.signs.push({ loc, group });
    });
  }
}
