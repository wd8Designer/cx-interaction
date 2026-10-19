import { soundFX } from '../audio/soundFX.js';

export class HUDController {
  constructor(player) {
    this.player = player;
    this.activeVisitors = 14;
    this.initUrgencyTimer();
    this.initLiveSocialProof();
    this.initAudioToggle();
    this.initMobileControls();
  }

  initUrgencyTimer() {
    // Dynamic countdown timer for scarcity
    const timerEl = document.getElementById('urgency-timer');
    if (!timerEl) return;

    let totalSeconds = 4 * 86400 + 18 * 3600 + 32 * 60 + 15; // 4d 18h 32m 15s

    setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) totalSeconds = 5 * 86400;

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      timerEl.textContent = `${days}d ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
    }, 1000);

    // Dynamic visitor variance
    const visitorEl = document.getElementById('visitor-count');
    setInterval(() => {
      const delta = Math.floor(Math.random() * 3) - 1;
      this.activeVisitors = Math.max(11, Math.min(27, this.activeVisitors + delta));
      if (visitorEl) visitorEl.textContent = `${this.activeVisitors}`;
    }, 4500);
  }

  initLiveSocialProof() {
    const toastContainer = document.getElementById('cro-toast-container');
    if (!toastContainer) return;

    const proofs = [
      { text: "CTO at FinTech unicorn just claimed an AI Architecture Audit", time: "Just now", badge: "VERIFIED" },
      { text: "HealthTech AI Swarm deployment went live (+4.2x faster triaging)", time: "3m ago", badge: "LIVE" },
      { text: "E-commerce Founder (NYC) locked in Q4 Cohort spot #3", time: "7m ago", badge: "COHORT" },
      { text: "B2B SaaS saved $280k/yr on manual support operations", time: "12m ago", badge: "ROI" },
      { text: "Autonomous Agent Cluster processed 140,000 documents today", time: "18m ago", badge: "SYSTEM" }
    ];

    let proofIndex = 0;

    const showToast = () => {
      const item = proofs[proofIndex % proofs.length];
      proofIndex++;

      const toast = document.createElement('div');
      toast.className = 'cro-toast animate-slide-in';
      toast.innerHTML = `
        <div class="toast-indicator"></div>
        <div class="toast-content">
          <div class="toast-header">
            <span class="toast-badge">${item.badge}</span>
            <span class="toast-time">${item.time}</span>
          </div>
          <p class="toast-text">${item.text}</p>
        </div>
      `;

      toastContainer.appendChild(toast);
      soundFX.playHover();

      setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
      }, 5500);
    };

    // First toast after 3s, then every 16s
    setTimeout(showToast, 3000);
    setInterval(showToast, 16000);
  }

  initAudioToggle() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
      const isMuted = soundFX.toggleMute();
      audioBtn.innerHTML = isMuted 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> <span>AUDIO: OFF [M]</span>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> <span>AUDIO: ON [M]</span>`;
      audioBtn.classList.toggle('audio-active', !isMuted);
    });

    // Hotkey M for audio toggle
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'm' || e.key === 'M') {
        audioBtn.click();
      }
    });
  }

  initMobileControls() {
    // Virtual joystick for mobile/touch users
    const joystick = document.getElementById('mobile-joystick');
    const stick = document.getElementById('joystick-stick');
    if (!joystick || !stick) return;

    let touchId = null;
    let startX = 0;
    let startY = 0;

    joystick.addEventListener('touchstart', (e) => {
      const touch = e.changedTouches[0];
      touchId = touch.identifier;
      const rect = joystick.getBoundingClientRect();
      startX = rect.left + rect.width / 2;
      startY = rect.top + rect.height / 2;
    });

    const handleTouchMove = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === touchId) {
          const dx = touch.clientX - startX;
          const dy = touch.clientY - startY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 35;
          const clampedDist = Math.min(dist, maxDist);
          const angle = Math.atan2(dy, dx);

          const stickX = Math.cos(angle) * clampedDist;
          const stickY = Math.sin(angle) * clampedDist;

          stick.style.transform = `translate(${stickX}px, ${stickY}px)`;

          // Feed into player
          this.player.keys.forward = dy < -10;
          this.player.keys.backward = dy > 10;
          this.player.keys.left = dx < -10;
          this.player.keys.right = dx > 10;
        }
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const handleTouchEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchId) {
          touchId = null;
          stick.style.transform = `translate(0px, 0px)`;
          this.player.keys.forward = false;
          this.player.keys.backward = false;
          this.player.keys.left = false;
          this.player.keys.right = false;
        }
      }
    };

    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
  }
}
