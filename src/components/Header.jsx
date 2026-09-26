import React, { useState } from 'react';
import { SCENARIOS } from '../data/mockData';
import { audioEngine } from '../utils/audioUtils';

export default function Header({
  scenarioKey,
  setScenarioKey,
  onOpenMobileMenu,
  onOpenNotifications,
  isOfflineMode,
  setIsOfflineMode,
  setTab
}) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isSirenTesting, setIsSirenTesting] = useState(false);
  const currentScenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;

  const toggleSirenTest = () => {
    if (isSirenTesting) {
      audioEngine.stopSiren();
      setIsSirenTesting(false);
    } else {
      audioEngine.startSiren();
      setIsSirenTesting(true);
      // Automatically stop after 4 seconds
      setTimeout(() => {
        audioEngine.stopSiren();
        setIsSirenTesting(false);
      }, 4000);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 px-4 md:px-8 py-3 flex items-center justify-between shadow-xs">
      {/* Left: Mobile hamburger & Titles */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
          aria-label="Open navigation menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <div>
          <h1 className="text-base md:text-lg font-bold text-slate-900 leading-tight flex items-center gap-2">
            <span>Disaster Survival Assistant</span>
            <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded font-medium bg-blue-50 text-blue-700 border border-blue-200">
              Live Monitor
            </span>
          </h1>
          <p className="text-xs text-slate-500 hidden sm:block">
            Stay informed. Stay safe. Help others.
          </p>
        </div>
      </div>

      {/* Right Controls: Location Dropdown, Risk Badge, Siren Test, Bell */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Audio Siren Tester Pill */}
        <button
          onClick={toggleSirenTest}
          title="Test emergency loud alarm buzzer"
          className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isSirenTesting
              ? 'bg-red-600 text-white border-red-700 animate-pulse'
              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <svg className={`w-3.5 h-3.5 ${isSirenTesting ? 'text-white' : 'text-red-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          <span>{isSirenTesting ? 'Siren On (4s)' : 'Test Siren'}</span>
        </button>

        {/* Offline Mode Toggle Pill */}
        <button
          onClick={() => setIsOfflineMode(!isOfflineMode)}
          title="Toggle simulated offline cache mode"
          className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isOfflineMode
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isOfflineMode ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
          <span>{isOfflineMode ? 'Offline Cached' : 'Online Mode'}</span>
        </button>

        {/* Location Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs md:text-sm font-semibold text-slate-800 transition"
          >
            <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="truncate max-w-[100px] sm:max-w-none">{currentScenario.shortName}</span>
            <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {showLocationDropdown && (
            <div className="absolute right-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3 py-1.5 border-b border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Switch Disaster Region (Demo)
                </span>
              </div>
              {Object.keys(SCENARIOS).map((key) => {
                const sc = SCENARIOS[key];
                const isSelected = scenarioKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setScenarioKey(key);
                      setShowLocationDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition ${
                      isSelected ? 'bg-blue-50/70 font-bold text-blue-900' : 'text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{sc.name}</div>
                      <div className="text-[10px] text-slate-400">{sc.riskType}</div>
                    </div>
                    {isSelected && (
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* High Risk Status Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/90 text-amber-800 text-xs font-bold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
          <span className="whitespace-nowrap tracking-wide">{currentScenario.riskLevel} · DEMO</span>
        </div>

        {/* Notification Bell */}
        <button
          onClick={onOpenNotifications}
          className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 relative transition"
          aria-label="View notifications"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full ring-2 ring-white"></span>
        </button>
      </div>
    </header>
  );
}
