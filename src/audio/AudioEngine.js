// =============================================================================
// TITAN-6X MULTI-SCHEMA ACOUSTIC SOUND ENGINE
// =============================================================================

export const SOUND_SCHEMAS = {
  cyber_actuators: {
    id: 'cyber_actuators',
    name: 'Cyber Actuators (High-Tech Electromagnetic)',
    desc: 'Modern, sleek, electromagnetic servo phase whirr with magnetic flux glide',
    joints: [
      { name: 'J1 (Base)', baseFreq: 90, maxFreq: 135, filterFreq: 320, wave1: 'sine', wave2: 'triangle', harmRatio: 1.5, vol1: 0.7, vol2: 0.25, maxVol: 0.016 },
      { name: 'J2 (Shoulder)', baseFreq: 120, maxFreq: 175, filterFreq: 360, wave1: 'sine', wave2: 'sine', harmRatio: 1.5, vol1: 0.75, vol2: 0.25, maxVol: 0.015 },
      { name: 'J3 (Elbow)', baseFreq: 155, maxFreq: 220, filterFreq: 420, wave1: 'sine', wave2: 'sine', harmRatio: 1.5, vol1: 0.75, vol2: 0.25, maxVol: 0.014 },
      { name: 'J4 (Forearm)', baseFreq: 195, maxFreq: 275, filterFreq: 490, wave1: 'sine', wave2: 'sine', harmRatio: 1.5, vol1: 0.75, vol2: 0.25, maxVol: 0.013 },
      { name: 'J5 (Wrist)', baseFreq: 240, maxFreq: 335, filterFreq: 570, wave1: 'sine', wave2: 'sine', harmRatio: 1.5, vol1: 0.8, vol2: 0.2, maxVol: 0.012 },
      { name: 'J6 (Flange)', baseFreq: 290, maxFreq: 400, filterFreq: 660, wave1: 'sine', wave2: 'sine', harmRatio: 1.5, vol1: 0.8, vol2: 0.2, maxVol: 0.011 }
    ],
    piston: { carrierFreq: 115, carrierMax: 165, filterFreq: 280, fluidCutoff: 300, carrierVol: 0.015, fluidVol: 0.012, hasChuff: true }
  },
  precision_servos: {
    id: 'precision_servos',
    name: 'Precision Brushless Servos (Fanuc / ABB)',
    desc: 'Dual-harmonic gear mesh (f0 + 2f0) with metallic cycloidal gear bite',
    joints: [
      { name: 'J1 (Base)', baseFreq: 82, maxFreq: 122, filterFreq: 240, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.32, maxVol: 0.017 },
      { name: 'J2 (Shoulder)', baseFreq: 108, maxFreq: 156, filterFreq: 280, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.32, maxVol: 0.016 },
      { name: 'J3 (Elbow)', baseFreq: 138, maxFreq: 196, filterFreq: 330, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.32, maxVol: 0.015 },
      { name: 'J4 (Forearm)', baseFreq: 172, maxFreq: 244, filterFreq: 390, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.32, maxVol: 0.014 },
      { name: 'J5 (Wrist)', baseFreq: 212, maxFreq: 298, filterFreq: 460, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.32, maxVol: 0.013 },
      { name: 'J6 (Flange)', baseFreq: 258, maxFreq: 362, filterFreq: 540, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.72, vol2: 0.32, maxVol: 0.012 }
    ],
    piston: { carrierFreq: 92, carrierMax: 138, filterFreq: 220, fluidCutoff: 260, carrierVol: 0.016, fluidVol: 0.011, hasChuff: true }
  },
  heavy_hydraulics: {
    id: 'heavy_hydraulics',
    name: 'Heavy Industrial Machinery & Hydraulics',
    desc: 'Deep sub-bass cast iron planetary gears and heavy hydraulic fluid pressure',
    joints: [
      { name: 'J1 (Base)', baseFreq: 64, maxFreq: 98, filterFreq: 180, wave1: 'sawtooth', wave2: 'triangle', harmRatio: 2.0, vol1: 0.6, vol2: 0.4, maxVol: 0.022 },
      { name: 'J2 (Shoulder)', baseFreq: 88, maxFreq: 130, filterFreq: 210, wave1: 'sawtooth', wave2: 'triangle', harmRatio: 2.0, vol1: 0.65, vol2: 0.35, maxVol: 0.020 },
      { name: 'J3 (Elbow)', baseFreq: 115, maxFreq: 165, filterFreq: 260, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.7, vol2: 0.3, maxVol: 0.018 },
      { name: 'J4 (Forearm)', baseFreq: 145, maxFreq: 205, filterFreq: 310, wave1: 'triangle', wave2: 'sine', harmRatio: 2.0, vol1: 0.7, vol2: 0.3, maxVol: 0.016 },
      { name: 'J5 (Wrist)', baseFreq: 180, maxFreq: 250, filterFreq: 370, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.75, vol2: 0.25, maxVol: 0.014 },
      { name: 'J6 (Flange)', baseFreq: 220, maxFreq: 305, filterFreq: 440, wave1: 'sine', wave2: 'sine', harmRatio: 2.0, vol1: 0.75, vol2: 0.25, maxVol: 0.013 }
    ],
    piston: { carrierFreq: 76, carrierMax: 118, filterFreq: 180, fluidCutoff: 320, carrierVol: 0.022, fluidVol: 0.018, hasChuff: true }
  },
  stepper_cobot: {
    id: 'stepper_cobot',
    name: 'Laboratory Cobot (Smooth Stepper Drives)',
    desc: 'Musical, pure, whisper-clean micro-stepping sinusoidal resonance (UR-style)',
    joints: [
      { name: 'J1 (Base)', baseFreq: 110, maxFreq: 150, filterFreq: 280, wave1: 'sine', wave2: 'sine', harmRatio: 3.0, vol1: 0.85, vol2: 0.15, maxVol: 0.014 },
      { name: 'J2 (Shoulder)', baseFreq: 138, maxFreq: 190, filterFreq: 330, wave1: 'sine', wave2: 'sine', harmRatio: 3.0, vol1: 0.85, vol2: 0.15, maxVol: 0.013 },
      { name: 'J3 (Elbow)', baseFreq: 175, maxFreq: 240, filterFreq: 390, wave1: 'sine', wave2: 'sine', harmRatio: 3.0, vol1: 0.85, vol2: 0.15, maxVol: 0.012 },
      { name: 'J4 (Forearm)', baseFreq: 220, maxFreq: 300, filterFreq: 460, wave1: 'sine', wave2: 'sine', harmRatio: 3.0, vol1: 0.85, vol2: 0.15, maxVol: 0.011 },
      { name: 'J5 (Wrist)', baseFreq: 275, maxFreq: 375, filterFreq: 540, wave1: 'sine', wave2: 'sine', harmRatio: 3.0, vol1: 0.9, vol2: 0.1, maxVol: 0.010 },
      { name: 'J6 (Flange)', baseFreq: 330, maxFreq: 450, filterFreq: 620, wave1: 'sine', wave2: 'sine', harmRatio: 3.0, vol1: 0.9, vol2: 0.1, maxVol: 0.010 }
    ],
    piston: { carrierFreq: 130, carrierMax: 180, filterFreq: 260, fluidCutoff: 240, carrierVol: 0.012, fluidVol: 0.008, hasChuff: false }
  },
  stealth_whisper: {
    id: 'stealth_whisper',
    name: 'Stealth Whisper Mode (Ultra Subtle)',
    desc: 'Ultra-quiet low-frequency haptic hum, perfect for silent monitoring',
    joints: [
      { name: 'J1 (Base)', baseFreq: 70, maxFreq: 100, filterFreq: 160, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 1.0, vol2: 0.0, maxVol: 0.006 },
      { name: 'J2 (Shoulder)', baseFreq: 90, maxFreq: 125, filterFreq: 180, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 1.0, vol2: 0.0, maxVol: 0.006 },
      { name: 'J3 (Elbow)', baseFreq: 110, maxFreq: 150, filterFreq: 200, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 1.0, vol2: 0.0, maxVol: 0.005 },
      { name: 'J4 (Forearm)', baseFreq: 135, maxFreq: 180, filterFreq: 230, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 1.0, vol2: 0.0, maxVol: 0.005 },
      { name: 'J5 (Wrist)', baseFreq: 160, maxFreq: 210, filterFreq: 260, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 1.0, vol2: 0.0, maxVol: 0.004 },
      { name: 'J6 (Flange)', baseFreq: 190, maxFreq: 250, filterFreq: 300, wave1: 'sine', wave2: 'sine', harmRatio: 1.0, vol1: 1.0, vol2: 0.0, maxVol: 0.004 }
    ],
    piston: { carrierFreq: 80, carrierMax: 110, filterFreq: 160, fluidCutoff: 180, carrierVol: 0.006, fluidVol: 0.004, hasChuff: false }
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
        v.osc1.frequency.setTargetAtTime(jConfig.baseFreq, curTime, 0.05);
        v.osc2.frequency.setTargetAtTime(jConfig.baseFreq * jConfig.harmRatio, curTime, 0.05);
        v.filter.frequency.setTargetAtTime(jConfig.filterFreq, curTime, 0.05);
        v.gain1.gain.setTargetAtTime(jConfig.vol1, curTime, 0.05);
        v.gain2.gain.setTargetAtTime(jConfig.vol2, curTime, 0.05);
      }

      if (this.hydraulicVoice) {
        const p = schema.piston;
        this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(p.carrierFreq, curTime, 0.05);
        this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(p.filterFreq, curTime, 0.05);
        this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(p.fluidCutoff, curTime, 0.05);
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

  initJointSynthesizers() {
    if (!this.ctx || this.jointVoices.length > 0) return;
    const schema = SOUND_SCHEMAS[this.currentSchemaKey] || SOUND_SCHEMAS.cyber_actuators;

    // 1. Create 6 distinct dual-harmonic joint voices
    for (let i = 0; i < 6; i++) {
      const profile = schema.joints[i];

      const osc1 = this.ctx.createOscillator();
      osc1.type = profile.wave1;
      osc1.frequency.setValueAtTime(profile.baseFreq, this.ctx.currentTime);

      const osc2 = this.ctx.createOscillator();
      osc2.type = profile.wave2;
      osc2.frequency.setValueAtTime(profile.baseFreq * profile.harmRatio, this.ctx.currentTime);

      const gain1 = this.ctx.createGain();
      gain1.gain.setValueAtTime(profile.vol1, this.ctx.currentTime);

      const gain2 = this.ctx.createGain();
      gain2.gain.setValueAtTime(profile.vol2, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.4, this.ctx.currentTime);

      const voiceGain = this.ctx.createGain();
      voiceGain.gain.setValueAtTime(0, this.ctx.currentTime);

      osc1.connect(gain1);
      gain1.connect(filter);

      osc2.connect(gain2);
      gain2.connect(filter);

      filter.connect(voiceGain);
      voiceGain.connect(this.masterGain);

      osc1.start();
      osc2.start();

      this.jointVoices.push({
        osc1,
        osc2,
        gain1,
        gain2,
        filter,
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

    const pistonGain = this.ctx.createGain();
    pistonGain.gain.setValueAtTime(0, this.ctx.currentTime);

    pistonCarrier.connect(pistonFilter);
    pistonFilter.connect(pistonGain);
    pistonGain.connect(this.masterGain);
    pistonCarrier.start();

    // Fluid Flow / Air Buffer
    const pBufferLen = Math.floor(this.ctx.sampleRate * 1.5);
    const pBuffer = this.ctx.createBuffer(1, pBufferLen, this.ctx.sampleRate);
    const pData = pBuffer.getChannelData(0);
    let bOut = 0.0;
    for (let i = 0; i < pBufferLen; i++) {
      const white = Math.random() * 2 - 1;
      bOut = bOut * 0.95 + white * 0.05;
      pData[i] = bOut * 2.8;
    }

    const fluidSrc = this.ctx.createBufferSource();
    fluidSrc.buffer = pBuffer;
    fluidSrc.loop = true;

    const fluidFilt = this.ctx.createBiquadFilter();
    fluidFilt.type = 'bandpass';
    fluidFilt.frequency.setValueAtTime(pCfg.fluidCutoff, this.ctx.currentTime);
    fluidFilt.Q.setValueAtTime(1.2, this.ctx.currentTime);

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
   * Modulates individual dual-harmonic voices for each joint (J1 to J6)
   * and linear actuator for the telescoping forearm piston based on current schema.
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

    // 1. Update each joint J1 to J6 individually with current sound schema
    for (let i = 0; i < 6; i++) {
      const voice = this.jointVoices[i];
      if (!voice) continue;

      const vel = jointVelocities[i] || 0;
      const norm = Math.min(1.0, vel / 3.0);

      if (norm > 0.018) {
        const p = voice.profile;
        const targetFreq = p.baseFreq + norm * (p.maxFreq - p.baseFreq);
        const targetVol = Math.min(p.maxVol, norm * p.maxVol);

        voice.osc1.frequency.setTargetAtTime(targetFreq, curTime, 0.045);
        voice.osc2.frequency.setTargetAtTime(targetFreq * p.harmRatio, curTime, 0.045);
        voice.filter.frequency.setTargetAtTime(p.filterFreq + norm * 70, curTime, 0.045);
        voice.gain.gain.setTargetAtTime(targetVol, curTime, 0.045);
      } else {
        voice.gain.gain.setTargetAtTime(0, curTime, 0.06);
      }
    }

    // 2. Update Telescopic Linear Piston / Hydraulic Voice
    if (this.hydraulicVoice) {
      const pCfg = schema.piston;
      const normTele = Math.min(1.0, teleVelocity / 1.6);
      if (normTele > 0.018) {
        this.wasPistonMoving = true;
        const carrierFreq = pCfg.carrierFreq + normTele * (pCfg.carrierMax - pCfg.carrierFreq);
        const carrierVol = normTele * pCfg.carrierVol;
        this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(carrierFreq, curTime, 0.045);
        this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(pCfg.filterFreq + normTele * 100, curTime, 0.045);
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(carrierVol, curTime, 0.045);

        const fluidFreq = pCfg.fluidCutoff + normTele * 140;
        const fluidVol = normTele * pCfg.fluidVol;
        this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(fluidFreq, curTime, 0.045);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(fluidVol, curTime, 0.045);
      } else {
        this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0, curTime, 0.06);
        this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0, curTime, 0.06);

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

  // Satisfying bubble pop / ball burst sound
  playBurst() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800 + Math.random() * 200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
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
