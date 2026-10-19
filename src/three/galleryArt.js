import * as THREE from 'three';

// Procedural Canvas Texture Generator for Cypherox Enterprise Service Artworks
function generateServiceArtCanvas(service) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // 1. Dark Architectural Museum Canvas Background
  ctx.fillStyle = '#0c0e14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle architectural coordinate blueprint grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  const gridSize = 32;
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  // Radial ambient vignette
  const grad = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 80, canvas.width / 2, canvas.height / 2, 500);
  grad.addColorStop(0, service.glowColor || 'rgba(242, 110, 101, 0.12)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Header: Cypherox Practice Badge & Title
  ctx.fillStyle = '#f26e65';
  ctx.fillRect(48, 44, 6, 26);

  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f5918a';
  ctx.fillText(`CYPHEROX UK // ${service.category.toUpperCase()}`, 64, 56);

  ctx.font = '600 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#8b949e';
  ctx.fillText('ENTERPRISE SERVICE ARCHITECTURE', 64, 72);

  // Metric Badge Top Right
  ctx.fillStyle = '#181b24';
  ctx.strokeStyle = '#f26e65';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(canvas.width - 240, 42, 192, 36, 8);
  ctx.fill();
  ctx.stroke();

  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(service.metricBadge, canvas.width - 144, 65);
  ctx.textAlign = 'left';

  // 3. Main Artwork Title
  ctx.font = '700 32px "Poppins", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(service.title, 48, 128);

  ctx.font = '400 14px "Poppins", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(service.subtitle, 48, 156);

  // 4. Center Bespoke Technical Graphic
  ctx.save();
  ctx.translate(48, 180);
  service.drawGraphic(ctx, 928, 360);
  ctx.restore();

  // 5. Footer: Verified Production Standards & Specs
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.fillRect(48, 568, canvas.width - 96, 1);

  ctx.font = '500 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText('STATUS: PRODUCTION READY  |  TIER-1 UK INFRASTRUCTURE  |  ZERO PROTOTYPE FRAGILITY', 48, 595);

  ctx.font = 'bold 11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#10b981';
  ctx.textAlign = 'right';
  ctx.fillText('● ACTIVE ENTERPRISE SYSTEM', canvas.width - 48, 595);
  ctx.textAlign = 'left';

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  return texture;
}

