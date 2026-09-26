import React, { useState } from 'react';
import { SCENARIOS } from '../data/mockData';

export default function ReportDangerView({ scenarioKey, setTab }) {
  const scenario = SCENARIOS[scenarioKey] || SCENARIOS.gwalior;

  const [formData, setFormData] = useState({
    victimType: 'Group (2-3 people)',
    nameOrDescription: 'Elderly woman and a young boy stranded on veranda',
    locationAddress: 'House #42, Lane 3, near Morar Riverbank Culvert',
    waterDepth: 'Waist deep (1.0m - 1.2m)',
    urgency: 'Critical',
    specialNeeds: ['Senior Citizen', 'No Drinking Water'],
    contactPhone: '+91 98260 44321',
    additionalNotes: 'Current is fast. Electrical transformer nearby may be sparking.'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const toggleSpecialNeed = (item) => {
    setFormData(prev => ({
      ...prev,
      specialNeeds: prev.specialNeeds.includes(item)
        ? prev.specialNeeds.filter(s => s !== item)
        : [...prev.specialNeeds, item]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketId(`REP-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-2xl mx-auto pb-12">
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
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div>

        <div className="space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
            COMMUNITY FIRST RESPONDER · DISPATCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Report a Person in Danger
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Report stranded neighbors or individuals needing urgent rescue boats in {scenario.shortName}.
          </p>
        </div>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          {/* Urgency Level Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Threat Urgency Level:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Critical (Immediate)', val: 'Critical', color: 'border-red-500 bg-red-50 text-red-700' },
                { label: 'High (Water Rising)', val: 'High', color: 'border-amber-500 bg-amber-50 text-amber-700' },
                { label: 'Moderate (Needs Food)', val: 'Moderate', color: 'border-blue-500 bg-blue-50 text-blue-700' },
              ].map(level => (
                <button
                  type="button"
                  key={level.val}
                  onClick={() => setFormData({ ...formData, urgency: level.val })}
                  className={`p-3 rounded-xl border text-xs font-bold transition text-center ${
                    formData.urgency === level.val
                      ? `${level.color} ring-2 ring-offset-1`
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* People Count & Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Estimated Count:</label>
              <select
                value={formData.victimType}
                onChange={(e) => setFormData({ ...formData, victimType: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-800"
              >
                <option>1 Person</option>
                <option>Group (2-3 people)</option>
                <option>Large Family (4-6 people)</option>
                <option>Multiple Families / Community (7+)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Water Depth at Location:</label>
              <select
                value={formData.waterDepth}
                onChange={(e) => setFormData({ ...formData, waterDepth: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-800"
              >
                <option>Ankle to Knee deep (&lt;0.5m)</option>
                <option>Waist deep (1.0m - 1.2m)</option>
                <option>Chest to Neck deep (1.5m - 2.0m)</option>
                <option>Submerged 1st floor / Stranded on Roof</option>
              </select>
            </div>
          </div>

          {/* Location Description */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-700">
                Exact Landmark or Address:
              </label>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, locationAddress: `GPS: ${scenario.coordinates.lat}°N, ${scenario.coordinates.lng}°E (Near Riverbank Colony)` })}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>📍 Auto-fill GPS</span>
              </button>
            </div>
            <input
              type="text"
              required
              value={formData.locationAddress}
              onChange={(e) => setFormData({ ...formData, locationAddress: e.target.value })}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-hidden"
              placeholder="e.g. Blue building opposite Shiv Temple, Morar"
            />
          </div>

          {/* Description of Persons in Danger */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Description / Visible Situation:
            </label>
            <textarea
              rows={3}
              value={formData.nameOrDescription}
              onChange={(e) => setFormData({ ...formData, nameOrDescription: e.target.value })}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-hidden resize-none"
              placeholder="Describe who is stranded, what clothes they are wearing, or specific signals they are waving..."
            />
          </div>

          {/* Special Needs Checklist */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Special Attention Needed:
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'Senior Citizen',
                'Infant / Toddler',
                'Pregnant Mother',
                'Injured / Bleeding',
                'Oxygen / Insulin Needed',
                'No Drinking Water',
                'Pets / Livestock'
              ].map(item => {
                const checked = formData.specialNeeds.includes(item);
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => toggleSpecialNeed(item)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                      checked
                        ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {checked ? '✓ ' : '+ '}
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reporter Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Your Callback Number (For Boat Rescuers):
            </label>
            <input
              type="tel"
              required
              value={formData.contactPhone}
              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-hidden"
              placeholder="+91 98260 00000"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-sm tracking-wide shadow-md shadow-amber-600/30 transition-all hover:scale-[1.01]"
          >
            SUBMIT RESCUE REPORT TO NDRF / VOLUNTEERS
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-sm text-center space-y-5 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl font-black">
            ✓
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              REPORT DISPATCHED
            </span>
            <h3 className="text-xl font-black text-slate-900 pt-2">
              Rescue Ticket #{ticketId} Created
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Your report has been relayed to the simulated Gwalior Flood Control Room and NDRF Sector Unit 4.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 border border-slate-200">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Location:</span>
              <span className="font-bold text-slate-800">{formData.locationAddress}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Urgency:</span>
              <span className="font-bold text-red-600">{formData.urgency}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Water Depth:</span>
              <span className="font-bold text-slate-800">{formData.waterDepth}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Special Needs:</span>
              <span className="font-bold text-slate-800">{formData.specialNeeds.join(', ') || 'None specified'}</span>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
            >
              Report Another Person
            </button>
            <button
              onClick={() => setTab('dashboard')}
              className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
