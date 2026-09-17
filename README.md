# 🦾 TITAN-6X | Outward Circle Defense & Ball Pushing Mechanics

## Summary of Changes
1. **New Game Rule & Outward Circle Defense Mechanics**:
   - Transitioned gameplay from "catching and bursting balls on contact" to **active outward circle defense**.
   - Each robot arm actively protects its $1.35\text{m}$ radius perimeter base station.
   - When a ball enters or approaches an arm's circle zone, the arm calculates an outward strike vector ($\mathbf{v}_{\text{out}}$) radiating away from its base station, positions its TCP slightly behind the ball, and drives outward to swat/push the ball away toward the arena center or neighboring stations.
   - Applied physical push impulses with uplifting arc trajectories ($v_{\text{push}} \approx 2.1 - 2.8\text{ m/s}, v_y \approx 0.50 - 0.85\text{ m/s}$), elastic squashing, and bounce dynamics.
   - Added dynamic outward spark bursts and expanding shockwave ripple rings at contact points.
   - Robot arm link colliders also deflect incoming balls outward away from station bases.
2. **UI & HUD Updates**:
   - Updated top bar button and score chip: `Push AI: ON` / `PUSHED: [count]`.
   - Updated control panel drawer section: **Circle Defense & Push AI**, **DEFENSE SCORE**, and **BALLS PUSHED**.
   - Updated shortcut hints and description text across the interface.

## Verification
- Project built cleanly with `npm run build` (0 errors).
- All changes committed and pushed to `main` at `https://github.com/ozlphrt/titan-6x-robot-arm`.

---

## ✨ Features

### 🦾 6-DOF Kinematics & Telescopic Axis
- **Forward Kinematics (FK)**: Independent joint sliders ($J_1$ through $J_6$) with smooth continuous servo actuation.
- **Inverse Kinematics (IK)**: Real-time Cartesian target solving via Jacobian/FABRIK solver with interactive right-click viewport dragging.
- **Telescopic Forearm**: Prismatic linear joint expanding between elbow and wrist ($0.38\text{m} \to 0.66\text{m}$) for extended payload reach.
- **Pose Presets**: One-click poses (*Home*, *Ready*, *Front Reach*, *Inspection*, *Transport*).

### 🪶 3D Flying Flocks Boids Simulation
- **Craig Reynolds 3D Flocking Rules**: Coordinated boid swarms with **Separation**, **Alignment**, and **Cohesion** forces.
- **Dynamic 3D Swooping Attractor**: Airspace flight curves that weave the flock through the circular defense zone ($r \le 1.35\text{m}$).
- **Evasive Scatter Shockwave**: Mid-air boid bursts radiate an immediate evasion impulse to nearby flockmates.

### 🎯 Autonomous Catch AI & Ball Buster
- **Spacetime Rendezvous Trajectory Predictor**: Lookahead solver that predicts 3D flight paths in 35ms slices.
- **Exact 3D Line-of-Sight Aiming**: Arm plane yaw ($J_1$) and wrist pitch ($J_5$) dynamically lock open gripper jaws directly toward target boids.
- **Holographic HUD Reticle & Scoring**: Real-time target tracking ring, combo multiplier, and score tracking.

### 💥 Full Arm Body Collisions & Deflections
- Real-time 3D capsule and sphere collision detection for all arm segments.
- Lively momentum deflection and rebound impulses when flying boids collide with the moving arm body.

### 🔊 Multi-Schema Acoustic Audio Engine
Features 5 selectable sound schemas with strict physical pitch scaling (**smaller joint $\to$ higher pitch**):
1. **⚡ Cyber Actuators (Default)**: High-tech electromagnetic servo phase whirrs with magnetic flux glide.
2. **🤖 Precision Brushless Servos**: Authentic Fanuc/ABB dual-harmonic gear bite.
3. **🏭 Heavy Industrial Machinery & Hydraulics**: Sub-bass cast-iron planetary gears with pressurized fluid hum.
4. **🔬 Laboratory Cobot**: Clean musical micro-stepping sinusoidal resonance.
5. **🤫 Stealth Whisper Mode**: Ultra-subtle haptic frequency monitoring.

### 📋 Teach Pendant & Sequencer
- Record, step, replay, and loop custom motion routines.
- Adjustable playback speed ($0.2\times - 3.0\times$) with built-in industrial demo routine.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/ozlphrt/titan-6x-robot-arm.git

# Navigate to project directory
cd titan-6x-robot-arm

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser at `http://127.0.0.1:5173/` to run the digital twin.

### Production Build

```bash
npm run build
npm run preview
```

---

## ⌨️ Controls & Shortcuts

| Key | Action |
| --- | --- |
| **Right Click + Drag** | Jog Gripper in 3D Space (IK Tracking) |
| **Left Click + Drag** | Orbit / Rotate Camera |
| **Mouse Scroll** | Zoom In / Out |
| **D** | Spawn Flying Flock Burst |
| **B** | Toggle Catch AI Autonomous Mode |
| **T** | Step Telescoping Forearm (0% / 50% / 100%) |
| **E** | Toggle Telescoping Retract / Extend |
| **G** | Toggle Gripper Open / Close |
| **O** | Toggle 360° Auto-Orbit |
| **H** | Reset Pose to Home (0°) |
| **1 / 2 / 4** | FK Manual / IK Target / Teach Pendant Mode |
| **Space** | Play / Pause Teach Program |
| **Esc** | Emergency Stop (E-STOP) |

---

## 🛠️ Built With
- **Three.js**: 3D scene rendering, PBR shading, and matrix transformations.
- **Web Audio API**: Real-time synthesized multi-oscillator acoustic sound engine.
- **Vite**: Ultra-fast frontend tooling and bundle pipeline.
- **Canvas 2D / Procedural Texturing**: High-gloss elastic bouncy patterns and holographic reticles.

---

## 📄 License
MIT License. Free for research, robotics simulation, and educational projects.
