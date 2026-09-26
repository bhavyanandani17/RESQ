import React, { useState, useEffect } from 'react';
import { SCENARIOS } from '../data/mockData';
import { audioEngine } from '../utils/audioUtils';

export default function SOSModal({ isOpen, onClose, scenarioKey }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;
  
  const [countdown, setCountdown] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [sosDispatched, setSosDispatched] = useState(false);
  const [sirenPlaying, setSirenPlaying] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [ticketId, setTicketId] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset state on close
      setIsCountingDown(false);
      setCountdown(5);
      setSosDispatched(false);
      if (sirenPlaying) {
        audioEngine.stopSiren();
        setSirenPlaying(false);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    let timer = null;
    if (isCountingDown && countdown > 0) {
      audioEngine.playBeep(600 + (5 - countdown) * 120, 0.12);
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (isCountingDown && countdown === 0) {
      // Dispatch SOS!
      setIsCountingDown(false);
      setSosDispatched(true);
      setTicketId(`SOS-${Math.floor(1000 + Math.random() * 9000)}`);
      audioEngine.startSiren();
      setSirenPlaying(true);
    }
    return () => clearTimeout(timer);
  }, [isCountingDown, countdown]);

  if (!isOpen) return null;

  const startCountdown = () => {
    setCountdown(5);
    setIsCountingDown(true);
  };

  const cancelCountdown = () => {
    setIsCountingDown(false);
    setCountdown(5);
  };

  const toggleCondition = (cond) => {
    setSelectedConditions(prev =>
      prev.includes(cond) ? prev.filter(c => c !== cond) : [...prev, cond]
    );
  };

  const toggleSiren = () => {
    if (sirenPlaying) {
      audioEngine.stopSiren();
      setSirenPlaying(false);
    } else {
      audioEngine.startSiren();
      setSirenPlaying(true);
    }
  };

  const copyDistressText = () => {
    const text = `🚨 EMERGENCY SOS DISTRESS SIGNAL 🚨\nName: User in Danger\nLocation: ${scenario.name} (${scenario.coordinates.lat}, ${scenario.coordinates.lng})\nCondition: ${selectedConditions.join(', ') || 'Flooding danger'}\nBattery: 78% | Network: 4G\nPlease relay to NDRF 1078 or Police 112 immediately! Ref: #${ticketId || 'SOS-9912'}`;
    navigator.clipboard?.writeText(text);
    alert("Distress message copied to clipboard! You can paste it into SMS or WhatsApp.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-red-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-red-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-700/80 flex items-center justify-center text-white font-black text-sm">
              SOS
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Emergency Rescue Dispatch</h3>
              <p className="text-[11px] text-red-100">Direct satellite & telemetry broadcast</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-red-700/50 hover:bg-red-700 text-white flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!sosDispatched && !isCountingDown && (
            <div className="text-center space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Critical Danger Mode
                </span>
                <h4 className="text-xl font-black text-slate-900">
                  Tap to Broadcast Distress Signal
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Hold or tap below. A 5-second countdown will start before alerting simulated emergency services.
                </p>
              </div>

              {/* Huge Accessible SOS Button */}
              <div className="flex justify-center py-2">
                <button
                  onClick={startCountdown}
                  className="w-40 h-40 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-3xl shadow-xl shadow-red-600/40 ring-8 ring-red-100 flex flex-col items-center justify-center gap-1 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
                >
                  <svg className="w-10 h-10 group-hover:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  </svg>
                  <span>SOS</span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">
                    PRESS HERE
                  </span>
                </button>
              </div>

              {/* Auto-detected Telemetry Details */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left text-xs space-y-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Telemetry Payload
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span>📍</span>
                    <span className="font-semibold">{scenario.coordinates.lat}°N, {scenario.coordinates.lng}°E</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🔋</span>
                    <span>Battery: <strong>78% (Healthy)</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>📶</span>
                    <span>Network: <strong>4G Signal Strong</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🌊</span>
                    <span>Risk: <strong className="text-red-600">{scenario.riskLevel}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Countdown State */}
          {isCountingDown && (
            <div className="text-center py-6 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider animate-pulse">
                  ARMING DISTRESS BEACON...
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  Transmitting coordinates in
                </h4>
              </div>

              <div className="w-28 h-28 mx-auto rounded-full bg-red-50 border-4 border-red-600 flex items-center justify-center text-5xl font-black text-red-600 animate-pulse shadow-inner">
                {countdown}
              </div>

              <p className="text-xs text-slate-500">
                Loud distress tone sounding. Press cancel immediately if triggered by accident.
              </p>

              <div>
                <button
                  onClick={cancelCountdown}
                  className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm tracking-wide transition"
                >
                  CANCEL TRANSMISSION
                </button>
              </div>
            </div>
          )}

          {/* SOS Dispatched State */}
          {sosDispatched && (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-red-900">
                  DISTRESS SIGNAL ACTIVE
                </h4>
                <div className="text-xs font-semibold text-red-700">
                  Dispatch Ticket: #{ticketId}
                </div>
                <p className="text-xs text-red-600 leading-relaxed max-w-sm mx-auto">
                  Coordinates transmitted to simulated NDRF Control Desk & Local Relief Sector. Stay in your safe position.
                </p>
              </div>

              {/* Siren Control & Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={toggleSiren}
                  className={`py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition ${
                    sirenPlaying
                      ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                      : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <span>{sirenPlaying ? '🔊 Stop Siren' : '🔈 Play Loud Siren'}</span>
                </button>

                <button
                  onClick={copyDistressText}
                  className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>📋 Share via SMS/WhatsApp</span>
                </button>
              </div>

              {/* Quick Medical / Situation Tags */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">
                  Add Critical Triage Tags for Rescuers:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Trapped on Roof', 'Infant with Me', 'Elderly Person', 'Diabetic / Insulin Needed', 'Severe Bleeding', 'Wheelchair User'].map(tag => {
                    const isSelected = selectedConditions.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleCondition(tag)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition ${
                          isSelected
                            ? 'bg-red-600 text-white border-red-700 font-bold'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Hotline Direct Links */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Need immediate voice contact?</span>
                <a
                  href="tel:112"
                  className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <span>Call Police 112</span>
                  <span>📞</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Simulation Mode · No live 911/112 dial</span>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 hover:text-slate-900"
          >
            Close window
          </button>
        </div>
      </div>
    </div>
  );
}
