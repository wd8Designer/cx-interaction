import { WorldScene } from './three/scene.js';
import { PlayerOrb } from './three/player.js';
import { StationsWorldManager } from './three/stations.js';
import { ParticleNebula } from './three/particles.js';
import { AstrayMinimap } from './components/minimap.js';
import { StationTerminalHUD } from './components/terminalHud.js';
import { UrgencyHUDController } from './components/urgencyHud.js';
import { BookingModal } from './components/bookingModal.js';
import { WayfindingSystem } from './three/wayfinding.js';
import { GalleryArtManager } from './three/galleryArt.js';
import { DirectionBoardsManager } from './three/directionBoards.js';
import { BacklitSignageManager } from './three/backlitSignage.js';
import { STATIONS } from './maze/mazeData.js';

class NexusMazeApplication {
  constructor() {
    this.canvasContainer = document.getElementById('canvas-container');
    this.lastTime = performance.now();

    this.initThree();
    this.initComponents();
    this.initCursor();

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    // Listen to warpToStation event for direct page navigation
    window.addEventListener('warpToStation', (e) => {
      const station = e.detail.station;
      if (station) {
        const destX = station.frontX !== undefined ? station.frontX : station.x;
        const destZ = station.frontZ !== undefined ? station.frontZ : (station.z + 4.5);
        this.player.warpTo(destX, destZ, station.frontHeading ?? Math.PI);
      }
    });

    // When reaching/docking at a section, smoothly move in front of section once
    window.addEventListener('stationDocked', (e) => {
      const station = e.detail.station;
      if (station) {
        this.player.dockAtSection(station);
      }
    });

    // Initial dock at Sector 01 (Home) so first-time visitors immediately see the agency overview in front
    setTimeout(() => {
      const coreStation = STATIONS.find(s => s.id === 'S1');
      if (coreStation) {
        this.player.dockAtSection(coreStation);
        window.dispatchEvent(new CustomEvent('stationDocked', { detail: { station: coreStation } }));
      }
    }, 600);
  }

  initThree() {
    // 1. World Scene with 3D Maze Walls & Lighting
    this.world = new WorldScene(this.canvasContainer);

    // 2. Player Orb with Wall Collision Physics & Astray Follow Camera
    this.player = new PlayerOrb(this.world.scene, this.world.camera);

    // 3. 5 Spatial Chamber Stations in 3D Space
    this.stationsManager = new StationsWorldManager(this.world.scene);

    // 4. Ambient Cyber Nebula Particles
    this.particles = new ParticleNebula(this.world.scene);

    // 5. 3D Wayfinding Directional Chevrons
    this.wayfinding = new WayfindingSystem(this.world.scene);

    // 6. Gallery Service Artworks & Picture Lights on Corridor Walls
    this.galleryArt = new GalleryArtManager(this.world.scene);

    // 7. Architectural Corridor Wayfinding Direction Boards on Walls
    this.directionBoards = new DirectionBoardsManager(this.world.scene);

    // 8. Backlit Cypherox Logo Signage with Ambient Coral Wall Halo
    this.backlitSignage = new BacklitSignageManager(this.world.scene);
  }

  initComponents() {
    // Top Urgency HUD, Fast-Travel 1-5, Audio toggle, and Social Proof Toasts
    this.urgencyHud = new UrgencyHUDController(this.player);

    // Astray Real-Time 2D Radar Minimap
    this.minimap = new AstrayMinimap('minimap-canvas', this.player, this.stationsManager);

    // Holographic Station Docking Terminal HUD
    this.stationHud = new StationTerminalHUD();

    // Priority CRO Cohort Booking Funnel Modal
    this.bookingModal = new BookingModal();
  }

  initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    window.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    document.querySelectorAll('button, a, input, range, .hud-key, #minimap-canvas').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '36px';
        cursor.style.height = '36px';
        cursor.style.backgroundColor = 'rgba(242, 110, 101, 0.18)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.backgroundColor = 'transparent';
      });
    });
  }

  animate(now) {
    const delta = Math.min((now - this.lastTime) * 0.001, 0.1);
    this.lastTime = now;

    // Update Three.js world & camera mouse parallax
    this.world.update(delta);

    // Update Player Orb with collision physics against maze
    this.player.update(delta, this.world.mouse);

    // Update Stations & docking proximity detection
    this.stationsManager.update(this.player.position, delta);

    // Update Ambient Particles
    this.particles.update(delta);

    // Update 3D Directional Floor Chevrons & HUD Compass
    this.wayfinding.update(this.player.position);

    // Render 3D Scene
    this.world.render();

    // Update Astray 2D Minimap
    this.minimap.update();

    requestAnimationFrame(this.animate);
  }
}

// Boot application
window.addEventListener('DOMContentLoaded', () => {
  new NexusMazeApplication();
});