// Definition of 6 Core Enterprise Service Artworks
export const SERVICE_ARTWORKS = [
  {
    id: 'art-ai-swarms',
    category: 'AI & Machine Learning',
    title: 'Autonomous AI Agents & Multi-Model Swarms',
    subtitle: 'Agent consensus orchestration, sub-second tool dispatch and production RAG pipelines.',
    metricBadge: '⚡ 99.8% ACCURACY',
    glowColor: 'rgba(242, 110, 101, 0.16)',
    // Placement: South face of wall at (row: 7, col: 10) -> x: 0, z: -15
    position: { x: 0, y: 2.15, z: -14.96 },
    rotationY: 0, // Faces South (+Z)
    drawGraphic: (ctx, w, h) => {
      // Draw neural multi-agent graph with glowing connections
      const nodes = [
        { x: 120, y: 170, label: 'Orchestrator', r: 24, c: '#f26e65' },
        { x: 340, y: 80, label: 'LLM Agent α', r: 20, c: '#58a6ff' },
        { x: 340, y: 260, label: 'LLM Agent β', r: 20, c: '#58a6ff' },
        { x: 580, y: 120, label: 'Consensus Bus', r: 22, c: '#f59e0b' },
        { x: 580, y: 240, label: 'Tool Dispatch', r: 20, c: '#38bdf8' },
        { x: 800, y: 170, label: 'Verified Output', r: 26, c: '#10b981' }
      ];

      // Draw connection lines
      ctx.lineWidth = 2;
      const links = [[0, 1], [0, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 5], [4, 5]];
      links.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const g = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
        g.addColorStop(0, na.c);
        g.addColorStop(1, nb.c);
        ctx.strokeStyle = g;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Draw nodes
      nodes.forEach(n => {
        // Outer halo
        ctx.fillStyle = n.c;
        ctx.globalAlpha = 0.2;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 10, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1.0;

        // Core circle
        ctx.fillStyle = '#161922';
        ctx.strokeStyle = n.c;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y + n.r + 20);
      });
      ctx.textAlign = 'left';
    }
  },
  {
    id: 'art-cloud-devops',
    category: 'Cloud Architecture & DevOps',
    title: 'Enterprise Multi-Region AWS & Kubernetes',
    subtitle: 'Automated Terraform infrastructure, zero-downtime canary rollouts and 99.99% SLA.',
    metricBadge: '☁ 99.99% UPTIME',
    glowColor: 'rgba(16, 185, 129, 0.16)',
    // Placement: North face of wall at (row: 13, col: 10) -> x: 0, z: 15
    position: { x: 0, y: 2.15, z: 14.96 },
    rotationY: Math.PI, // Faces North (-Z)
    drawGraphic: (ctx, w, h) => {
      // Cloud infrastructure architecture rack diagram
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;

      // 3 Server pods
      const pods = [
        { x: 80, title: 'eu-west-2 (London)', sub: 'Primary Production Cluster', color: '#10b981' },
        { x: 380, title: 'eu-west-1 (Dublin)', sub: 'Active Failover Replica', color: '#38bdf8' },
        { x: 680, title: 'Global CDN & WAF', sub: 'Edge Shield & TLS 1.3', color: '#f59e0b' }
      ];

      pods.forEach((p, idx) => {
        ctx.fillStyle = '#12151e';
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(p.x, 30, 240, 260, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = p.color;
        ctx.font = 'bold 13px "JetBrains Mono", monospace';
        ctx.fillText(p.title, p.x + 18, 65);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px "Poppins", sans-serif';
        ctx.fillText(p.sub, p.x + 18, 88);

        // Server rack units inside pod
        for (let r = 0; r < 4; r++) {
          ctx.fillStyle = '#1a1e2a';
          ctx.fillRect(p.x + 18, 110 + r * 36, 204, 26);
          ctx.fillStyle = r === 0 ? '#10b981' : (r === 1 ? '#38bdf8' : '#f5918a');
          ctx.beginPath(); ctx.arc(p.x + 32, 123 + r * 36, 4, 0, Math.PI * 2); ctx.fill();

          ctx.fillStyle = '#cbd5e1';
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillText(`K8S-NODE-0${r + 1}  •  HEALTH: OK`, p.x + 46, 127 + r * 36);
        }
      });
    }
  },
  {
    id: 'art-fullstack-software',
    category: 'Custom Software Engineering',
    title: 'High-Throughput Full-Stack Platforms',
    subtitle: 'Bespoke web applications, reactive APIs and mission-critical databases engineered to scale.',
    metricBadge: '⚡ 14.2x SPEEDUP',
    glowColor: 'rgba(56, 189, 248, 0.16)',
    // Placement: East face of wall at (row: 10, col: 5) -> x: -30, z: 0 (corridor at x = -24)
    position: { x: -26.96, y: 2.15, z: 0 },
    rotationY: -Math.PI / 2, // Faces East (+X)
    drawGraphic: (ctx, w, h) => {
      // Full stack architecture schematic
      const layers = [
        { y: 30, label: 'FRONTEND INTERFACE', desc: 'React 19 • Next.js • Tailwind CSS • WebGL', c: '#f26e65' },
        { y: 120, label: 'API GATEWAY & EDGE', desc: 'GraphQL • Fastify • gRPC • Redis Mesh', c: '#38bdf8' },
        { y: 210, label: 'EVENT DRIVEN CORE', desc: 'Kafka Pipelines • Worker Pools • Go Microservices', c: '#f59e0b' },
        { y: 300, label: 'DATABASE & STORAGE', desc: 'PostgreSQL • DynamoDB • Sub-8ms Queries', c: '#10b981' }
      ];

      layers.forEach((l, idx) => {
        ctx.fillStyle = '#131620';
        ctx.strokeStyle = l.c;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(80, l.y, w - 160, 60, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = l.c;
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.fillText(`LAYER 0${idx + 1} // ${l.label}`, 105, l.y + 26);

        ctx.fillStyle = '#ffffff';
        ctx.font = '500 13px "Poppins", sans-serif';
        ctx.fillText(l.desc, 105, l.y + 48);

        // Status beacon
        ctx.fillStyle = l.c;
        ctx.beginPath(); ctx.arc(w - 120, l.y + 30, 6, 0, Math.PI * 2); ctx.fill();
      });
    }
  },
  {
    id: 'art-vector-rag',
    category: 'Enterprise Data Architecture',
    title: 'Vector Embeddings & Real-Time RAG Systems',
    subtitle: 'Sub-millisecond semantic search across millions of documents with hybrid BM25 + dense retrieval.',
    metricBadge: '🔍 <8ms RETRIEVAL',
    glowColor: 'rgba(168, 85, 247, 0.16)',
    // Placement: West face of wall at (row: 10, col: 15) -> x: 30, z: 0 (corridor at x = 24)
    position: { x: 26.96, y: 2.15, z: 0 },
    rotationY: Math.PI / 2, // Faces West (-X)
    drawGraphic: (ctx, w, h) => {
      // Vector space visualization
      ctx.fillStyle = '#11131c';
      ctx.fillRect(80, 20, w - 160, 310);

      // Coordinate axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(120, 290); ctx.lineTo(w - 120, 290);
      ctx.moveTo(120, 290); ctx.lineTo(120, 50);
      ctx.stroke();

      // Scatter vector clusters
      const clusters = [
        { cx: 300, cy: 120, color: '#f26e65', label: 'Financial Docs Cluster' },
        { cx: 550, cy: 180, color: '#38bdf8', label: 'Technical Manuals Cluster' },
        { cx: 750, cy: 90, color: '#10b981', label: 'Compliance Reports Cluster' }
      ];

      clusters.forEach(c => {
        for (let i = 0; i < 24; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * 55;
          const px = c.cx + Math.cos(angle) * dist;
          const py = c.cy + Math.sin(angle) * dist;

          ctx.fillStyle = c.color;
          ctx.beginPath();
          ctx.arc(px, py, Math.random() * 3 + 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.fillText(c.label, c.cx - 50, c.cy + 75);
      });

      // Semantic cosine similarity query vector line
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(120, 290);
      ctx.lineTo(300, 120);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Query Vector (Cosine Similarity: 0.984)', 140, 230);
    }
  },
  {
    id: 'art-dedicated-teams',
    category: 'Dedicated Engineering',
    title: 'Vetted Senior Engineers for UK Enterprises',
    subtitle: 'Direct architect access, agile delivery cycles and seamless extension of your in-house teams.',
    metricBadge: '👥 130+ ENGINEERS',
    glowColor: 'rgba(245, 158, 11, 0.16)',
    // Placement: South face of wall at (row: 6, col: 12) -> x: 12, z: -24
    position: { x: 12, y: 2.15, z: -20.96 },
    rotationY: 0,
    drawGraphic: (ctx, w, h) => {
      // Engineering team delivery velocity diagram
      ctx.fillStyle = '#12151e';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(80, 20, w - 160, 310, 10);
      ctx.fill();
      ctx.stroke();

      // Team breakdown metrics
      const stats = [
        { label: 'Senior Engineers', val: '130+', sub: 'Average 8+ Yrs Experience', c: '#f26e65' },
        { label: 'Client Retention', val: '94%', sub: 'Long-Term Enterprise Partners', c: '#10b981' },
        { label: 'Delivery Velocity', val: '2.4x', sub: 'Faster than In-House Hiring', c: '#38bdf8' }
      ];

      stats.forEach((s, idx) => {
        const bx = 110 + idx * 260;
        ctx.fillStyle = '#1a1e2b';
        ctx.fillRect(bx, 50, 230, 140);

        ctx.font = 'bold 36px "Poppins", sans-serif';
        ctx.fillStyle = s.c;
        ctx.fillText(s.val, bx + 20, 110);

        ctx.font = '600 13px "Poppins", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(s.label, bx + 20, 145);

        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(s.sub, bx + 20, 170);
      });

      // Sprint velocity line graph
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      const points = [50, 85, 120, 190, 260, 330, 420];
      points.forEach((val, i) => {
        const px = 120 + i * 110;
        const py = 300 - (val / 450) * 80;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.fillText('Sprint Velocity: +140% Productivity Over 6 Sprints', 120, 315);
    }
  },
  {
    id: 'art-security-rigor',
    category: 'Production Reliability',
    title: 'ISO27001 & SOC2 Enterprise Compliance',
    subtitle: 'Automated CI/CD security scanning, vulnerability pen-testing and bank-grade encryption.',
    metricBadge: '🔒 ZERO COMPROMISE',
    glowColor: 'rgba(242, 110, 101, 0.16)',
    // Placement: North face of wall at (row: 14, col: 12) -> x: 12, z: 24
    position: { x: 12, y: 2.15, z: 20.96 },
    rotationY: Math.PI,
    drawGraphic: (ctx, w, h) => {
      // Security shield & pipeline diagram
      const checks = [
        { name: 'STATIC CODE ANALYSIS', desc: 'SonarQube & Snyk CI Automation', status: 'PASS' },
        { name: 'SECRET & CREDENTIAL AUDIT', desc: 'Zero Hardcoded Keys • Vault Integrated', status: 'PASS' },
        { name: 'PENETRATION TESTING', desc: 'OWASP Top 10 • Third-Party Audited', status: 'PASS' },
        { name: 'TLS 1.3 & AES-256 ENCRYPTION', desc: 'End-to-End Encrypted Data at Rest & Transit', status: 'PASS' }
      ];

      checks.forEach((chk, idx) => {
        const py = 40 + idx * 65;
        ctx.fillStyle = '#141822';
        ctx.strokeStyle = '#2d3345';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(100, py, w - 200, 52, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px "JetBrains Mono", monospace';
        ctx.fillText(chk.name, 125, py + 24);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px "Poppins", sans-serif';
        ctx.fillText(chk.desc, 125, py + 42);

        // Green pass badge
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(w - 210, py + 12, 85, 28, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('✓ ' + chk.status, w - 167, py + 30);
        ctx.textAlign = 'left';
      });
    }
  },
  {
    id: 'art-fintech-risk',
    category: 'FinTech & Banking AI',
    title: 'Real-Time Transaction Risk & Fraud Shield',
    subtitle: 'Sub-millisecond graph neural networks scoring millions of transactions for UK financial institutions.',
    metricBadge: '💰 £34K+ SAVED/MO',
    glowColor: 'rgba(245, 158, 11, 0.16)',
    // Placement: South face of wall at (row: 7, col: 4) -> x: -36, z: -15
    position: { x: -36, y: 2.15, z: -14.96 },
    rotationY: 0,
    drawGraphic: (ctx, w, h) => {
      ctx.fillStyle = '#11141e';
      ctx.fillRect(60, 20, w - 120, 310);

      // Financial transaction pipeline
      const stages = [
        { label: 'INGESTION', desc: 'ISO 20022 Stream', val: '25,000 tx/s', c: '#38bdf8' },
        { label: 'NEURAL EVAL', desc: 'GNN Risk Model', val: '<3.2ms Latency', c: '#f26e65' },
        { label: 'CONSENSUS', desc: 'Rule Engine + LLM', val: '99.98% Precision', c: '#f59e0b' },
        { label: 'SETTLEMENT', desc: 'Automated Clearing', val: 'Zero Fraud Loss', c: '#10b981' }
      ];

      stages.forEach((st, i) => {
        const sx = 90 + i * 195;
        ctx.fillStyle = '#181c28';
        ctx.strokeStyle = st.c;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(sx, 50, 180, 170, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = st.c;
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.fillText(`0${i + 1} // ${st.label}`, sx + 14, 80);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px "Poppins", sans-serif';
        ctx.fillText(st.val, sx + 14, 130);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px "Poppins", sans-serif';
        ctx.fillText(st.desc, sx + 14, 160);

        if (i < stages.length - 1) {
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(sx + 180, 135);
          ctx.lineTo(sx + 195, 135);
          ctx.stroke();
        }
      });

      // Verification banner
      ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(90, 250, w - 180, 50, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText('FINANCIAL CONDUCT COMPLIANCE: FCA / ISO 20022 READY  •  REAL-TIME FRAUD PREVENTION', 115, 280);
    }
  },
  {
    id: 'art-healthtech-ai',
    category: 'Healthcare & Clinical AI',
    title: 'Clinical Diagnostics & NHS Workflow Automation',
    subtitle: 'HIPAA & NHS DTAC certified neural diagnostic models with automated EHR documentation.',
    metricBadge: '🏥 +400% EFFICIENCY',
    glowColor: 'rgba(56, 189, 248, 0.16)',
    // Placement: North face of wall at (row: 13, col: 4) -> x: -36, z: 15
    position: { x: -36, y: 2.15, z: 14.96 },
    rotationY: Math.PI,
    drawGraphic: (ctx, w, h) => {
      ctx.fillStyle = '#10141f';
      ctx.fillRect(60, 20, w - 120, 310);

      // Hospital & clinic automation stats
      const metrics = [
        { title: 'Triage Acceleration', stat: '4.2x Faster', note: 'AI pre-screening reduces wait time', c: '#38bdf8' },
        { title: 'Diagnostic Concordance', stat: '98.9%', note: 'Radiologist-verified model consensus', c: '#10b981' },
        { title: 'EHR Documentation', stat: '-75% Time', note: 'Ambient clinical listening & transcription', c: '#f26e65' }
      ];

      metrics.forEach((m, idx) => {
        const mx = 90 + idx * 260;
        ctx.fillStyle = '#181e2e';
        ctx.strokeStyle = m.c;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(mx, 45, 235, 150, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = m.c;
        ctx.font = 'bold 32px "Poppins", sans-serif';
        ctx.fillText(m.stat, mx + 18, 98);

        ctx.fillStyle = '#ffffff';
        ctx.font = '600 13px "Poppins", sans-serif';
        ctx.fillText(m.title, mx + 18, 130);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillText(m.note, mx + 18, 155);
      });

      // Pulse waveform graph
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const wave = [0, 4, -4, 8, -25, 45, -15, 6, -2, 0, 5, -3];
      for (let i = 0; i < 70; i++) {
        const wx = 90 + i * 11;
        const wy = 265 + (wave[i % wave.length] || 0) * 0.8;
        if (i === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
      }
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.fillText('LIVE TELEMETRY: 100% REGULATORY CONCORDANCE (NHS DTAC & HIPAA)', 90, 310);
    }
  },
  {
    id: 'art-event-streaming',
    category: 'High-Throughput Streaming',
    title: 'Distributed Event Streaming & Kafka Mesh',
    subtitle: 'Sub-5ms event delivery across 10 million daily enterprise messages with strict ordering.',
    metricBadge: '⚡ 10M+ EVENTS/DAY',
    glowColor: 'rgba(242, 110, 101, 0.16)',
    // Placement: South face of wall at (row: 7, col: 16) -> x: 36, z: -15
    position: { x: 36, y: 2.15, z: -14.96 },
    rotationY: 0,
    drawGraphic: (ctx, w, h) => {
      ctx.fillStyle = '#111420';
      ctx.fillRect(60, 20, w - 120, 310);

      // Event stream pipes
      const streams = [
        { topic: 'ORDERS.PLACED.V2', rate: '12,400 msg/s', lag: '0ms Lag', c: '#f26e65' },
        { topic: 'TELEMETRY.IOT.RAW', rate: '85,000 msg/s', lag: '1ms Lag', c: '#38bdf8' },
        { topic: 'AI.INFERENCE.JOBS', rate: '4,200 msg/s', lag: '0ms Lag', c: '#f59e0b' },
        { topic: 'AUDIT.LEDGER.SYNC', rate: '1,800 msg/s', lag: '0ms Lag', c: '#10b981' }
      ];

      streams.forEach((s, idx) => {
        const sy = 45 + idx * 65;
        ctx.fillStyle = '#181d2a';
        ctx.strokeStyle = s.c;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(90, sy, w - 180, 52, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = s.c;
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.fillText(`TOPIC: ${s.topic}`, 115, sy + 24);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px "Poppins", sans-serif';
        ctx.fillText(`THROUGHPUT: ${s.rate}`, 115, sy + 42);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`● ${s.lag} • HEALTHY`, w - 110, sy + 32);
        ctx.textAlign = 'left';
      });
    }
  },
  {
    id: 'art-design-systems',
    category: 'Design Systems & UI',
    title: 'Next-Gen WebGL & Reactive Design Systems',
    subtitle: 'Tailwind CSS design tokens, WebGL 3D micro-frontends and accessible WCAG 2.1 AA interfaces.',
    metricBadge: '🎨 100% LIGHTHOUSE',
    glowColor: 'rgba(168, 85, 247, 0.16)',
    // Placement: North face of wall at (row: 13, col: 16) -> x: 36, z: 15
    position: { x: 36, y: 2.15, z: 14.96 },
    rotationY: Math.PI,
    drawGraphic: (ctx, w, h) => {
      ctx.fillStyle = '#111420';
      ctx.fillRect(60, 20, w - 120, 310);

      // UI component hierarchy showcase
      const components = [
        { label: '3D WebGL Canvas', desc: 'Three.js • PCF Shadows • 60 FPS', score: '60 FPS', c: '#a855f7' },
        { label: 'Design Tokens', desc: 'Atomic CSS • Poppins Typography', score: '100%', c: '#f26e65' },
        { label: 'Accessibility', desc: 'Keyboard Nav • Contrast WCAG AAA', score: 'AAA Pass', c: '#10b981' },
        { label: 'Bundle Efficiency', desc: 'Tree-Shaken ES Modules • Zero Bloat', score: '99.4 kB', c: '#38bdf8' }
      ];

      components.forEach((c, idx) => {
        const cx = 90 + idx * 195;
        ctx.fillStyle = '#191d2c';
        ctx.strokeStyle = c.c;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(cx, 55, 180, 160, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = c.c;
        ctx.font = 'bold 26px "Poppins", sans-serif';
        ctx.fillText(c.score, cx + 16, 105);

        ctx.fillStyle = '#ffffff';
        ctx.font = '600 13px "Poppins", sans-serif';
        ctx.fillText(c.label, cx + 16, 140);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(c.desc, cx + 16, 165);
      });

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(90, 245, w - 180, 1);

      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.fillStyle = '#10b981';
      ctx.fillText('LIGHTHOUSE AUDIT: PERFORMANCE 100 • ACCESSIBILITY 100 • BEST PRACTICES 100 • SEO 100', 90, 285);
    }
  },
  {
    id: 'art-devsecops-ci',
    category: 'DevSecOps & Automation',
    title: 'Zero-Downtime Blue/Green CI/CD Pipelines',
    subtitle: 'Automated container vulnerability analysis, immutable Terraform state and rolling canary releases.',
    metricBadge: '🚀 0 DOWNTIME',
    glowColor: 'rgba(16, 185, 129, 0.16)',
    // Placement: East face of wall at (row: 4, col: 7) -> x: -18, z: -36
    position: { x: -14.96, y: 2.15, z: -36 },
    rotationY: -Math.PI / 2,
    drawGraphic: (ctx, w, h) => {
      ctx.fillStyle = '#111420';
      ctx.fillRect(60, 20, w - 120, 310);

      // Deployment pipeline stages
      const stages = [
        { step: '01', name: 'COMMIT & TEST', desc: 'Jest & Vitest Unit Suites', status: '100% PASS' },
        { step: '02', name: 'SECURITY SCAN', desc: 'Trivy & Snyk Dependency Audit', status: '0 VULNS' },
        { step: '03', name: 'TERRAFORM APPLY', desc: 'Immutable IaC Cloud Setup', status: 'VERIFIED' },
        { step: '04', name: 'CANARY DEPLOY', desc: '10% -> 50% -> 100% Health Checked', status: 'LIVE' }
      ];

      stages.forEach((st, idx) => {
        const sy = 45 + idx * 65;
        ctx.fillStyle = '#171c2a';
        ctx.strokeStyle = idx === 3 ? '#10b981' : '#38bdf8';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(90, sy, w - 180, 52, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f26e65';
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.fillText(`STAGE ${st.step} // ${st.name}`, 115, sy + 24);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '11px "Poppins", sans-serif';
        ctx.fillText(st.desc, 115, sy + 42);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`✓ ${st.status}`, w - 110, sy + 32);
        ctx.textAlign = 'left';
      });
    }
  },
  {
    id: 'art-client-impact',
    category: 'Enterprise Client Track Record',
    title: '11+ Years Delivering Production Software',
    subtitle: 'Trusted by UK FinTechs, European SaaS scale-ups and global healthcare enterprises.',
    metricBadge: '⭐ 4.9/5 CLUTCH',
    glowColor: 'rgba(245, 158, 11, 0.16)',
    // Placement: East face of wall at (row: 16, col: 7) -> x: -18, z: 36
    position: { x: -14.96, y: 2.15, z: 36 },
    rotationY: -Math.PI / 2,
    drawGraphic: (ctx, w, h) => {
      ctx.fillStyle = '#111420';
      ctx.fillRect(60, 20, w - 120, 310);

      // Verified stats strip
      const stats = [
        { val: '150+', lbl: 'Enterprise Clients', sub: 'UK, US, EU & UAE' },
        { val: '1,500+', lbl: 'Delivered Projects', sub: 'Production Shipped' },
        { val: '99.4%', lbl: 'On-Time Milestones', sub: 'Zero Slippage Guarantee' },
        { val: '4.9 / 5', lbl: 'Clutch Verified', sub: 'Top Rated UK AI Firm' }
      ];

      stats.forEach((st, i) => {
        const sx = 90 + i * 195;
        ctx.fillStyle = '#191d2c';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(sx, 50, 180, 160, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px "Poppins", sans-serif';
        ctx.fillText(st.val, sx + 16, 98);

        ctx.fillStyle = '#f59e0b';
        ctx.font = '600 13px "Poppins", sans-serif';
        ctx.fillText(st.lbl, sx + 16, 130);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(st.sub, sx + 16, 155);
      });

      ctx.fillStyle = 'rgba(242, 110, 101, 0.15)';
      ctx.strokeStyle = '#f26e65';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(90, 240, w - 180, 60, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px "Poppins", sans-serif';
      ctx.fillText('DIRECT ACCESS TO SENIOR ARCHITECTS: NO JUNIOR LAYERS, NO SALES BOTTLENECK', 115, 275);
    }
  }
];

export class GalleryArtManager {
  constructor(scene) {
    this.scene = scene;
    this.artObjects = [];
    this.createArtworks();
  }

  createArtworks() {
    // Shared Frame Materials
    const darkFrameMat = new THREE.MeshStandardMaterial({
      color: 0x18191b, // Dark titanium gallery frame
      roughness: 0.32,
      metalness: 0.85
    });

    const brassBevelMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // Subtle luxury brass inner fillet
      roughness: 0.28,
      metalness: 0.92
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.05,
      metalness: 0.15,
      transparent: true,
      opacity: 0.12
    });

    const luminaireBarMat = new THREE.MeshStandardMaterial({
      color: 0x242528, // Dark bronze picture light fixture
      roughness: 0.35,
      metalness: 0.9
    });

    SERVICE_ARTWORKS.forEach(data => {
      const group = new THREE.Group();
      group.position.set(data.position.x, data.position.y, data.position.z);
      group.rotation.y = data.rotationY;

      // 1. Dark Titanium Outer Frame (width: 3.6m, height: 2.25m, depth: 0.12m)
      const frameGeo = new THREE.BoxGeometry(3.6, 2.25, 0.12);
      const frame = new THREE.Mesh(frameGeo, darkFrameMat);
      frame.castShadow = true;
      frame.receiveShadow = true;
      group.add(frame);

      // 2. Brass Inner Bevel Lip
      const brassGeo = new THREE.BoxGeometry(3.42, 2.07, 0.13);
      const brassLip = new THREE.Mesh(brassGeo, brassBevelMat);
      group.add(brassLip);

      // 3. High-Resolution Digital Artwork Canvas
      const canvasTexture = generateServiceArtCanvas(data);
      const canvasGeo = new THREE.PlaneGeometry(3.3, 1.95);
      const canvasMat = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        roughness: 0.3,
        metalness: 0.05
      });
      const canvasMesh = new THREE.Mesh(canvasGeo, canvasMat);
      canvasMesh.position.z = 0.07;
      group.add(canvasMesh);

      // 4. Anti-Reflective Gallery Glass Cover
      const glassGeo = new THREE.PlaneGeometry(3.32, 1.97);
      const glass = new THREE.Mesh(glassGeo, glassMat);
      glass.position.z = 0.075;
      group.add(glass);

      // Mounted flush against wall — zero hanging or floating fixtures
      this.scene.add(group);
      this.artObjects.push({ data, group });
    });
  }
}
