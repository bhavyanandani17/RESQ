import React, { useState } from 'react';
import { SURVIVAL_GUIDES } from '../data/mockData';

export default function SurvivalGuideView({ setTab }) {
  const [activeCategory, setActiveCategory] = useState('flood');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCached, setIsCached] = useState(true);

  const selectedGuide = SURVIVAL_GUIDES.find(g => g.id === activeCategory) || SURVIVAL_GUIDES[0];

  const handleToggleOfflineCache = () => {
    setIsCached(!isCached);
    if (!isCached) {
      alert("All emergency survival manuals cached locally for 100% offline access!");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto pb-12">
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>

          <div className="space-y-0.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              FIELD SURVIVAL MANUAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Offline Survival Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Essential procedures when cell towers fail and internet is unavailable.
            </p>
          </div>
        </div>

        {/* Offline Cache Button */}
        <button
          onClick={handleToggleOfflineCache}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition shadow-xs ${
            isCached
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isCached ? 'bg-emerald-600' : 'bg-slate-400'}`}></span>
          <span>{isCached ? '✓ Stored Offline' : 'Save for Offline'}</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search survival instructions (e.g. CPR, gas leak, purify water, bleeding)..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm focus:border-blue-500 focus:outline-hidden"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {SURVIVAL_GUIDES.map(guide => {
          const isActive = guide.id === activeCategory;
          return (
            <button
              key={guide.id}
              onClick={() => setActiveCategory(guide.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {guide.title}
            </button>
          );
        })}
      </div>

      {/* Guide Content Display */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {selectedGuide.category}
          </span>
          <h3 className="text-xl font-black text-slate-900 mt-1">
            {selectedGuide.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {selectedGuide.summary}
          </p>
        </div>

        <div className="space-y-6">
          {selectedGuide.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 pb-1 border-b border-slate-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{sec.title}</span>
              </h4>
              <ul className="space-y-2.5">
                {sec.items
                  .filter(item => !searchQuery || item.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5">
                        {itemIdx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
