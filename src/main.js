import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { RobotModel } from './robot/RobotModel.js';
import { Kinematics } from './robot/Kinematics.js';
import { GripperController } from './robot/GripperController.js';
import { WorkcellScene } from './scene/WorkcellScene.js';
import { ToolpathVisualizer } from './scene/ToolpathVisualizer.js';
import { AudioEngine } from './audio/AudioEngine.js';
import { ProgramSequencer } from './app/ProgramSequencer.js';
import { TelemetryManager } from './app/TelemetryManager.js';
import { BallInterceptor } from './game/BallInterceptor.js';

class RobotApp {
  constructor() {
    this.isEStopped = false;
    this.activeCamPreset = 'iso';
    this.isDraggingIKGizmo = false;
    this.isRightClickDragging = false;
    this.ikTargetPos = new THREE.Vector3(0.4, 0.5, 0.0);
    this.ikCurrentPos = new THREE.Vector3(0.4, 0.5, 0.0);
    this.ikVelocity = new THREE.Vector3(0, 0, 0);

    this.initThree();
    this.initSystems();
    this.initUI();
    this.initEventListeners();
    this.animate();
  }

  initThree() {
    this.container = document.getElementById('canvas-container');

    // 1. Scene (Default Clean Studio Light Theme)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf1f5f9);
    this.scene.fog = new THREE.FogExp2(0xf1f5f9, 0.05);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    this.camera.position.set(1.5, 1.2, 1.5);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.02; // Prevent camera going below floor
    this.controls.minDistance = 0.4;
    this.controls.maxDistance = 5.0;
    this.controls.target.set(0, 0.45, 0);

    // Clock
    this.clock = new THREE.Clock();
  }

  initSystems() {
    // Audio Synthesizer
    this.audio = new AudioEngine();

    // Workcell 3D Environment
    this.workcell = new WorkcellScene(this.scene);

    // 6-Axis Robot Arm Model (Default Theme: Fanuc Yellow)
    this.robot = new RobotModel(this.scene);

    // Kinematics (FK / IK Engine)
    this.kinematics = new Kinematics(this.robot);

    // Gripper & Payload Controller
    this.gripper = new GripperController(this.robot, this.workcell, this.audio);

    // TCP Ribbon Trail & Gizmo
    this.visualizer = new ToolpathVisualizer(this.scene);

    // Program Sequencer (Teach Pendant & Auto Workcell Cycle)
    this.sequencer = new ProgramSequencer(this.robot, this.kinematics, this.gripper, this.audio);

    // Real-Time Telemetry Manager
    this.telemetry = new TelemetryManager(this.robot, this.kinematics);

    // Autonomous Ball Dropper & Interceptor Game AI
    this.ballInterceptor = new BallInterceptor(this.scene, this.robot, this.kinematics, this.audio);

    // Initial Environment Theme (Clean Studio Daylight)
    this.currentEnvTheme = 'light_studio';
    this.setEnvironmentTheme('light_studio');

    // Set initial ready pose
    this.kinematics.moveToPreset('ready', 1.0);
  }

  initUI() {
    this.bindSettingsDrawer();
    this.bindQuickActions();
    this.bindBallInterceptorUI();
    this.bindTelescopeControls();
    this.buildJointSliders();
    this.bindModeSwitcher();
    this.bindPresets();
    this.bindPendantControls();
    this.bindToolControls();
    this.bindCameraButtons();
    this.bindDisplayToggles();
    this.bindThemeSelector();
    this.bindEStop();
  }

