import { soundFX } from '../audio/soundFX.js';

export class ROICalculator {
  constructor() {
    this.teamSizeInput = document.getElementById('calc-team-size');
    this.hourlyRateInput = document.getElementById('calc-hourly-rate');
    this.hoursWastedInput = document.getElementById('calc-hours-wasted');

    this.valTeam = document.getElementById('val-team-size');
    this.valRate = document.getElementById('val-hourly-rate');
    this.valHours = document.getElementById('val-hours-wasted');

    this.resMonthlyWaste = document.getElementById('res-monthly-waste');
    this.resAnnualSavings = document.getElementById('res-annual-savings');
    this.resSpeedMultiplier = document.getElementById('res-speed-multiplier');
    this.resPaybackDays = document.getElementById('res-payback-days');

    this.bindEvents();
    this.calculate();
  }

  bindEvents() {
    [this.teamSizeInput, this.hourlyRateInput, this.hoursWastedInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        soundFX.playKeyStep();
        this.calculate();
      });
    });

    const lockBtn = document.getElementById('btn-lock-roi');
    if (lockBtn) {
      lockBtn.addEventListener('click', () => {
        soundFX.playSuccess();
        const bookingModal = document.getElementById('booking-modal');
        if (bookingModal) {
          bookingModal.classList.remove('hidden');
          const noteInput = document.getElementById('booking-notes');
          if (noteInput) {
            noteInput.value = `Calculated ROI: Team size ${this.teamSizeInput?.value}, Hourly $${this.hourlyRateInput?.value}, Repetitive hrs ${this.hoursWastedInput?.value}/wk. Projected annual savings: ${this.resAnnualSavings?.textContent}.`;
          }
        }
      });
    }
  }

  calculate() {
    if (!this.teamSizeInput || !this.hourlyRateInput || !this.hoursWastedInput) return;

    const team = parseInt(this.teamSizeInput.value) || 10;
    const rate = parseInt(this.hourlyRateInput.value) || 85;
    const hours = parseInt(this.hoursWastedInput.value) || 15;

    if (this.valTeam) this.valTeam.textContent = `${team} Specialists`;
    if (this.valRate) this.valRate.textContent = `$${rate} / hr`;
    if (this.valHours) this.valHours.textContent = `${hours} hrs / wk`;

    // Monthly cost of repetitive manual labor = team * hours * 4.3 weeks * rate
    const monthlyWaste = Math.round(team * hours * 4.33 * rate);

    // AI Automation captures ~75% of this waste safely
    const annualSavings = Math.round(monthlyWaste * 12 * 0.75);

    // Multiplier calculation (typically 4x to 8x throughput)
    const multiplier = (3.2 + (hours / 10) * 1.2).toFixed(1);

    // Payback period (estimate typical custom deployment cost ~$28,000 / monthlySavings * 30 days)
    const paybackDays = Math.max(14, Math.round((28000 / (monthlyWaste * 0.75)) * 30));

    if (this.resMonthlyWaste) this.resMonthlyWaste.textContent = `$${monthlyWaste.toLocaleString()}`;
    if (this.resAnnualSavings) this.resAnnualSavings.textContent = `$${annualSavings.toLocaleString()}`;
    if (this.resSpeedMultiplier) this.resSpeedMultiplier.textContent = `${multiplier}x`;
    if (this.resPaybackDays) this.resPaybackDays.textContent = `${paybackDays} Days`;
  }
}
