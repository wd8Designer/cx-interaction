import * as THREE from 'three';

// Generates procedural high-resolution canvas texture for architectural direction boards
function generateDirectionBoardCanvas(board) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // 1. Dark Museum Architectural Slate Background
  ctx.fillStyle = '#0d0f14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle coordinate grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  // Top Cypherox Coral Accent Bar
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, '#f26e65');
  grad.addColorStop(0.5, '#f5918a');
  grad.addColorStop(1, '#d94f47');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, 6);

  // 2. Directory Header
  ctx.fillStyle = '#f26e65';
  ctx.fillRect(48, 36, 5, 22);

  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f5918a';
  ctx.fillText('CYPHEROX UK // CAMPUS WAYFINDING DIRECTORY', 64, 46);

  ctx.font = '600 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#8b949e';
  ctx.fillText(`LOCATION: ${board.zoneTag.toUpperCase()} • ELEVATION: GROUND`, 64, 62);

  // Compass heading badge top right
  ctx.fillStyle = '#171a22';
  ctx.strokeStyle = '#333846';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(canvas.width - 240, 32, 192, 34, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#10b981';
  ctx.beginPath(); ctx.arc(canvas.width - 222, 49, 4, 0, Math.PI * 2); ctx.fill();

  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('CAMPUS ACTIVE', canvas.width - 208, 53);

  // Header separator rule
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.fillRect(48, 86, canvas.width - 96, 1);

  // 3. Direction Rows
  const startY = 108;
  const rowHeight = 135;

  board.routes.forEach((route, idx) => {
    const ry = startY + idx * rowHeight;

    // Card background container
    ctx.fillStyle = '#131620';
    ctx.strokeStyle = route.highlight ? '#f26e65' : '#272b38';
    ctx.lineWidth = route.highlight ? 1.5 : 1;
    ctx.beginPath();
    ctx.roundRect(48, ry, canvas.width - 96, 118, 10);
    ctx.fill();
    ctx.stroke();

    // Direction Arrow Pill Box
    ctx.fillStyle = route.highlight ? '#f26e65' : '#1e2330';
    ctx.beginPath();
    ctx.roundRect(66, ry + 18, 82, 82, 10);
    ctx.fill();

    ctx.font = 'bold 44px "Poppins", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(route.arrow, 107, ry + 74);
    ctx.textAlign = 'left';

    // Section Number Badge (e.g. [02])
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillStyle = route.highlight ? '#f5918a' : '#94a3b8';
    ctx.fillText(route.stationCode, 168, ry + 42);

    // Section Name (e.g. ABOUT & ENGINEERING STUDIO)
    ctx.font = 'bold 22px "Poppins", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(route.stationName, 168, ry + 72);

    // Description / Landmark hint
    ctx.font = '400 12px "Poppins", sans-serif';
    ctx.fillStyle = '#8b949e';
    ctx.fillText(route.landmark, 168, ry + 94);

    // Distance Pill Badge on Right
    ctx.fillStyle = '#1a1f2b';
    ctx.strokeStyle = route.highlight ? 'rgba(242, 110, 101, 0.5)' : 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(canvas.width - 210, ry + 40, 142, 38, 8);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillStyle = route.highlight ? '#f5918a' : '#cbd5e1';
    ctx.textAlign = 'center';
    ctx.fillText(route.distance, canvas.width - 139, ry + 64);
    ctx.textAlign = 'left';
  });

  // 4. Footer Fast-Travel Legend
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.fillRect(48, 550, canvas.width - 96, 1);

  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f5918a';
  ctx.fillText('FAST TRAVEL: PRESS [1] HOME  [2] ABOUT  [3] SERVICES  [4] PROJECTS  [5] CONTACT', 48, 582);

  ctx.font = '600 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'right';
  ctx.fillText('PRESS [E] TO TOGGLE PAGE PANEL', canvas.width - 48, 582);
  ctx.textAlign = 'left';

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  return texture;
}

