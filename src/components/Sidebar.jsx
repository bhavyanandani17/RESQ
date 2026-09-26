import React from 'react';

export default function Sidebar({ currentTab, setTab, unreadAlertsCount = 2 }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid', count: null },
    { id: 'sos', label: 'Emergency SOS', icon: 'alert-triangle', highlight: true },
    { id: 'safe', label: 'I Am Safe', icon: 'shield-check', count: null },
    { id: 'shelters', label: 'Find Safe Place', icon: 'navigation', count: null },
    { id: 'report', label: 'Help Someone', icon: 'heart-handshake', count: null },
    { id: 'guide', label: 'Survival Guide', icon: 'book-open', count: null },
    { id: 'assistant', label: 'RESQ Assistant', icon: 'bot', badge: 'AI' },
    { id: 'community', label: 'Community Safety', icon: 'users', count: 3 },
    { id: 'contacts', label: 'Emergency Contacts', icon: 'phone-call', count: null },
    { id: 'about', label: 'About RESQ', icon: 'info', count: null },
  ];

  return (
    <aside className="w-64 bg-[#0B132B] text-slate-300 flex flex-col justify-between flex-shrink-0 h-screen sticky top-0 border-r border-slate-800 select-none hidden md:flex z-30">
      {/* Brand & Logo */}
      <div>
        <div className="p-6 border-b border-slate-800/80 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/40">
            {/* Shield Icon with Cross */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2H8c-1.1 0-2-.9-2-2s.9-2 2-2h2V9c0-1.1.9-2 2-2z"/>
            </svg>
          </div>
          <div>
            <div className="text-xl font-black tracking-wider text-white flex items-center gap-1.5">
              <span>RESQ</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
              Disaster Survival Assistant
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="px-6 pt-6 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Navigation
        </div>

        {/* Nav Links */}
        <nav className="px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm border border-slate-700/60 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                } ${item.highlight && !isActive ? 'text-red-400 hover:text-red-300 hover:bg-red-950/20' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isActive ? 'text-blue-400' : item.highlight ? 'text-red-400' : 'text-slate-400'}`}>
                    {renderNavIcon(item.icon)}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30">
                    {item.badge}
                  </span>
                )}
                {item.count && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-700 text-slate-300">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Info Box */}
      <div className="p-4 border-t border-slate-800/80 bg-[#080d1f]">
        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Demo environment</span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400">
            Scenario data only. Not connected to live emergency services.
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 px-1 font-medium">
          <span>RESQ · Hackathon MVP</span>
          <span className="hover:text-slate-300 cursor-pointer" onClick={() => setTab('about')}>v1.0</span>
        </div>
      </div>
    </aside>
  );
}

function renderNavIcon(name) {
  switch (name) {
    case 'grid':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
        </svg>
      );
    case 'alert-triangle':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      );
    case 'shield-check':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      );
    case 'navigation':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="3 11 22 2 13 21 11 13 3 11"/>
        </svg>
      );
    case 'heart-handshake':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      );
    case 'book-open':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      );
    case 'bot':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
          <line x1="8" y1="16" x2="8" y2="16"/>
          <line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      );
    case 'users':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case 'phone-call':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      );
  }
}
