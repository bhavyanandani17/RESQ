import React from 'react';

export default function NotificationPopover({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      time: '6 mins ago',
      title: 'Water Level Inundation Warning',
      body: 'River basin discharge reached 12,000 cusecs. Residents within 200m of riverbank instructed to move to relief camps.',
      critical: true
    },
    {
      id: 2,
      time: '18 mins ago',
      title: 'SDRF Boat Squad Dispatched',
      body: '2 inflatable rubber motorboats with medical kits mobilized towards Thatipur bridge sector.',
      critical: false
    },
    {
      id: 3,
      time: '42 mins ago',
      title: 'Relief Camp Stocked',
      body: 'Government School Relief Centre has stocked 500 liters drinking water and baby food rations.',
      critical: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 bg-slate-950/30 backdrop-blur-2xs">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-sm w-full overflow-hidden mt-12 animate-in slide-in-from-top-3 duration-200">
        <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <h4 className="font-bold text-xs uppercase tracking-wider">Live Broadcast Alerts</h4>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xs">✕</button>
        </div>

        <div className="p-2 divide-y divide-slate-100 max-h-96 overflow-y-auto">
          {notifications.map(n => (
            <div key={n.id} className="p-3 space-y-1 hover:bg-slate-50 transition">
              <div className="flex items-center justify-between text-[10px]">
                <span className={`font-bold uppercase tracking-wider ${n.critical ? 'text-red-600' : 'text-blue-600'}`}>
                  {n.critical ? 'CRITICAL ALERT' : 'DISTRICT BULLETIN'}
                </span>
                <span className="text-slate-400">{n.time}</span>
              </div>
              <div className="font-bold text-xs text-slate-800">{n.title}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{n.body}</p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
          <button onClick={onClose} className="text-xs font-bold text-blue-600 hover:text-blue-700">
            Dismiss all alerts
          </button>
        </div>
      </div>
    </div>
  );
}
