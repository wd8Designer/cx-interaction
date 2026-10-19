import { soundFX } from '../audio/soundFX.js';

export class ServicesInteractiveEngine {
  constructor() {
    this.initSwarmDemo();
    this.initRagDemo();
    this.initLlmCostDemo();
    this.initVisionDemo();
  }

  // 1. Swarm Simulation
  initSwarmDemo() {
    const btn = document.getElementById('btn-run-swarm');
    const logsContainer = document.getElementById('swarm-live-logs');
    const nodes = document.querySelectorAll('.swarm-node');

    if (!btn || !logsContainer) return;

    btn.addEventListener('click', () => {
      soundFX.playPulse();
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-dot"></span> SWARM ACTIVE (3 AGENTS COLLABORATING)...`;

      logsContainer.innerHTML = '';
      nodes.forEach(n => n.classList.add('node-active'));

      const logSteps = [
        { time: '0.12s', text: '[Architect Agent] Deconstructing complex multi-stage objective into DAG graph...' },
        { time: '0.45s', text: '[Research Agent] Ingesting 4,200 company docs via hybrid vector search...' },
        { time: '0.88s', text: '[Execution Agent] Generating code patches with test coverage pass rate 100%...' },
        { time: '1.24s', text: '[Critic Agent] Verified zero hallucination tokens. Consensus reached.' },
        { time: '1.40s', text: '✅ EXECUTION COMPLETE: 14.2x faster than human workflow, zero downtime.' }
      ];

      logSteps.forEach((step, idx) => {
        setTimeout(() => {
          soundFX.playKeyStep();
          const p = document.createElement('div');
          p.className = 'font-mono text-xs py-1 ' + (idx === logSteps.length - 1 ? 'text-[#f26e65] font-bold' : 'text-neutral-300');
          p.innerHTML = `<span class="text-neutral-500">[${step.time}]</span> ${step.text}`;
          logsContainer.appendChild(p);
          logsContainer.scrollTop = logsContainer.scrollHeight;

          if (idx === logSteps.length - 1) {
            btn.disabled = false;
            btn.innerHTML = `⚡ RE-RUN AUTONOMOUS SWARM`;
            nodes.forEach(n => n.classList.remove('node-active'));
            soundFX.playSuccess();
          }
        }, idx * 300);
      });
    });
  }

  // 2. Enterprise RAG Interactive Visualizer
  initRagDemo() {
    const slider = document.getElementById('rag-density-slider');
    const latencyEl = document.getElementById('rag-latency-val');
    const accuracyEl = document.getElementById('rag-accuracy-val');
    const hallucinationEl = document.getElementById('rag-hallucination-val');

    if (!slider) return;

    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      soundFX.playKeyStep();

      // Math: Higher density = better reranking, lower hallucination, optimized vector retrieval
      const latency = Math.round(480 - (val * 3.2));
      const accuracy = (94.2 + (val / 100) * 5.7).toFixed(1);
      const hallucination = Math.max(0.01, (4.5 - (val / 100) * 4.49)).toFixed(2);

      if (latencyEl) latencyEl.textContent = `${latency}ms`;
      if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
      if (hallucinationEl) hallucinationEl.textContent = `${hallucination}%`;
    });
  }

  // 3. LLM Cloud vs Fine-Tuned Local Quantized Model
  initLlmCostDemo() {
    const slider = document.getElementById('llm-token-slider');
    const tokenDisplay = document.getElementById('token-display');
    const cloudCostEl = document.getElementById('cloud-cost-val');
    const agencyCostEl = document.getElementById('agency-cost-val');
    const savingsEl = document.getElementById('llm-savings-val');

    if (!slider) return;

    slider.addEventListener('input', (e) => {
      const millionTokens = parseInt(e.target.value);
      soundFX.playKeyStep();

      if (tokenDisplay) tokenDisplay.textContent = `${millionTokens}M Tokens / mo`;

      const standardCloudCost = Math.round(millionTokens * 25.0); // e.g. $25 per 1M tokens
      const fineTunedCost = Math.round(millionTokens * 4.2);      // e.g. $4.2 per 1M tokens on dedicated cluster
      const saved = standardCloudCost - fineTunedCost;

      if (cloudCostEl) cloudCostEl.textContent = `$${standardCloudCost.toLocaleString()}`;
      if (agencyCostEl) agencyCostEl.textContent = `$${fineTunedCost.toLocaleString()}`;
      if (savingsEl) savingsEl.textContent = `Save $${saved.toLocaleString()} / mo (83.2% cut)`;
    });
  }

  // 4. Vision Demo
  initVisionDemo() {
    const scanBtn = document.getElementById('btn-scan-vision');
    const scanOverlay = document.getElementById('vision-scanner-overlay');
    const scanMeta = document.getElementById('vision-meta-output');

    if (!scanBtn || !scanOverlay) return;

    scanBtn.addEventListener('click', () => {
      soundFX.playWarp();
      scanOverlay.classList.remove('opacity-0');
      scanOverlay.classList.add('scanner-active');

      if (scanMeta) {
        scanMeta.textContent = 'SCANNING MULTI-MODAL MATRIX...';
      }

      setTimeout(() => {
        soundFX.playSuccess();
        scanOverlay.classList.remove('scanner-active');
        if (scanMeta) {
          scanMeta.innerHTML = `<span class="text-[#f26e65]">STATUS: 4 OBJECTS IDENTIFIED</span> | Confidence: 99.82% | Anomaly Rate: 0.00% | Latency: 42ms`;
        }
      }, 1200);
    });
  }
}
