import { MAZE_GRID, gridToWorld } from './mazeData.js';

/**
 * Finds a realistic, obstacle-free corridor walking path between any two points in the 3D campus.
 * Uses Breadth-First Search (BFS) over the walkable grid cells (0 and stations), then simplifies
 * straight-line corridor segments for smooth, high-speed running.
 */
export function findCorridorPath(startPos, targetPos) {
  const rows = MAZE_GRID.length;
  const cols = MAZE_GRID[0].length;
  const halfR = Math.floor(rows / 2);
  const halfC = Math.floor(cols / 2);

  // Convert start and target world coords to grid cells
  let startR = THREE_clamp(Math.round(startPos.z / 6.0) + halfR, 0, rows - 1);
  let startC = THREE_clamp(Math.round(startPos.x / 6.0) + halfC, 0, cols - 1);

  let targetR = THREE_clamp(Math.round(targetPos.z / 6.0) + halfR, 0, rows - 1);
  let targetC = THREE_clamp(Math.round(targetPos.x / 6.0) + halfC, 0, cols - 1);

  // If start cell is inside a wall (e.g. edge case), find nearest walkable cell
  if (MAZE_GRID[startR][startC] === 1) {
    const nearest = findNearestWalkable(startR, startC, rows, cols);
    if (nearest) { startR = nearest.r; startC = nearest.c; }
  }

  // If target cell is inside a wall, find nearest walkable cell
  if (MAZE_GRID[targetR][targetC] === 1) {
    const nearest = findNearestWalkable(targetR, targetC, rows, cols);
    if (nearest) { targetR = nearest.r; targetC = nearest.c; }
  }

  if (startR === targetR && startC === targetC) {
    return [{ x: targetPos.x, z: targetPos.z }];
  }

  const queue = [[startR, startC, []]];
  const visited = new Set([`${startR},${startC}`]);
  const dirs = [
    [0, 1],   // Right
    [0, -1],  // Left
    [1, 0],   // Down
    [-1, 0]   // Up
  ];

  while (queue.length > 0) {
    const [r, c, path] = queue.shift();
    const newPath = [...path, { r, c }];

    if (r === targetR && c === targetC) {
      // Simplify straight-line corridor segments
      const simplified = [];
      for (let i = 0; i < newPath.length; i++) {
        if (i === 0) {
          // Keep current position if useful, or first waypoint
          continue;
        }
        if (i === newPath.length - 1) {
          simplified.push({ x: targetPos.x, z: targetPos.z });
        } else {
          const prev = newPath[i - 1];
          const curr = newPath[i];
          const next = newPath[i + 1];
          const d1r = curr.r - prev.r, d1c = curr.c - prev.c;
          const d2r = next.r - curr.r, d2c = next.c - curr.c;
          if (d1r !== d2r || d1c !== d2c) {
            const world = gridToWorld(curr.r, curr.c);
            simplified.push(world);
          }
        }
      }

      // Ensure final exact destination is at the end
      if (simplified.length === 0 || simplified[simplified.length - 1].x !== targetPos.x || simplified[simplified.length - 1].z !== targetPos.z) {
        simplified.push({ x: targetPos.x, z: targetPos.z });
      }

      return simplified;
    }

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
      const key = `${nr},${nc}`;
      if (visited.has(key)) continue;
      if (MAZE_GRID[nr][nc] === 1) continue; // Blocked by wall

      visited.add(key);
      queue.push([nr, nc, newPath]);
    }
  }

  // Fallback: direct target
  return [{ x: targetPos.x, z: targetPos.z }];
}

function THREE_clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function findNearestWalkable(r, c, rows, cols) {
  for (let dist = 1; dist < 5; dist++) {
    for (let dr = -dist; dr <= dist; dr++) {
      for (let dc = -dist; dc <= dist; dc++) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && MAZE_GRID[nr][nc] !== 1) {
          return { r: nr, c: nc };
        }
      }
    }
  }
  return null;
}
