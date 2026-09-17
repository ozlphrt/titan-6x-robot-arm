// =============================================================================
// TITAN-6X MULTI-SCHEMA ACOUSTIC SOUND ENGINE (Deep, Warm, Low-Pitch Mechanical Acoustics)
// =============================================================================

export const SOUND_SCHEMAS = {
  cyber_actuators: {
    id: 'cyber_actuators',
    name: 'Precision Industrial Servos (Warm Low-Pitch Whirr)',
    desc: 'Deep synchronous servo motors with warm low-pitch sweeps and subtle mechanical purr',
    joints: [
      { name: 'J1 (Base)', baseFreq: 48, maxFreq: 95, filterFreq: 160, frictionFreq: 280, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.50, vol2: 0.20, fricVol: 0.12, maxVol: 0.012 },
      { name: 'J2 (Shoulder)', baseFreq: 62, maxFreq: 120, filterFreq: 190, frictionFreq: 330, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.50, vol2: 0.20, fricVol: 0.12, maxVol: 0.011 },
      { name: 'J3 (Elbow)', baseFreq: 82, maxFreq: 155, filterFreq: 230, frictionFreq: 390, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.50, vol2: 0.18, fricVol: 0.11, maxVol: 0.010 },
      { name: 'J4 (Forearm)', baseFreq: 105, maxFreq: 195, filterFreq: 280, frictionFreq: 460, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.52, vol2: 0.16, fricVol: 0.10, maxVol: 0.009 },
      { name: 'J5 (Wrist)', baseFreq: 135, maxFreq: 245, filterFreq: 340, frictionFreq: 540, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.55, vol2: 0.15, fricVol: 0.09, maxVol: 0.008 },
      { name: 'J6 (Flange)', baseFreq: 170, maxFreq: 300, filterFreq: 400, frictionFreq: 620, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.58, vol2: 0.12, fricVol: 0.08, maxVol: 0.007 }
    ],
    piston: { carrierFreq: 58, carrierMax: 110, filterFreq: 180, fluidCutoff: 260, carrierVol: 0.010, fluidVol: 0.006, hasChuff: true }
  },
  precision_servos: {
    id: 'precision_servos',
    name: 'Heavy Industrial Machinery (Deep Planetary Gearbox)',
    desc: 'Deep mechanical cast-iron body hum and planetary cycloidal gear teeth friction',
    joints: [
      { name: 'J1 (Base)', baseFreq: 40, maxFreq: 78, filterFreq: 130, frictionFreq: 220, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.22, fricVol: 0.14, maxVol: 0.013 },
      { name: 'J2 (Shoulder)', baseFreq: 52, maxFreq: 98, filterFreq: 155, frictionFreq: 260, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.20, fricVol: 0.14, maxVol: 0.012 },
      { name: 'J3 (Elbow)', baseFreq: 70, maxFreq: 130, filterFreq: 190, frictionFreq: 310, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.18, fricVol: 0.12, maxVol: 0.011 },
      { name: 'J4 (Forearm)', baseFreq: 90, maxFreq: 165, filterFreq: 230, frictionFreq: 370, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.16, fricVol: 0.11, maxVol: 0.010 },
      { name: 'J5 (Wrist)', baseFreq: 115, maxFreq: 205, filterFreq: 280, frictionFreq: 430, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.58, vol2: 0.15, fricVol: 0.10, maxVol: 0.009 },
      { name: 'J6 (Flange)', baseFreq: 145, maxFreq: 250, filterFreq: 330, frictionFreq: 500, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.60, vol2: 0.12, fricVol: 0.09, maxVol: 0.008 }
    ],
    piston: { carrierFreq: 50, carrierMax: 90, filterFreq: 150, fluidCutoff: 220, carrierVol: 0.011, fluidVol: 0.007, hasChuff: true }
  },
  heavy_hydraulics: {
    id: 'heavy_hydraulics',
    name: 'Heavy Hydraulics & Fluid Power',
    desc: 'Sub-bass pressurized fluid flow with heavy mechanical cylinder motion',
    joints: [
      { name: 'J1 (Base)', baseFreq: 38, maxFreq: 72, filterFreq: 120, frictionFreq: 190, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.25, fricVol: 0.16, maxVol: 0.014 },
      { name: 'J2 (Shoulder)', baseFreq: 48, maxFreq: 90, filterFreq: 140, frictionFreq: 230, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.24, fricVol: 0.16, maxVol: 0.013 },
      { name: 'J3 (Elbow)', baseFreq: 64, maxFreq: 118, filterFreq: 170, frictionFreq: 270, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.58, vol2: 0.22, fricVol: 0.14, maxVol: 0.012 },
      { name: 'J4 (Forearm)', baseFreq: 82, maxFreq: 148, filterFreq: 205, frictionFreq: 320, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.60, vol2: 0.20, fricVol: 0.13, maxVol: 0.011 },
      { name: 'J5 (Wrist)', baseFreq: 105, maxFreq: 185, filterFreq: 245, frictionFreq: 380, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.62, vol2: 0.18, fricVol: 0.11, maxVol: 0.010 },
      { name: 'J6 (Flange)', baseFreq: 130, maxFreq: 225, filterFreq: 290, frictionFreq: 440, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.65, vol2: 0.15, fricVol: 0.10, maxVol: 0.009 }
    ],
    piston: { carrierFreq: 44, carrierMax: 80, filterFreq: 130, fluidCutoff: 190, carrierVol: 0.014, fluidVol: 0.009, hasChuff: true }
  },
  stepper_cobot: {
    id: 'stepper_cobot',
    name: 'Laboratory Cobot (Warm Sinusoidal Micro-Stepping)',
    desc: 'Smooth, clean sinusoidal micro-stepping purr with damped low-resonance body',
    joints: [
      { name: 'J1 (Base)', baseFreq: 55, maxFreq: 105, filterFreq: 165, frictionFreq: 260, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.70, vol2: 0.12, fricVol: 0.08, maxVol: 0.010 },
      { name: 'J2 (Shoulder)', baseFreq: 70, maxFreq: 130, filterFreq: 195, frictionFreq: 300, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.70, vol2: 0.12, fricVol: 0.08, maxVol: 0.009 },
      { name: 'J3 (Elbow)', baseFreq: 90, maxFreq: 165, filterFreq: 235, frictionFreq: 350, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.10, fricVol: 0.08, maxVol: 0.009 },
      { name: 'J4 (Forearm)', baseFreq: 115, maxFreq: 205, filterFreq: 280, frictionFreq: 410, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.74, vol2: 0.10, fricVol: 0.07, maxVol: 0.008 },
      { name: 'J5 (Wrist)', baseFreq: 145, maxFreq: 255, filterFreq: 335, frictionFreq: 480, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.75, vol2: 0.08, fricVol: 0.06, maxVol: 0.007 },
      { name: 'J6 (Flange)', baseFreq: 180, maxFreq: 310, filterFreq: 395, frictionFreq: 550, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.78, vol2: 0.08, fricVol: 0.06, maxVol: 0.007 }
    ],
    piston: { carrierFreq: 60, carrierMax: 115, filterFreq: 175, fluidCutoff: 210, carrierVol: 0.008, fluidVol: 0.005, hasChuff: false }
  },
  stealth_whisper: {
    id: 'stealth_whisper',
    name: 'Stealth Whisper Mode (Gated Sub-Bass Haptic Purr)',
    desc: 'Subtle low-frequency tactile vibration hum with clean gated articulation',
    joints: [
      { name: 'J1 (Base)', baseFreq: 42, maxFreq: 80, filterFreq: 120, frictionFreq: 180, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.85, vol2: 0.0, fricVol: 0.06, maxVol: 0.005 },
      { name: 'J2 (Shoulder)', baseFreq: 52, maxFreq: 98, filterFreq: 140, frictionFreq: 210, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.85, vol2: 0.0, fricVol: 0.06, maxVol: 0.005 },
      { name: 'J3 (Elbow)', baseFreq: 68, maxFreq: 125, filterFreq: 165, frictionFreq: 250, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.85, vol2: 0.0, fricVol: 0.06, maxVol: 0.004 },
      { name: 'J4 (Forearm)', baseFreq: 86, maxFreq: 155, filterFreq: 195, frictionFreq: 290, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.85, vol2: 0.0, fricVol: 0.05, maxVol: 0.004 },
      { name: 'J5 (Wrist)', baseFreq: 108, maxFreq: 190, filterFreq: 230, frictionFreq: 340, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.85, vol2: 0.0, fricVol: 0.05, maxVol: 0.003 },
      { name: 'J6 (Flange)', baseFreq: 135, maxFreq: 230, filterFreq: 270, frictionFreq: 400, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.85, vol2: 0.0, fricVol: 0.04, maxVol: 0.003 }
    ],
    piston: { carrierFreq: 46, carrierMax: 85, filterFreq: 125, fluidCutoff: 160, carrierVol: 0.005, fluidVol: 0.003, hasChuff: false }
  }
};

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.currentSchemaKey = 'cyber_actuators';
    this.masterGain = null;
    this.jointVoices = [];
    this.hydraulicVoice = null;
    this.noiseBuffer = null;
    this.wasPistonMoving = false;
    this.lastBallBounceTime = 0;
    this.lastSwatTime = 0;
    this.lastTransientTime = 0;
    this.prevJointVelocities = [0, 0, 0, 0, 0, 0];
  }

  setSchema(schemaKey) {
    if (!SOUND_SCHEMAS[schemaKey]) return;
    this.currentSchemaKey = schemaKey;
    const schema = SOUND_SCHEMAS[schemaKey];

    if (this.ctx && this.jointVoices.length > 0) {
      const curTime = this.ctx.currentTime;
      for (let i = 0; i < 6; i++) {
        const v = this.jointVoices[i];
        const jConfig = schema.joints[i];
        v.profile = jConfig;
        v.osc1.type = jConfig.wave1;
        v.osc2.type = jConfig.wave2;
        v.osc1.frequency.setTargetAtTime(jConfig.baseFreq, curTime, 0.04);
        v.osc2.frequency.setTargetAtTime(jConfig.baseFreq * jConfig.harmRatio, curTime, 0.04);
        v.filter.frequency.setTargetAtTime(jConfig.filterFreq, curTime, 0.04);
        v.frictionFilter.frequency.setTargetAtTime(jConfig.frictionFreq, curTime, 0.04);
        v.gain1.gain.setTargetAtTime(jConfig.vol1, curTime, 0.04);
        v.gain2.gain.setTargetAtTime(jConfig.vol2, curTime, 0.04);
        v.fricGain.gain.setTargetAtTime(jConfig.fricVol, curTime, 0.04);
      }

      if (this.hydraulicVoice) {
        const p = schema.piston;
        this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(p.carrierFreq, curTime, 0.04);
        this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(p.filterFreq, curTime, 0.04);
        this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(p.fluidCutoff, curTime, 0.04);
      }
    }
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
        this.initJointSynthesizers();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  createNoiseBuffer() {
    if (this.noiseBuffer || !this.ctx) return this.noiseBuffer;
    const len = Math.floor(this.ctx.sampleRate * 2.0);
    this.noiseBuffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    let b0 = 0.0, b1 = 0.0, b2 = 0.0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2.0 - 1.0;
      // Pink noise filter algorithm
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2 + white * 0.5362) * 0.45;
    }
    return this.noiseBuffer;
  }

  initJointSynthesizers() {
    if (!this.ctx || this.jointVoices.length > 0) return;
    const schema = SOUND_SCHEMAS[this.currentSchemaKey] || SOUND_SCHEMAS.cyber_actuators;
    const noiseBuf = this.createNoiseBuffer();

    // 1. Create 6 distinct mechanical voices (Warm fundamental + low-order gear mesh + soft friction)
    for (let i = 0; i < 6; i++) {
      const profile = schema.joints[i];

      // Oscillator 1: Motor stator fundamental
      const osc1 = this.ctx.createOscillator();
      osc1.type = profile.wave1;
      osc1.frequency.setValueAtTime(profile.baseFreq, this.ctx.currentTime);

      // Oscillator 2: Harmonic gear mesh
      const osc2 = this.ctx.createOscillator();
      osc2.type = profile.wave2;
      osc2.frequency.setValueAtTime(profile.baseFreq * profile.harmRatio, this.ctx.currentTime);

      const gain1 = this.ctx.createGain();
      gain1.gain.setValueAtTime(profile.vol1, this.ctx.currentTime);

      const gain2 = this.ctx.createGain();
      gain2.gain.setValueAtTime(profile.vol2, this.ctx.currentTime);

      // Warm low-pass body resonance filter (steep cutoff, no shrill peaks)
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq, this.ctx.currentTime);
      filter.Q.setValueAtTime(0.70, this.ctx.currentTime);

      // Soft bearing friction noise source
      const frictionSrc = this.ctx.createBufferSource();
      frictionSrc.buffer = noiseBuf;
      frictionSrc.loop = true;

      const frictionFilter = this.ctx.createBiquadFilter();
      frictionFilter.type = 'bandpass';
      frictionFilter.frequency.setValueAtTime(profile.frictionFreq, this.ctx.currentTime);
      frictionFilter.Q.setValueAtTime(1.1, this.ctx.currentTime);

      const fricGain = this.ctx.createGain();
      fricGain.gain.setValueAtTime(profile.fricVol, this.ctx.currentTime);

      const voiceGain = this.ctx.createGain();
      voiceGain.gain.setValueAtTime(0, this.ctx.currentTime);

      osc1.connect(gain1);
      gain1.connect(filter);

      osc2.connect(gain2);
      gain2.connect(filter);

      frictionSrc.connect(frictionFilter);
      frictionFilter.connect(fricGain);
      fricGain.connect(filter);

      filter.connect(voiceGain);
      voiceGain.connect(this.masterGain);

      osc1.start();
      osc2.start();
      frictionSrc.start();

      this.jointVoices.push({
        osc1,
        osc2,
        gain1,
        gain2,
        filter,
        frictionSrc,
        frictionFilter,
        fricGain,
        gain: voiceGain,
        profile
      });
    }

    // 2. Dedicated Hydraulic / Linear Actuator Piston Synthesizer
    const pCfg = schema.piston;
    const pistonCarrier = this.ctx.createOscillator();
    pistonCarrier.type = 'triangle';
    pistonCarrier.frequency.setValueAtTime(pCfg.carrierFreq, this.ctx.currentTime);

    const pistonFilter = this.ctx.createBiquadFilter();
    pistonFilter.type = 'lowpass';
    pistonFilter.frequency.setValueAtTime(pCfg.filterFreq, this.ctx.currentTime);
    pistonFilter.Q.setValueAtTime(0.65, this.ctx.currentTime);

    const pistonGain = this.ctx.createGain();
    pistonGain.gain.setValueAtTime(0, this.ctx.currentTime);

    pistonCarrier.connect(pistonFilter);
    pistonFilter.connect(pistonGain);
    pistonGain.connect(this.masterGain);
    pistonCarrier.start();

    // Fluid Flow / Air Hiss Buffer
    const fluidSrc = this.ctx.createBufferSource();
    fluidSrc.buffer = noiseBuf;
    fluidSrc.loop = true;

    const fluidFilt = this.ctx.createBiquadFilter();
    fluidFilt.type = 'bandpass';
    fluidFilt.frequency.setValueAtTime(pCfg.fluidCutoff, this.ctx.currentTime);
    fluidFilt.Q.setValueAtTime(0.9, this.ctx.currentTime);

    const fluidGainNode = this.ctx.createGain();
    fluidGainNode.gain.setValueAtTime(0, this.ctx.currentTime);

    fluidSrc.connect(fluidFilt);
    fluidFilt.connect(fluidGainNode);
    fluidGainNode.connect(this.masterGain);
    fluidSrc.start();

    this.hydraulicVoice = {
      pistonCarrier,
      pistonFilter,
      pistonGain,
      fluidSrc,
      fluidFilt,
      fluidGainNode
    };
    this.wasPistonMoving = false;
  }

  toggleSound(forceState) {
    this.enabled = forceState !== undefined ? forceState : !this.enabled;
    if (!this.enabled && this.ctx) {
      this.jointVoices.forEach(v => {
        v.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
      });
      if (this.hydraulicVoice) {
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
      }
    }
    return this.enabled;
  }

  /**
   * Modulates warm, low-pitch articulated mechanical sounds for each joint (J1 to J6)
   * with grounded pitch sweeps, non-linear velocity gating, and subtle torque-bite transients.
   */
  updateJointMotors(jointVelocities = [], teleVelocity = 0, deltaTime = 0.016) {
    if (!this.enabled) {
      if (this.ctx && this.jointVoices.length > 0) {
        this.jointVoices.forEach(v => v.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03));
        if (this.hydraulicVoice) {
          this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
          this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
        }
      }
      return;
    }

    this.init();
    if (!this.ctx || this.jointVoices.length === 0) return;

    const curTime = this.ctx.currentTime;
    const schema = SOUND_SCHEMAS[this.currentSchemaKey] || SOUND_SCHEMAS.cyber_actuators;
    const dt = Math.max(0.001, deltaTime);

    // Deadband threshold: Below 0.08 rad/s, silence the motor to eliminate continuous background droning
    const DEADBAND = 0.08;
    let maxAccel = 0;

    // 1. Update each joint J1 to J6 with warm low-pitch articulation
    for (let i = 0; i < 6; i++) {
      const voice = this.jointVoices[i];
      if (!voice) continue;

      const vel = jointVelocities[i] || 0;
      const prevVel = this.prevJointVelocities[i] || 0;
      const accel = Math.abs((vel - prevVel) / dt);
      if (accel > maxAccel) maxAccel = accel;

      if (vel > DEADBAND) {
        const p = voice.profile;
        const rawNorm = Math.min(1.0, (vel - DEADBAND) / 2.5);
        const norm = Math.pow(rawNorm, 1.25);

        // Grounded Low-Pitch Sweep
        const targetFreq = p.baseFreq + norm * (p.maxFreq - p.baseFreq);
        const targetVol = Math.min(p.maxVol, norm * p.maxVol);
        const targetFilter = p.filterFreq + norm * (p.filterFreq * 0.35);
        const targetFriction = p.frictionFreq + norm * 120;

        voice.osc1.frequency.setTargetAtTime(targetFreq, curTime, 0.040);
        voice.osc2.frequency.setTargetAtTime(targetFreq * p.harmRatio, curTime, 0.040);
        voice.filter.frequency.setTargetAtTime(targetFilter, curTime, 0.040);
        voice.frictionFilter.frequency.setTargetAtTime(targetFriction, curTime, 0.040);
        voice.gain.gain.setTargetAtTime(targetVol, curTime, 0.035);
      } else {
        voice.gain.gain.setTargetAtTime(0, curTime, 0.040);
      }

      this.prevJointVelocities[i] = vel;
    }

    // 2. Low-Frequency Torque Bite on sudden acceleration or direction change
    if (maxAccel > 5.2 && curTime - this.lastTransientTime > 0.075) {
      this.lastTransientTime = curTime;
      this.playTorqueBite(Math.min(1.0, maxAccel / 12.0));
    }

    // 3. Update Telescopic Linear Piston / Hydraulic Voice
    if (this.hydraulicVoice) {
      const pCfg = schema.piston;
      const normTele = Math.min(1.0, teleVelocity / 1.5);
      if (normTele > 0.04) {
        this.wasPistonMoving = true;
        const carrierFreq = pCfg.carrierFreq + normTele * (pCfg.carrierMax - pCfg.carrierFreq);
        const carrierVol = normTele * pCfg.carrierVol;
        this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(carrierFreq, curTime, 0.04);
        this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(pCfg.filterFreq + normTele * 35, curTime, 0.04);
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(carrierVol, curTime, 0.04);

        const fluidFreq = pCfg.fluidCutoff + normTele * 50;
        const fluidVol = normTele * pCfg.fluidVol;
        this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(fluidFreq, curTime, 0.04);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(fluidVol, curTime, 0.04);
      } else {
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, curTime, 0.05);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, curTime, 0.05);

        if (this.wasPistonMoving) {
          this.wasPistonMoving = false;
          if (pCfg.hasChuff) {
            this.playPneumatic(false);
          }
        }
      }
    }
  }

  // Deep, warm magnetic torque latch / click on sudden acceleration
  playTorqueBite(intensity = 1.0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, t);
    filter.Q.setValueAtTime(0.7, t);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, t);
    osc.frequency.exponentialRampToValueAtTime(75, t + 0.024);

    const peakGain = 0.0075 * Math.max(0.2, Math.min(1.0, intensity));
    gain.gain.setValueAtTime(peakGain, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.028);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.030);
  }

  // Warm, low-pitched mechanical swoosh / swat whir
  playArmSwat(power = 1.0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const curTime = this.ctx.currentTime;
    if (curTime - this.lastSwatTime < 0.060) return;
    this.lastSwatTime = curTime;

    const t = curTime;
    const normPower = Math.max(0.3, Math.min(1.0, power));

    // 1. Warm Pitch-Sweep Whir
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(360, t);
    filter.Q.setValueAtTime(0.8, t);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110 + normPower * 40, t);
    osc.frequency.exponentialRampToValueAtTime(260 * normPower, t + 0.040);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.090);

    const peakGain = 0.0065 * normPower;
    gain.gain.setValueAtTime(0.0005, t);
    gain.gain.linearRampToValueAtTime(peakGain, t + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.085);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.090);

    // 2. Soft cushioned mechanical air whoosh
    if (this.noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(340, t);
      noiseFilter.Q.setValueAtTime(1.1, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.0028 * normPower, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain || this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.060);
    }
  }

  // Backward compatibility helper
  updateServoHum(totalSpeed = 0) {
    if (this.jointVoices.length === 0) return;
    const avg = totalSpeed / 6;
    this.updateJointMotors([avg, avg, avg, avg, avg, avg], 0, 0.016);
  }

  // Gentle, warm, ultra-soft rubber ball bounce tap (very subtle & backgrounded)
  playBallBounce(intensity = 1.0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const curTime = this.ctx.currentTime;
    // Strict global rate limiter: max 1 subtle tap every 140ms
    if (curTime - this.lastBallBounceTime < 0.140) return;
    this.lastBallBounceTime = curTime;

    const normIntensity = Math.max(0.15, Math.min(1.0, intensity));
    const t = curTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Deep low-pass filter to eliminate any sharp clicking edges or transients
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, t);
    filter.Q.setValueAtTime(0.50, t);

    // Warm, deep rubber body: 105Hz -> 42Hz
    osc.type = 'sine';
    const startFreq = 100 + Math.random() * 10;
    osc.frequency.setValueAtTime(startFreq, t);
    osc.frequency.exponentialRampToValueAtTime(42, t + 0.024);

    // Ultra-soft whisper gain envelope (barely audible tactile backdrop)
    const peakGain = 0.0018 * normIntensity;
    gain.gain.setValueAtTime(peakGain, t);
    gain.gain.exponentialRampToValueAtTime(0.00003, t + 0.026);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.028);
  }

  // Soft subtle UI micro-tap on click
  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.025);

    gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0005, this.ctx.currentTime + 0.028);

    osc.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.032);
  }

  // Subtle pneumatic air puff
  playPuff() {
    this.playPneumatic(true);
  }

  // Soft, subtle organic bubble pop / ball burst sound
  playBurst() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // 1. Soft warm low-frequency tonal body (gentle 220Hz -> 75Hz drop)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(420, t);
    filter.Q.setValueAtTime(0.65, t);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(210 + Math.random() * 30, t);
    osc.frequency.exponentialRampToValueAtTime(70, t + 0.038);

    // Subtle, low-level gain envelope
    oscGain.gain.setValueAtTime(0.012, t);
    oscGain.gain.exponentialRampToValueAtTime(0.0002, t + 0.040);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(this.masterGain || this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.042);

    // 2. Micro soft-air cushion texture (whisper quiet)
    if (this.noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(380, t);
      noiseFilter.Q.setValueAtTime(1.0, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.005, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.0002, t + 0.026);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain || this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.030);
    }
  }

  // Subtle pneumatic air puff
  playPneumatic(isClose = true) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isClose ? 750 : 520, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.016, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0005, this.ctx.currentTime + 0.11);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    noise.start();
    noise.stop(this.ctx.currentTime + 0.12);
  }

  // Emergency stop alert
  playAlarm() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.setValueAtTime(450, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  // Gentle success chime
  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99]; // C E G
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.07);

      gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.035, this.ctx.currentTime + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.07 + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.07);
      osc.stop(this.ctx.currentTime + idx * 0.07 + 0.25);
    });
  }

  // Celebratory Victory Fanfare Arpeggio
  playVictoryFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.040, this.ctx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0008, this.ctx.currentTime + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain || this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.38);
    });
  }
}
