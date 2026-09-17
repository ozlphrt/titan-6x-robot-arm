// =============================================================================
// TITAN-6X MULTI-SCHEMA ACOUSTIC SOUND ENGINE (Authentic Subtle Mechanical Acoustics)
// =============================================================================

export const SOUND_SCHEMAS = {
  cyber_actuators: {
    id: 'cyber_actuators',
    name: 'Precision Industrial Servos (Subtle Mechanical Whirr)',
    desc: 'Warm harmonic drive gear mesh with subtle bearing friction texture',
    joints: [
      { name: 'J1 (Base)', baseFreq: 58, maxFreq: 72, filterFreq: 180, frictionFreq: 260, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.65, vol2: 0.20, fricVol: 0.25, maxVol: 0.013 },
      { name: 'J2 (Shoulder)', baseFreq: 76, maxFreq: 92, filterFreq: 210, frictionFreq: 290, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.65, vol2: 0.20, fricVol: 0.25, maxVol: 0.012 },
      { name: 'J3 (Elbow)', baseFreq: 102, maxFreq: 124, filterFreq: 250, frictionFreq: 340, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.65, vol2: 0.20, fricVol: 0.25, maxVol: 0.011 },
      { name: 'J4 (Forearm)', baseFreq: 135, maxFreq: 162, filterFreq: 290, frictionFreq: 390, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.68, vol2: 0.18, fricVol: 0.22, maxVol: 0.010 },
      { name: 'J5 (Wrist)', baseFreq: 175, maxFreq: 208, filterFreq: 340, frictionFreq: 450, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.70, vol2: 0.15, fricVol: 0.20, maxVol: 0.009 },
      { name: 'J6 (Flange)', baseFreq: 220, maxFreq: 260, filterFreq: 400, frictionFreq: 520, wave1: 'sine', wave2: 'triangle', harmRatio: 2.0, vol1: 0.70, vol2: 0.15, fricVol: 0.18, maxVol: 0.008 }
    ],
    piston: { carrierFreq: 68, carrierMax: 92, filterFreq: 160, fluidCutoff: 220, carrierVol: 0.011, fluidVol: 0.007, hasChuff: true }
  },
  precision_servos: {
    id: 'precision_servos',
    name: 'Heavy Industrial Machinery (Low-Pitch Planetary Gears)',
    desc: 'Deep mechanical cast-iron body hum and cycloidal gear teeth friction',
    joints: [
      { name: 'J1 (Base)', baseFreq: 48, maxFreq: 62, filterFreq: 150, frictionFreq: 220, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.60, vol2: 0.25, fricVol: 0.30, maxVol: 0.014 },
      { name: 'J2 (Shoulder)', baseFreq: 65, maxFreq: 80, filterFreq: 175, frictionFreq: 250, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.60, vol2: 0.25, fricVol: 0.30, maxVol: 0.013 },
      { name: 'J3 (Elbow)', baseFreq: 88, maxFreq: 108, filterFreq: 210, frictionFreq: 290, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.60, vol2: 0.25, fricVol: 0.30, maxVol: 0.012 },
      { name: 'J4 (Forearm)', baseFreq: 118, maxFreq: 142, filterFreq: 250, frictionFreq: 340, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.65, vol2: 0.20, fricVol: 0.26, maxVol: 0.011 },
      { name: 'J5 (Wrist)', baseFreq: 152, maxFreq: 182, filterFreq: 300, frictionFreq: 400, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.65, vol2: 0.20, fricVol: 0.24, maxVol: 0.010 },
      { name: 'J6 (Flange)', baseFreq: 195, maxFreq: 232, filterFreq: 350, frictionFreq: 470, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.68, vol2: 0.18, fricVol: 0.22, maxVol: 0.009 }
    ],
    piston: { carrierFreq: 56, carrierMax: 78, filterFreq: 140, fluidCutoff: 190, carrierVol: 0.013, fluidVol: 0.009, hasChuff: true }
  },
  heavy_hydraulics: {
    id: 'heavy_hydraulics',
    name: 'Heavy Hydraulics & Fluid Power',
    desc: 'Sub-bass pressurized fluid flow with heavy mechanical cylinder motion',
    joints: [
      { name: 'J1 (Base)', baseFreq: 42, maxFreq: 56, filterFreq: 130, frictionFreq: 190, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.55, vol2: 0.30, fricVol: 0.35, maxVol: 0.016 },
      { name: 'J2 (Shoulder)', baseFreq: 58, maxFreq: 74, filterFreq: 150, frictionFreq: 220, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.58, vol2: 0.28, fricVol: 0.35, maxVol: 0.015 },
      { name: 'J3 (Elbow)', baseFreq: 80, maxFreq: 98, filterFreq: 180, frictionFreq: 260, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.60, vol2: 0.25, fricVol: 0.32, maxVol: 0.013 },
      { name: 'J4 (Forearm)', baseFreq: 108, maxFreq: 130, filterFreq: 220, frictionFreq: 310, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.62, vol2: 0.22, fricVol: 0.30, maxVol: 0.012 },
      { name: 'J5 (Wrist)', baseFreq: 140, maxFreq: 168, filterFreq: 260, frictionFreq: 360, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.65, vol2: 0.20, fricVol: 0.26, maxVol: 0.010 },
      { name: 'J6 (Flange)', baseFreq: 178, maxFreq: 210, filterFreq: 310, frictionFreq: 420, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.68, vol2: 0.18, fricVol: 0.24, maxVol: 0.009 }
    ],
    piston: { carrierFreq: 50, carrierMax: 70, filterFreq: 130, fluidCutoff: 210, carrierVol: 0.016, fluidVol: 0.012, hasChuff: true }
  },
  stepper_cobot: {
    id: 'stepper_cobot',
    name: 'Laboratory Cobot (Quiet Sinusoidal Resonance)',
    desc: 'Soft, clean sinusoidal micro-stepping purr with damped mechanical casing',
    joints: [
      { name: 'J1 (Base)', baseFreq: 75, maxFreq: 90, filterFreq: 180, frictionFreq: 240, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.80, vol2: 0.10, fricVol: 0.15, maxVol: 0.010 },
      { name: 'J2 (Shoulder)', baseFreq: 95, maxFreq: 112, filterFreq: 210, frictionFreq: 280, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.80, vol2: 0.10, fricVol: 0.15, maxVol: 0.009 },
      { name: 'J3 (Elbow)', baseFreq: 120, maxFreq: 142, filterFreq: 250, frictionFreq: 330, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.80, vol2: 0.10, fricVol: 0.15, maxVol: 0.009 },
      { name: 'J4 (Forearm)', baseFreq: 155, maxFreq: 180, filterFreq: 290, frictionFreq: 380, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.82, vol2: 0.10, fricVol: 0.14, maxVol: 0.008 },
      { name: 'J5 (Wrist)', baseFreq: 195, maxFreq: 225, filterFreq: 340, frictionFreq: 440, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.85, vol2: 0.08, fricVol: 0.12, maxVol: 0.007 },
      { name: 'J6 (Flange)', baseFreq: 245, maxFreq: 280, filterFreq: 390, frictionFreq: 500, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.85, vol2: 0.08, fricVol: 0.12, maxVol: 0.007 }
    ],
    piston: { carrierFreq: 85, carrierMax: 110, filterFreq: 180, fluidCutoff: 180, carrierVol: 0.008, fluidVol: 0.005, hasChuff: false }
  },
  stealth_whisper: {
    id: 'stealth_whisper',
    name: 'Stealth Whisper Mode (Subtle Haptic Purr)',
    desc: 'Near-silent low-frequency tactile vibration hum',
    joints: [
      { name: 'J1 (Base)', baseFreq: 50, maxFreq: 62, filterFreq: 120, frictionFreq: 160, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.9, vol2: 0.0, fricVol: 0.10, maxVol: 0.005 },
      { name: 'J2 (Shoulder)', baseFreq: 64, maxFreq: 78, filterFreq: 140, frictionFreq: 180, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.9, vol2: 0.0, fricVol: 0.10, maxVol: 0.005 },
      { name: 'J3 (Elbow)', baseFreq: 82, maxFreq: 98, filterFreq: 160, frictionFreq: 210, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.9, vol2: 0.0, fricVol: 0.10, maxVol: 0.004 },
      { name: 'J4 (Forearm)', baseFreq: 105, maxFreq: 124, filterFreq: 180, frictionFreq: 240, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.9, vol2: 0.0, fricVol: 0.08, maxVol: 0.004 },
      { name: 'J5 (Wrist)', baseFreq: 130, maxFreq: 152, filterFreq: 200, frictionFreq: 270, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.9, vol2: 0.0, fricVol: 0.08, maxVol: 0.003 },
      { name: 'J6 (Flange)', baseFreq: 160, maxFreq: 185, filterFreq: 230, frictionFreq: 310, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 0.9, vol2: 0.0, fricVol: 0.08, maxVol: 0.003 }
    ],
    piston: { carrierFreq: 55, carrierMax: 72, filterFreq: 120, fluidCutoff: 140, carrierVol: 0.005, fluidVol: 0.003, hasChuff: false }
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
        v.osc1.frequency.setTargetAtTime(jConfig.baseFreq, curTime, 0.06);
        v.osc2.frequency.setTargetAtTime(jConfig.baseFreq * jConfig.harmRatio, curTime, 0.06);
        v.filter.frequency.setTargetAtTime(jConfig.filterFreq, curTime, 0.06);
        v.frictionFilter.frequency.setTargetAtTime(jConfig.frictionFreq, curTime, 0.06);
        v.gain1.gain.setTargetAtTime(jConfig.vol1, curTime, 0.06);
        v.gain2.gain.setTargetAtTime(jConfig.vol2, curTime, 0.06);
        v.fricGain.gain.setTargetAtTime(jConfig.fricVol, curTime, 0.06);
      }

      if (this.hydraulicVoice) {
        const p = schema.piston;
        this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(p.carrierFreq, curTime, 0.06);
        this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(p.filterFreq, curTime, 0.06);
        this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(p.fluidCutoff, curTime, 0.06);
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

    // 1. Create 6 distinct subtle mechanical voices (Stator Fundamental + Gear Mesh + Bearing Friction)
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

      // Warm low-pass body resonance filter (no sharp whistles)
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq, this.ctx.currentTime);
      filter.Q.setValueAtTime(0.85, this.ctx.currentTime); // Gentle non-whistling Q

      // Bearing & Cycloidal Gear Friction Noise Source
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
    pistonFilter.Q.setValueAtTime(0.7, this.ctx.currentTime);

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
    fluidFilt.Q.setValueAtTime(1.0, this.ctx.currentTime);

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
        v.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
      });
      if (this.hydraulicVoice) {
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
      }
    }
    return this.enabled;
  }

  /**
   * Modulates subtle mechanical sounds for each joint (J1 to J6)
   * and linear sleeve actuator for the telescoping forearm piston.
   */
  updateJointMotors(jointVelocities = [], teleVelocity = 0) {
    if (!this.enabled) {
      if (this.ctx && this.jointVoices.length > 0) {
        this.jointVoices.forEach(v => v.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04));
        if (this.hydraulicVoice) {
          this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
          this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, this.ctx.currentTime, 0.04);
        }
      }
      return;
    }

    this.init();
    if (!this.ctx || this.jointVoices.length === 0) return;

    const curTime = this.ctx.currentTime;
    const schema = SOUND_SCHEMAS[this.currentSchemaKey] || SOUND_SCHEMAS.cyber_actuators;

    // 1. Update each joint J1 to J6 with subtle mechanical purr
    for (let i = 0; i < 6; i++) {
      const voice = this.jointVoices[i];
      if (!voice) continue;

      const vel = jointVelocities[i] || 0;
      const norm = Math.min(1.0, vel / 2.8);

      if (norm > 0.02) {
        const p = voice.profile;
        const targetFreq = p.baseFreq + norm * (p.maxFreq - p.baseFreq);
        const targetVol = Math.min(p.maxVol, norm * p.maxVol);

        voice.osc1.frequency.setTargetAtTime(targetFreq, curTime, 0.05);
        voice.osc2.frequency.setTargetAtTime(targetFreq * p.harmRatio, curTime, 0.05);
        voice.filter.frequency.setTargetAtTime(p.filterFreq + norm * 35, curTime, 0.05);
        voice.frictionFilter.frequency.setTargetAtTime(p.frictionFreq + norm * 45, curTime, 0.05);
        voice.gain.gain.setTargetAtTime(targetVol, curTime, 0.05);
      } else {
        voice.gain.gain.setTargetAtTime(0, curTime, 0.07);
      }
    }

    // 2. Update Telescopic Linear Piston / Hydraulic Voice
    if (this.hydraulicVoice) {
      const pCfg = schema.piston;
      const normTele = Math.min(1.0, teleVelocity / 1.5);
      if (normTele > 0.02) {
        this.wasPistonMoving = true;
        const carrierFreq = pCfg.carrierFreq + normTele * (pCfg.carrierMax - pCfg.carrierFreq);
        const carrierVol = normTele * pCfg.carrierVol;
        this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(carrierFreq, curTime, 0.05);
        this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(pCfg.filterFreq + normTele * 40, curTime, 0.05);
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(carrierVol, curTime, 0.05);

        const fluidFreq = pCfg.fluidCutoff + normTele * 60;
        const fluidVol = normTele * pCfg.fluidVol;
        this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(fluidFreq, curTime, 0.05);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(fluidVol, curTime, 0.05);
      } else {
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, curTime, 0.07);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, curTime, 0.07);

        // Soft valve release on stroke stop if enabled in schema
        if (this.wasPistonMoving) {
          this.wasPistonMoving = false;
          if (pCfg.hasChuff) {
            this.playPneumatic(false);
          }
        }
      }
    }
  }

  // Backward compatibility helper
  updateServoHum(totalSpeed = 0) {
    if (this.jointVoices.length === 0) return;
    const avg = totalSpeed / 6;
    this.updateJointMotors([avg, avg, avg, avg, avg, avg], 0);
  }

  // Soft subtle UI micro-tap on click
  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
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

    // 1. Soft warm low-frequency tonal body (gentle 260Hz -> 85Hz drop)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(520, t);
    filter.Q.setValueAtTime(0.7, t);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(240 + Math.random() * 40, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.042);

    // Subtle, low-level gain envelope
    oscGain.gain.setValueAtTime(0.024, t);
    oscGain.gain.exponentialRampToValueAtTime(0.0005, t + 0.045);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(this.masterGain || this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.048);

    // 2. Micro soft-air cushion texture (whisper quiet)
    if (this.noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(450, t);
      noiseFilter.Q.setValueAtTime(1.2, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.010, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.0005, t + 0.030);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain || this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.035);
    }
  }

  // Subtle pneumatic air puff
  playPneumatic(isClose = true) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.15);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isClose ? 950 : 650, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    noise.start();
    noise.stop(this.ctx.currentTime + 0.15);
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
}
