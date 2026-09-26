import React, { useState } from 'react';
import { SCENARIOS } from '../data/mockData';
import { audioEngine } from '../utils/audioUtils';

export default function SafeCheckModal({ isOpen, onClose, scenarioKey }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;
  
  const [isSafeMarked, setIsSafeMarked] = useState(false);
  const [customNote, setCustomNote] = useState('Reached high ground safely. With family. Battery at 78%.');
  const [contacts, setContacts] = useState([
    { name: 'Mom & Family', phone: '+91 98260 11234', status: 'Delivered', time: 'Just now' },
    { name: 'Rohit (Brother)', phone: '+91 94251 55678', status: 'Delivered', time: 'Just now' },
    { name: 'Office Emergency Group', phone: '+91 98110 99887', status: 'Delivered', time: 'Just now' }
  ]);

  if (!isOpen) return null;

  const handleConfirmSafe = () => {
    setIsSafeMarked(true);
    audioEngine.playSafeChime();
  };

  const copySafeBroadcast = () => {
    const text = `🟢 I AM SAFE NOTICE 🟢\nStatus: Safe and accounted for\nLocation: Near ${scenario.name}\nNote: "${customNote}"\nBattery: 78% · Sent via RESQ Disaster Assistant`;
    navigator.clipboard?.writeText(text);
    alert("Safe status notice copied to clipboard! You can send it to your WhatsApp groups.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-emerald-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-emerald-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
              <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">I Am Safe — Broadcast</h3>
              <p className="text-[11px] text-emerald-100">Notify loved ones & rescue manifests</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-700/50 hover:bg-emerald-700 text-white flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isSafeMarked ? (
            <div className="text-center space-y-5">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 text-3xl">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900">
                  Are you in a secure location?
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  One tap will mark your profile as safe in the local district register and notify your predefined emergency contacts.
                </p>
              </div>

              <div className="text-left space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Optional note for contacts:
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-hidden"
                  placeholder="e.g. Reached high ground with family, battery low..."
                />
              </div>

              <button
                onClick={handleConfirmSafe}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-base shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
              >
                ✓ YES, MARK ME AS SAFE
              </button>
            </div>
          ) : (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              {/* Confirmed Safety Card */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-black text-emerald-900">
                  YOU ARE MARKED AS SAFE
                </h4>
                <p className="text-xs text-emerald-700">
                  District Disaster Registry Updated · Timestamp: {new Date().toLocaleTimeString()}
                </p>
                <div className="bg-white/90 rounded-xl p-3 text-xs text-slate-700 font-medium border border-emerald-100 italic">
                  "{customNote}"
                </div>
              </div>

              {/* Notified Contacts List */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex justify-between items-center">
                  <span>Emergency Contacts Notified</span>
                  <span className="text-emerald-600 font-bold">3 / 3 Sent ✓✓</span>
                </div>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                  {contacts.map((c, i) => (
                    <div key={i} className="p-3 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-800">{c.name}</div>
                        <div className="text-slate-500 text-[11px]">{c.phone}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                        {c.status} ✓✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={copySafeBroadcast}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <span>📋 Copy & Share Status Card (WhatsApp)</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Encrypted check-in log</span>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 hover:text-slate-900"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
