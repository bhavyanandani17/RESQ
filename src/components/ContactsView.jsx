import React, { useState } from 'react';
import { EMERGENCY_CONTACTS, SCENARIOS } from '../data/mockData';

export default function ContactsView({ scenarioKey, setTab }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;
  const [copiedId, setCopiedId] = useState(null);

  const copyNumber = (id, num) => {
    navigator.clipboard?.writeText(num);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>

        <div className="space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-red-600">
            RAPID RESPONSE HOTLINES
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Emergency Contacts Directory
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Verified governmental emergency response departments and local {scenario.shortName} flood control stations.
          </p>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EMERGENCY_CONTACTS.map(contact => (
          <div
            key={contact.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {contact.category}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  contact.badgeColor === 'red' ? 'bg-red-50 text-red-700 border border-red-200' :
                  contact.badgeColor === 'green' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  {contact.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {contact.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                {contact.description}
              </p>

              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xl font-black text-slate-900 tracking-wider">
                    {contact.number}
                  </div>
                  {contact.altNumber && (
                    <div className="text-[11px] text-slate-400">
                      Alt: {contact.altNumber}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => copyNumber(contact.id, contact.number)}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                >
                  {copiedId === contact.id ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${contact.number}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <span>📞 Call Now ({contact.number})</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
