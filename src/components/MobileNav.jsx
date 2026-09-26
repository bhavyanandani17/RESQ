import React from 'react';

export default function MobileNav({ currentTab, setTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: 'home' },
    { id: 'sos', label: 'SOS', icon: 'sos', danger: true },
    { id: 'shelters', label: 'Shelters', icon: 'shelter' },
    { id: 'assistant', label: 'Assistant', icon: 'assistant' },
    { id: 'guide', label: 'Guide', icon: 'guide' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 px-2 py-1.5 flex justify-around items-center shadow-lg">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
              isActive
                ? tab.danger
                  ? 'text-red-600 font-bold'
                  : 'text-blue-600 font-bold'
                : tab.danger
                ? 'text-red-500 hover:text-red-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className={`p-1 rounded-md ${isActive && tab.danger ? 'bg-red-50' : isActive ? 'bg-blue-50' : ''}`}>
              {renderMobileIcon(tab.icon, isActive, tab.danger)}
            </div>
            <span className="text-[10px] tracking-tight mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function renderMobileIcon(name, active, isDanger) {
  const strokeClass = active
    ? isDanger
      ? 'text-red-600 stroke-[2.5]'
      : 'text-blue-600 stroke-[2.5]'
    : 'text-slate-500 stroke-[1.8]';

  switch (name) {
    case 'home':
      return (
        <svg className={`w-5 h-5 ${strokeClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      );
    case 'sos':
      return (
        <svg className={`w-5 h-5 ${strokeClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      );
    case 'shelter':
      return (
        <svg className={`w-5 h-5 ${strokeClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      );
    case 'assistant':
      return (
        <svg className={`w-5 h-5 ${strokeClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
        </svg>
      );
    case 'guide':
      return (
        <svg className={`w-5 h-5 ${strokeClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      );
    default:
      return null;
  }
}
