import React from 'react';

export default function MobileDrawer({ isOpen, onClose, currentTab, setTab }) {
  if (!isOpen) return null;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
    { id: 'sos', label: 'Emergency SOS', icon: 'alert-triangle', highlight: true },
    { id: 'safe', label: 'I Am Safe', icon: 'shield-check' },
    { id: 'shelters', label: 'Find Safe Place', icon: 'navigation' },
    { id: 'report', label: 'Help Someone', icon: 'heart-handshake' },
    { id: 'guide', label: 'Survival Guide', icon: 'book-open' },
    { id: 'assistant', label: 'RESQ Assistant', icon: 'bot' },
    { id: 'community', label: 'Community Safety', icon: 'users' },
    { id: 'contacts', label: 'Emergency Contacts', icon: 'phone-call' },
    { id: 'about', label: 'About RESQ', icon: 'info' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-slate-950/70 backdrop-blur-2xs transition-opacity" />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-xs bg-[#0B132B] text-slate-300 h-full flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-left duration-200">
        <div>
          {/* Brand */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2H8c-1.1 0-2-.9-2-2s.9-2 2-2h2V9c0-1.1.9-2 2-2z"/>
                </svg>
              </div>
              <span className="text-lg font-black text-white tracking-wider">RESQ</span>
            </div>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">✕</button>
          </div>

          <div className="p-4 space-y-1">
            {navItems.map(item => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setTab(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-slate-800 text-white border border-slate-700 font-bold'
                      : item.highlight
                      ? 'text-red-400 hover:bg-red-950/20'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span className={isActive ? 'text-blue-400' : ''}>•</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-slate-800 bg-[#080d1f] text-xs text-slate-500">
          <div className="text-amber-400 font-bold text-[11px] mb-1">Demo Environment</div>
          <p className="text-[10px] text-slate-400">Not connected to live 112 emergency services.</p>
        </div>
      </div>
    </div>
  );
}
