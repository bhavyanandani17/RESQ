// RESQ Mock Data & Emergency Scenarios

export const SCENARIOS = {
  gwalior: {
    id: "gwalior",
    name: "Gwalior, Madhya Pradesh",
    shortName: "Gwalior, MP",
    riskLevel: "HIGH RISK",
    riskBadgeColor: "amber",
    riskType: "FLOOD ALERT · DEMO",
    riverName: "Chambal / Morar Basin",
    waterLevel: "+2.4m above critical threshold",
    updatedTime: "10 min ago — DEMO DATA",
    coordinates: { lat: 26.2183, lng: 78.1828 },
    alertTitle: "Flood risk is high in your area",
    alertDesc: "Move to higher ground and avoid moving floodwater. Low-lying colonies near Morar river are experiencing rapid inundation.",
    shelters: [
      {
        id: "shelter-1",
        name: "Government School Relief Centre",
        distance: "0.8 km",
        distanceKm: 0.8,
        eta: "11 mins walk (Safe ridge route)",
        capacity: "185 / 250 Occupied",
        status: "Open · High Availability",
        address: "Near Morar Gate, Ridge Road, Gwalior",
        phone: "+91 751 244 8901",
        coordinates: { x: 50, y: 35 },
        services: ["Shelter", "Drinking water", "Food", "Power charging"],
        medicalDoctorOnSite: true,
        accessibility: "Wheelchair accessible, ground floor",
        floodSafeLevel: "Elevation +18m (Safe Zone)"
      },
      {
        id: "shelter-2",
        name: "Community Health Centre",
        distance: "1.4 km",
        distanceKm: 1.4,
        eta: "18 mins walk (Avoid Riverbank lane)",
        capacity: "92 / 120 Occupied",
        status: "Open · Medical Priority",
        address: "Hospital Road, Thatipur, Gwalior",
        phone: "+91 751 234 1108",
        coordinates: { x: 68, y: 55 },
        services: ["Medical support", "First aid", "Clean water", "Ambulance bay"],
        medicalDoctorOnSite: true,
        accessibility: "Ramps & stretchers available",
        floodSafeLevel: "Elevation +14m (Safe Zone)"
      },
      {
        id: "shelter-3",
        name: "Relief Camp - Stadium Grounds",
        distance: "2.1 km",
        distanceKm: 2.1,
        eta: "25 mins walk",
        capacity: "340 / 500 Occupied",
        status: "Open · Large Facility",
        address: "Captain Roop Singh Stadium Annex, Gwalior",
        phone: "+91 751 223 9944",
        coordinates: { x: 78, y: 28 },
        services: ["Food", "Water", "Emergency supplies", "Child care", "Sanitation"],
        medicalDoctorOnSite: false,
        accessibility: "Open stadium concourse",
        floodSafeLevel: "Elevation +22m (Safe Zone)"
      },
      {
        id: "shelter-4",
        name: "Railway Colony Community Hall",
        distance: "3.2 km",
        distanceKm: 3.2,
        eta: "40 mins (Vehicular route open)",
        capacity: "65 / 150 Occupied",
        status: "Open · Pet Friendly",
        address: "Platform 4 Rear Road, Gwalior Station Area",
        phone: "+91 751 261 0022",
        coordinates: { x: 38, y: 65 },
        services: ["Shelter", "Drinking water", "Pets allowed", "Dry rations"],
        medicalDoctorOnSite: false,
        accessibility: "Standard ground floor",
        floodSafeLevel: "Elevation +12m (Moderate buffer)"
      }
    ]
  },
  mumbai: {
    id: "mumbai",
    name: "Mumbai, Maharashtra (Kurla / Mithi Basin)",
    shortName: "Mumbai, MH",
    riskLevel: "CRITICAL RISK",
    riskBadgeColor: "red",
    riskType: "HIGH TIDE + RAINFALL ALERT",
    riverName: "Mithi River Overspill",
    waterLevel: "+3.8m high tide crest",
    updatedTime: "3 min ago — DEMO DATA",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    alertTitle: "Severe waterlogging in low-lying zones",
    alertDesc: "Mithi river level exceeded 3.5m danger threshold. Central railway tracks submerged at Sion-Kurla.",
    shelters: [
      {
        id: "mumbai-1",
        name: "BMC High School Relief Center, Kurla West",
        distance: "0.6 km",
        distanceKm: 0.6,
        eta: "8 mins walk",
        capacity: "140 / 200 Occupied",
        status: "Open",
        address: "SG Barve Marg, Kurla West",
        phone: "+91 22 2650 1199",
        coordinates: { x: 45, y: 40 },
        services: ["Shelter", "Drinking water", "Food", "Medical support"],
        medicalDoctorOnSite: true,
        accessibility: "Ground and 1st floor",
        floodSafeLevel: "Elevation +15m"
      },
      {
        id: "mumbai-2",
        name: "Bandra Kurla Sports Complex Pavilion",
        distance: "1.9 km",
        distanceKm: 1.9,
        eta: "22 mins walk",
        capacity: "420 / 800 Occupied",
        status: "Open",
        address: "BKC G-Block, Bandra East",
        phone: "+91 22 2659 0000",
        coordinates: { x: 72, y: 30 },
        services: ["Food", "Water", "Emergency supplies", "Power charging"],
        medicalDoctorOnSite: true,
        accessibility: "Elevated structure",
        floodSafeLevel: "Elevation +24m"
      }
    ]
  },
  patna: {
    id: "patna",
    name: "Patna, Bihar (Ganga Basin)",
    shortName: "Patna, BR",
    riskLevel: "MODERATE RISK",
    riskBadgeColor: "amber",
    riskType: "RIVER OVERFLOW WARNING",
    riverName: "Ganga River Watch",
    waterLevel: "+0.9m approaching warning mark",
    updatedTime: "25 min ago — DEMO DATA",
    coordinates: { lat: 25.5941, lng: 85.1376 },
    alertTitle: "River discharge warning in northern wards",
    alertDesc: "Sone and Ganga river upstream discharge expected. Low lying Diara sectors being monitored.",
    shelters: [
      {
        id: "patna-1",
        name: "Rajendra Indoor Stadium Evacuation Hub",
        distance: "1.1 km",
        distanceKm: 1.1,
        eta: "14 mins walk",
        capacity: "110 / 300 Occupied",
        status: "Open",
        address: "Kankarbagh Main Rd, Patna",
        phone: "+91 612 235 4400",
        coordinates: { x: 55, y: 42 },
        services: ["Shelter", "Drinking water", "Food", "First aid"],
        medicalDoctorOnSite: true,
        accessibility: "Full ramps",
        floodSafeLevel: "Elevation +19m"
      }
    ]
  }
};