// 8 Strategic Wall Direction Boards along all walking corridors
export const DIRECTION_BOARDS = [
  {
    id: 'board-northwest-junction',
    zoneTag: 'Junction NW // North Artery',
    position: { x: -18, y: 2.2, z: -8.96 },
    rotationY: 0, // Faces South (+Z)
    routes: [
      {
        arrow: '←',
        stationCode: 'PAVILION 02',
        stationName: 'ABOUT & ENGINEERING STUDIO',
        landmark: 'Triple Code Monitors • Developer Team Cards • Whiteboard',
        distance: '24 METERS',
        highlight: true
      },
      {
        arrow: '↑',
        stationCode: 'PAVILION 03',
        stationName: 'AI & GPU COMPUTE CLUSTER',
        landmark: 'NVIDIA DGX Towers • Fiber Conduits • Quantum Chip',
        distance: '36 METERS',
        highlight: false
      },
      {
        arrow: '→',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CYPHEROX CORE',
        landmark: 'Central Quantum Core • Dual 42U Server Racks',
        distance: '18 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-northeast-junction',
    zoneTag: 'Junction NE // Services Corridor',
    position: { x: 18, y: 2.2, z: -8.96 },
    rotationY: 0, // Faces South (+Z)
    routes: [
      {
        arrow: '→',
        stationCode: 'PAVILION 03',
        stationName: 'AI SERVICES & GPU CLUSTER',
        landmark: 'Industrial GPU Racks • Enterprise Cloud Architecture',
        distance: '24 METERS',
        highlight: true
      },
      {
        arrow: '←',
        stationCode: 'PAVILION 02',
        stationName: 'ABOUT & TEAM STUDIO',
        landmark: 'Developer Workstations • Hardik, Krupa, Akash',
        distance: '36 METERS',
        highlight: false
      },
      {
        arrow: '↓',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CYPHEROX CORE',
        landmark: 'Central Pavilion • Main Campus Atrium',
        distance: '18 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-southwest-junction',
    zoneTag: 'Junction SW // Projects Walkway',
    position: { x: -18, y: 2.2, z: 8.96 },
    rotationY: Math.PI, // Faces North (-Z)
    routes: [
      {
        arrow: '←',
        stationCode: 'PAVILION 04',
        stationName: 'ENTERPRISE PROJECTS & CASE STUDIES',
        landmark: 'Datacenter Cabinets • Verified Metric Pillars (+400% ROI)',
        distance: '24 METERS',
        highlight: true
      },
      {
        arrow: '→',
        stationCode: 'PAVILION 05',
        stationName: 'CONTACT & LONDON HEADQUARTERS',
        landmark: 'London Titanium Gateway Arch • Marble Reception Desk',
        distance: '36 METERS',
        highlight: false
      },
      {
        arrow: '↑',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CYPHEROX CORE',
        landmark: 'Central Atrium • Fast Travel Hub',
        distance: '18 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-southeast-junction',
    zoneTag: 'Junction SE // London Gateway',
    position: { x: 18, y: 2.2, z: 8.96 },
    rotationY: Math.PI, // Faces North (-Z)
    routes: [
      {
        arrow: '→',
        stationCode: 'PAVILION 05',
        stationName: 'LONDON HEADQUARTERS & CONTACT',
        landmark: 'Titanium & Bronze Gateway • Holographic UK Beacon',
        distance: '24 METERS',
        highlight: true
      },
      {
        arrow: '←',
        stationCode: 'PAVILION 04',
        stationName: 'ENTERPRISE PROJECTS & ROI',
        landmark: 'High-Density Datacenter • Verified Client Outcomes',
        distance: '36 METERS',
        highlight: false
      },
      {
        arrow: '↑',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CYPHEROX CORE',
        landmark: 'Central Atrium • Fast Travel Hub',
        distance: '18 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-west-hub',
    zoneTag: 'West Concourse // Lateral Artery',
    position: { x: -26.96, y: 2.2, z: -6 },
    rotationY: -Math.PI / 2, // Faces East (+X)
    routes: [
      {
        arrow: '↖',
        stationCode: 'PAVILION 02',
        stationName: 'ABOUT STUDIO (NORTHWEST)',
        landmark: 'Engineering Team • Senior Architects',
        distance: '18 METERS',
        highlight: true
      },
      {
        arrow: '↙',
        stationCode: 'PAVILION 04',
        stationName: 'ENTERPRISE PROJECTS (SOUTHWEST)',
        landmark: 'Case Studies • Datacenter Racks',
        distance: '18 METERS',
        highlight: false
      },
      {
        arrow: '→',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CENTRAL ATRIUM',
        landmark: 'Quantum Core • Agency Overview',
        distance: '12 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-east-hub',
    zoneTag: 'East Concourse // Lateral Artery',
    position: { x: 26.96, y: 2.2, z: -6 },
    rotationY: Math.PI / 2, // Faces West (-X)
    routes: [
      {
        arrow: '↗',
        stationCode: 'PAVILION 03',
        stationName: 'SERVICES & AI CLUSTER (NORTHEAST)',
        landmark: 'Industrial GPU Supercomputing Racks',
        distance: '18 METERS',
        highlight: true
      },
      {
        arrow: '↘',
        stationCode: 'PAVILION 05',
        stationName: 'CONTACT & LONDON GATEWAY (SOUTHEAST)',
        landmark: 'Direct Engineer Consultation Booking',
        distance: '18 METERS',
        highlight: false
      },
      {
        arrow: '←',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CENTRAL ATRIUM',
        landmark: 'Main Agency Hub',
        distance: '12 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-approach-about',
    zoneTag: 'Northwest Pavilion 02 Entry',
    position: { x: -20.96, y: 2.2, z: 6 },
    rotationY: Math.PI / 2, // Faces West (-X)
    routes: [
      {
        arrow: '↑',
        stationCode: 'PAVILION 02',
        stationName: 'ABOUT CYPHEROX & TEAM',
        landmark: 'Direct Access Ahead • Hardik, Krupa, Akash',
        distance: '12 METERS',
        highlight: true
      },
      {
        arrow: '↓',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CENTRAL PLAZA',
        landmark: 'Return to Central Atrium Hub',
        distance: '30 METERS',
        highlight: false
      }
    ]
  },
  {
    id: 'board-approach-services',
    zoneTag: 'Northeast Pavilion 03 Entry',
    position: { x: 20.96, y: 2.2, z: 6 },
    rotationY: -Math.PI / 2, // Faces East (+X)
    routes: [
      {
        arrow: '↑',
        stationCode: 'PAVILION 03',
        stationName: 'SERVICES & AI ENGINEERING',
        landmark: 'Direct Access Ahead • DGX Supercomputer Installation',
        distance: '12 METERS',
        highlight: true
      },
      {
        arrow: '↓',
        stationCode: 'PAVILION 01',
        stationName: 'HOME // CENTRAL PLAZA',
        landmark: 'Return to Central Atrium Hub',
        distance: '30 METERS',
        highlight: false
      }
    ]
  }
];

export class DirectionBoardsManager {
  constructor(scene) {
    this.scene = scene;
    this.boards = [];
    this.createBoards();
  }

  createBoards() {
    // Shared Architectural Sign Materials
    const backingTrayMat = new THREE.MeshStandardMaterial({
      color: 0x14161b, // Dark titanium sign tray
      roughness: 0.35,
      metalness: 0.88
    });

    const coralBevelMat = new THREE.MeshStandardMaterial({
      color: 0xf26e65,
      roughness: 0.25,
      metalness: 0.8,
      emissive: 0xd94f47,
      emissiveIntensity: 0.4
    });

    const protectiveGlassMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.05,
      metalness: 0.1,
      transparent: true,
      opacity: 0.1
    });

    const lampHoodMat = new THREE.MeshStandardMaterial({
      color: 0x1f2126,
      roughness: 0.35,
      metalness: 0.9
    });

    DIRECTION_BOARDS.forEach(data => {
      const group = new THREE.Group();
      group.position.set(data.position.x, data.position.y, data.position.z);
      group.rotation.y = data.rotationY;

      // 1. Backing Sign Tray (2.4m wide, 1.5m high, 0.08m deep)
      const trayGeo = new THREE.BoxGeometry(2.4, 1.5, 0.08);
      const tray = new THREE.Mesh(trayGeo, backingTrayMat);
      tray.castShadow = true;
      tray.receiveShadow = true;
      group.add(tray);

      // 2. Cypherox Coral Inner Border Lip
      const borderGeo = new THREE.BoxGeometry(2.32, 1.42, 0.09);
      const borderMesh = new THREE.Mesh(borderGeo, coralBevelMat);
      group.add(borderMesh);

      // 3. High-Resolution Digital Canvas
      const canvasTexture = generateDirectionBoardCanvas(data);
      const canvasGeo = new THREE.PlaneGeometry(2.26, 1.36);
      const canvasMat = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        roughness: 0.3,
        metalness: 0.05
      });
      const canvasMesh = new THREE.Mesh(canvasGeo, canvasMat);
      canvasMesh.position.z = 0.048;
      group.add(canvasMesh);

      // 4. Protective Glass Plane
      const glassGeo = new THREE.PlaneGeometry(2.28, 1.38);
      const glass = new THREE.Mesh(glassGeo, protectiveGlassMat);
      glass.position.z = 0.052;
      group.add(glass);

      // Mounted flush against wall — zero hanging or floating fixtures
      this.scene.add(group);
      this.boards.push({ data, group });
    });
  }
}
