import confetti from 'canvas-confetti';
import { soundFX } from '../audio/soundFX.js';

export class BookingModal {
  constructor() {
    this.modal = document.getElementById('booking-modal');
    this.closeBtn = document.getElementById('booking-close-btn');
    this.form = document.getElementById('audit-booking-form');
    this.step1 = document.getElementById('booking-step-1');
    this.step2 = document.getElementById('booking-step-2');
    this.successState = document.getElementById('booking-success-state');

    this.selectedPill = 'agents';
    this.selectedSlot = 'Tomorrow, 10:00 AM EST';

    this.init();
  }

  init() {
    if (!this.modal) return;

    // Open triggers across site
    document.querySelectorAll('[data-open-booking]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        soundFX.playWarp();
        this.open();
      });
    });

    this.closeBtn?.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Step 1 pills selection
    document.querySelectorAll('.audit-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        soundFX.playKeyStep();
        document.querySelectorAll('.audit-pill').forEach(p => p.classList.remove('pill-active'));
        pill.classList.add('pill-active');
        this.selectedPill = pill.dataset.pill;
      });
    });

    // Slot selection
    document.querySelectorAll('.slot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playKeyStep();
        document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('slot-active'));
        btn.classList.add('slot-active');
        this.selectedSlot = btn.dataset.slot;
      });
    });

    // Form submission
    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submit();
    });

    // Reset button
    document.getElementById('btn-reset-booking')?.addEventListener('click', () => {
      this.reset();
      this.close();
    });
  }

  open() {
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  submit() {
    soundFX.playSuccess();

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f26e65', '#d94f47', '#f5918a', '#1a1a1a', '#ffffff']
    });

    // Switch to success view
    if (this.step1) this.step1.classList.add('hidden');
    if (this.successState) {
      this.successState.classList.remove('hidden');
      const slotDisplay = document.getElementById('confirmed-slot-display');
      if (slotDisplay) {
        slotDisplay.textContent = this.selectedSlot;
      }
    }

    // Decrement cohort slot counter live for urgency immersion
    const cohortBadge = document.getElementById('cohort-slots-badge');
    if (cohortBadge) {
      cohortBadge.innerHTML = `<span class="slot-warning">ONLY 1 OF 5 SLOTS LEFT</span>`;
    }
  }

  reset() {
    if (this.step1) this.step1.classList.remove('hidden');
    if (this.successState) this.successState.classList.add('hidden');
    this.form?.reset();
  }
}