export const TODAY_GUIDANCE = [
  {
    id: "g1",
    num: "01",
    text: "Avoid moving through floodwater.",
    detail: "Even 6 inches of moving water can knock you down, and 12 inches can sweep away small vehicles. Hidden open drains and manholes are common hazards."
  },
  {
    id: "g2",
    num: "02",
    text: "Keep your phone charged.",
    detail: "Turn on Battery Saver mode, lower screen brightness, and preserve battery for emergency communications and offline map access."
  },
  {
    id: "g3",
    num: "03",
    text: "Carry water, medicines and essential documents.",
    detail: "Pack prescriptions, identity cards, dry rations, and a torch in waterproof ziplock bags before moving to designated safe shelters."
  },
  {
    id: "g4",
    num: "04",
    text: "Follow official evacuation instructions.",
    detail: "Do not wait until floodwaters surround your building. Evacuate during daylight hours via designated high-elevation routes."
  }
];

export const EMERGENCY_CONTACTS = [
  {
    id: "ndrf",
    category: "National Disaster Response",
    title: "National Disaster Response Force (NDRF)",
    number: "1078",
    altNumber: "+91 11 2436 3260",
    description: "Specialized disaster response for search, swift water rescue & evacuation.",
    icon: "shield-alert",
    badge: "24x7 Toll Free",
    badgeColor: "red"
  },
  {
    id: "sdma",
    category: "State Disaster Authority",
    title: "State Disaster Management Authority (SDMA)",
    number: "1070",
    altNumber: "1079",
    description: "State-level emergency coordination, relief shelter allocation & flood control.",
    icon: "landmark",
    badge: "State Helpline",
    badgeColor: "blue"
  },
  {
    id: "police",
    category: "Law & Public Safety",
    title: "Police / Emergency Unified Service",
    number: "112",
    altNumber: "100",
    description: "Nationwide single emergency number for immediate law, order and rescue mobilization.",
    icon: "shield",
    badge: "Priority Hotline",
    badgeColor: "red"
  },
  {
    id: "ambulance",
    category: "Medical Emergency",
    title: "National Ambulance & Medical Service",
    number: "108",
    altNumber: "102",
    description: "Free emergency ambulance dispatch, paramedics & trauma assistance.",
    icon: "heart-pulse",
    badge: "Medical Response",
    badgeColor: "green"
  },
  {
    id: "fire",
    category: "Fire & Rescue",
    title: "Fire Services & Hazard Containment",
    number: "101",
    altNumber: "112",
    description: "Gas leak mitigation, building collapse extraction, electrical fire response.",
    icon: "flame",
    badge: "Hazard Response",
    badgeColor: "amber"
  },
  {
    id: "local-control",
    category: "District Administration",
    title: "Gwalior District Flood Control Room",
    number: "0751-2446200",
    altNumber: "0751-2446201",
    description: "Local collectorate control room managing boats, rations and evacuation vehicles.",
    icon: "phone-call",
    badge: "Local Ops",
    badgeColor: "blue"
  },
  {
    id: "women-child",
    category: "Vulnerable Support",
    title: "Women & Child Distress Helpline",
    number: "1091",
    altNumber: "1098 (Childline)",
    description: "Dedicated assistance for women, unaccompanied children, and expectant mothers.",
    icon: "users",
    badge: "24x7 Care",
    badgeColor: "purple"
  }
];

