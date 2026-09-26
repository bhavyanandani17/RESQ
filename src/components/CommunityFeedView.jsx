import React, { useState } from 'react';
import { COMMUNITY_REPORTS, SCENARIOS } from '../data/mockData';

export default function CommunityFeedView({ scenarioKey, setTab }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;
  const [reports, setReports] = useState(COMMUNITY_REPORTS);
  const [newPostText, setNewPostText] = useState('');
  const [newPostLocation, setNewPostLocation] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handleUpvote = (id) => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newReport = {
      id: `rep-custom-${Date.now()}`,
      author: 'You (Citizen Volunteer)',
      time: 'Just now',
      badge: 'Community Alert',
      location: newPostLocation.trim() || scenario.shortName,
      status: 'UPDATE',
      message: newPostText.trim(),
      upvotes: 1,
      hasImage: false
    };

    setReports([newReport, ...reports]);
    setNewPostText('');
    setNewPostLocation('');
    setIsPosting(false);
  };

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

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>

          <div className="space-y-0.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              CROWDSOURCED SITUATIONAL AWARENESS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Community Safety Feed
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Live ground updates submitted by volunteers and citizens in {scenario.shortName}.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsPosting(!isPosting)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-xs flex-shrink-0"
        >
          <span>+ Post Ground Update</span>
        </button>
      </div>

      {/* Post Modal / Inline form */}
      {isPosting && (
        <form onSubmit={handleCreatePost} className="bg-white rounded-2xl border border-blue-200 p-5 shadow-md space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h4 className="text-sm font-bold text-slate-900">Broadcast Ground Observation</h4>
            <button type="button" onClick={() => setIsPosting(false)} className="text-xs text-slate-400 hover:text-slate-600 font-bold">✕ Cancel</button>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700">Specific Location / Road:</label>
            <input
              type="text"
              required
              value={newPostLocation}
              onChange={(e) => setNewPostLocation(e.target.value)}
              placeholder="e.g. Thatipur Roundabout, under railway bridge..."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 mt-1 focus:border-blue-500 focus:outline-hidden"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700">Observation / Warning:</label>
            <textarea
              rows={3}
              required
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="e.g. Water depth is 2 feet, road is blocked for 2-wheelers, safe route via ridge..."
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 mt-1 focus:border-blue-500 focus:outline-hidden resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
          >
            Publish to Community Feed
          </button>
        </form>
      )}

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-xs transition space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-xs">
                  {report.author[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span>{report.author}</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-100">
                      {report.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    📍 {report.location} · {report.time}
                  </div>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                report.status === 'CRITICAL' ? 'bg-red-50 text-red-700 border border-red-200' :
                report.status === 'SUPPLIES' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                'bg-slate-100 text-slate-700'
              }`}>
                {report.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {report.message}
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => handleUpvote(report.id)}
                className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 font-medium px-2 py-1 rounded-lg hover:bg-slate-50 transition"
              >
                <span>👍 Helpful / Confirmed</span>
                <span className="font-bold text-blue-600">({report.upvotes})</span>
              </button>
              <span className="text-slate-400 text-[11px]">Crowd-verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
