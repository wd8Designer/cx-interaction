import * as THREE from 'three';
import { STATIONS } from '../maze/mazeData.js';
import { soundFX } from '../audio/soundFX.js';

// Helper to generate dynamic code screen canvas texture
function createCodeScreenTexture(titleText, accentColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 280;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0f1117';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top window header
  ctx.fillStyle = '#1e222d';
  ctx.fillRect(0, 0, canvas.width, 28);
  
  // Window dots
  ctx.fillStyle = '#ff5f56';
  ctx.beginPath(); ctx.arc(16, 14, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffbd2e';
  ctx.beginPath(); ctx.arc(32, 14, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#27c93f';
  ctx.beginPath(); ctx.arc(48, 14, 5, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#8b949e';
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillText(titleText, 70, 18);

  // Syntax highlighted code lines
  ctx.font = '12px "JetBrains Mono", monospace';
  const lines = [
    { text: 'import { CypheroxEngine } from "@cypherox/core";', color: '#f26e65' },
    { text: 'const swarm = new AgentSwarm({ consensus: 0.998 });', color: '#58a6ff' },
    { text: '// Orchestrating production deployment matrix', color: '#8b949e' },
    { text: 'await swarm.dispatch({ pipeline: "enterprise-rag" });', color: '#7ee787' },
    { text: 'const metrics = await swarm.benchmark();', color: '#d2a8ff' },
    { text: 'console.log(`Latency: ${metrics.latency}ms | Pass: 100%`);', color: '#ffa657' },
    { text: '>> STATUS: 0 ERRORS • PRODUCTION ACTIVE', color: '#10B981' }
  ];

  lines.forEach((l, idx) => {
    ctx.fillStyle = l.color;
    ctx.fillText(l.text, 18, 56 + idx * 28);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// Procedural Canvas Texture for S3 Services Architectural Pillars
function createServiceIconTexture(title, category, iconType, accentColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Dark slate architectural plaque background
  ctx.fillStyle = '#0f1118';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Coordinate blueprint grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 32) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 32) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  // Outer border with accent color
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 6;
  ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);

  // Inner fine border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.strokeRect(26, 26, canvas.width - 52, canvas.height - 52);

  // Center radial ambient glow
  const radial = ctx.createRadialGradient(256, 195, 20, 256, 195, 175);
  radial.addColorStop(0, accentColor + '30');
  radial.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = radial;
  ctx.fillRect(30, 30, canvas.width - 60, 330);

  // Draw Unique Vector Icon
  ctx.save();
  ctx.translate(256, 195);

  if (iconType === 'ai') {
    // Autonomous AI Swarm / Neural Brain
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 3;
    const nodes = [
      { x: 0, y: -52, r: 12 },
      { x: -55, y: -25, r: 10 },
      { x: 55, y: -25, r: 10 },
      { x: -75, y: 30, r: 11 },
      { x: 75, y: 30, r: 11 },
      { x: -30, y: 65, r: 9 },
      { x: 30, y: 65, r: 9 },
      { x: 0, y: 15, r: 16 }
    ];
    const edges = [[0,1],[0,2],[1,7],[2,7],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7],[3,7],[4,7]];
    edges.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(nodes[a].x, nodes[a].y);
      ctx.lineTo(nodes[b].x, nodes[b].y);
      ctx.stroke();
    });
    nodes.forEach(n => {
      ctx.fillStyle = '#0f1118';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = accentColor;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r - 3, 0, Math.PI * 2); ctx.fill();
    });
  } else if (iconType === 'software') {
    // Custom Software: Code Syntax < / > & Terminal Prompt
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    // <
    ctx.beginPath();
    ctx.moveTo(-45, -50);
    ctx.lineTo(-85, 0);
    ctx.lineTo(-45, 50);
    ctx.stroke();
    // /
    ctx.beginPath();
    ctx.moveTo(15, -60);
    ctx.lineTo(-15, 60);
    ctx.stroke();
    // >
    ctx.beginPath();
    ctx.moveTo(45, -50);
    ctx.lineTo(85, 0);
    ctx.lineTo(45, 50);
    ctx.stroke();
    // Terminal cursor prompt below
    ctx.fillStyle = accentColor;
    ctx.fillRect(-35, 75, 70, 7);
  } else if (iconType === 'cloud') {
    // Cloud & DevOps: Stylized Cloud + Connected Cluster Nodes
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 6;
    ctx.fillStyle = accentColor + '22';
    ctx.beginPath();
    ctx.arc(-25, -20, 35, Math.PI * 0.8, Math.PI * 1.85);
    ctx.arc(35, -35, 42, Math.PI * 1.1, Math.PI * 2.05);
    ctx.arc(65, 0, 30, Math.PI * 1.6, Math.PI * 0.4);
    ctx.arc(-55, 10, 25, Math.PI * 0.5, Math.PI * 1.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // 3 Cluster Nodes beneath
    [-50, 0, 50].forEach(nx => {
      ctx.fillStyle = accentColor;
      ctx.fillRect(nx - 14, 50, 28, 14);
      ctx.beginPath();
      ctx.moveTo(nx, 20); ctx.lineTo(nx, 50);
      ctx.stroke();
    });
  } else {
    // Data & Enterprise RAG: Database Cylinders & Vector Arrows
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 5;
    [-45, 0, 45].forEach(dy => {
      ctx.beginPath();
      ctx.ellipse(0, dy, 70, 22, 0, 0, Math.PI * 2);
      ctx.stroke();
      if (dy !== -45) {
        ctx.beginPath();
        ctx.moveTo(-70, dy - 22); ctx.lineTo(-70, dy);
        ctx.moveTo(70, dy - 22); ctx.lineTo(70, dy);
        ctx.stroke();
      }
    });
  }
  ctx.restore();

  // Typography on Plaque
  ctx.textAlign = 'center';
  ctx.fillStyle = accentColor;
  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillText(`CYPHEROX // ${category.toUpperCase()}`, 256, 385);

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 24px "Poppins", sans-serif';
  ctx.fillText(title, 256, 424);

  ctx.fillStyle = '#8b949e';
  ctx.font = '600 12px "JetBrains Mono", monospace';
  ctx.fillText('ENTERPRISE ARCHITECTURE PILLAR', 256, 458);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// Procedural Canvas Texture for S4 Web App Layout Display (View Only)
function createWebLayoutTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 576;
  const ctx = canvas.getContext('2d');

  // Dark Web App background
  ctx.fillStyle = '#0f1117';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Header Bar
  ctx.fillStyle = '#161922';
  ctx.fillRect(0, 0, canvas.width, 48);

  ctx.fillStyle = '#f26e65';
  ctx.fillRect(24, 16, 16, 16);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 15px "Poppins", sans-serif';
  ctx.fillText('CYPHEROX CLOUD // ENTERPRISE PLATFORM', 48, 32);

  ctx.fillStyle = '#f5918a';
  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText('[VIEW ONLY • HIGH-PERFORMANCE WEB ARCHITECTURE]', canvas.width - 24, 31);
  ctx.textAlign = 'left';

  // Left Sidebar
  ctx.fillStyle = '#12141c';
  ctx.fillRect(0, 48, 200, canvas.height - 48);
  ctx.strokeStyle = '#222634';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(200, 48); ctx.lineTo(200, canvas.height); ctx.stroke();

  const navItems = [
    { label: '📊 Dashboard', active: true },
    { label: '⚡ Agent Swarms', active: false },
    { label: '🌐 Cloud Clusters', active: false },
    { label: '🔒 API Key Vault', active: false },
    { label: '📈 Observability', active: false },
    { label: '⚙ System Settings', active: false }
  ];

  navItems.forEach((item, idx) => {
    const y = 72 + idx * 42;
    if (item.active) {
      ctx.fillStyle = 'rgba(242, 110, 101, 0.15)';
      ctx.fillRect(12, y - 18, 176, 32);
      ctx.fillStyle = '#f26e65';
      ctx.fillRect(12, y - 18, 4, 32);
      ctx.fillStyle = '#ffffff';
    } else {
      ctx.fillStyle = '#8b949e';
    }
    ctx.font = '500 13px "Poppins", sans-serif';
    ctx.fillText(item.label, 28, y + 2);
  });

  // Main Content Area: 3 Metric KPI Cards
  const kpis = [
    { label: 'TOTAL THROUGHPUT', val: '14,280 req/s', sub: '+18.4% vs last week', col: '#10b981' },
    { label: 'AVERAGE LATENCY', val: '12.4 ms', sub: '99.9th percentile', col: '#58a6ff' },
    { label: 'CONSENSUS ACCURACY', val: '99.85%', sub: 'Zero schema errors', col: '#f26e65' }
  ];

  kpis.forEach((kpi, idx) => {
    const kx = 224 + idx * 260;
    ctx.fillStyle = '#161922';
    ctx.strokeStyle = '#262a38';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(kx, 68, 244, 96, 8);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#8b949e';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText(kpi.label, kx + 16, 92);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px "Poppins", sans-serif';
    ctx.fillText(kpi.val, kx + 16, 126);

    ctx.fillStyle = kpi.col;
    ctx.font = '500 11px "JetBrains Mono", monospace';
    ctx.fillText(kpi.sub, kx + 16, 148);
  });

  // Chart Container
  const cx = 224, cy = 184, cw = 764, ch = 200;
  ctx.fillStyle = '#161922';
  ctx.strokeStyle = '#262a38';
  ctx.beginPath();
  ctx.roundRect(cx, cy, cw, ch, 8);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 14px "Poppins", sans-serif';
  ctx.fillText('Real-Time Cluster Traffic & Inference Throughput', cx + 18, cy + 28);

  // Line Chart
  const chartPoints = [
    { x: cx + 40, y: cy + 150 },
    { x: cx + 140, y: cy + 130 },
    { x: cx + 240, y: cy + 145 },
    { x: cx + 340, y: cy + 105 },
    { x: cx + 440, y: cy + 115 },
    { x: cx + 540, y: cy + 70 },
    { x: cx + 640, y: cy + 85 },
    { x: cx + 720, y: cy + 55 }
  ];

  ctx.beginPath();
  ctx.moveTo(chartPoints[0].x, cy + 170);
  chartPoints.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(chartPoints[chartPoints.length - 1].x, cy + 170);
  ctx.closePath();
  const cGrad = ctx.createLinearGradient(0, cy + 50, 0, cy + 170);
  cGrad.addColorStop(0, 'rgba(242, 110, 101, 0.35)');
  cGrad.addColorStop(1, 'rgba(242, 110, 101, 0.0)');
  ctx.fillStyle = cGrad;
  ctx.fill();

  ctx.strokeStyle = '#f26e65';
  ctx.lineWidth = 3;
  ctx.beginPath();
  chartPoints.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  chartPoints.forEach(p => {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f26e65';
    ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
  });

  // Bottom Microservices Health Table
  const tx = 224, ty = 404, tw = 764, th = 150;
  ctx.fillStyle = '#161922';
  ctx.strokeStyle = '#262a38';
  ctx.beginPath();
  ctx.roundRect(tx, ty, tw, th, 8);
  ctx.fill(); ctx.stroke();

  const services = [
    { name: 'agent-swarm-orchestrator', region: 'eu-west-2 (London)', lat: '4.8ms', status: 'HEALTHY' },
    { name: 'enterprise-rag-vector-db', region: 'eu-west-2 (London)', lat: '6.2ms', status: 'HEALTHY' },
    { name: 'api-gateway-edge-proxy', region: 'Global Anycast', lat: '1.2ms', status: 'HEALTHY' }
  ];

  services.forEach((s, idx) => {
    const rowY = ty + 36 + idx * 36;
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillText(s.name, tx + 18, rowY);

    ctx.fillStyle = '#8b949e';
    ctx.fillText(s.region, tx + 310, rowY);
    ctx.fillText(s.lat, tx + 530, rowY);

    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.fillRect(tx + 660, rowY - 14, 78, 20);
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText(s.status, tx + 674, rowY);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// Procedural Canvas Texture for S4 Mobile App Layout Display (View Only)
function createMobileLayoutTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Dark Mobile Screen Background
  ctx.fillStyle = '#0c0e14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Status Bar
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 15px "Poppins", sans-serif';
  ctx.fillText('09:41', 36, 44);

  // Dynamic Island Notch Pill
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.roundRect(196, 20, 120, 32, 16);
  ctx.fill();

  ctx.font = '12px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText('5G  100%', canvas.width - 36, 44);
  ctx.textAlign = 'left';

  // Mobile App Header
  ctx.fillStyle = '#8b949e';
  ctx.font = '500 13px "Poppins", sans-serif';
  ctx.fillText('Welcome to Cypherox', 32, 92);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px "Poppins", sans-serif';
  ctx.fillText('Enterprise Mobile', 32, 124);

  // View Only Notice Pill
  ctx.fillStyle = 'rgba(242, 110, 101, 0.15)';
  ctx.strokeStyle = '#f26e65';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(32, 142, canvas.width - 64, 30, 8);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#f5918a';
  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('VIEW ONLY • NATIVE IOS & ANDROID ARCHITECTURE', canvas.width / 2, 162);
  ctx.textAlign = 'left';

  // Primary Gradient Compute Card
  const cardGrad = ctx.createLinearGradient(32, 190, canvas.width - 32, 360);
  cardGrad.addColorStop(0, '#f26e65');
  cardGrad.addColorStop(1, '#9b2c2c');
  ctx.fillStyle = cardGrad;
  ctx.beginPath();
  ctx.roundRect(32, 190, canvas.width - 64, 170, 20);
  ctx.fill();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('TOTAL MANAGED INFRASTRUCTURE', 52, 226);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Poppins", sans-serif';
  ctx.fillText('£48,500.00', 52, 274);

  ctx.font = '500 13px "JetBrains Mono", monospace';
  ctx.fillText('⚡ 48 Production Agents Active  •  99.99%', 52, 318);

  // Quick Action Buttons Row
  const actions = [
    { label: 'Deploy', icon: '🚀' },
    { label: 'Metrics', icon: '📊' },
    { label: 'Swarm', icon: '⚡' },
    { label: 'Security', icon: '🛡' }
  ];

  actions.forEach((act, idx) => {
    const ax = 54 + idx * 105;
    const ay = 400;
    ctx.fillStyle = '#181b24';
    ctx.strokeStyle = '#262a38';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(ax, ay, 32, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    ctx.font = '22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(act.icon, ax, ay + 8);

    ctx.fillStyle = '#CBD5E1';
    ctx.font = '600 12px "Poppins", sans-serif';
    ctx.fillText(act.label, ax, ay + 56);
  });
  ctx.textAlign = 'left';

  // Section: Live Feed / Activity
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 18px "Poppins", sans-serif';
  ctx.fillText('Live Workstream Activity', 32, 510);

  const activities = [
    { title: 'Multi-Agent Consensus Reached', time: 'Just now', badge: 'PASSED', color: '#10b981' },
    { title: 'Canary Release eu-west-2 Deployed', time: '2m ago', badge: 'ACTIVE', color: '#58a6ff' },
    { title: 'Vector Index 4.2M Re-indexed', time: '14m ago', badge: 'SYNCED', color: '#f59e0b' },
    { title: 'Automated Security Penetration Scan', time: '1h ago', badge: '0 FLAWS', color: '#10b981' }
  ];

  activities.forEach((act, idx) => {
    const actY = 540 + idx * 84;
    ctx.fillStyle = '#161922';
    ctx.strokeStyle = '#262a38';
    ctx.beginPath();
    ctx.roundRect(32, actY, canvas.width - 64, 70, 14);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '600 14px "Poppins", sans-serif';
    ctx.fillText(act.title, 50, actY + 30);

    ctx.fillStyle = '#8b949e';
    ctx.font = '500 12px "JetBrains Mono", monospace';
    ctx.fillText(act.time, 50, actY + 52);

    ctx.fillStyle = act.color;
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(act.badge, canvas.width - 50, actY + 42);
    ctx.textAlign = 'left';
  });

  // Bottom Floating Tab Navigation Bar
  const bY = canvas.height - 100;
  ctx.fillStyle = '#12141c';
  ctx.strokeStyle = '#262a38';
  ctx.beginPath();
  ctx.roundRect(32, bY, canvas.width - 64, 64, 32);
  ctx.fill(); ctx.stroke();

  const tabs = ['🏠 Home', '📊 Stats', '⚡ Swarm', '👤 Team'];
  tabs.forEach((tab, idx) => {
    const tx = 84 + idx * 95;
    ctx.fillStyle = idx === 0 ? '#f26e65' : '#8b949e';
    ctx.font = '600 13px "Poppins", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(tab, tx, bY + 38);
  });
  ctx.textAlign = 'left';

  // Home Indicator Bar
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(canvas.width / 2 - 60, canvas.height - 18, 120, 4, 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

export class StationsWorldManager {
  constructor(scene) {
    this.scene = scene;
    this.stations = STATIONS;
    this.stationObjects = [];
    this.activeStation = null;
    this.dockRadius = 4.2;

    this.createStationVisuals();
  }

  createStationVisuals() {
    this.stations.forEach(station => {
      const group = new THREE.Group();
      group.position.set(station.x, 0, station.z);

      // 1. Architectural Circular Base Plinth in Honed Warm Limestone
      const padGeo = new THREE.CylinderGeometry(3.6, 3.85, 0.16, 48);
      const padMat = new THREE.MeshStandardMaterial({
        color: 0xded8cc, // Warm limestone
        roughness: 0.45,
        metalness: 0.12
      });
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.position.y = 0.08;
      pad.receiveShadow = true;
      group.add(pad);

      // Cypherox Signature Coral Perimeter Inlay Ring
      const ringGeo = new THREE.RingGeometry(3.45, 3.65, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color: station.color,
        roughness: 0.25,
        metalness: 0.85,
        emissive: station.color,
        emissiveIntensity: 0.65
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.17;
      group.add(ring);

      // 2. Bespoke Content-Based 3D Architectural Installations
      const contentGroup = new THREE.Group();
      let animators = [];

      if (station.id === 'S1') {
        // ==============================================================
        // S1: HOME — CYPHEROX AI SUPERCOMPUTER MONOLITH & CORE
        // ==============================================================
        // Dual 42U Data Center Server Cabinets (Flanking left & right)
        [-2.0, 2.0].forEach(xOffset => {
          const rackFrameGeo = new THREE.BoxGeometry(1.0, 3.2, 0.95);
          const rackFrameMat = new THREE.MeshStandardMaterial({ color: 0x121214, roughness: 0.35, metalness: 0.9 });
          const rack = new THREE.Mesh(rackFrameGeo, rackFrameMat);
          rack.position.set(xOffset, 1.6, 0);
          rack.castShadow = true;
          contentGroup.add(rack);

          // Horizontal server blade units with status LEDs
          for (let y = 0.45; y <= 2.9; y += 0.28) {
            const bladeGeo = new THREE.BoxGeometry(0.88, 0.22, 0.05);
            const bladeMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1f, roughness: 0.4, metalness: 0.7 });
            const blade = new THREE.Mesh(bladeGeo, bladeMat);
            blade.position.set(xOffset, y, 0.46);
            contentGroup.add(blade);

            // Server LED indicators (Green power + amber activity)
            const ledGeo = new THREE.BoxGeometry(0.04, 0.04, 0.02);
            const greenLedMat = new THREE.MeshStandardMaterial({ color: 0x10B981, emissive: 0x10B981, emissiveIntensity: 0.9 });
            const led1 = new THREE.Mesh(ledGeo, greenLedMat);
            led1.position.set(xOffset - 0.35, y, 0.49);
            contentGroup.add(led1);

            const amberLedMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xf59e0b, emissiveIntensity: 0.8 });
            const led2 = new THREE.Mesh(ledGeo, amberLedMat);
            led2.position.set(xOffset - 0.28, y, 0.49);
            contentGroup.add(led2);
          }
        });

        // Central Supercomputer AI Core Pedestal
        const pedGeo = new THREE.CylinderGeometry(0.9, 1.05, 0.8, 16);
        const pedMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.3, metalness: 0.85 });
        const pedestal = new THREE.Mesh(pedGeo, pedMat);
        pedestal.position.y = 0.4;
        pedestal.castShadow = true;
        contentGroup.add(pedestal);

        // Glass Containment Cylinder
        const glassGeo = new THREE.CylinderGeometry(0.85, 0.85, 1.8, 24);
        const glassMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 0.88,
          opacity: 1.0,
          transparent: true,
          roughness: 0.08,
          ior: 1.5,
          metalness: 0.1
        });
        const glassCol = new THREE.Mesh(glassGeo, glassMat);
        glassCol.position.y = 1.7;
        contentGroup.add(glassCol);

        // Suspended Neural AI Core Orb (Cypherox Coral Glow)
        const coreOrbGeo = new THREE.SphereGeometry(0.42, 32, 32);
        const coreOrbMat = new THREE.MeshStandardMaterial({
          color: 0xf26e65,
          roughness: 0.1,
          metalness: 0.9,
          emissive: 0xf26e65,
          emissiveIntensity: 0.85
        });
        const coreOrb = new THREE.Mesh(coreOrbGeo, coreOrbMat);
        coreOrb.position.y = 1.7;
        contentGroup.add(coreOrb);

        // Dual counter-rotating titanium gimbal rings
        const ring1Geo = new THREE.TorusGeometry(0.62, 0.025, 16, 48);
        const ring1Mat = new THREE.MeshStandardMaterial({ color: 0xf5918a, roughness: 0.2, metalness: 0.9, emissive: 0xf5918a, emissiveIntensity: 0.4 });
        const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
        ring1.position.y = 1.7;
        contentGroup.add(ring1);

        const ring2Geo = new THREE.TorusGeometry(0.74, 0.025, 16, 48);
        const ring2Mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.15, metalness: 0.95 });
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
        ring2.position.y = 1.7;
        contentGroup.add(ring2);

        animators.push((time, delta) => {
          coreOrb.position.y = 1.7 + Math.sin(time * 2.2) * 0.06;
          ring1.position.y = coreOrb.position.y;
          ring2.position.y = coreOrb.position.y;
          ring1.rotation.x += delta * 1.3;
          ring1.rotation.y += delta * 0.9;
          ring2.rotation.y -= delta * 1.5;
          ring2.rotation.z += delta * 1.0;
        });

      } else if (station.id === 'S2') {
        // ==============================================================
        // S2: ABOUT — CYPHEROX DEVELOPER STUDIO & HARDWARE WORKSTATIONS
        // ==============================================================
        // Solid Walnut & Dark Steel Developer Desk
        const deskGeo = new THREE.BoxGeometry(3.2, 0.09, 1.3);
        const deskMat = new THREE.MeshStandardMaterial({ color: 0x2b221b, roughness: 0.4, metalness: 0.15 });
        const desk = new THREE.Mesh(deskGeo, deskMat);
        desk.position.set(0, 0.95, -0.2);
        desk.castShadow = true;
        contentGroup.add(desk);

        // Steel K-Frame Legs
        const legMat = new THREE.MeshStandardMaterial({ color: 0x161618, roughness: 0.35, metalness: 0.85 });
        [-1.4, 1.4].forEach(lx => {
          const legGeo = new THREE.BoxGeometry(0.08, 0.95, 1.1);
          const leg = new THREE.Mesh(legGeo, legMat);
          leg.position.set(lx, 0.475, -0.2);
          contentGroup.add(leg);
        });

        // Triple Widescreen Code Displays with Authentic Syntax Code Textures
        const codeTexCenter = createCodeScreenTexture('main.ts — Cypherox Engine', '#f26e65');
        const codeTexLeft = createCodeScreenTexture('ml-pipeline.py — Hardik', '#58a6ff');
        const codeTexRight = createCodeScreenTexture('infra.tf — Akash', '#7ee787');

        const screenGeo = new THREE.PlaneGeometry(0.95, 0.52);

        // Center Monitor
        const monCenterMat = new THREE.MeshBasicMaterial({ map: codeTexCenter });
        const monCenter = new THREE.Mesh(screenGeo, monCenterMat);
        monCenter.position.set(0, 1.45, -0.32);
        contentGroup.add(monCenter);

        // Monitor Bezel Backing
        const bezGeo = new THREE.BoxGeometry(1.0, 0.56, 0.04);
        const bezCenter = new THREE.Mesh(bezGeo, legMat);
        bezCenter.position.set(0, 1.45, -0.35);
        contentGroup.add(bezCenter);

        // Left Monitor (Angled 28 deg)
        const monLeftMat = new THREE.MeshBasicMaterial({ map: codeTexLeft });
        const monLeft = new THREE.Mesh(screenGeo, monLeftMat);
        monLeft.position.set(-0.95, 1.45, -0.2);
        monLeft.rotation.y = 0.48;
        contentGroup.add(monLeft);

        const bezLeft = new THREE.Mesh(bezGeo, legMat);
        bezLeft.position.set(-0.95, 1.45, -0.23);
        bezLeft.rotation.y = 0.48;
        contentGroup.add(bezLeft);

        // Right Monitor (Angled -28 deg)
        const monRightMat = new THREE.MeshBasicMaterial({ map: codeTexRight });
        const monRight = new THREE.Mesh(screenGeo, monRightMat);
        monRight.position.set(0.95, 1.45, -0.2);
        monRight.rotation.y = -0.48;
        contentGroup.add(monRight);

        const bezRight = new THREE.Mesh(bezGeo, legMat);
        bezRight.position.set(0.95, 1.45, -0.23);
        bezRight.rotation.y = -0.48;
        contentGroup.add(bezRight);

        // Keyboards & Ergonomic Mice on desk
        const kbGeo = new THREE.BoxGeometry(0.48, 0.02, 0.16);
        const kbMat = new THREE.MeshStandardMaterial({ color: 0x1f1f23, roughness: 0.5, metalness: 0.6 });
        const kb = new THREE.Mesh(kbGeo, kbMat);
        kb.position.set(0, 1.01, 0.15);
        contentGroup.add(kb);

        // Mini ITX Desktop Workstation with Tempered Glass
        const pcGeo = new THREE.BoxGeometry(0.24, 0.46, 0.44);
        const pcMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.3, metalness: 0.85 });
        const pc = new THREE.Mesh(pcGeo, pcMat);
        pc.position.set(1.25, 1.23, -0.2);
        contentGroup.add(pc);

        // Standing Architectural Whiteboard
        const wbGeo = new THREE.BoxGeometry(2.6, 1.5, 0.06);
        const wbMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.2, metalness: 0.8, emissive: 0xf5918a, emissiveIntensity: 0.15 });
        const whiteboard = new THREE.Mesh(wbGeo, wbMat);
        whiteboard.position.set(0, 2.2, -1.4);
        contentGroup.add(whiteboard);

        // 3 Architect Recognition Nameplates mounted directly on the whiteboard frame (Firmly grounded, no floating)
        const teamMembers = [
          { name: 'Hardik P.', role: 'Head of AI / Systems', color: 0xf26e65 },
          { name: 'Krupa P.', role: 'Engineering Lead', color: 0xf5918a },
          { name: 'Akash B.', role: 'Cloud & DevOps Lead', color: 0x10B981 }
        ];
        teamMembers.forEach((member, idx) => {
          const xPos = -0.85 + idx * 0.85;
          const plateGeo = new THREE.BoxGeometry(0.72, 0.22, 0.04);
          const plateMat = new THREE.MeshStandardMaterial({
            color: 0x141416,
            roughness: 0.3,
            metalness: 0.85,
            emissive: member.color,
            emissiveIntensity: 0.3
          });
          const plate = new THREE.Mesh(plateGeo, plateMat);
          plate.position.set(xPos, 2.75, -1.36);
          contentGroup.add(plate);
        });

      } else if (station.id === 'S3') {
        // ==============================================================
        // S3: SERVICES — ARCHITECTURAL PILLARS WITH ICONS ON PILLARS
        // ==============================================================
        const servicePillars = [
          {
            title: 'Autonomous AI Swarms',
            category: 'AI & Machine Learning',
            iconType: 'ai',
            color: '#f26e65',
            colorHex: 0xf26e65,
            pos: [-1.4, -1.0],
            rotY: 0
          },
          {
            title: 'Custom Software',
            category: 'Full-Stack Engineering',
            iconType: 'software',
            color: '#58a6ff',
            colorHex: 0x58a6ff,
            pos: [1.4, -1.0],
            rotY: 0
          },
          {
            title: 'Cloud & DevOps',
            category: 'Infrastructure & Kubernetes',
            iconType: 'cloud',
            color: '#10b981',
            colorHex: 0x10b981,
            pos: [-1.4, 1.0],
            rotY: Math.PI
          },
          {
            title: 'Enterprise RAG & Data',
            category: 'Vector DB & Search',
            iconType: 'data',
            color: '#f59e0b',
            colorHex: 0xf59e0b,
            pos: [1.4, 1.0],
            rotY: Math.PI
          }
        ];

        servicePillars.forEach(sp => {
          const pillarGroup = new THREE.Group();
          pillarGroup.position.set(sp.pos[0], 0, sp.pos[1]);
          pillarGroup.rotation.y = sp.rotY;

          // 1. Honed Dark Titanium Ground Base Plinth
          const baseGeo = new THREE.CylinderGeometry(0.58, 0.65, 0.22, 24);
          const baseMat = new THREE.MeshStandardMaterial({ color: 0x16171a, roughness: 0.3, metalness: 0.9 });
          const baseMesh = new THREE.Mesh(baseGeo, baseMat);
          baseMesh.position.y = 0.11;
          baseMesh.receiveShadow = true;
          pillarGroup.add(baseMesh);

          // 2. Solid Architectural Pillar Column Body
          const colGeo = new THREE.BoxGeometry(0.85, 2.7, 0.85);
          const colMat = new THREE.MeshStandardMaterial({ color: 0x1a1c22, roughness: 0.35, metalness: 0.85 });
          const colMesh = new THREE.Mesh(colGeo, colMat);
          colMesh.position.y = 1.46;
          colMesh.castShadow = true;
          colMesh.receiveShadow = true;
          pillarGroup.add(colMesh);

          // 3. Illuminated Architectural Crown Top Cap
          const crownGeo = new THREE.BoxGeometry(0.92, 0.12, 0.92);
          const crownMat = new THREE.MeshStandardMaterial({
            color: sp.colorHex,
            roughness: 0.2,
            metalness: 0.9,
            emissive: sp.colorHex,
            emissiveIntensity: 0.65
          });
          const crown = new THREE.Mesh(crownGeo, crownMat);
          crown.position.y = 2.87;
          pillarGroup.add(crown);

          // 4. High-Resolution Glowing Service Icon Plaque on Front Face
          const plaqueTex = createServiceIconTexture(sp.title, sp.category, sp.iconType, sp.color);
          const plaqueGeo = new THREE.PlaneGeometry(0.74, 0.74);
          const plaqueMat = new THREE.MeshStandardMaterial({
            map: plaqueTex,
            roughness: 0.25,
            metalness: 0.1
          });
          const plaque = new THREE.Mesh(plaqueGeo, plaqueMat);
          plaque.position.set(0, 1.8, 0.435);
          pillarGroup.add(plaque);

          // Protective Anti-Reflective Plaque Glass
          const glassGeo = new THREE.PlaneGeometry(0.75, 0.75);
          const glassMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.12,
            roughness: 0.05
          });
          const glass = new THREE.Mesh(glassGeo, glassMat);
          glass.position.set(0, 1.8, 0.44);
          pillarGroup.add(glass);

          contentGroup.add(pillarGroup);
        });

        // Central Quantum AI Pedestal with Laser-etched Processor Unit
        const corePedGeo = new THREE.CylinderGeometry(0.8, 0.95, 0.7, 24);
        const corePedMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.35, metalness: 0.85 });
        const corePed = new THREE.Mesh(corePedGeo, corePedMat);
        corePed.position.set(0, 0.35, 0);
        contentGroup.add(corePed);

        const chipGeo = new THREE.BoxGeometry(0.7, 0.12, 0.7);
        const chipMat = new THREE.MeshStandardMaterial({ color: 0x0f0f12, roughness: 0.2, metalness: 0.9 });
        const chip = new THREE.Mesh(chipGeo, chipMat);
        chip.position.set(0, 0.76, 0);
        contentGroup.add(chip);

        const hsGeo = new THREE.BoxGeometry(0.5, 0.04, 0.5);
        const hsMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.15, metalness: 0.95, emissive: 0xf59e0b, emissiveIntensity: 0.6 });
        const hs = new THREE.Mesh(hsGeo, hsMat);
        hs.position.set(0, 0.84, 0);
        contentGroup.add(hs);

      } else if (station.id === 'S4') {
        // ==============================================================
        // S4: PROJECTS — WEB AND MOBILE LAYOUT ON PILLARS (VIEW ONLY)
        // ==============================================================
        // Dual Enterprise Cloud Data Center Cabinets in Background
        [-2.0, 2.0].forEach(rx => {
          const cabGeo = new THREE.BoxGeometry(0.9, 3.2, 0.9);
          const cabMat = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.35, metalness: 0.85 });
          const cab = new THREE.Mesh(cabGeo, cabMat);
          cab.position.set(rx, 1.6, -1.0);
          cab.castShadow = true;
          contentGroup.add(cab);

          for (let y = 0.6; y <= 2.8; y += 0.35) {
            const swGeo = new THREE.BoxGeometry(0.7, 0.06, 0.02);
            const swMat = new THREE.MeshStandardMaterial({ color: 0x10B981, emissive: 0x10B981, emissiveIntensity: 0.85 });
            const sw = new THREE.Mesh(swGeo, swMat);
            sw.position.set(rx, y, -0.54);
            contentGroup.add(sw);
          }
        });

        // --------------------------------------------------------------
        // PILLAR 1: DESKTOP WEB APPLICATION LAYOUT (VIEW ONLY)
        // --------------------------------------------------------------
        const webPillarGroup = new THREE.Group();
        webPillarGroup.position.set(-1.45, 0, 0.2);
        webPillarGroup.rotation.y = 0.22; // Angled naturally toward walkway

        // Ground Plinth Base
        const webBaseGeo = new THREE.BoxGeometry(1.2, 0.18, 0.75);
        const pylonMat = new THREE.MeshStandardMaterial({ color: 0x18191e, roughness: 0.35, metalness: 0.9 });
        const webBase = new THREE.Mesh(webBaseGeo, pylonMat);
        webBase.position.y = 0.09;
        webPillarGroup.add(webBase);

        // Architectural Support Column Pylon
        const webColGeo = new THREE.BoxGeometry(0.38, 1.45, 0.38);
        const webCol = new THREE.Mesh(webColGeo, pylonMat);
        webCol.position.y = 0.82;
        webCol.castShadow = true;
        webPillarGroup.add(webCol);

        // Display Chassis (16:9 Desktop Screen Monitor Frame)
        const webFrameGeo = new THREE.BoxGeometry(2.36, 1.38, 0.1);
        const frameMat = new THREE.MeshStandardMaterial({ color: 0x121316, roughness: 0.3, metalness: 0.85 });
        const webFrame = new THREE.Mesh(webFrameGeo, frameMat);
        webFrame.position.y = 2.15;
        webFrame.castShadow = true;
        webPillarGroup.add(webFrame);

        // Glowing Coral Screen Border Accent
        const webBevelGeo = new THREE.BoxGeometry(2.28, 1.30, 0.11);
        const bevelMat = new THREE.MeshStandardMaterial({ color: 0xf26e65, emissive: 0xf26e65, emissiveIntensity: 0.45 });
        const webBevel = new THREE.Mesh(webBevelGeo, bevelMat);
        webBevel.position.y = 2.15;
        webPillarGroup.add(webBevel);

        // High-Fidelity Web App Dashboard Canvas Texture (View Only)
        const webTexture = createWebLayoutTexture();
        const webScreenGeo = new THREE.PlaneGeometry(2.24, 1.26);
        const webScreenMat = new THREE.MeshStandardMaterial({
          map: webTexture,
          roughness: 0.2,
          metalness: 0.05
        });
        const webScreen = new THREE.Mesh(webScreenGeo, webScreenMat);
        webScreen.position.set(0, 2.15, 0.06);
        webPillarGroup.add(webScreen);

        // Anti-Reflective Protective Screen Glass
        const webGlassGeo = new THREE.PlaneGeometry(2.25, 1.27);
        const webGlassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, roughness: 0.05 });
        const webGlass = new THREE.Mesh(webGlassGeo, webGlassMat);
        webGlass.position.set(0, 2.15, 0.065);
        webPillarGroup.add(webGlass);

        contentGroup.add(webPillarGroup);

        // --------------------------------------------------------------
        // PILLAR 2: MOBILE APPLICATION LAYOUT (VIEW ONLY)
        // --------------------------------------------------------------
        const mobPillarGroup = new THREE.Group();
        mobPillarGroup.position.set(1.45, 0, 0.2);
        mobPillarGroup.rotation.y = -0.22; // Angled naturally toward walkway

        // Ground Plinth Base
        const mobBaseGeo = new THREE.BoxGeometry(0.95, 0.18, 0.7);
        const mobBase = new THREE.Mesh(mobBaseGeo, pylonMat);
        mobBase.position.y = 0.09;
        mobPillarGroup.add(mobBase);

        // Architectural Support Column Pylon
        const mobColGeo = new THREE.BoxGeometry(0.34, 1.25, 0.34);
        const mobCol = new THREE.Mesh(mobColGeo, pylonMat);
        mobCol.position.y = 0.72;
        mobCol.castShadow = true;
        mobPillarGroup.add(mobCol);

        // Smartphone Chassis Body
        const mobFrameGeo = new THREE.BoxGeometry(0.96, 1.88, 0.09);
        const mobFrame = new THREE.Mesh(mobFrameGeo, frameMat);
        mobFrame.position.y = 2.15;
        mobFrame.castShadow = true;
        mobPillarGroup.add(mobFrame);

        // Glowing Blue/Cyan Mobile Border Accent
        const mobBevelGeo = new THREE.BoxGeometry(0.90, 1.80, 0.10);
        const mobBevelMat = new THREE.MeshStandardMaterial({ color: 0x58a6ff, emissive: 0x58a6ff, emissiveIntensity: 0.45 });
        const mobBevel = new THREE.Mesh(mobBevelGeo, mobBevelMat);
        mobBevel.position.y = 2.15;
        mobPillarGroup.add(mobBevel);

        // High-Fidelity Mobile App UI Canvas Texture (View Only)
        const mobTexture = createMobileLayoutTexture();
        const mobScreenGeo = new THREE.PlaneGeometry(0.86, 1.74);
        const mobScreenMat = new THREE.MeshStandardMaterial({
          map: mobTexture,
          roughness: 0.2,
          metalness: 0.05
        });
        const mobScreen = new THREE.Mesh(mobScreenGeo, mobScreenMat);
        mobScreen.position.set(0, 2.15, 0.055);
        mobPillarGroup.add(mobScreen);

        // Anti-Reflective Protective Screen Glass
        const mobGlassGeo = new THREE.PlaneGeometry(0.87, 1.75);
        const mobGlass = new THREE.Mesh(mobGlassGeo, webGlassMat);
        mobGlass.position.set(0, 2.15, 0.06);
        mobPillarGroup.add(mobGlass);

        contentGroup.add(mobPillarGroup);

      } else {
        // ==============================================================
        // S5: CONTACT — LONDON UK GLOBAL HEADQUARTERS PAVILION
        // ==============================================================
        // Monumental London Architectural Gateway Arch (Titanium & Frosted Glass)
        const archGeo = new THREE.TorusGeometry(2.3, 0.16, 16, 48, Math.PI);
        const archMat = new THREE.MeshStandardMaterial({ color: 0x202024, roughness: 0.25, metalness: 0.85 });
        const arch = new THREE.Mesh(archGeo, archMat);
        arch.position.set(0, 0.1, 0);
        arch.rotation.z = Math.PI;
        contentGroup.add(arch);

        // Inner glowing coral neon arch liner
        const archGlowGeo = new THREE.TorusGeometry(2.15, 0.035, 16, 48, Math.PI);
        const archGlowMat = new THREE.MeshStandardMaterial({ color: 0xf26e65, emissive: 0xf26e65, emissiveIntensity: 0.95 });
        const archGlow = new THREE.Mesh(archGlowGeo, archGlowMat);
        archGlow.position.set(0, 0.1, 0);
        archGlow.rotation.z = Math.PI;
        contentGroup.add(archGlow);

        // London Reception Console in Dark Marble & Brass
        const conGeo = new THREE.BoxGeometry(2.0, 0.95, 0.85);
        const conMat = new THREE.MeshStandardMaterial({ color: 0x161619, roughness: 0.35, metalness: 0.8 });
        const consoleTable = new THREE.Mesh(conGeo, conMat);
        consoleTable.position.set(0, 0.475, 0);
        consoleTable.castShadow = true;
        contentGroup.add(consoleTable);

        // Digital Touch Intake Terminal Screen on console
        const scrGeo = new THREE.BoxGeometry(1.2, 0.6, 0.05);
        const scrMat = new THREE.MeshStandardMaterial({
          color: 0x0a0a0c,
          roughness: 0.2,
          metalness: 0.9,
          emissive: 0xf5918a,
          emissiveIntensity: 0.35
        });
        const screen = new THREE.Mesh(scrGeo, scrMat);
        screen.position.set(0, 1.25, 0);
        contentGroup.add(screen);
      }

      group.add(contentGroup);

      // Warm architectural local point light
      const light = new THREE.PointLight(station.color, 1.6, 18);
      light.position.y = 3.4;
      group.add(light);

      this.scene.add(group);

      this.stationObjects.push({
        data: station,
        group,
        contentGroup,
        animators,
        ring,
        light
      });
    });
  }

  update(playerPos, delta) {
    const time = performance.now() * 0.001;

    // Run per-station bespoke animators
    this.stationObjects.forEach(item => {
      item.animators.forEach(anim => anim(time, delta));
    });

    let nearest = null;
    let minDistance = Infinity;

    for (const station of this.stations) {
      const dx = playerPos.x - station.x;
      const dz = playerPos.z - station.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < this.dockRadius && dist < minDistance) {
        nearest = station;
        minDistance = dist;
      }
    }

    if (nearest && this.activeStation?.id !== nearest.id) {
      this.activeStation = nearest;
      soundFX.playDock();

      window.dispatchEvent(new CustomEvent('stationDocked', {
        detail: { station: nearest }
      }));
    } else if (!nearest && this.activeStation) {
      this.activeStation = null;
      window.dispatchEvent(new CustomEvent('stationUndocked'));
    }
  }
}