export const ASSISTANT_PRESETS = [
  {
    id: "trapped",
    prompt: "I'm trapped",
    response: "⚠️ If you are trapped, move to the highest safe place without crossing deep floodwater. Keep away from electrical switchboards and appliances. Signal for help using a bright cloth, flashlight, or whistle. Contact official emergency services (112 / 1078) and activate RESQ SOS. Do not enter closed attics unless there is roof access."
  },
  {
    id: "water_rising",
    prompt: "Water is rising",
    response: "🌊 If floodwater is entering your home:\n1. Immediately turn off main electricity breaker and cooking gas valves if safe to reach.\n2. Move family, elderly, infants, and pets to upper floors or sturdy high ground.\n3. Grab your Go-Bag (prescriptions, ID cards, phone power bank, water bottles).\n4. Do NOT attempt to wade through waist-deep water on foot."
  },
  {
    id: "injured",
    prompt: "Someone is injured",
    response: "🩹 For severe bleeding, apply firm, continuous pressure with a clean cloth. Elevate the wounded limb if no fracture is suspected. Keep the injured person warm and dry to prevent hypothermia. Call 108 or 112 immediately. Note down their symptoms and exact location to relay to the rescue boat."
  },
  {
    id: "evacuate",
    prompt: "Where should I evacuate?",
    response: "📍 In Gwalior, the nearest elevated safe zone is Government School Relief Centre (0.8 km, Ridge Road). Avoid the Morar riverbank corridor. Tap 'Find Safe Place' on the navigation menu to view active shelters, capacity, and safe route previews."
  },
  {
    id: "carry",
    prompt: "What should I carry?",
    response: "🎒 Pack a compact Emergency Go-Bag:\n• 2 liters drinking water per person + purification tablets\n• 3-day supply of essential daily medicines\n• Waterproof pouch with Aadhaar/Govt ID, deeds, cash\n• Phone + power bank + charging cables\n• LED torch / whistle / dry protein snacks"
  },
  {
    id: "electric_hazard",
    prompt: "Fallen power line in water",
    response: "⚡ DANGER OF ELECTROCUTION! Keep at least 35 feet (10 meters) away from submerged or dangling wires. Water is an excellent conductor. Do NOT touch wet metal gates, poles, or vehicles near the line. Report immediately to Electricity Emergency Board (1912) and 112."
  }
];

