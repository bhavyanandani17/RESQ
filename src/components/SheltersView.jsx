import React, { useState } from 'react';
import { SCENARIOS } from '../data/mockData';

export default function SheltersView({ scenarioKey, setTab }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;
  const [selectedShelterId, setSelectedShelterId] = useState(scenario.shelters[0]?.id || 'shelter-1');
  const [filterType, setFilterType] = useState('all');

  const selectedShelter = scenario.shelters.find(s => s.id === selectedShelterId) || scenario.shelters[0];

  const filteredShelters = scenario.shelters.filter(s => {
    if (filterType === 'medical') return s.services.some(srv => srv.toLowerCase().includes('medic') || srv.toLowerCase().includes('first aid'));
    if (filterType === 'food') return s.services.some(srv => srv.toLowerCase().includes('food') || srv.toLowerCase().includes('water'));
    if (filterType === 'pets') return s.services.some(srv => srv.toLowerCase().includes('pet'));
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200 pb-12">
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

      {/* Header Block */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11"/>
          </svg>
        </div>

        <div className="space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            NEARBY SAFETY · SIMULATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Find a Safe Place
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Explore example shelters and simulated risk zones around {scenario.shortName}. These are not verified evacuation routes.
          </p>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider mr-1">Filter:</span>
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-lg font-bold border transition ${
            filterType === 'all'
              ? 'bg-slate-900 text-white border-slate-900'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Shelters ({scenario.shelters.length})
        </button>
        <button
          onClick={() => setFilterType('medical')}
          className={`px-3 py-1.5 rounded-lg font-bold border transition ${
            filterType === 'medical'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Medical Support
        </button>
        <button
          onClick={() => setFilterType('food')}
          className={`px-3 py-1.5 rounded-lg font-bold border transition ${
            filterType === 'food'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Food & Drinking Water
        </button>
        <button
          onClick={() => setFilterType('pets')}
          className={`px-3 py-1.5 rounded-lg font-bold border transition ${
            filterType === 'pets'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Pet Friendly
        </button>
      </div>

      {/* SIMULATED MAP CONTAINER (Interactive SVG vector map matching Image 4) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm relative">
        {/* Map Top Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-slate-200 shadow-sm text-slate-800 text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>SIMULATED MAP</span>
          </div>
        </div>

        {/* Map Vector Rendering */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-[#E8F0E8] overflow-hidden select-none">
          {/* Subtle Grid / Roads */}
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Patterns for urban blocks */}
              <pattern id="streetGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D3E2D3" strokeWidth="1"/>
              </pattern>
              {/* Radial gradients for risk zones */}
              <radialGradient id="highRiskGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.45"/>
                <stop offset="70%" stopColor="#DC2626" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.05"/>
              </radialGradient>
              <radialGradient id="mediumRiskGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45"/>
                <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.05"/>
              </radialGradient>
              <radialGradient id="safeZoneGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.45"/>
                <stop offset="70%" stopColor="#10B981" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.05"/>
              </radialGradient>
            </defs>

            {/* Base land grid */}
            <rect width="800" height="450" fill="#EBF4EB"/>
            <rect width="800" height="450" fill="url(#streetGrid)"/>

            {/* Simulated River / Water body curve (Chambal River) */}
            <path
              d="M 640 -20 C 650 80, 720 120, 710 210 C 700 290, 770 340, 760 470 L 820 470 L 820 -20 Z"
              fill="#93C5FD"
              stroke="#60A5FA"
              strokeWidth="4"
              opacity="0.85"
            />
            {/* Secondary canal or inlet */}
            <path
              d="M 330 80 C 370 120, 420 130, 470 110"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M 330 80 C 370 120, 420 130, 470 110"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="3"
            />

            {/* Major Arterial Roads */}
            <path d="M 0 220 Q 300 200, 680 230" fill="none" stroke="#FFFFFF" strokeWidth="9"/>
            <path d="M 0 220 Q 300 200, 680 230" fill="none" stroke="#CBD5E1" strokeWidth="2"/>
            <path d="M 280 0 Q 300 230, 360 450" fill="none" stroke="#FFFFFF" strokeWidth="8"/>
            <path d="M 280 0 Q 300 230, 360 450" fill="none" stroke="#CBD5E1" strokeWidth="2"/>
            <path d="M 480 0 Q 510 210, 520 450" fill="none" stroke="#FFFFFF" strokeWidth="8"/>
            <path d="M 480 0 Q 510 210, 520 450" fill="none" stroke="#CBD5E1" strokeWidth="2"/>

            {/* Bridges across river */}
            <line x1="685" y1="160" x2="735" y2="170" stroke="#475569" strokeWidth="8" strokeLinecap="round"/>
            <line x1="685" y1="160" x2="735" y2="170" stroke="#CBD5E1" strokeWidth="3"/>
            <line x1="720" y1="320" x2="780" y2="330" stroke="#475569" strokeWidth="8" strokeLinecap="round"/>
            <line x1="720" y1="320" x2="780" y2="330" stroke="#CBD5E1" strokeWidth="3"/>

            {/* Risk Zones Circles matching Image 4 */}
            {/* Medium Risk Zone (Orange - Left) */}
            <circle cx="280" cy="190" r="75" fill="url(#mediumRiskGrad)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2"/>

            {/* Safe Zone (Green - Center/North) */}
            <circle cx="410" cy="160" r="65" fill="url(#safeZoneGrad)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2"/>

            {/* High Risk Zone (Red - Right near river inundation) */}
            <circle cx="630" cy="180" r="75" fill="url(#highRiskGrad)" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2"/>

            {/* Route preview line connecting "You" to the selected shelter */}
            {selectedShelter && (
              <g>
                <path
                  d="M 450 280 L 440 220 L 415 160"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                  className="animate-pulse"
                />
              </g>
            )}

            {/* Interactive Shelter Pins */}
            {/* Shelter 1: Government School Relief Centre (x: 415, y: 155) */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedShelterId('shelter-1')}
            >
              <circle cx="415" cy="155" r="16" fill="#065F46" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"/>
              <circle cx="415" cy="155" r="13" fill="#047857"/>
              {/* Tent Icon inside */}
              <path d="M 415 147 L 423 162 L 407 162 Z" fill="white"/>
              <path d="M 415 152 L 419 162 L 411 162 Z" fill="#047857"/>
            </g>

            {/* Shelter 2: Community Health Centre (x: 550, y: 220) */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedShelterId('shelter-2')}
            >
              <circle cx="550" cy="220" r="14" fill="#065F46" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"/>
              <circle cx="550" cy="220" r="11" fill="#047857"/>
              <path d="M 550 213 L 557 226 L 543 226 Z" fill="white"/>
            </g>

            {/* Shelter 3: Relief Camp Stadium (x: 625, y: 110) */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedShelterId('shelter-3')}
            >
              <circle cx="625" cy="110" r="14" fill="#065F46" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"/>
              <circle cx="625" cy="110" r="11" fill="#047857"/>
              <path d="M 625 103 L 632 116 L 618 116 Z" fill="white"/>
            </g>

            {/* You Pin (Blue Pin with person icon at x: 450, y: 280) */}
            <g className="cursor-pointer">
              <circle cx="450" cy="280" r="14" fill="#1E40AF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"/>
              <circle cx="450" cy="280" r="11" fill="#2563EB"/>
              {/* Location pin symbol */}
              <circle cx="450" cy="277" r="3" fill="white"/>
              <path d="M 445 285 C 445 281, 455 281, 455 285" stroke="white" strokeWidth="2" fill="none"/>
              {/* Pulsing ring */}
              <circle cx="450" cy="280" r="22" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.4" className="animate-ping"/>
            </g>
          </svg>

          {/* Map Legend at Bottom Left (Matching Image 4) */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-lg px-3 py-1.5 shadow-sm text-[11px] font-semibold flex items-center gap-3.5 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span className="text-slate-800">You</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              <span className="text-slate-800">High risk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="text-slate-800">Medium risk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span className="text-slate-800">Safe zone</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shelters Grid matching Image 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredShelters.map((shelter) => {
          const isSelected = shelter.id === selectedShelterId;
          return (
            <div
              key={shelter.id}
              className={`bg-white rounded-2xl border transition-all p-5 flex flex-col justify-between shadow-2xs ${
                isSelected
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                {/* Top: Icon + Distance Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                    {/* Tent Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 20L12 4L5 20h14z"/>
                      <path d="M12 4v16"/>
                    </svg>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-bold text-xs">
                    {shelter.distance}
                  </span>
                </div>

                {/* Shelter Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {shelter.name}
                </h3>

                {/* Services Section */}
                <div className="mt-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    AVAILABLE SERVICES · DEMO
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {shelter.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100"
                      >
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{srv}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capacity & Safe Elevation */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="font-semibold text-slate-700">{shelter.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Elevation:</span>
                    <span className="font-semibold text-emerald-600">{shelter.floodSafeLevel}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5">
                {isSelected ? (
                  <button
                    disabled
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-200 text-slate-700 font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 cursor-default"
                  >
                    <svg className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Route preview selected</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedShelterId(shelter.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 transition"
                  >
                    <svg className="w-3.5 h-3.5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                    </svg>
                    <span>GET DIRECTIONS</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Route Preview Card (Light green container matching Image 4) */}
      {selectedShelter && (
        <div className="bg-emerald-50/80 rounded-2xl border border-emerald-200 p-5 text-emerald-900 shadow-2xs space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <h4 className="font-bold text-sm md:text-base">
              Demo route to {selectedShelter.name}
            </h4>
          </div>
          <p className="text-xs md:text-sm text-emerald-800 leading-relaxed">
            Approximately {selectedShelter.distance} away. Estimated walk time: {selectedShelter.eta}. No turn-by-turn directions are available in this prototype. Follow official evacuation guidance and avoid floodwater.
          </p>
          <div className="pt-1 flex items-center gap-4 text-xs font-semibold text-emerald-700 flex-wrap">
            <span>📍 Address: {selectedShelter.address}</span>
            <span>📞 Helpline: {selectedShelter.phone}</span>
          </div>
        </div>
      )}

      {/* Blue Notice Banner (Matching Image 4) */}
      <div className="bg-blue-50/90 rounded-xl border border-blue-200/80 p-4 flex items-start gap-3 text-xs text-blue-900">
        <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <p className="leading-relaxed">
          Demo locations — production version will use verified government/disaster-service data. Map and risk zones are illustrative only.
        </p>
      </div>
    </div>
  );
}
