// Web Audio API & Speech Synthesis for Emergency Audio Assistance

class EmergencyAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.sirenOscillator = null;
    this.sirenGain = null;
    this.isSirenPlaying = false;
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Play single countdown warning beep
  playBeep(freq = 880, duration = 0.15) {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio feedback disabled or restricted:", e);
    }
  }

  // Play soothing safe chime
  playSafeChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.4);
      });
    } catch (e) {
      console.warn("Audio chime error:", e);
    }
  }

  // Start continuous emergency siren modulation
  startSiren() {
    if (this.isSirenPlaying) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      this.isSirenPlaying = true;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';

      // Modulate frequency between 600Hz and 1200Hz
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(650, now);
      
      // Periodic pitch modulation
      let time = now;
      for (let i = 0; i < 20; i++) {
        osc.frequency.linearRampToValueAtTime(1150, time + 0.5);
        osc.frequency.linearRampToValueAtTime(650, time + 1.0);
        time += 1.0;
      }

      gain.gain.setValueAtTime(0.25, now);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);

      this.sirenOscillator = osc;
      this.sirenGain = gain;
    } catch (e) {
      console.warn("Siren sound error:", e);
    }
  }

  stopSiren() {
    if (this.sirenOscillator) {
      try {
        this.sirenOscillator.stop();
        this.sirenOscillator.disconnect();
      } catch (e) {}
      this.sirenOscillator = null;
    }
    this.isSirenPlaying = false;
  }

  // Text-To-Speech for Emergency instructions
  speak(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*#_~]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis unavailable:", e);
    }
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const audioEngine = new EmergencyAudioEngine();
