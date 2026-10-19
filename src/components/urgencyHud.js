import { soundFX } from '../audio/soundFX.js';
import { STATIONS } from '../maze/mazeData.js';

export class UrgencyHUDController {
  constructor(player) {
    this.player = player;
    this.activeVisitors = 15;
    this.initTimer();
    this.initSocialProofToasts();
    this.initAudioToggle();
    this.initFastTravelButtons();
    this.initMobileJoystick();
  }

  initTimer() {
    const timerEl = document.getElementById('urgency-timer');
    if (!timerEl) return;

    let seconds = 4 * 86400 + 18 * 3600 + 32 * 60 + 10;
    setInterval(() => {
      seconds--;
      if (seconds <= 0) seconds = 5 * 86400;
      const d = Math.floor(seconds / 86400);
      const h = Math.floor((seconds % 86400) / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      timerEl.textContent = `${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    }, 1000);

    const visitorEl = document.getElementById('visitor-count');
    setInterval(() => {
      this.activeVisitors = Math.max(12, Math.min(28, this.activeVisitors + (Math.floor(Math.random() * 3) - 1)));
      if (visitorEl) visitorEl.textContent = `${this.activeVisitors}`;
    }, 4000);
  }

  initFastTravelButtons() {
    document.querySelectorAll('.fast-travel-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const stationNumber = btn.dataset.station;
        const station = STATIONS.find(s => s.number === stationNumber);
        if (station) {
          soundFX.playWarp();
          this.player.warpTo(station.x, station.z);
        }
      });
    });

    // Keyboard 1-5 fast travel
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const station = STATIONS.find(s => s.number === e.key);
        if (station) {
          soundFX.playWarp();
          this.player.warpTo(station.x, station.z);
        }
      }
    });
  }

  initAudioToggle() {
    const btn = document.getElementById('audio-toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isMuted = soundFX.toggleMute();
      btn.innerHTML = isMuted 
        ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg><span class="tracking-wide">SOUND: OFF [M]</span>`
        : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg><span class="tracking-wide text-[#f26e65] font-semibold">SOUND: ON [M]</span>`;
      btn.classList.toggle('audio-active', !isMuted);
    });

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'm' || e.key === 'M') {
        btn.click();
      }
    });
  }

  initSocialProofToasts() {
    const container = document.getElementById('cro-toast-container');
    if (!container) return;

    const messages = [
      { text: "UK FinTech enterprise hired senior AI engineer Hardik via Cypherox", badge: "CYPHEROX", time: "Just now" },
      { text: "150+ Enterprise Clients rated Cypherox 4.9/5 on Clutch & Google", badge: "CLUTCH", time: "2m ago" },
      { text: "London SaaS scaled production AI agent cluster with Cypherox team", badge: "DELIVERY", time: "5m ago" },
      { text: "Client saved £34,000/yr via Cypherox AWS & DevOps optimization", badge: "ROI", time: "9m ago" }
    ];

    let idx = 0;
    const triggerToast = () => {
      const item = messages[idx % messages.length];
      idx++;

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
      container.appendChild(toast);
      soundFX.playHover();

      setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
      }, 5000);
    };

    setTimeout(triggerToast, 2500);
    setInterval(triggerToast, 14000);
  }

  initMobileJoystick() {
    const joystick = document.getElementById('mobile-joystick');
    const stick = document.getElementById('joystick-stick');
    if (!joystick || !stick) return;

    let touchId = null;
    let startX = 0;
    let startY = 0;

    joystick.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0];
      touchId = t.identifier;
      const r = joystick.getBoundingClientRect();
      startX = r.left + r.width / 2;
      startY = r.top + r.height / 2;
    });

    window.addEventListener('touchmove', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === touchId) {
          const dx = t.clientX - startX;
          const dy = t.clientY - startY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 32;
          const clamped = Math.min(dist, maxDist);
          const angle = Math.atan2(dy, dx);

          stick.style.transform = `translate(${Math.cos(angle) * clamped}px, ${Math.sin(angle) * clamped}px)`;

          this.player.keys.forward = dy < -8;
          this.player.keys.backward = dy > 8;
          this.player.keys.left = dx < -8;
          this.player.keys.right = dx > 8;
        }
      }
    }, { passive: true });

    const endTouch = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchId) {
          touchId = null;
          stick.style.transform = 'translate(0px, 0px)';
          this.player.keys.forward = false;
          this.player.keys.backward = false;
          this.player.keys.left = false;
          this.player.keys.right = false;
        }
      }
    };

    window.addEventListener('touchend', endTouch);
    window.addEventListener('touchcancel', endTouch);
  }
}
