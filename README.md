# RESQ — Disaster Survival & Rescue Assistant 🚨

A modern, responsive, high-contrast disaster survival frontend built with **React** and **Tailwind CSS**. Designed for split-second decisions during floods, cyclones, and natural disasters.

---

## 🌟 Core Features

1. **Flood-Risk Dashboard (Desktop & Mobile)**
   - Real-time regional risk alert banner with water level status (`+2.4m above critical threshold`).
   - Prominent **"I NEED HELP"** high-visibility emergency trigger.
   - Quick-access action grid: SOS, I Am Safe, Find Safe Place, Help Someone.
   - Interactive safety guidance checklist with progress tracking.
   - Offline Survival Guide preview card.

2. **Emergency SOS System**
   - 5-second countdown with audible Web Audio beeps (prevents accidental triggers).
   - Emergency loud distress siren generator using native Web Audio API oscillators.
   - Automated GPS coordinate broadcaster (`26.2183° N, 78.1828° E`) with battery and 4G signal telemetry.
   - Triage tags selector (Infant, Senior, Diabetic, Trapped on Roof).
   - One-tap WhatsApp / SMS distress template generator.

3. **"I Am Safe" Broadcast**
   - Single-tap reassurance check-in.
   - Custom notes field for family & coworkers.
   - Automatic dispatch status log (`3 / 3 Contacts Delivered ✓✓`).
   - Shareable status snippet for group chats.

4. **Find a Safe Place & Interactive Simulated Map**
   - High-fidelity interactive vector map featuring the Chambal River bend, bridges, arterial road grids, and risk rings (High Risk, Medium Risk, Safe Zone).
   - Interactive shelter pins with distance, elevation level, walking ETA, and capacity trackers.
   - Service filters: Medical Support, Food & Water, Pet Friendly.
   - Active route preview card with advisory notes.

5. **Report Person in Danger Form ("Help Someone")**
   - Fast triage wizard: Threat Urgency level, water depth meter (Knee deep to Rooftop stranded), special assistance tags, and victim description.
   - Auto-fill GPS button.
   - Generates simulated rescue ticket `#REP-XXXX` linked to local flood control desks.

6. **Offline Survival Guide**
   - Field survival protocols for **Floods**, **Earthquakes**, **Cyclones**, **Heatwaves**, and **Emergency First Aid / CPR**.
   - Instant search filter across all survival instructions.
   - LocalStorage offline caching indicator.

7. **AI Emergency Assistant (RESQ Assistant)**
   - Rule-based triage with pre-loaded quick prompts: *"I'm trapped"*, *"Water is rising"*, *"Someone is injured"*, *"Where should I evacuate?"*, *"What should I carry?"*.
   - Built-in **Text-to-Speech (TTS)** voice reader for low-visibility conditions.
   - High-priority danger warnings and direct links to emergency dispatch.

8. **Live Community Safety Feed & Emergency Contacts**
   - Crowdsourced situational awareness feed with verified volunteer badges and upvoting.
   - Quick-dial hotlines for NDRF (1078), Police (112), Ambulance (108), Fire (101), and District Flood Control Rooms.

---

## 🚀 How to Run

### Option 1: Development Server (Vite)
```bash
# Navigate to project folder
cd "C:\Users\BHAVYA NANDANI\.gemini\antigravity\scratch\resq-app"

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

### Option 2: Standalone Zero-Config Browser Preview
Open `preview.html` directly in any web browser (Chrome, Edge, Firefox) by double-clicking it. No Node.js or build steps required!

---

## 🎨 Design Tokens & Theme
- **Primary Navy / Sidebar**: `#0B132B`
- **Emergency Red**: `#DC2626`
- **Safety Green**: `#16A34A`
- **Alert Amber**: `#D97706`
- **Clean Background**: `#F8FAFC`
- **Accessible Typography**: High contrast, large touch targets (minimum 48px), screen-reader friendly attributes.
