import React from 'react';

export default function AboutModal({ setTab }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-3xl mx-auto pb-12">
      {/* Back button */}
      <div>
        <button
          onClick={() => setTab('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <span>Back to dashboard</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2H8c-1.1 0-2-.9-2-2s.9-2 2-2h2V9c0-1.1.9-2 2-2z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900">RESQ — Disaster Survival & Rescue</h2>
            <p className="text-xs md:text-sm text-slate-500">Hackathon Edition · High-Resilience Emergency Frontend</p>
          </div>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-5">
          <h3 className="text-base font-bold text-slate-900">Mission & Purpose</h3>
          <p>
            During severe natural disasters like floods, cyclones, and earthquakes, communication infrastructure degrades rapidly. 
            <strong> RESQ</strong> is designed as a mission-critical, high-contrast, zero-confusion frontend that allows citizens to make 
            split-second decisions: finding high-elevation relief camps, triggering broadcast SOS alerts with verified GPS coordinates, 
            notifying families with a single tap, and accessing offline-cached triage guidance.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">Key Engineering Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900">🚨 Web Audio SOS Engine</div>
              <p className="text-slate-500 text-xs mt-1">Generates audible emergency distress sirens and countdown beeps using the native Web Audio API.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900">🗺 Simulated Risk Radar Map</div>
              <p className="text-slate-500 text-xs mt-1">Vector SVG map displaying real-time risk rings, river inundation zones, and verified shelter routing.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900">🤖 AI Emergency Assistant</div>
              <p className="text-slate-500 text-xs mt-1">Instant rule-based first-aid triage and spoken voice synthesis (Text-to-Speech) for low-light survival.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900">💾 Offline-First Architecture</div>
              <p className="text-slate-500 text-xs mt-1">Pre-cached life manuals for flood, earthquake, cyclone, and CPR that function without mobile network.</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs leading-relaxed mt-4">
            <strong>⚠️ Hackathon Demo Disclaimer:</strong> This application displays realistic simulated scenario data for demonstration purposes. In a real life-threatening emergency, always contact official national emergency numbers: <strong>112 (Police/Unified)</strong>, <strong>108 (Ambulance)</strong>, or <strong>1078 (NDRF)</strong>.
          </div>
        </div>
      </div>
    </div>
  );
}
