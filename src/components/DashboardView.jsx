import React, { useState } from 'react';
import { SCENARIOS, TODAY_GUIDANCE } from '../data/mockData';

export default function DashboardView({ scenarioKey, setTab, onTriggerSOS, onTriggerSafe }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;
  const [completedGuidance, setCompletedGuidance] = useState({ g1: true, g2: false, g3: false, g4: false });

  const toggleGuidance = (id) => {
    setCompletedGuidance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-200 pb-12">
      {/* Top Demo Scenario Pill & Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="space-y-2">
          {/* Demo Scenario Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="uppercase tracking-wider text-[11px]">DEMO SCENARIO</span>
            <span className="text-blue-300">·</span>
            <span className="font-normal text-slate-700">Flood response · {scenario.name}</span>
          </div>

          {/* Large Hero Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Stay informed. Stay safe.<br />
            <span className="text-blue-600">Help others.</span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base max-w-2xl font-normal leading-relaxed">
            Your emergency companion for faster decisions during floods and natural disasters.
          </p>
        </div>

        {/* Current Location Card (Top Right) */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex items-center gap-3.5 min-w-[280px]">
          <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              CURRENT LOCATION
            </div>
            <div className="text-sm md:text-base font-bold text-slate-900 leading-tight">
              {scenario.name}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Demo emergency scenario
            </div>
          </div>
        </div>
      </div>

      {/* Flood Alert Banner Card (Prominent Red Alert) */}
      <div className="bg-white rounded-2xl border border-red-200 border-l-4 border-l-red-600 p-5 md:p-6 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            {/* Water Waves Icon in Light Red Box */}
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
              </svg>
            </div>

            <div className="space-y-1">
              {/* Badges: HIGH RISK and FLOOD ALERT */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-red-700 text-white">
                  {scenario.riskLevel}
                </span>
                <span className="text-xs font-bold text-red-600 tracking-wide uppercase">
                  {scenario.riskType}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                {scenario.alertTitle}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-xs md:text-sm max-w-2xl leading-normal">
                {scenario.alertDesc}
              </p>

              {/* Timestamp */}
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 pt-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Updated {scenario.updatedTime}</span>
              </div>
            </div>
          </div>

          {/* Action Button: I NEED HELP */}
          <div className="flex-shrink-0">
            <button
              onClick={onTriggerSOS}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm tracking-wide shadow-md shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>I NEED HELP</span>
              <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Section: What do you need right now? */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-slate-900">
          What do you need right now?
        </h3>

        {/* 4 Accessible Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: SOS — I NEED HELP */}
          <div
            onClick={onTriggerSOS}
            className="bg-white rounded-2xl border border-red-200/80 hover:border-red-400 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-3.5 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                SOS — I NEED HELP
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Share my emergency location
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:translate-x-0.5 transition-transform">
              <span>Activate SOS</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2: I AM SAFE */}
          <div
            onClick={onTriggerSafe}
            className="bg-white rounded-2xl border border-emerald-200/80 hover:border-emerald-400 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3.5 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                I AM SAFE
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Notify my emergency contacts
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:translate-x-0.5 transition-transform">
              <span>Mark as safe</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3: FIND SAFE PLACE */}
          <div
            onClick={() => setTab('shelters')}
            className="bg-white rounded-2xl border border-blue-200/80 hover:border-blue-400 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                FIND SAFE PLACE
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Find nearby shelters and safe zones
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
              <span>Explore shelters</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 4: HELP SOMEONE */}
          <div
            onClick={() => setTab('report')}
            className="bg-white rounded-2xl border border-amber-200/80 hover:border-amber-400 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-3.5 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                HELP SOMEONE
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Report a person in danger
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:translate-x-0.5 transition-transform">
              <span>Send a report</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row: Today's Safety Guidance + Stay Prepared Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Today's Safety Guidance */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold text-slate-900">
              Today's safety guidance
            </h3>
            <button
              onClick={() => setTab('guide')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
            >
              <span>View full guide</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {TODAY_GUIDANCE.map((item) => {
                const isChecked = !!completedGuidance[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleGuidance(item.id)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50/80 transition-colors cursor-pointer select-none"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-400 border border-slate-200'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.num}
                      </div>
                      <div className={`text-xs md:text-sm font-semibold text-slate-800 ${isChecked ? 'line-through text-slate-400' : ''}`}>
                        {item.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Stay Prepared (Dark Card) */}
        <div className="space-y-3">
          <h3 className="text-base md:text-lg font-bold text-slate-900">
            Stay prepared
          </h3>

          <div
            onClick={() => setTab('guide')}
            className="bg-[#0B132B] text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between h-[calc(100%-2rem)] group border border-slate-800"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                Offline Survival Guide
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Essential steps for floods, earthquakes, cyclones and heatwaves.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                OFFLINE ACCESS PLANNED FOR PRODUCTION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Footer Links */}
      <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setTab('community')}
          className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 transition-colors"
        >
          <span className="text-blue-500 font-bold">≋</span>
          <span>Community updates</span>
          <span className="text-slate-400">→</span>
        </button>

        <button
          onClick={() => setTab('contacts')}
          className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 transition-colors"
        >
          <span className="text-slate-500 font-bold">📞</span>
          <span>Emergency contacts</span>
          <span className="text-slate-400">→</span>
        </button>

        <button
          onClick={() => setTab('about')}
          className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 transition-colors"
        >
          <span className="text-emerald-500 font-bold">🛡</span>
          <span>How RESQ works</span>
          <span className="text-slate-400">→</span>
        </button>
      </div>
    </div>
  );
}