export const SURVIVAL_GUIDES = [
  {
    id: "flood",
    title: "Flood Survival Protocol",
    icon: "waves",
    category: "Hydrological Disasters",
    summary: "Crucial survival steps before, during and after rising floodwaters.",
    sections: [
      {
        title: "Before & When Water First Rises",
        items: [
          "Disconnect the main electrical supply switchboard and LPG gas cylinders before water enters.",
          "Move valuable appliances, food rations, and livestock/pets to elevated platforms.",
          "Fill clean containers, bathtubs, and bottles with clean municipal water before supply is contaminated.",
          "Keep footwear sturdy (closed-toe shoes/boots); never walk barefoot in floodwater."
        ]
      },
      {
        title: "During Evacuation & Swift Water",
        items: [
          "Six inches of rapidly moving water can knock down an adult. Never attempt to wade across fast currents.",
          "If driving and water reaches car doors, abandon the vehicle immediately and climb to higher ground.",
          "Use a wooden stick or umbrella to probe the ground ahead for open manholes and missing sewer lids.",
          "Avoid underpasses, culverts, and low-lying railway subways which flood within minutes."
        ]
      },
      {
        title: "Safe Drinking Water Purification",
        items: [
          "Assume all tap and well water is contaminated with sewage pathogens after flooding.",
          "Boil water vigorously for at least 1 full minute (3 minutes at high altitudes) before drinking.",
          "If boiling is impossible, use Chlorine / Halazone water purification tablets (1 tablet per 1 liter, wait 30 mins).",
          "Never consume perishable food that has come into direct contact with floodwaters."
        ]
      }
    ]
  },
  {
    id: "earthquake",
    title: "Earthquake Survival Guide",
    icon: "activity",
    category: "Geological Disasters",
    summary: "Drop, Cover, and Hold On techniques during seismic shocks and aftershocks.",
    sections: [
      {
        title: "Inside a Building",
        items: [
          "DROP onto hands and knees immediately to prevent being knocked down.",
          "COVER your head and neck under a sturdy table, desk, or interior doorframe.",
          "HOLD ON to your shelter until shaking stops. Protect eyes against shattered glass.",
          "Do NOT rush towards exits or use elevators during tremor; stairwells are prone to collapse."
        ]
      },
      {
        title: "After the Quake",
        items: [
          "Check yourself and nearby people for bleeding; administer pressure bandages.",
          "Smell for gas leaks. If you smell gas, open windows, extinguish open flames, and evacuate immediately without flipping electric switches.",
          "Be prepared for powerful aftershocks within minutes to hours of the main shock.",
          "Stay clear of brick masonry walls, loose parapets, and exterior glass facades."
        ]
      }
    ]
  },
  {
    id: "cyclone",
    title: "Cyclone & High Wind Protocol",
    icon: "wind",
    category: "Meteorological Disasters",
    summary: "Securing shelters, understanding the calm eye, and post-storm precautions.",
    sections: [
      {
        title: "Storm Preparations",
        items: [
          "Board up or tape large glass windows with criss-cross heavy tape to reduce flying shards.",
          "Secure or move indoors all loose rooftop items: sheet metal, pots, antenna poles.",
          "Charge battery power banks, emergency lanterns, and radios.",
          "Identify the strongest interior room with no external windows (e.g. bathroom, reinforced hallway)."
        ]
      },
      {
        title: "During the Storm",
        items: [
          "Stay away from glass doors and external brick walls.",
          "Beware the 'Eye of the Cyclone': a sudden lull or calm sky means only half the storm has passed; ferocious counter-winds will resume shortly.",
          "Do NOT venture outside until civil authorities officially declare the storm has passed."
        ]
      }
    ]
  },
  {
    id: "heatwave",
    title: "Extreme Heatwave Survival",
    icon: "sun",
    category: "Climatological Disasters",
    summary: "Preventing heat exhaustion and treating life-threatening heat stroke.",
    sections: [
      {
        title: "Heat Exhaustion vs Heat Stroke",
        items: [
          "Heat Exhaustion: Heavy sweating, pale clammy skin, fast weak pulse, nausea, dizziness.",
          "Heat Stroke (CRITICAL MEDICAL EMERGENCY): High body temp (>104°F/40°C), hot dry red skin (no sweat), confusion, seizures, unconsciousness.",
          "For heat stroke, call 108 immediately and douse victim with cold water/ice packs around neck, armpits, and groin."
        ]
      },
      {
        title: "Hydration & Preventive Tactics",
        items: [
          "Drink Oral Rehydration Solution (ORS), coconut water, or lemon-salt water regularly.",
          "Avoid direct sunlight between 11:00 AM and 4:00 PM.",
          "Wear loose, light-colored cotton clothing and cover head with a wet cloth or umbrella."
        ]
      }
    ]
  },
  {
    id: "firstaid",
    title: "Emergency First Aid Essentials",
    icon: "heart-pulse",
    category: "Life Support",
    summary: "Immediate lifesaving techniques before professional paramedics arrive.",
    sections: [
      {
        title: "Severe Bleeding Control",
        items: [
          "Apply direct firm pressure over wound with sterile gauze or clean cloth.",
          "Maintain pressure continuously for 10-15 minutes without lifting to check.",
          "Do not remove foreign objects deeply embedded in flesh; bandage around them to stabilize."
        ]
      },
      {
        title: "Hands-Only CPR Cadence",
        items: [
          "Confirm victim is unresponsive and not breathing normally.",
          "Place heel of one hand in center of chest, other hand on top with interlocking fingers.",
          "Push hard and fast: 100 to 120 compressions per minute (to the beat of 'Stayin' Alive').",
          "Allow chest to fully recoil between each compression."
        ]
      }
    ]
  }
];

export const COMMUNITY_REPORTS = [
  {
    id: "rep-1",
    author: "Rakesh Verma (Civil Defence Volunteer)",
    time: "14 mins ago",
    badge: "Verified Volunteer",
    location: "Morar Bridge Crossing",
    status: "CRITICAL",
    message: "Bridge approaches have 1.5m flowing water. 2 autorickshaws were stalled. SDRF inflatable boat deployed. Please avoid crossing!",
    upvotes: 42,
    hasImage: true
  },
  {
    id: "rep-2",
    author: "Pooja Sharma",
    time: "28 mins ago",
    badge: "Local Resident",
    location: "Thatipur Sector 4",
    status: "UPDATE",
    message: "Electricity sub-station has been switched off by board as precautionary measure. Portable generator running at Community Health Centre.",
    upvotes: 19,
    hasImage: false
  },
  {
    id: "rep-3",
    author: "Dr. A. K. Saxena",
    time: "45 mins ago",
    badge: "Medical Officer",
    location: "Government School Relief Centre",
    status: "SUPPLIES",
    message: "Fresh batch of baby milk powder, ORS packets, and anti-diarrheal medicines received. First aid desk fully operational.",
    upvotes: 35,
    hasImage: false
  }
];
