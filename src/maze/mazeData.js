// Maze layout configuration for the 3D AI Agency Campus (Cypherox UK)
// 0 = Corridor, 1 = Wall, S1..S5 = Chamber Stations

export const CELL_SIZE = 6.0; // World units per cell
export const WALL_HEIGHT = 4.0; // Realistic architectural wall height

// 21 x 21 Grid Map with spacious open plazas for all 5 pavilions connected by gallery corridors
export const MAZE_GRID = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 'S2', 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 'S3', 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 'S1', 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 'S4', 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 'S5', 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Helper to convert grid row/col to world 3D coordinates (centered at origin)
export function gridToWorld(row, col) {
  const rows = MAZE_GRID.length;
  const cols = MAZE_GRID[0].length;
  const x = (col - Math.floor(cols / 2)) * CELL_SIZE;
  const z = (row - Math.floor(rows / 2)) * CELL_SIZE;
  return { x, z };
}

// 5 Core Agency Pages with Cypherox brand colors
export const STATIONS = [
  {
    id: 'S1',
    number: '1',
    pageName: 'Home',
    name: 'Pavilion 01: Home [Cypherox UK]',
    shortName: 'Home',
    row: 10,
    col: 10,
    color: 0xf26e65,        // Cypherox Coral Signature
    hexColor: '#f26e65',
    desc: 'We Build the Technology Your Business Depends On (11+ Yrs, 130+ Engineers)'
  },
  {
    id: 'S2',
    number: '2',
    pageName: 'About & Team',
    name: 'Pavilion 02: About & Team [Cypherox Roster]',
    shortName: 'About',
    row: 3,
    col: 3,
    color: 0xf5918a,        // Cypherox Light Coral
    hexColor: '#f5918a',
    desc: 'Four Areas. One Partner. Dedicated Developers: Hardik, Krupa, Akash'
  },
  {
    id: 'S3',
    number: '3',
    pageName: 'Services',
    name: 'Pavilion 03: Services [Production AI & Engineering]',
    shortName: 'Services',
    row: 3,
    col: 17,
    color: 0xd94f47,        // Cypherox Deep Coral
    hexColor: '#d94f47',
    desc: 'Production AI, Custom Software, Cloud DevOps & Data Intelligence'
  },
  {
    id: 'S4',
    number: '4',
    pageName: 'Projects & ROI',
    name: 'Pavilion 04: Projects & ROI [1,500+ Delivered]',
    shortName: 'Projects',
    row: 17,
    col: 3,
    color: 0xf59e0b,        // Cypherox Accent Gold
    hexColor: '#f59e0b',
    desc: 'Turn Technology into a Competitive Advantage + Live ROI Calculator'
  },
  {
    id: 'S5',
    number: '5',
    pageName: 'Contact',
    name: 'Pavilion 05: Contact [London, United Kingdom]',
    shortName: 'Contact',
    row: 17,
    col: 17,
    color: 0xf26e65,        // Cypherox Primary Coral
    hexColor: '#f26e65',
    desc: 'info@cypherox.uk | +44 7453 420874 | Direct Senior Engineer Consultation'
  }
];

STATIONS.forEach(s => {
  const pos = gridToWorld(s.row, s.col);
  s.x = pos.x;
  s.z = pos.z;
  // Front viewing spot facing installation
  const zOffset = s.id === 'S1' ? 4.8 : 4.5;
  s.frontX = s.x;
  s.frontZ = s.z + zOffset;
  s.frontHeading = Math.PI; // Faces North towards installation
});
