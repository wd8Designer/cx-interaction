import { soundFX } from '../audio/soundFX.js';
import { STATIONS } from '../maze/mazeData.js';

export class StationTerminalHUD {
  constructor() {
    this.container = document.getElementById('station-terminal-container');
    this.titleEl = document.getElementById('terminal-station-title');
    this.badgeEl = document.getElementById('terminal-station-badge');
    this.contentEl = document.getElementById('terminal-station-content');
    this.minimizeBtn = document.getElementById('terminal-minimize-btn');
    this.expandTrigger = document.getElementById('terminal-expand-trigger');
    this.tabs = document.querySelectorAll('.station-tab-btn');

    this.isDocked = false;
    this.isMinimized = false;
    this.currentStation = STATIONS[0]; // Default to Station 1 (Home)

    this.bindEvents();
    // Initialize default view to Home
    this.dock(this.currentStation);
  }

  bindEvents() {
    window.addEventListener('stationDocked', (e) => {
      this.dock(e.detail.station);
    });

    window.addEventListener('stationUndocked', () => {
      this.isDocked = false;
      this.collapse();
    });

    this.minimizeBtn?.addEventListener('click', () => {
      this.toggleMinimize();
    });

    this.expandTrigger?.addEventListener('click', () => {
      this.toggleMinimize();
    });

    // Press 'E' to toggle left panel view
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'e' || e.key === 'E') {
        this.toggleMinimize();
      }
    });

    // Top Navigation Tabs on Left Panel
    this.tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetNum = btn.dataset.target;
        const st = STATIONS.find(s => s.number === targetNum);
        if (st) {
          soundFX.playWarp();
          window.dispatchEvent(new CustomEvent('warpToStation', { detail: { station: st } }));
          this.dock(st);
        }
      });
    });
  }

  dock(station) {
    this.isDocked = true;
    this.currentStation = station;

    if (!this.container) return;

    if (this.titleEl) this.titleEl.textContent = `Pavilion ${String(station.number).padStart(2, '0')}: ${station.name}`;
    if (this.badgeEl) {
      this.badgeEl.textContent = `${station.pageName.toUpperCase()} ACTIVE`;
      this.badgeEl.style.color = '#f5918a';
      this.badgeEl.style.borderColor = 'rgba(242, 110, 101, 0.4)';
    }

    // Update active tab highlighting
    this.tabs.forEach(btn => {
      if (btn.dataset.target === station.number) {
        btn.classList.add('active-tab');
        btn.classList.remove('bg-[#1a1a1a]', 'border-[#333333]', 'text-[#CBD5E1]');
      } else {
        btn.classList.remove('active-tab');
        btn.classList.add('bg-[#1a1a1a]', 'border-[#333333]', 'text-[#CBD5E1]');
      }
    });

    this.renderPageContent(station.id);

    // Automatically expand panel when arriving at a station area
    this.expand();
  }

  collapse() {
    if (!this.isMinimized) {
      this.isMinimized = true;
      this.container?.classList.add('panel-collapsed');
      this.expandTrigger?.classList.remove('hidden');
    }
  }

  expand() {
    if (this.isMinimized) {
      this.isMinimized = false;
      this.container?.classList.remove('panel-collapsed');
      this.expandTrigger?.classList.add('hidden');
    }
  }

  toggleMinimize() {
    soundFX.playKeyStep();
    if (this.isMinimized) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  renderPageContent(stationId) {
    if (!this.contentEl) return;

    // PAGE 1: HOME (CYPHEROX CORE)
    if (stationId === 'S1') {
      this.contentEl.innerHTML = `
        <div class="space-y-6 font-sans">
          <!-- Hero Announcement Card -->
          <div class="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333] shadow-xl">
            <div class="flex items-center justify-between mb-3">
              <span class="eyebrow text-[#f5918a]">Production AI Engineering Firm</span>
              <div class="flex items-center gap-1.5 text-[#F59E0B] text-xs font-semibold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                <span>★★★★★</span>
                <span class="text-[#E2E8F0] font-mono text-[11px] ml-1">4.9/5 Clutch & Google</span>
              </div>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight tracking-tight">
              We Build the Technology <br>Your Business <span class="text-gradient">Depends On</span>
            </h2>
            <p class="text-sm text-[#E2E8F0] leading-relaxed font-normal mb-5">
              AI applications, custom software, cloud infrastructure and dedicated engineering teams. Designed, built and supported for businesses that need production systems, not prototypes.
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <button data-open-booking class="btn btn--primary font-bold shadow-lg">Talk to an Engineer</button>
              <button class="nav-jump btn btn--secondary font-semibold" data-target="3">Explore Our Services →</button>
            </div>
          </div>

          <!-- Verified Cypherox Stats Strip -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">11</span><span class="text-[#f26e65]">+</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Years</strong> In Business</div>
            </div>
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">130</span><span class="text-[#f26e65]">+</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Engineers</strong> Dedicated</div>
            </div>
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">1,500</span><span class="text-[#f26e65]">+</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Projects</strong> Delivered</div>
            </div>
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">5</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Regions</strong> UK, US, EU, UAE, IN</div>
            </div>
          </div>

          <!-- Why Choose Cypherox -->
          <div class="p-5 rounded-2xl bg-[#161616] border border-[#2e2e2e] space-y-3">
            <div class="text-xs font-mono font-bold text-white tracking-wider uppercase">Why Global Enterprises Partner With Us</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                <div class="font-bold text-white mb-1">Direct Engineer Access</div>
                <p class="text-[#CBD5E1] leading-relaxed">No junior account managers. You speak directly to the senior architects engineering your systems.</p>
              </div>
              <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                <div class="font-bold text-white mb-1">Production Rigor</div>
                <p class="text-[#CBD5E1] leading-relaxed">Zero prototype fragility. We deliver tested, scalable codebases with automated CI/CD and 99.9% uptime.</p>
              </div>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div class="flex items-center justify-between text-xs font-mono text-[#A3A3A3] pt-2 border-t border-[#2e2e2e]">
            <span>Fast Travel to Pavilion:</span>
            <div class="flex gap-2">
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="2">[2] About & Team</button> •
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="3">[3] Services</button> •
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="4">[4] Projects</button> •
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="5">[5] Contact</button>
            </div>
          </div>
        </div>
      `;
    } 
    // PAGE 2: ABOUT & DEDICATED TEAM (CYPHEROX DEVELOPER ROSTER)
    else if (stationId === 'S2') {
      this.contentEl.innerHTML = `
        <div class="space-y-6 font-sans">
          <div class="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333]">
            <span class="eyebrow text-[#f5918a]">Delivery Philosophy // Cypherox</span>
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-2.5">Four Areas. <span class="text-gradient">One Responsible Partner.</span></h2>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal mb-3">
              Most businesses manage separate vendors for AI, software, cloud and data. Requirements get lost between handoffs. Cypherox brings these functions under one engineering team so everything connects and runs seamlessly.
            </p>
            <p class="text-xs text-[#CBD5E1] font-mono bg-[#141414] p-3 rounded-lg border border-[#2a2a2a]">
              Speed with structure. Speed without structure creates technical debt later. Structure without speed creates delays now. We balance both.
            </p>
          </div>

          <!-- Developer Profiles Roster (From Live Site) -->
          <div class="space-y-3">
            <div class="text-xs font-mono text-white font-bold flex items-center justify-between">
              <span>HIRE DEDICATED CYPHEROX SPECIALISTS:</span>
              <span class="text-emerald-400 text-[10px] font-bold">🟢 3 Senior Engineers Available Now</span>
            </div>

            <div class="grid grid-cols-1 gap-3.5 text-xs">
              <!-- Hardik -->
              <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col justify-between hover:border-[#f26e65]/60 transition">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-white text-base">Hardik</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">Available Immediately</span>
                  </div>
                  <div class="text-xs text-[#f5918a] font-bold mb-2">Senior AI & Machine Learning Engineer</div>
                  <p class="text-xs text-[#CBD5E1] mb-3 leading-relaxed">Specialized in production LLM applications, autonomous agent workflows, LangChain, RAG pipelines, fine-tuning and AWS SageMaker deployment.</p>
                  <div class="flex flex-wrap gap-1.5 text-[10px] font-mono text-white mb-3">
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Python</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">PyTorch</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">LangChain</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">FastAPI</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">ChromaDB</span>
                  </div>
                </div>
                <button data-open-booking class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                  Hire Hardik for Your Project →
                </button>
              </div>

              <!-- Krupa -->
              <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col justify-between hover:border-[#f26e65]/60 transition">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-white text-base">Krupa</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">Available Immediately</span>
                  </div>
                  <div class="text-xs text-[#f5918a] font-bold mb-2">Senior Full Stack Engineer</div>
                  <p class="text-xs text-[#CBD5E1] mb-3 leading-relaxed">End-to-end web & mobile architectures, React, Next.js, responsive frontend systems, high-throughput microservices and PostgreSQL optimization.</p>
                  <div class="flex flex-wrap gap-1.5 text-[10px] font-mono text-white mb-3">
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">React</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Next.js</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Node.js</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">TypeScript</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Docker</span>
                  </div>
                </div>
                <button data-open-booking class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                  Hire Krupa for Your Project →
                </button>
              </div>

              <!-- Akash -->
              <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col justify-between hover:border-[#f26e65]/60 transition">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-white text-base">Akash</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">Available Immediately</span>
                  </div>
                  <div class="text-xs text-[#f5918a] font-bold mb-2">Senior Cloud & DevOps Engineer</div>
                  <p class="text-xs text-[#CBD5E1] mb-3 leading-relaxed">Infrastructure as Code (Terraform), Kubernetes cluster orchestration, multi-cloud reliability, automated CI/CD and AWS/GCP cloud cost reduction.</p>
                  <div class="flex flex-wrap gap-1.5 text-[10px] font-mono text-white mb-3">
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">AWS</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Terraform</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Kubernetes</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">CI/CD</span>
                  </div>
                </div>
                <button data-open-booking class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                  Hire Akash for Your Project →
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-[#2e2e2e]">
            <button data-open-booking class="btn btn--primary font-bold">
              Build a Dedicated Team →
            </button>
            <button class="nav-jump text-xs font-mono text-[#CBD5E1] hover:text-[#f26e65] transition cursor-pointer" data-target="3">
              Explore 4 Engineering Services [3] →
            </button>
          </div>
        </div>
      `;
    } 
    // PAGE 3: SERVICES (FULL-STACK CYPHEROX CORE PILLARS)
    else if (stationId === 'S3') {
      this.contentEl.innerHTML = `
        <div class="space-y-6 font-sans">
          <div class="flex items-center justify-between border-b border-[#2e2e2e] pb-3 overflow-x-auto gap-2">
            <span class="eyebrow text-[#f5918a]">Services // Core:</span>
            <div class="flex gap-2 font-mono">
              <button class="lab-tab-btn tab-active px-3 py-1.5 rounded-lg bg-[#f26e65] text-white font-bold text-xs shadow cursor-pointer" data-tab="ai">1. Production AI</button>
              <button class="lab-tab-btn px-3 py-1.5 rounded-lg bg-[#1e1e1e] border border-[#333333] text-[#CBD5E1] hover:text-white font-semibold text-xs transition cursor-pointer" data-tab="software">2. Custom Software</button>
              <button class="lab-tab-btn px-3 py-1.5 rounded-lg bg-[#1e1e1e] border border-[#333333] text-[#CBD5E1] hover:text-white font-semibold text-xs transition cursor-pointer" data-tab="cloud">3. Cloud & DevOps</button>
              <button class="lab-tab-btn px-3 py-1.5 rounded-lg bg-[#1e1e1e] border border-[#333333] text-[#CBD5E1] hover:text-white font-semibold text-xs transition cursor-pointer" data-tab="data">4. Data Analytics</button>
            </div>
          </div>

          <!-- Service 1: Production AI -->
          <div id="tab-ai" class="lab-tab-pane space-y-4">
            <h3 class="text-xl font-bold text-white">Production AI Systems & Agent Swarms</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              We design and deploy custom LLM agents, computer vision, and autonomous execution pipelines that automate complex enterprise operations with verifiable accuracy and zero hallucination drift.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 font-mono text-xs">
              <div class="flex justify-between pb-2.5 border-b border-[#2e2e2e] text-[11px] mb-2.5 text-white font-bold">
                <span>INTERACTIVE AI AGENT SIMULATOR:</span>
                <span class="text-[#f5918a]">[Hardik's Pipeline]</span>
              </div>
              <div id="station-swarm-logs" class="h-28 overflow-y-auto space-y-1.5 text-[#CBD5E1] pr-1 text-xs">
                <div class="text-[#888888]">// Ready. Click dispatch below to test Cypherox agentic consensus pipeline...</div>
              </div>
              <button id="btn-station-swarm" class="btn--pill-primary w-full mt-3.5 py-2.5 text-xs font-bold cursor-pointer">
                ⚡ Dispatch Production AI Agent Swarm
              </button>
            </div>
          </div>

          <!-- Service 2: Custom Software -->
          <div id="tab-software" class="lab-tab-pane hidden space-y-4">
            <h3 class="text-xl font-bold text-white">Custom Web & Mobile Software</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              High-performance web applications, mobile platforms, and enterprise APIs designed to replace fragile legacy code with clean, maintainable microservice architectures.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 space-y-3">
              <div class="text-white text-xs font-mono font-bold">CORE CAPABILITIES & STACK:</div>
              <div class="grid grid-cols-2 gap-3 text-center text-xs">
                <div class="p-3.5 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                  <span class="text-[#A3A3A3] block mb-1 text-[11px]">Frontend Stack:</span> <strong class="text-white text-sm">React, Next.js, Vue, React Native</strong>
                </div>
                <div class="p-3.5 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                  <span class="text-[#A3A3A3] block mb-1 text-[11px]">Backend Architecture:</span> <strong class="text-white text-sm">Node.js, Python, Go, PostgreSQL</strong>
                </div>
              </div>
              <div class="text-xs text-[#CBD5E1] text-center pt-1 font-mono">
                Clean code standards • Comprehensive test suites • Ready for high enterprise load.
              </div>
            </div>
          </div>

          <!-- Service 3: Cloud & DevOps -->
          <div id="tab-cloud" class="lab-tab-pane hidden space-y-4">
            <h3 class="text-xl font-bold text-white">Cloud Infrastructure & AWS Optimization</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              Automated Terraform infrastructure, Kubernetes cluster resilience, and rigorous architectural cost auditing to slash unoptimized cloud bills.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 font-mono text-xs">
              <div class="flex justify-between mb-2">
                <span class="text-[#CBD5E1]">Scale Node Clusters:</span>
                <span id="st-token-display" class="text-amber-400 font-bold text-sm">60 Node Clusters</span>
              </div>
              <input id="station-token-slider" type="range" min="10" max="250" value="60" step="5" class="w-full accent-[#f26e65] mb-3.5 cursor-pointer">
              <div class="grid grid-cols-2 gap-2.5 text-center">
                <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]"><span class="text-[#A3A3A3] text-xs block">Unoptimized Cloud:</span> <strong id="st-cloud-cost" class="text-rose-400 font-bold text-sm">$1,500/mo</strong></div>
                <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]"><span class="text-[#A3A3A3] text-xs block">Cypherox DevOps IaC:</span> <strong id="st-agency-cost" class="text-emerald-400 font-bold text-sm">$252/mo</strong></div>
              </div>
              <div id="st-llm-saved" class="mt-3 text-center text-[#f5918a] font-bold bg-[#f26e65]/15 p-2.5 rounded-xl border border-[#f26e65]/30">
                Save $1,248 / mo via Terraform & Kubernetes Optimization
              </div>
            </div>
          </div>

          <!-- Service 4: Data Analytics -->
          <div id="tab-data" class="lab-tab-pane hidden space-y-4">
            <h3 class="text-xl font-bold text-white">Consolidated Data Intelligence</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              Consolidate data from disconnected databases, ERPs, and CRMs into unified analytical pipelines with real-time reporting dashboards.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 font-mono text-xs">
              <div id="st-vision-output" class="p-4 bg-[#1c1c1c] rounded-xl border border-[#333333] text-[#CBD5E1] text-center mb-3">
                Click below to run real-time data pipeline benchmark...
              </div>
              <button id="btn-station-vision" class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                🔍 Run Live Data Intelligence Pipeline
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-[#2e2e2e]">
            <button data-open-booking class="btn btn--primary font-bold">
              Discuss Your Project With Cypherox →
            </button>
            <button class="nav-jump text-xs font-mono text-[#CBD5E1] hover:text-[#f26e65] transition cursor-pointer" data-target="4">
              See Projects & ROI [4] →
            </button>
          </div>
        </div>
      `;
      this.bindLabTabs();
    } 
    // PAGE 4: PROJECTS & ROI (CYPHEROX OUTCOMES)
    else if (stationId === 'S4') {
      this.contentEl.innerHTML = `
        <div class="space-y-6 font-sans">
          <div class="flex items-center justify-between">
            <span class="eyebrow text-[#f5918a]">Client Outcomes & Case Studies</span>
            <span class="text-[#CBD5E1] font-mono text-xs font-bold">1,500+ Delivered Projects</span>
          </div>

          <!-- Live Case Studies from 1,500+ Delivered Projects -->
          <div class="grid grid-cols-1 gap-3.5">
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-[#f5918a] font-bold font-mono">FINTECH ENTERPRISE UK</span>
                <span class="font-mono text-xs text-emerald-400 font-bold">+$3.42M Saved / Yr</span>
              </div>
              <div class="text-sm font-bold text-white mb-1">Automated AI Compliance & Transaction Flagging</div>
              <p class="text-xs text-[#CBD5E1] leading-relaxed">Replaced 42 manual reviewers with a verified multi-agent audit pipeline. Transaction review latency cut from 4 hours to 1.8 seconds.</p>
            </div>

            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-[#f5918a] font-bold font-mono">HEALTHCARE NETWORK</span>
                <span class="font-mono text-xs text-emerald-400 font-bold">4.2x Faster Response</span>
              </div>
              <div class="text-sm font-bold text-white mb-1">Clinical Triage & Patient Routing Engine</div>
              <p class="text-xs text-[#CBD5E1] leading-relaxed">99.4% physician-validated accuracy deployed across 120 clinic sites with HIPAA-grade zero retention protocols.</p>
            </div>

            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-amber-400 font-bold font-mono">GLOBAL E-COMMERCE & RETAIL</span>
                <span class="font-mono text-xs text-emerald-400 font-bold">+38.6% Conversion Lift</span>
              </div>
              <div class="text-sm font-bold text-white mb-1">Real-Time Dynamic Recommendation Pipeline</div>
              <p class="text-xs text-[#CBD5E1] leading-relaxed">Generated +$12.4M incremental revenue with 36ms peak query latency and unified PostgreSQL datastores.</p>
            </div>
          </div>

          <!-- Integrated Interactive ROI Calculator -->
          <div class="p-5 rounded-2xl bg-[#1a1a1a] border border-[#333333] space-y-4">
            <div class="flex justify-between items-center font-mono text-xs">
              <span class="text-white font-bold">ENTERPRISE EFFICIENCY CALCULATOR:</span>
              <span class="text-[#A3A3A3]">In-house vs Cypherox Dedicated Team</span>
            </div>

            <div class="space-y-4 font-mono text-xs">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-[#CBD5E1]">Team Headcount:</span>
                  <strong id="st-roi-team" class="text-amber-400 font-bold">12 Specialists</strong>
                </div>
                <input id="in-roi-team" type="range" min="3" max="150" value="12" class="w-full accent-[#f26e65] cursor-pointer">
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-[#CBD5E1]">In-House Hourly Cost:</span>
                  <strong id="st-roi-rate" class="text-[#f5918a] font-bold">$85 / hr</strong>
                </div>
                <input id="in-roi-rate" type="range" min="30" max="250" value="85" step="5" class="w-full accent-[#f26e65] cursor-pointer">
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-[#CBD5E1]">Repetitive Overhead Hours / Wk:</span>
                  <strong id="st-roi-hrs" class="text-white font-bold">16 hrs / wk</strong>
                </div>
                <input id="in-roi-hrs" type="range" min="4" max="35" value="16" class="w-full accent-[#f26e65] cursor-pointer">
              </div>

              <div class="p-4 rounded-xl bg-[#141414] border border-[#2e2e2e] grid grid-cols-2 gap-3 text-xs">
                <div><span class="text-[#A3A3A3] block text-[11px]">Monthly Waste:</span> <strong id="st-res-waste" class="text-rose-400 font-bold text-sm">$70,682</strong></div>
                <div><span class="text-[#A3A3A3] block text-[11px]">Annual Savings:</span> <strong id="st-res-savings" class="text-emerald-400 font-bold text-sm">$636,140</strong></div>
                <div><span class="text-[#A3A3A3] block text-[11px]">Speed Multiplier:</span> <strong id="st-res-multi" class="text-white font-bold text-sm">5.1x</strong></div>
                <div><span class="text-[#A3A3A3] block text-[11px]">Payback Period:</span> <strong id="st-res-payback" class="text-amber-400 font-bold text-sm">16 Days</strong></div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-[#2e2e2e]">
            <button data-open-booking class="btn btn--primary font-bold">
              Lock In Custom ROI Blueprint →
            </button>
            <button class="nav-jump text-xs font-mono text-[#CBD5E1] hover:text-white cursor-pointer" data-target="5">
              Proceed to Contact [5] →
            </button>
          </div>
        </div>
      `;
      this.bindROICalculator();
    } 
    // PAGE 5: CONTACT (CYPHEROX UK DIRECT INTAKE)
    else if (stationId === 'S5') {
      this.contentEl.innerHTML = `
        <div class="space-y-6 font-sans">
          <div class="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333]">
            <div class="flex items-center justify-between mb-3">
              <span class="eyebrow text-[#f5918a]">Direct Intake // London UK</span>
              <span class="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">⚡ Active Consultation Slots Open</span>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2.5">Let's Build <span class="text-gradient">Something That Matters</span></h2>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal mb-5">
              No sales pitch. We discuss what you are building, what constraints apply and the most practical path forward: a direct conversation with an engineer who understands the work.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div class="p-3.5 rounded-xl bg-[#141414] border border-[#2e2e2e]">
                <span class="text-[#A3A3A3] block text-[11px] mb-1">DIRECT EMAIL</span>
                <a href="mailto:info@cypherox.uk" class="text-[#f5918a] font-bold hover:underline text-xs">info@cypherox.uk</a>
              </div>
              <div class="p-3.5 rounded-xl bg-[#141414] border border-[#2e2e2e]">
                <span class="text-[#A3A3A3] block text-[11px] mb-1">DIRECT PHONE</span>
                <a href="tel:+447453420874" class="text-emerald-400 font-bold hover:underline text-xs">+44 7453 420874</a>
              </div>
              <div class="p-3.5 rounded-xl bg-[#141414] border border-[#2e2e2e]">
                <span class="text-[#A3A3A3] block text-[11px] mb-1">OFFICE LOCATION</span>
                <span class="text-white font-bold text-xs">London, United Kingdom</span>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#CBD5E1] gap-2">
            <span>📍 Office 18010, 182-184 High Street North, London E6 2JA</span>
            <span class="text-emerald-400 font-bold">🔒 100% NDA Protected</span>
          </div>

          <button data-open-booking class="btn--pill-primary w-full py-4 text-sm font-bold tracking-wide uppercase cursor-pointer shadow-xl">
            Schedule Call With a Senior Cypherox Engineer →
          </button>
        </div>
      `;
    }

    // Bind all buttons inside injected content
    this.contentEl.querySelectorAll('[data-open-booking]').forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playWarp();
        document.getElementById('booking-modal')?.classList.remove('hidden');
      });
    });

    // Jump links between pages
    this.contentEl.querySelectorAll('.nav-jump').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetNumber = btn.dataset.target;
        const targetStation = STATIONS.find(s => s.number === targetNumber);
        if (targetStation) {
          soundFX.playWarp();
          window.dispatchEvent(new CustomEvent('warpToStation', { detail: { station: targetStation } }));
          this.dock(targetStation);
        }
      });
    });
  }

  bindLabTabs() {
    const tabs = this.contentEl.querySelectorAll('.lab-tab-btn');
    const panes = this.contentEl.querySelectorAll('.lab-tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        soundFX.playKeyStep();
        tabs.forEach(t => {
          t.classList.remove('tab-active', 'bg-[#f26e65]', 'text-white', 'shadow');
          t.classList.add('bg-[#1e1e1e]', 'text-[#CBD5E1]');
        });
        tab.classList.add('tab-active', 'bg-[#f26e65]', 'text-white', 'shadow');
        tab.classList.remove('bg-[#1e1e1e]', 'text-[#CBD5E1]');

        panes.forEach(p => p.classList.add('hidden'));
        const active = this.contentEl.querySelector(`#tab-${tab.dataset.tab}`);
        if (active) active.classList.remove('hidden');
      });
    });

    const swarmBtn = this.contentEl.querySelector('#btn-station-swarm');
    const swarmLogs = this.contentEl.querySelector('#station-swarm-logs');
    if (swarmBtn && swarmLogs) {
      swarmBtn.addEventListener('click', () => {
        soundFX.playPulse();
        swarmBtn.disabled = true;
        swarmBtn.textContent = 'AGENT RUNNING (LLM ORCHESTRATION)...';
        swarmLogs.innerHTML = '';

        const steps = [
          '[Cypherox AI Agent] Deconstructing enterprise process requirements...',
          '[RAG Pipeline] Querying internal corporate documentation & knowledge graph...',
          '[Execution Engine] Synthesizing production code and test suites...',
          '✅ Complete: Production system deployed with zero human bottleneck.'
        ];

        steps.forEach((step, i) => {
          setTimeout(() => {
            soundFX.playKeyStep();
            const p = document.createElement('div');
            p.textContent = step;
            p.className = i === steps.length - 1 ? 'text-[#f5918a] font-bold' : 'text-[#CBD5E1]';
            swarmLogs.appendChild(p);
            swarmLogs.scrollTop = swarmLogs.scrollHeight;

            if (i === steps.length - 1) {
              swarmBtn.disabled = false;
              swarmBtn.textContent = '⚡ Re-run AI Agent';
              soundFX.playSuccess();
            }
          }, (i + 1) * 350);
        });
      });
    }

    const tokenSlider = this.contentEl.querySelector('#station-token-slider');
    if (tokenSlider) {
      tokenSlider.addEventListener('input', (e) => {
        const v = parseInt(e.target.value);
        soundFX.playKeyStep();
        this.contentEl.querySelector('#st-token-display').textContent = `${v} Node Clusters`;
        const cloud = Math.round(v * 25.0);
        const local = Math.round(v * 4.2);
        this.contentEl.querySelector('#st-cloud-cost').textContent = `$${cloud.toLocaleString()}/mo`;
        this.contentEl.querySelector('#st-agency-cost').textContent = `$${local.toLocaleString()}/mo`;
        this.contentEl.querySelector('#st-llm-saved').textContent = `Save $${(cloud - local).toLocaleString()} / mo via Cypherox DevOps IaC`;
      });
    }

    const visionBtn = this.contentEl.querySelector('#btn-station-vision');
    if (visionBtn) {
      visionBtn.addEventListener('click', () => {
        soundFX.playWarp();
        const output = this.contentEl.querySelector('#st-vision-output');
        output.textContent = 'RUNNING DATA PIPELINE INTEGRATION BENCHMARK...';
        setTimeout(() => {
          soundFX.playSuccess();
          output.innerHTML = `<span class="text-[#f5918a] font-bold">140,000 RECORDS CONSOLIDATED</span> | Latency: 24ms | Real-Time Sync: Active`;
        }, 900);
      });
    }
  }

  bindROICalculator() {
    const teamIn = this.contentEl.querySelector('#in-roi-team');
    const rateIn = this.contentEl.querySelector('#in-roi-rate');
    const hrsIn = this.contentEl.querySelector('#in-roi-hrs');

    const updateCalc = () => {
      const team = parseInt(teamIn.value);
      const rate = parseInt(rateIn.value);
      const hrs = parseInt(hrsIn.value);

      this.contentEl.querySelector('#st-roi-team').textContent = `${team} Specialists`;
      this.contentEl.querySelector('#st-roi-rate').textContent = `$${rate} / hr`;
      this.contentEl.querySelector('#st-roi-hrs').textContent = `${hrs} hrs / wk`;

      const monthlyWaste = Math.round(team * hrs * 4.33 * rate);
      const annualSavings = Math.round(monthlyWaste * 12 * 0.75);
      const multi = (3.2 + (hrs / 10) * 1.2).toFixed(1);
      const payback = Math.max(14, Math.round((28000 / (monthlyWaste * 0.75)) * 30));

      this.contentEl.querySelector('#st-res-waste').textContent = `$${monthlyWaste.toLocaleString()}`;
      this.contentEl.querySelector('#st-res-savings').textContent = `$${annualSavings.toLocaleString()}`;
      this.contentEl.querySelector('#st-res-multi').textContent = `${multi}x`;
      this.contentEl.querySelector('#st-res-payback').textContent = `${payback} Days`;
    };

    [teamIn, rateIn, hrsIn].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          soundFX.playKeyStep();
          updateCalc();
        });
      }
    });
  }
}
