import { MAZE_GRID, STATIONS } from '../maze/mazeData.js';
import { soundFX } from '../audio/soundFX.js';

export class AstrayMinimap {
  constructor(canvasId, player, stationsManager) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.player = player;
    this.stationsManager = stationsManager;

    this.rows = MAZE_GRID.length;
    this.cols = MAZE_GRID[0].length;
    this.size = this.canvas.width;
    this.cellSize = this.size / this.cols;

    this.bindClicks();
  }

  bindClicks() {
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const col = Math.floor(clickX / (rect.width / this.cols));
      const row = Math.floor(clickY / (rect.height / this.rows));

      const targetStation = STATIONS.find(s => Math.abs(s.row - row) <= 1 && Math.abs(s.col - col) <= 1);
      if (targetStation) {
        soundFX.playWarp();
        this.player.warpTo(targetStation.x, targetStation.z);
      }
    });
  }

  update() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.size, this.size);

    // 1. Draw Architectural Floor Plan (Cypherox palette)
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (MAZE_GRID[r][c] === 1) {
          ctx.fillStyle = '#e5e1da'; // Wall block (--border)
          ctx.fillRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
        } else {
          ctx.fillStyle = '#f5f3ef'; // Corridor floor (--bg-light)
          ctx.fillRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
        }
      }
    }

    // 2. Draw Station Beacons (Home, About, Services, Projects, Contact)
    STATIONS.forEach(s => {
      const sx = (s.col + 0.5) * this.cellSize;
      const sy = (s.row + 0.5) * this.cellSize;

      ctx.beginPath();
      ctx.arc(sx, sy, this.cellSize * 0.9, 0, Math.PI * 2);
      ctx.fillStyle = s.hexColor;
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 8px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(s.number, sx, sy);
    });

    // 3. Draw Player Position & Direction
    const halfCols = Math.floor(this.cols / 2);
    const halfRows = Math.floor(this.rows / 2);
    const playerCol = (this.player.position.x / 6.0) + halfCols;
    const playerRow = (this.player.position.z / 6.0) + halfRows;

    const px = playerCol * this.cellSize;
    const py = playerRow * this.cellSize;

    // Player indicator
    ctx.beginPath();
    ctx.arc(px, py, this.cellSize * 0.75, 0, Math.PI * 2);
    ctx.fillStyle = '#1a1a1a';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(px, py, this.cellSize * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = '#f26e65';
    ctx.fill();

    // Vision / Aim cone (Natural Radar FOV in Forward Direction)
    const coneLen = this.cellSize * 2.4;
    const leftAngle = this.player.cameraYaw - 0.38;
    const rightAngle = this.player.cameraYaw + 0.38;
    const aimDirX = Math.sin(this.player.cameraYaw);
    const aimDirY = Math.cos(this.player.cameraYaw);

    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + Math.sin(leftAngle) * coneLen, py + Math.cos(leftAngle) * coneLen);
    ctx.lineTo(px + Math.sin(rightAngle) * coneLen, py + Math.cos(rightAngle) * coneLen);
    ctx.closePath();
    ctx.fillStyle = 'rgba(242, 110, 101, 0.22)';
    ctx.fill();

    // Aim centerline
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + aimDirX * coneLen * 0.9, py + aimDirY * coneLen * 0.9);
    ctx.strokeStyle = '#f26e65';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Velocity movement vector when running
    const vx = this.player.velocity.x;
    const vz = this.player.velocity.z;
    const speed = Math.sqrt(vx * vx + vz * vz);
    if (speed > 0.4) {
      const dirX = (vx / speed) * this.cellSize * 1.6;
      const dirY = (vz / speed) * this.cellSize * 1.6;

      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px + dirX, py + dirY);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}