  bindSettingsDrawer() {
    const drawer = document.getElementById('settings-drawer');
    const openBtn = document.getElementById('btn-open-settings');
    const closeBtn = document.getElementById('btn-close-settings');

    if (openBtn && drawer) {
      openBtn.addEventListener('click', () => {
        drawer.classList.toggle('hidden');
        this.audio.playClick();
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.add('hidden');
        this.audio.playClick();
      });
    }

    // Accordion expand / collapse logic
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        if (item) {
          item.classList.toggle('open');
          this.audio.playClick();
        }
      });
    });
  }

  bindQuickActions() {
    const quickOrbit = document.getElementById('btn-quick-orbit');
    const quickGrip = document.getElementById('btn-quick-gripper');
    const quickTele = document.getElementById('btn-quick-telescope');
    const quickTheme = document.getElementById('btn-quick-theme');

    if (quickTheme) {
      quickTheme.addEventListener('click', () => {
        const nextTheme = this.currentEnvTheme === 'light_studio' || this.currentEnvTheme === 'cleanroom_lab'
          ? 'dark_cyber'
          : 'light_studio';
        this.setEnvironmentTheme(nextTheme);
        this.audio.playClick();
      });
    }

    if (quickOrbit) {
      quickOrbit.addEventListener('click', () => {
        this.controls.autoRotate = !this.controls.autoRotate;
        this.controls.autoRotateSpeed = 2.0;
        quickOrbit.classList.toggle('active', this.controls.autoRotate);
        this.audio.playClick();
      });
    }

    if (quickGrip) {
      quickGrip.addEventListener('click', () => {
        document.getElementById('btn-toggle-gripper')?.click();
      });
    }

    if (quickTele) {
      quickTele.addEventListener('click', () => {
        document.getElementById('btn-step-telescope')?.click();
      });
    }
  }

  bindBallInterceptorUI() {
    const quickToggle = document.getElementById('btn-toggle-ball-mode');
    const quickText = document.getElementById('ball-mode-text');
    const drawerToggle = document.getElementById('btn-drawer-toggle-ball-ai');
    const dropBtn = document.getElementById('btn-drawer-drop-ball');
    const spawnSlider = document.getElementById('ball-spawn-rate-slider');
    const spawnVal = document.getElementById('ball-spawn-rate-val');
    const badge = document.getElementById('ball-ai-status-badge');

    const updateStateUI = () => {
      const active = this.ballInterceptor.enabled;
      if (quickToggle) quickToggle.classList.toggle('active', active);
      if (quickText) quickText.textContent = active ? 'Catch AI: ON' : 'Catch AI: OFF';
      if (badge) {
        badge.textContent = active ? 'AUTO ACTIVE' : 'MANUAL';
        badge.style.color = active ? 'var(--accent-mint)' : 'var(--text-muted)';
        badge.style.borderColor = active ? 'var(--border-active)' : 'var(--border-subtle)';
      }
    };

    if (quickToggle) {
      quickToggle.addEventListener('click', () => {
        this.ballInterceptor.toggle();
        updateStateUI();
        this.audio.playClick();
      });
    }

    if (drawerToggle) {
      drawerToggle.addEventListener('click', () => {
        this.ballInterceptor.toggle();
        updateStateUI();
        this.audio.playClick();
      });
    }

    if (dropBtn) {
      dropBtn.addEventListener('click', () => {
        this.ballInterceptor.spawnBall(true);
        this.audio.playPuff();
      });
    }

    if (spawnSlider) {
      spawnSlider.addEventListener('input', (e) => {
        const flockCount = parseInt(e.target.value, 10);
        this.ballInterceptor.targetFlockSize = flockCount;
        if (spawnVal) spawnVal.textContent = `${flockCount} BOIDS`;
      });
    }
  }

  bindTelescopeControls() {
    const slider = document.getElementById('telescope-slider');
    const stepBtn = document.getElementById('btn-step-telescope');
    const toggleBtn = document.getElementById('btn-toggle-telescope');
    const valPill = document.getElementById('tele-extension-val');
    const quickTele = document.getElementById('quick-tele-label');

    const updateTelescopeUI = (ratio) => {
      const pct = Math.round(ratio * 100);
      const length = (0.38 + ratio * 0.28).toFixed(2);
      if (valPill) valPill.textContent = `${pct}% (${length}m)`;
      if (slider) slider.value = ratio;
      if (quickTele) quickTele.textContent = `📏 Tele: ${pct}%`;
    };

    if (slider) {
      slider.addEventListener('input', (e) => {
        const ratio = parseFloat(e.target.value);
        this.robot.setTelescope(ratio);
        this.robot.targetTelescopeExtension = ratio;
        updateTelescopeUI(ratio);
      });
    }

    if (stepBtn) {
      stepBtn.addEventListener('click', () => {
        const current = this.robot.targetTelescopeExtension || this.robot.getTelescope();
        let next = 0.0;
        if (current < 0.25) next = 0.5;
        else if (current < 0.75) next = 1.0;
        else next = 0.0;
        this.robot.targetTelescopeExtension = next;
        this.audio.playPuff();
        updateTelescopeUI(next);
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = this.robot.targetTelescopeExtension || this.robot.getTelescope();
        const next = current > 0.5 ? 0.0 : 1.0;
        this.robot.targetTelescopeExtension = next;
        this.audio.playPuff();
        updateTelescopeUI(next);
      });
    }
  }

  buildJointSliders() {
    const container = document.getElementById('joints-container');
    if (!container) return;
    container.innerHTML = '';

    const jointLabels = [
      { name: 'J1', desc: 'Base Yaw' },
      { name: 'J2', desc: 'Shoulder Pitch' },
      { name: 'J3', desc: 'Elbow Pitch' },
      { name: 'J4', desc: 'Forearm Roll' },
      { name: 'J5', desc: 'Wrist Pitch' },
      { name: 'J6', desc: 'Tool Roll' }
    ];

    this.jointSliderEls = [];

    jointLabels.forEach((info, idx) => {
      const limit = this.robot.limits[idx];
      const card = document.createElement('div');
      card.className = 'joint-card';

      card.innerHTML = `
        <div class="joint-header">
          <div>
            <span class="joint-tag">${info.name}</span>
            <span class="joint-desc">${info.desc}</span>
          </div>
          <span class="joint-val-display" id="j-val-${idx}">0.0°</span>
        </div>
        <div class="joint-slider-row">
          <button class="jog-step-btn" data-joint="${idx}" data-dir="-1">-</button>
          <input type="range" id="j-slider-${idx}" min="${limit.min}" max="${limit.max}" step="0.5" value="0" />
          <button class="jog-step-btn" data-joint="${idx}" data-dir="1">+</button>
        </div>
      `;

      container.appendChild(card);

      const slider = card.querySelector(`#j-slider-${idx}`);
      slider.addEventListener('input', (e) => {
        if (this.isEStopped) return;
        const deg = parseFloat(e.target.value);
        this.robot.setJointAngleDeg(idx, deg);
        this.updateJointUI();
      });

      this.jointSliderEls.push(slider);
    });

    // Jog step buttons (+ / - 5 degrees)
    container.querySelectorAll('.jog-step-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.isEStopped) return;
        const idx = parseInt(e.target.dataset.joint);
        const dir = parseInt(e.target.dataset.dir);
        const currentDeg = THREE.MathUtils.radToDeg(this.robot.angles[idx]);
        const newDeg = currentDeg + dir * 5;
        this.robot.setJointAngleDeg(idx, newDeg);
        this.updateJointUI();
        this.audio.playClick();
      });
    });

    // Reset pose button
    document.getElementById('btn-reset-pose')?.addEventListener('click', () => {
      if (this.isEStopped) return;
      this.kinematics.moveToPreset('home', 0.8, () => this.updateJointUI());
      this.audio.playClick();
    });
  }

  updateJointUI() {
    const degs = this.robot.getJointAnglesDeg();
    degs.forEach((deg, idx) => {
      const valEl = document.getElementById(`j-val-${idx}`);
      if (valEl) valEl.textContent = `${deg.toFixed(1)}°`;
      if (this.jointSliderEls && this.jointSliderEls[idx]) this.jointSliderEls[idx].value = deg;
    });

    // Update TCP Coordinates display
    const tcp = this.kinematics.getTCPPose();
    const xEl = document.getElementById('tcp-x');
    if (xEl) xEl.textContent = (tcp.x >= 0 ? '+' : '') + tcp.x.toFixed(3);
    const yEl = document.getElementById('tcp-y');
    if (yEl) yEl.textContent = (tcp.y >= 0 ? '+' : '') + tcp.y.toFixed(3);
    const zEl = document.getElementById('tcp-z');
    if (zEl) zEl.textContent = (tcp.z >= 0 ? '+' : '') + tcp.z.toFixed(3);
    const rollEl = document.getElementById('tcp-roll');
    if (rollEl) rollEl.textContent = `${tcp.roll.toFixed(1)}°`;
    const pitchEl = document.getElementById('tcp-pitch');
    if (pitchEl) pitchEl.textContent = `${tcp.pitch.toFixed(1)}°`;
    const yawEl = document.getElementById('tcp-yaw');
    if (yawEl) yawEl.textContent = `${tcp.yaw.toFixed(1)}°`;

    // Update Telescope display
    const ext = this.robot.getTelescope();
    const teleVal = document.getElementById('tele-extension-val');
    if (teleVal) {
      teleVal.textContent = `${Math.round(ext * 100)}% (${(0.38 + ext * 0.28).toFixed(2)}m)`;
    }
  }

  bindModeSwitcher() {
    const tabs = document.querySelectorAll('.mode-tab');
    const modeBadge = document.getElementById('current-mode-badge');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (this.isEStopped) return;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const mode = tab.dataset.mode;
        this.sequencer.setMode(mode);

        if (modeBadge) {
          modeBadge.textContent = mode.toUpperCase() + (mode === 'fk' ? ' MANUAL' : mode === 'ik' ? ' TARGET' : ' PENDANT');
        }

        // Toggle 3D IK Target Gizmo
        this.visualizer.setTargetGizmoVisible(mode === 'ik');
        this.audio.playClick();
      });
    });

    // IK Cartesian Sliders
    const ikX = document.getElementById('ik-x-slider');
    const ikY = document.getElementById('ik-y-slider');
    const ikZ = document.getElementById('ik-z-slider');
    const ikPitch = document.getElementById('ik-pitch-slider');

    const updateIKFromSliders = () => {
      if (this.isEStopped) return;
      const x = parseFloat(ikX?.value || 0.4);
      const y = parseFloat(ikY?.value || 0.5);
      const z = parseFloat(ikZ?.value || 0.0);

      const xVal = document.getElementById('ik-x-val');
      const yVal = document.getElementById('ik-y-val');
      const zVal = document.getElementById('ik-z-val');
      if (xVal) xVal.textContent = `${x.toFixed(2)}m`;
      if (yVal) yVal.textContent = `${y.toFixed(2)}m`;
      if (zVal) zVal.textContent = `${z.toFixed(2)}m`;

      this.visualizer.setTargetPosition(x, y, z);
      this.kinematics.solveIK(new THREE.Vector3(x, y, z));
      this.updateJointUI();
    };

    [ikX, ikY, ikZ, ikPitch].forEach(sl => sl?.addEventListener('input', updateIKFromSliders));
  }

  bindPresets() {
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isEStopped) return;
        const preset = btn.dataset.preset;
        this.kinematics.moveToPreset(preset, 1.0, () => this.updateJointUI());
        this.audio.playClick();
      });
    });
  }

  bindPendantControls() {
    const listEl = document.getElementById('waypoints-list');
    const playBtn = document.getElementById('btn-play-routine');
    const loopBtn = document.getElementById('btn-loop-routine');
    const speedSlider = document.getElementById('routine-speed-slider');
    const speedVal = document.getElementById('routine-speed-val');
    const countBadge = document.getElementById('pendant-count-badge');

    document.getElementById('btn-record-waypoint')?.addEventListener('click', () => {
      if (this.isEStopped) return;
      this.sequencer.recordCurrentPose();
    });

    document.getElementById('btn-clear-waypoints')?.addEventListener('click', () => {
      this.sequencer.clearWaypoints();
      this.audio.playClick();
    });

    document.getElementById('btn-demo-routine')?.addEventListener('click', () => {
      this.sequencer.loadDemoRoutine();
    });

    playBtn?.addEventListener('click', () => {
      if (this.isEStopped) return;
      this.sequencer.togglePlayRoutine();
      this.audio.playClick();
      this.updatePlaybackUI();
    });

    document.getElementById('btn-step-routine')?.addEventListener('click', () => {
      if (this.isEStopped) return;
      this.sequencer.stepForward();
      this.audio.playClick();
    });

    loopBtn?.addEventListener('click', () => {
      this.sequencer.isLooping = !this.sequencer.isLooping;
      loopBtn.classList.toggle('active', this.sequencer.isLooping);
      this.audio.playClick();
    });

    speedSlider?.addEventListener('input', (e) => {
      const speed = parseFloat(e.target.value);
      this.sequencer.playbackSpeed = speed;
      if (speedVal) speedVal.textContent = `${speed.toFixed(1)}x`;
    });

    // Sequencer callbacks
    this.sequencer.onWaypointsChanged = (waypoints) => {
      if (countBadge) countBadge.textContent = `${waypoints.length} POSES`;

      if (!listEl) return;
      if (waypoints.length === 0) {
        listEl.innerHTML = `
          <div class="empty-state">
            <span>No waypoints recorded. Jog the arm and click <strong>Record Pose</strong> or load demo.</span>
          </div>
        `;
        return;
      }

      listEl.innerHTML = '';
      waypoints.forEach((wp, idx) => {
        const item = document.createElement('div');
        item.className = `waypoint-item ${idx === this.sequencer.currentStepIndex ? 'active-step' : ''}`;
        item.innerHTML = `
          <div class="wp-meta">
            <span class="wp-idx">#${idx + 1}</span>
            <span class="wp-coords">${wp.label} [${wp.pose.x.toFixed(2)}, ${wp.pose.y.toFixed(2)}, ${wp.pose.z.toFixed(2)}]</span>
          </div>
          <button class="wp-del-btn" data-del="${idx}">✕</button>
        `;

        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('wp-del-btn')) return;
          this.kinematics.interpolateTo(wp.angles, 1.0, () => this.updateJointUI());
          this.sequencer.currentStepIndex = idx;
          this.renderWaypointActiveState();
        });

        item.querySelector('.wp-del-btn').addEventListener('click', () => {
          this.sequencer.deleteWaypoint(idx);
        });

        listEl.appendChild(item);
      });
    };

    this.sequencer.onStepChanged = () => {
      this.renderWaypointActiveState();
      this.updateJointUI();
    };
  }

  renderWaypointActiveState() {
    const items = document.querySelectorAll('.waypoint-item');
    items.forEach((item, idx) => {
      item.classList.toggle('active-step', idx === this.sequencer.currentStepIndex);
    });
  }

  updatePlaybackUI() {
    const playBtn = document.getElementById('btn-play-routine');
    const playText = document.getElementById('play-text');
    if (!playBtn) return;
    if (this.sequencer.isPlaying) {
      playBtn.classList.add('playing');
      if (playText) playText.textContent = 'PAUSE PROGRAM';
    } else {
      playBtn.classList.remove('playing');
      if (playText) playText.textContent = 'PLAY PROGRAM';
    }
  }

  bindToolControls() {
    const gripBtn = document.getElementById('tool-gripper-btn');
    const weldBtn = document.getElementById('tool-welder-btn');
    const toggleGripBtn = document.getElementById('btn-toggle-gripper');
    const gripStateIcon = document.getElementById('gripper-state-icon');
    const gripStateLabel = document.getElementById('gripper-state-label');
    const quickGripLabel = document.getElementById('quick-grip-label');

    gripBtn?.addEventListener('click', () => {
      this.robot.setTool('gripper');
      gripBtn.classList.add('active');
      weldBtn?.classList.remove('active');
      this.audio.playClick();
    });

    weldBtn?.addEventListener('click', () => {
      this.robot.setTool('welder');
      weldBtn.classList.add('active');
      gripBtn?.classList.remove('active');
      this.audio.playClick();
    });

    toggleGripBtn?.addEventListener('click', () => {
      if (this.isEStopped) return;
      this.gripper.toggle();
      const isOpen = this.gripper.isOpen;

      toggleGripBtn.classList.toggle('closed', !isOpen);
      if (gripStateIcon) gripStateIcon.textContent = isOpen ? '🟢' : '🟠';
      if (gripStateLabel) gripStateLabel.textContent = isOpen ? 'GRIPPER: OPEN [G]' : 'GRIPPER: CLOSED [G]';
      if (quickGripLabel) quickGripLabel.textContent = isOpen ? '🗜️ Grip: OPEN' : '🗜️ Grip: CLOSED';
    });
  }

  bindCameraButtons() {
    const camButtons = document.querySelectorAll('.dock-btn[data-cam]');
    const cameraTargets = {
      iso: { pos: new THREE.Vector3(1.5, 1.2, 1.5), look: new THREE.Vector3(0, 0.45, 0) },
      orbit: { pos: new THREE.Vector3(1.6, 1.1, 1.6), look: new THREE.Vector3(0, 0.45, 0) },
      top: { pos: new THREE.Vector3(0.01, 2.2, 0.01), look: new THREE.Vector3(0, 0, 0) },
      front: { pos: new THREE.Vector3(0, 0.75, 1.6), look: new THREE.Vector3(0, 0.45, 0) },
      side: { pos: new THREE.Vector3(1.6, 0.75, 0), look: new THREE.Vector3(0, 0.45, 0) },
      tcp: { pos: null, look: null }
    };

    camButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        camButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const preset = btn.dataset.cam;
        this.activeCamPreset = preset;

        if (preset === 'orbit') {
          this.controls.autoRotate = true;
          this.controls.autoRotateSpeed = 2.0;
          this.controls.target.set(0, 0.45, 0);
          this.camera.position.set(1.6, 1.1, 1.6);
        } else {
          this.controls.autoRotate = false;
          if (preset !== 'tcp') {
            const cfg = cameraTargets[preset];
            this.camera.position.copy(cfg.pos);
            this.controls.target.copy(cfg.look);
          }
        }
        this.audio.playClick();
      });
    });
  }

  bindDisplayToggles() {
    // TCP Trail
    const trailBtn = document.getElementById('btn-toggle-trail');
    trailBtn?.addEventListener('click', () => {
      const active = !trailBtn.classList.contains('active');
      trailBtn.classList.toggle('active', active);
      this.visualizer.toggleTrail(active);
      this.audio.playClick();
    });

    // Grid
    const gridBtn = document.getElementById('btn-toggle-grid');
    gridBtn?.addEventListener('click', () => {
      const active = !gridBtn.classList.contains('active');
      gridBtn.classList.toggle('active', active);
      this.workcell.toggleGrid(active);
      this.audio.playClick();
    });

    // Shadows
    const shadowBtn = document.getElementById('btn-toggle-shadows');
    shadowBtn?.addEventListener('click', () => {
      const active = !shadowBtn.classList.contains('active');
      shadowBtn.classList.toggle('active', active);
      this.workcell.toggleShadows(active);
      this.robot.setShadows(active);
      this.audio.playClick();
    });

    // Wireframe
    const wireBtn = document.getElementById('btn-toggle-wireframe');
    wireBtn?.addEventListener('click', () => {
      const active = !wireBtn.classList.contains('active');
      wireBtn.classList.toggle('active', active);
      this.robot.setWireframe(active);
      this.audio.playClick();
    });
  }

  setEnvironmentTheme(themeKey) {
    this.currentEnvTheme = themeKey;
    if (this.workcell) {
      this.workcell.setEnvironmentTheme(themeKey);
    }

    const isLight = themeKey === 'light_studio' || themeKey === 'cleanroom_lab';
    document.body.classList.toggle('theme-light', isLight);

    const themeLabel = document.getElementById('theme-btn-label');
    if (themeLabel) {
      themeLabel.textContent = isLight ? '🌙 Dark' : '☀️ Light';
    }

    const envSelect = document.getElementById('env-theme-select');
    if (envSelect && envSelect.value !== themeKey) {
      envSelect.value = themeKey;
    }
  }

  bindThemeSelector() {
    const envSelect = document.getElementById('env-theme-select');
    const select = document.getElementById('theme-select');
    const soundSchemaSelect = document.getElementById('sound-schema-select');
    const badge = document.getElementById('current-theme-badge');

    envSelect?.addEventListener('change', (e) => {
      this.setEnvironmentTheme(e.target.value);
      this.audio.playClick();
    });

    select?.addEventListener('change', (e) => {
      this.robot.setTheme(e.target.value);
      if (badge) {
        badge.textContent = e.target.value.toUpperCase();
      }
      this.audio.playClick();
    });

    soundSchemaSelect?.addEventListener('change', (e) => {
      this.audio.setSchema(e.target.value);
      this.audio.playClick();
    });

    // Sound toggle
    const soundBtn = document.getElementById('btn-sound');
    soundBtn?.addEventListener('click', () => {
      const enabled = this.audio.toggleSound();
      soundBtn.classList.toggle('active', enabled);
      const icon = document.getElementById('sound-icon');
      if (icon) icon.textContent = enabled ? '🔊' : '🔇';
    });
  }

  bindEStop() {
    const estopBtn = document.getElementById('btn-estop');
    const quickChip = document.getElementById('quick-status-chip');

    estopBtn?.addEventListener('click', () => {
      this.isEStopped = !this.isEStopped;
      estopBtn.classList.toggle('engaged', this.isEStopped);

      if (this.isEStopped) {
        this.sequencer.stopPlayback();
        this.sequencer.stopAuto();
        this.robot.setStatus('estop');
        if (quickChip) {
          quickChip.textContent = 'E-STOP';
          quickChip.style.borderColor = 'var(--accent-red)';
          quickChip.style.color = 'var(--accent-red)';
          quickChip.style.background = 'rgba(255, 51, 102, 0.2)';
        }
        this.audio.playAlarm();
      } else {
        this.robot.setStatus('ready');
        if (quickChip) {
          quickChip.textContent = 'READY';
          quickChip.style.borderColor = 'rgba(0, 255, 157, 0.4)';
          quickChip.style.color = 'var(--accent-mint)';
          quickChip.style.background = 'rgba(0, 255, 157, 0.15)';
        }
        this.audio.playClick();
      }
    });
  }

  initEventListeners() {
    // Window Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Disable browser context menu on canvas
    this.renderer.domElement.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    // Raycaster and Drag Plane for Right Click IK Dragging
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const dragPlane = new THREE.Plane();
    const intersectPoint = new THREE.Vector3();

    // OrbitControls: Left Click = Orbit, Middle/Wheel = Zoom
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.NONE
    };

    // Right Click Pointer Down: Initiate Gripper Mouse Tracking
    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      if (e.button === 2) {
        e.preventDefault();
        if (this.isEStopped) return;

        this.isRightClickDragging = true;
        this.controls.enabled = false;

        const tcpPos = new THREE.Vector3();
        this.robot.getTCPWorldPosition(tcpPos);

        const camDir = new THREE.Vector3();
        this.camera.getWorldDirection(camDir).negate();
        dragPlane.setFromNormalAndCoplanarPoint(camDir, tcpPos);

        this.visualizer.setTargetGizmoVisible(true);
        this.visualizer.setTargetPosition(tcpPos.x, tcpPos.y, tcpPos.z);
      }
    });

    // Pointer Move: Update IK target position for smooth continuous motion
    window.addEventListener('pointermove', (e) => {
      if (!this.isRightClickDragging || this.isEStopped) return;

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);

      if (raycaster.ray.intersectPlane(dragPlane, intersectPoint)) {
        // Enforce physical workspace bounds (expanded for telescopic forearm and floor circles)
        const horizontalDist = Math.sqrt(intersectPoint.x * intersectPoint.x + intersectPoint.z * intersectPoint.z);
        const maxReach = 1.55;
        const minReach = 0.16;

        if (horizontalDist > maxReach) {
          intersectPoint.x = (intersectPoint.x / horizontalDist) * maxReach;
          intersectPoint.z = (intersectPoint.z / horizontalDist) * maxReach;
        } else if (horizontalDist < minReach && horizontalDist > 0.001) {
          intersectPoint.x = (intersectPoint.x / horizontalDist) * minReach;
          intersectPoint.z = (intersectPoint.z / horizontalDist) * minReach;
        }

        intersectPoint.y = Math.max(0.005, Math.min(1.48, intersectPoint.y));

        this.ikTargetPos.copy(intersectPoint);
        this.visualizer.setTargetPosition(intersectPoint.x, intersectPoint.y, intersectPoint.z);

        const ikX = document.getElementById('ik-x-slider');
        const ikY = document.getElementById('ik-y-slider');
        const ikZ = document.getElementById('ik-z-slider');
        if (ikX && ikY && ikZ) {
          ikX.value = intersectPoint.x.toFixed(2);
          ikY.value = intersectPoint.y.toFixed(2);
          ikZ.value = intersectPoint.z.toFixed(2);
          const xVal = document.getElementById('ik-x-val');
          const yVal = document.getElementById('ik-y-val');
          const zVal = document.getElementById('ik-z-val');
          if (xVal) xVal.textContent = `${intersectPoint.x.toFixed(2)}m`;
          if (yVal) yVal.textContent = `${intersectPoint.y.toFixed(2)}m`;
          if (zVal) zVal.textContent = `${intersectPoint.z.toFixed(2)}m`;
        }
      }
    });

    // Pointer Up: Release Right Click Drag
    window.addEventListener('pointerup', (e) => {
      if (e.button === 2 || this.isRightClickDragging) {
        this.isRightClickDragging = false;
        this.controls.enabled = true;

        if (this.sequencer.currentMode !== 'ik') {
          this.visualizer.setTargetGizmoVisible(false);
        }
      }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      if (e.key === '1') document.getElementById('tab-fk')?.click();
      if (e.key === '2') document.getElementById('tab-ik')?.click();
      if (e.key === '4') document.getElementById('tab-teach')?.click();
      if (e.key.toLowerCase() === 'o') {
        const quickOrbit = document.getElementById('btn-quick-orbit');
        quickOrbit?.click();
      }
      if (e.key.toLowerCase() === 'b') {
        document.getElementById('btn-toggle-ball-mode')?.click();
      }
      if (e.key.toLowerCase() === 'd') {
        this.ballInterceptor.spawnBall(true);
        this.audio.playPuff();
      }
      if (e.key.toLowerCase() === 't') {
        document.getElementById('btn-step-telescope')?.click();
      }
      if (e.key.toLowerCase() === 'e') {
        document.getElementById('btn-toggle-telescope')?.click();
      }
      if (e.key.toLowerCase() === 'm') {
        document.getElementById('btn-quick-theme')?.click();
      }
      if (e.key.toLowerCase() === 'g') document.getElementById('btn-toggle-gripper')?.click();
      if (e.key.toLowerCase() === 'h') document.getElementById('btn-reset-pose')?.click();
      if (e.key.toLowerCase() === 's') document.getElementById('btn-open-settings')?.click();
      if (e.key === ' ') {
        e.preventDefault();
        document.getElementById('btn-play-routine')?.click();
      }
      if (e.key === 'Escape') document.getElementById('btn-estop')?.click();
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.05);

    if (!this.isEStopped) {
      // 0. Update Ball Dropper & Autonomous Catch AI
      if (!this.isRightClickDragging) {
        this.ballInterceptor.update(delta);
        const stats = this.ballInterceptor.getStats();
        const scoreBurst = document.getElementById('score-burst-count');
        const drawerScore = document.getElementById('drawer-score-val');
        const drawerBurst = document.getElementById('drawer-burst-val');
        if (scoreBurst) scoreBurst.textContent = stats.burstCount;
        if (drawerScore) drawerScore.textContent = stats.score;
        if (drawerBurst) drawerBurst.textContent = stats.burstCount;
      }

      // 0.5. Smooth Robotic Servo Motors (Joint-by-Joint Continuous Movement, No Teleporting)
      const hasServoMoved = this.robot.updateServoMotors(delta);
      if (hasServoMoved) {
        this.updateJointUI();
      }

      // 1. Smooth IK Mouse Tracking with Critically Damped Ease-In and Ease-Out
      if (this.isRightClickDragging || (this.ikCurrentPos && this.ikCurrentPos.distanceTo(this.ikTargetPos) > 0.001) || this.ikVelocity.lengthSq() > 0.0001) {
        const smoothTime = 0.22;
        const maxSpeed = 1.1;

        const omega = 2.0 / smoothTime;
        const x = omega * delta;
        const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);

        const change = new THREE.Vector3().subVectors(this.ikCurrentPos, this.ikTargetPos);
        const originalTo = this.ikTargetPos.clone();

        const maxChange = maxSpeed * smoothTime;
        change.clampLength(0, maxChange);
        const clampedTarget = this.ikCurrentPos.clone().sub(change);

        const temp = new THREE.Vector3().addVectors(
          this.ikVelocity,
          change.clone().multiplyScalar(omega)
        ).multiplyScalar(delta);

        this.ikVelocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);

        const newPos = clampedTarget.clone().add(change.add(temp).multiplyScalar(exp));

        if (originalTo.clone().sub(this.ikCurrentPos).dot(newPos.clone().sub(originalTo)) > 0) {
          newPos.copy(originalTo);
          this.ikVelocity.set(0, 0, 0);
        }

        this.ikCurrentPos.copy(newPos);
        this.kinematics.solveIK(this.ikCurrentPos, 24, 0.003, false);
      }

      // 2. Update Kinematics interpolation (for Presets, Teach Pendant)
      const isMoving = this.kinematics.update(delta);
      if (isMoving) {
        this.updateJointUI();
        this.robot.getTCPWorldPosition(this.ikCurrentPos);
        this.ikTargetPos.copy(this.ikCurrentPos);
        this.ikVelocity.set(0, 0, 0);
      }

      // 3. Update Gripper kinematics & object grasping
      this.gripper.update(delta);

      // 4. Update Workcell
      this.workcell.update(delta);

      // 5. Record TCP motion path
      const tcpPos = new THREE.Vector3();
      this.robot.getTCPWorldPosition(tcpPos);
      this.visualizer.addPoint(tcpPos);

      // 6. Update Telemetry & Multi-Voice Joint Audio Synthesizer
      this.telemetry.update(delta);
      const jointSpeeds = this.telemetry.jointVelocities.map((v, i) =>
        Math.max(v, Math.abs(this.robot.jointVelocities[i] || 0))
      );
      const teleSpeed = Math.abs(this.robot.telescopeVelocity || 0);
      this.audio.updateJointMotors(jointSpeeds, teleSpeed);

      // 7. Follow Gripper Camera Preset
      if (this.activeCamPreset === 'tcp') {
        const tcpQuat = new THREE.Quaternion();
        this.robot.getTCPWorldQuaternion(tcpQuat);
        const camOffset = new THREE.Vector3(0, 0.25, 0.4).applyQuaternion(tcpQuat);
        this.camera.position.copy(tcpPos).add(camOffset);
        this.controls.target.copy(tcpPos);
      }
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new RobotApp();
});
