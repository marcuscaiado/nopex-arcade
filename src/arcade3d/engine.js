import * as THREE from 'three';
import { ArcadePlayer } from './player.js';
import { buildArcadeWorld } from './world.js';
import { ArcadeInteraction } from './interaction.js';
import { ArcadePlayOverlay } from './play-overlay.js';

export class Arcade3DEngine {
  constructor(containerEl, gamesManifest) {
    this.container = containerEl;
    this.gamesManifest = gamesManifest;

    this.isRunning = false;
    this.isZoomingIn = false;
    this.zoomTarget = null;
    this.zoomProgress = 0;

    this.initScene();
    this.initWorld();
    this.initPlayer();
    this.initInteraction();
    this.initOverlay();
    this.initMobileControls();

    window.addEventListener('resize', () => this.onResize());
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d122b);
    this.scene.fog = new THREE.Fog(0x0d122b, 40, 95);

    const width = this.container.clientWidth || window.innerWidth || 1280;
    const height = this.container.clientHeight || window.innerHeight || 720;

    this.camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
    this.camera.position.set(0, 4.2, 13.5);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.container.appendChild(this.renderer.domElement);
    this.clock = new THREE.Clock();
  }

  initWorld() {
    this.world = buildArcadeWorld(this.scene, this.gamesManifest);
  }

  initPlayer() {
    this.player = new ArcadePlayer(this.scene);
  }

  initInteraction() {
    this.interaction = new ArcadeInteraction(this.world.cabinets, (game, cabinet) => {
      this.launchGame(game, cabinet);
    });
  }

  initOverlay() {
    this.overlay = new ArcadePlayOverlay(() => {
      this.isZoomingIn = false;
      this.zoomTarget = null;
      this.zoomProgress = 0;
    });
  }

  launchGame(game, cabinet) {
    this.isZoomingIn = true;
    this.zoomTarget = cabinet;
    this.zoomProgress = 0;

    // Smooth camera zoom towards cabinet screen before opening overlay
    setTimeout(() => {
      this.overlay.open(game);
    }, 550);
  }

  teleportToCabinet(gameId) {
    const cab = this.world.cabinets.find(c => c.game.id === gameId);
    if (!cab) return;
    this.player.x = cab.standSpot.x;
    this.player.z = cab.standSpot.z;
    this.player.rotation = cab.rotationY + Math.PI;
    this.player.targetRotation = this.player.rotation;
  }

  initMobileControls() {
    const joystickArea = document.getElementById('arcade-joystick');
    const stickThumb = document.getElementById('joystick-thumb');
    if (!joystickArea || !stickThumb) return;

    let touchId = null;
    let startX = 0;
    let startY = 0;
    const maxRadius = 45;

    const handleTouchStart = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const rect = joystickArea.getBoundingClientRect();
        if (t.clientX >= rect.left && t.clientX <= rect.right && t.clientY >= rect.top && t.clientY <= rect.bottom) {
          touchId = t.identifier;
          startX = rect.left + rect.width / 2;
          startY = rect.top + rect.height / 2;
          break;
        }
      }
    };

    const handleTouchMove = (e) => {
      if (touchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === touchId) {
          let dx = t.clientX - startX;
          let dy = t.clientY - startY;
          const dist = Math.hypot(dx, dy);

          if (dist > maxRadius) {
            dx = (dx / dist) * maxRadius;
            dy = (dy / dist) * maxRadius;
          }

          stickThumb.style.transform = `translate(${dx}px, ${dy}px)`;
          this.player.setJoystickVector(dx / maxRadius, dy / maxRadius);
          break;
        }
      }
    };

    const handleTouchEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchId) {
          touchId = null;
          stickThumb.style.transform = `translate(0px, 0px)`;
          this.player.setJoystickVector(0, 0);
          break;
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();
    this.onResize();
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    // 1. Update World & Cabinets
    this.world.update(time);

    // 2. Update Player if not currently in game overlay
    if (!this.overlay.isOpen) {
      this.player.update(delta, this.world.roomBounds, this.world.cabinets);
      this.interaction.update(this.player);
    }

    // 3. Camera Follow & Smooth Zoom
    if (this.isZoomingIn && this.zoomTarget) {
      const cab = this.zoomTarget;
      const screenWorldPos = new THREE.Vector3(0, 2.15, 0.51)
        .applyEuler(new THREE.Euler(0, cab.rotationY, 0))
        .add(new THREE.Vector3(cab.position.x, 0, cab.position.z));

      const targetCamPos = new THREE.Vector3(
        cab.standSpot.x * 0.35 + screenWorldPos.x * 0.65,
        2.2,
        cab.standSpot.z * 0.35 + screenWorldPos.z * 0.65
      );

      this.camera.position.lerp(targetCamPos, 0.14);
      this.camera.lookAt(screenWorldPos);
    } else {
      // Third-person smooth follow (Fixed height steadycam: 100% fluid, zero vertical shake)
      const targetCamX = this.player.x;
      const targetCamY = 4.0;
      const targetCamZ = this.player.z + 6.2;

      this.camera.position.x += (targetCamX - this.camera.position.x) * 0.15;
      this.camera.position.y += (targetCamY - this.camera.position.y) * 0.15;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.15;

      // Look slightly forward into the arcade hall at steady eye-level
      const lookTarget = new THREE.Vector3(this.player.x, 1.4, this.player.z - 1.2);
      this.camera.lookAt(lookTarget);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
