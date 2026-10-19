import { MAZE_GRID, CELL_SIZE, gridToWorld } from './mazeData.js';
import { soundFX } from '../audio/soundFX.js';

export class MazeCollisionSystem {
  constructor() {
    this.walls = [];
    this.initWalls();
    this.lastBumpTime = 0;
  }

  initWalls() {
    const rows = MAZE_GRID.length;
    const cols = MAZE_GRID[0].length;
    const halfCell = CELL_SIZE / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (MAZE_GRID[r][c] === 1) {
          const pos = gridToWorld(r, c);
          this.walls.push({
            minX: pos.x - halfCell,
            maxX: pos.x + halfCell,
            minZ: pos.z - halfCell,
            maxZ: pos.z + halfCell,
            centerX: pos.x,
            centerZ: pos.z
          });
        }
      }
    }
  }

  // Resolves player sphere vs all neighboring walls with sliding physics & inside-box ejection
  resolveCollision(position, velocity, radius) {
    let anyCollided = false;

    // Run 3 solver passes to cleanly resolve corners, wedges, and tight corridors
    for (let iter = 0; iter < 3; iter++) {
      let iterCollided = false;

      // Filter to only walls near player (broadphase)
      for (let i = 0; i < this.walls.length; i++) {
        const wall = this.walls[i];

        if (
          position.x + radius < wall.minX ||
          position.x - radius > wall.maxX ||
          position.z + radius < wall.minZ ||
          position.z - radius > wall.maxZ
        ) {
          continue;
        }

        // 1. Deep Penetration Fail-Safe: Center is completely inside the wall AABB
        if (
          position.x >= wall.minX &&
          position.x <= wall.maxX &&
          position.z >= wall.minZ &&
          position.z <= wall.maxZ
        ) {
          const dMinX = position.x - wall.minX; // distance to -X face
          const dMaxX = wall.maxX - position.x; // distance to +X face
          const dMinZ = position.z - wall.minZ; // distance to -Z face
          const dMaxZ = wall.maxZ - position.z; // distance to +Z face

          const minDist = Math.min(dMinX, dMaxX, dMinZ, dMaxZ);
          const pushMargin = 0.005;

          if (minDist === dMinX) {
            position.x = wall.minX - radius - pushMargin;
            if (velocity.x > 0) velocity.x = 0;
          } else if (minDist === dMaxX) {
            position.x = wall.maxX + radius + pushMargin;
            if (velocity.x < 0) velocity.x = 0;
          } else if (minDist === dMinZ) {
            position.z = wall.minZ - radius - pushMargin;
            if (velocity.z > 0) velocity.z = 0;
          } else {
            position.z = wall.maxZ + radius + pushMargin;
            if (velocity.z < 0) velocity.z = 0;
          }

          iterCollided = true;
          anyCollided = true;
          continue;
        }

        // 2. Standard Sphere vs AABB collision (center is outside box, but surface intersects)
        const closestX = Math.max(wall.minX, Math.min(position.x, wall.maxX));
        const closestZ = Math.max(wall.minZ, Math.min(position.z, wall.maxZ));

        const dx = position.x - closestX;
        const dz = position.z - closestZ;
        const distSq = dx * dx + dz * dz;

        if (distSq < radius * radius && distSq > 0.000001) {
          const dist = Math.sqrt(distSq);
          const overlap = radius - dist + 0.002;

          const nx = dx / dist;
          const nz = dz / dist;

          // Push sphere out of wall
          position.x += nx * overlap;
          position.z += nz * overlap;

          // Cancel / damp velocity directed into the wall
          const dot = velocity.x * nx + velocity.z * nz;
          if (dot < 0) {
            velocity.x -= dot * nx * 1.05;
            velocity.z -= dot * nz * 1.05;
          }

          iterCollided = true;
          anyCollided = true;
        }
      }

      if (!iterCollided) break; // Settled early
    }

    // 3. Ultimate Outer Campus Perimeter Clamp
    const boundaryLimit = 56.4;
    if (position.x < -boundaryLimit) { position.x = -boundaryLimit; if (velocity.x < 0) velocity.x = 0; anyCollided = true; }
    if (position.x > boundaryLimit) { position.x = boundaryLimit; if (velocity.x > 0) velocity.x = 0; anyCollided = true; }
    if (position.z < -boundaryLimit) { position.z = -boundaryLimit; if (velocity.z < 0) velocity.z = 0; anyCollided = true; }
    if (position.z > boundaryLimit) { position.z = boundaryLimit; if (velocity.z > 0) velocity.z = 0; anyCollided = true; }

    if (anyCollided) {
      const speed = Math.hypot(velocity.x, velocity.z);
      if (speed > 2.5 && performance.now() - this.lastBumpTime > 220) {
        this.lastBumpTime = performance.now();
        soundFX.playWallBump();
      }
    }

    return anyCollided;
  }
}
