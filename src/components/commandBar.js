import { soundFX } from '../audio/soundFX.js';

export class CommandBar {
  constructor(player) {
    this.player = player;
    this.modal = document.getElementById('command-terminal-modal');
    this.input = document.getElementById('terminal-input');
    this.list = document.getElementById('terminal-commands-list');
    this.isOpen = false;

    this.commands = [
      { key: '1', title: 'Sector 01: Neural Nexus', desc: 'Jump to Hero & Executive Summary', action: () => this.jumpTo(0, 8, '#hero') },
      { key: '2', title: 'Sector 02: Intelligence Vault', desc: 'Interactive AI Swarms & Services', action: () => this.jumpTo(-28, -18, '#services') },
      { key: '3', title: 'Sector 03: Live Deployments', desc: 'Battle-Tested Enterprise Case Studies', action: () => this.jumpTo(28, -20, '#portfolio') },
      { key: '4', title: 'Sector 04: ROI Quantum Reactor', desc: 'Calculate your exact annual $ savings', action: () => this.jumpTo(-24, 22, '#calculator') },
      { key: '5', title: 'Sector 05: Enterprise Portal', desc: 'Lock in 1 of 2 remaining Q4 cohort slots', action: () => this.openBooking() },
      { key: 'p', title: 'Pulse Shockwave', desc: 'Emit 360-degree neural electromagnetic wave [SPACE]', action: () => this.player.triggerShockwave() },
      { key: 'm', title: 'Toggle Cyber Audio', desc: 'Enable/Disable spatial Web Audio haptics', action: () => document.getElementById('audio-toggle-btn')?.click() }
    ];

    this.init();
  }

  init() {
    if (!this.modal || !this.input) return;

    // Open hotkeys: 'k', 'K', '/' (when not typing in other inputs)
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) && document.activeElement !== this.input) {
        return;
      }

      if ((e.key === 'k' || e.key === 'K') && !this.isOpen && document.activeElement !== this.input) {
        e.preventDefault();
        this.open();
      } else if (e.key === '/' && !this.isOpen && document.activeElement !== this.input) {
        e.preventDefault();
        this.open();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    document.getElementById('terminal-close-btn')?.addEventListener('click', () => this.close());
    document.getElementById('open-terminal-btn')?.addEventListener('click', () => this.open());

    this.input.addEventListener('input', () => this.renderCommands(this.input.value));

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    this.renderCommands('');
  }

  open() {
    this.isOpen = true;
    this.modal.classList.remove('hidden');
    soundFX.playWarp();
    this.input.value = '';
    this.renderCommands('');
    setTimeout(() => this.input.focus(), 50);
  }

  close() {
    this.isOpen = false;
    this.modal.classList.add('hidden');
    this.input.blur();
  }

  jumpTo(x, z, selector) {
    this.close();
    this.player.warpTo(x, z);
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openBooking() {
    this.close();
    document.getElementById('booking-modal')?.classList.remove('hidden');
  }

  renderCommands(query) {
    if (!this.list) return;
    const filter = query.toLowerCase().trim();
    const matches = this.commands.filter(c => 
      c.title.toLowerCase().includes(filter) || 
      c.desc.toLowerCase().includes(filter) ||
      c.key.toLowerCase().includes(filter)
    );

    this.list.innerHTML = '';

    if (matches.length === 0) {
      this.list.innerHTML = `<div class="p-4 text-xs text-neutral-400 font-mono">No matching command protocols found.</div>`;
      return;
    }

    matches.forEach((cmd, i) => {
      const item = document.createElement('div');
      item.className = 'terminal-item';
      item.innerHTML = `
        <div class="terminal-item-left">
          <span class="terminal-key-badge">${cmd.key.toUpperCase()}</span>
          <div>
            <div class="terminal-item-title">${cmd.title}</div>
            <div class="terminal-item-desc">${cmd.desc}</div>
          </div>
        </div>
        <span class="text-xs text-[#f26e65] font-mono">EXECUTE ↵</span>
      `;

      item.addEventListener('mouseenter', () => soundFX.playHover());
      item.addEventListener('click', () => {
        soundFX.playPulse();
        cmd.action();
      });

      this.list.appendChild(item);
    });
  }
}
