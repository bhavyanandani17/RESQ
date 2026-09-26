import React, { useState, useRef, useEffect } from 'react';
import { ASSISTANT_PRESETS } from '../data/mockData';
import { audioEngine } from '../utils/audioUtils';

export default function AssistantView({ setTab, onTriggerSOS }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "⚠️ If the structure is safe, move to the highest safe level available. Avoid contact with floodwater and electrical equipment. Activate SOS and share your location. Follow instructions from official rescue authorities."
    },
    {
      id: 2,
      sender: 'user',
      text: "I'm trapped"
    },
    {
      id: 3,
      sender: 'bot',
      text: "⚠️ If you are trapped, move to the highest safe place without crossing floodwater. Keep away from electricity, signal for help, and contact official emergency services. You can also open the demo SOS screen here, but it does not send a real request."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isSpeakingId, setIsSpeakingId] = useState(null);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (userText) => {
    const textToSend = userText || inputText.trim();
    if (!textToSend) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    if (!userText) setInputText('');

    // Play slight feedback beep
    audioEngine.playBeep(440, 0.08);

    // Bot response logic
    setTimeout(() => {
      let botAnswer = "⚠️ For your safety, stay on high ground and avoid contact with floodwaters. Keep your mobile phone dry. If water enters your room, turn off the main switch immediately and signal rescuers. Dial 112 or 1078 for emergency evacuation.";
      
      const lower = textToSend.toLowerCase();
      const matched = ASSISTANT_PRESETS.find(p => lower.includes(p.prompt.toLowerCase()) || lower.includes(p.id));
      if (matched) {
        botAnswer = matched.response;
      } else if (lower.includes('water') || lower.includes('flood') || lower.includes('rise')) {
        botAnswer = "🌊 Flood Warning: Shut off main circuit breaker and gas cylinder. Move elderly, children and pets to upper floors or roof. Do NOT walk or drive through moving water. Keep a torch and whistle ready.";
      } else if (lower.includes('trapped') || lower.includes('stuck') || lower.includes('roof')) {
        botAnswer = "⚠️ If you are cut off by floodwater, do not attempt to swim. Wave a brightly colored cloth or flash a torch in 3 short bursts (SOS distress signal). Dial 1078 (NDRF) or tap SOS.";
      } else if (lower.includes('doctor') || lower.includes('hurt') || lower.includes('bleed') || lower.includes('sick')) {
        botAnswer = "🩹 Medical Triage: If bleeding, apply direct pressure with a clean cloth. Elevate injured limb. Do not administer aspirin for unknown bleeding. Contact Ambulance 108 immediately.";
      } else if (lower.includes('food') || lower.includes('drink') || lower.includes('ration')) {
        botAnswer = "💧 Water & Food: Do not drink floodwater or unboiled tap water. Boil water for at least 1 minute or use purification tablets. Ration dry foods and store in waterproof bags.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botAnswer
        }
      ]);
    }, 450);
  };

  const toggleSpeak = (id, text) => {
    if (isSpeakingId === id) {
      audioEngine.stopSpeaking();
      setIsSpeakingId(null);
    } else {
      audioEngine.speak(text);
      setIsSpeakingId(id);
    }
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

      {/* Header Block matching Image 3 */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="10" rx="2"/>
            <circle cx="12" cy="5" r="2"/>
            <path d="M12 7v4"/>
            <line x1="8" y1="16" x2="8" y2="16"/>
            <line x1="16" y1="16" x2="16" y2="16"/>
          </svg>
        </div>

        <div className="space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            QUICK GUIDANCE · RULE-BASED DEMO
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            RESQ Emergency Assistant
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Get quick safety guidance based on your situation. Responses are predefined, not live AI or official instructions.
          </p>
        </div>
      </div>

      {/* Main Chat Box Container (Matching Image 3) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Chat Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B132B] text-white flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">RESQ Assistant</div>
              <div className="text-[10px] text-slate-500">Safety guidance · Demo</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200">
            PREDEFINED RESPONSES
          </span>
        </div>

        {/* Messages Stream */}
        <div className="p-4 md:p-6 space-y-4 max-h-[420px] overflow-y-auto bg-slate-50/30">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                    isUser
                      ? 'bg-[#0B132B] text-white rounded-br-xs font-medium'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>

                {!isUser && (
                  <button
                    onClick={() => toggleSpeak(m.id, m.text)}
                    className="text-[10px] text-slate-400 hover:text-blue-600 flex items-center gap-1 px-1 transition-colors"
                  >
                    <span>{isSpeakingId === m.id ? '🔊 Stop listening' : '🔈 Read aloud'}</span>
                  </button>
                )}
              </div>
            );
          })}
          <div ref={chatBottomRef} />
        </div>

        {/* Quick Chips Row (Matching Image 3) */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto select-none">
          {ASSISTANT_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSend(p.prompt)}
              className="px-3 py-1.5 rounded-lg bg-slate-100/90 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200 text-xs font-medium text-slate-700 whitespace-nowrap transition-colors flex-shrink-0"
            >
              {p.prompt}
            </button>
          ))}
        </div>

        {/* Text Input Box */}
        <div className="p-3.5 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border border-slate-200 rounded-xl p-2.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all bg-white relative"
          >
            <textarea
              rows={2}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Describe your situation..."
              className="w-full text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden resize-none pr-10"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="absolute right-2.5 bottom-2.5 w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white flex items-center justify-center transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </form>

          {/* Footnote Warning link */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
            <span>For immediate danger, call official emergency services.</span>
            <button
              onClick={onTriggerSOS}
              className="font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
            >
              <span>Preview SOS</span>
              <span>⚠️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Banner (Matching Image 3) */}
      <div className="bg-blue-50/90 rounded-xl border border-blue-200 p-4 flex items-start gap-3 text-xs text-blue-900">
        <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <p className="leading-relaxed">
          This rule-based prototype cannot assess real conditions, contact responders or provide verified live information.
        </p>
      </div>
    </div>
  );
}
