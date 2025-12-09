import { type ContentSection } from "@/types";

export type Chapter = {
  slug: string;
  id: string;
  track: "ultrasound";
  chapter: number;
  total: number;
  title: string;
  duration: string;
  xp: number;
  summary: string;
  story: string;
  objectives: string[];
  sections: ContentSection[];
  quickReference?: { label: string; detail: string }[];
  drill?: { title: string; scenario: string; steps: string[]; takeaway?: string };
};

export const ultrasoundChapters: Chapter[] = [
  {
    slug: "welcome-to-ultrasound",
    id: "us-01",
    track: "ultrasound",
    chapter: 1,
    total: 8,
    title: "Welcome to Ultrasound",
    duration: "15 min",
    xp: 120,
    summary: "Plain-English physics, what ultrasound does, and your role on day one.",
    story:
      "Day 1: You power on the pocket-sized scanner. Your mentor says, “Think sonar: sound out, echoes back. Your job is to steer the beam and capture truth.”",
    objectives: [
      "Explain ultrasound in plain English to patients",
      "Recall frequency vs penetration trade-offs",
      "Recognize core artifacts you’ll see everywhere",
    ],
    sections: [
      {
        type: "list",
        title: "How to explain it",
        body: "“It’s like a bat’s echolocation—safe sound waves bounce back as pictures. No radiation.”",
        items: [
          "Sound waves (2–15 MHz) reflect differently off tissue",
          "Higher frequency = sharper but shallow",
          "Lower frequency = deeper but softer detail",
        ],
      },
      {
        type: "comparison",
        title: "Frequency Trade-off",
        leftLabel: "Higher (7–15 MHz)",
        rightLabel: "Lower (2–5 MHz)",
        rows: [
          { left: "Sharper resolution", right: "Better penetration" },
          { left: "Thyroid, vessels, MSK", right: "Abdomen, heart" },
          { left: "Limited depth", right: "Handles habitus" },
        ],
        body: "You can’t have both max resolution and max depth; choose based on target.",
      },
      {
        type: "alert",
        variant: "info",
        title: "Artifacts you’ll meet",
        items: ["Shadowing: stones/bone", "Posterior enhancement: fluid", "Reverberation: lung surface/metal", "Mirror: diaphragm duplications"],
      },
      {
        type: "imageGallery",
        title: "Pocket device reference",
        images: [
          {
            src: "https://www.researchgate.net/profile/Sorin-Dudea/publication/320122740/figure/fig1/AS:631646408806401@1527600781996/Photograph-of-the-pocket-sized-ultrasound-device-Images-were-displayed-on-a-smartphone.png",
            caption: "Pocket ultrasound device (CC BY 4.0)",
          },
        ],
      },
    ],
    quickReference: [
      { label: "BART", detail: "Blue Away, Red Toward (Doppler convention)" },
      { label: "Order to optimize", detail: "Depth → Gain → TGC → Focus → Frequency" },
      { label: "Stop/Esclate", detail: "Severe pain, distress, allergic reaction, equipment malfunction" },
    ],
    drill: {
      title: "Explain it in 20 seconds",
      scenario: "A nervous patient asks if ultrasound is like X-rays.",
      steps: [
        "Use the bat/echo analogy and reassure: no radiation.",
        "State the purpose: “We’re mapping sound reflections to see your organs.”",
        "Invite questions and confirm consent.",
      ],
      takeaway: "Plain-language confidence builds patient trust before images start.",
    },
  },
  {
    slug: "know-your-machine",
    id: "us-02",
    track: "ultrasound",
    chapter: 2,
    total: 8,
    title: "Know Your Machine",
    duration: "18 min",
    xp: 140,
    summary: "Probe types, presets, and the control sequence you’ll use every exam.",
    story:
      "Day 2: Your mentor points at the console: “If you can drive the knobs, you can rescue almost any image. Order matters.”",
    objectives: [
      "Choose the right probe and preset quickly",
      "Run the optimization order without over-tweaking",
      "Know when to change window versus keep tuning",
    ],
    sections: [
      {
        type: "steps",
        title: "Control sequence (muscle memory)",
        steps: [
          "Depth first: frame target with 1–2 cm beyond.",
          "Overall gain, then TGC for depth-specific brightness.",
          "Focus at/just below structure of interest.",
          "Frequency: higher = resolution, lower = penetration.",
        ],
        footnote: "Change one major control at a time so you see the effect.",
      },
      {
        type: "comparison",
        title: "Probe chooser",
        leftLabel: "Linear (7–15 MHz)",
        rightLabel: "Curved/Phased (2–5 MHz)",
        rows: [
          { left: "Superficial, vascular, MSK", right: "Abdomen, deep pelvis, cardiac" },
          { left: "Rectangular footprint", right: "Wide sector footprint" },
          { left: "Shallow depth (<6 cm)", right: "Penetration 15–25 cm" },
        ],
      },
      {
        type: "imageGallery",
        title: "Console essentials",
        images: [
          {
            src: "https://www.researchgate.net/profile/Sorin-Dudea/publication/320122740/figure/fig1/AS:631646408806401@1527600781996/Photograph-of-the-pocket-sized-ultrasound-device-Images-were-displayed-on-a-smartphone.png",
            caption: "Pocket device controls (CC BY 4.0)",
          },
        ],
      },
      {
        type: "alert",
        variant: "warning",
        title: "When to stop tuning",
        items: [
          "After depth/gain/focus/frequency are reasonable, move the probe/window.",
          "If ribs/gas block view, change intercostal space or patient position.",
        ],
      },
    ],
    quickReference: [
      { label: "Preset sanity", detail: "Pick the right preset first—saves time downstream." },
      { label: "Depth rule", detail: "Target fills 60–80% of screen depth." },
    ],
    drill: {
      title: "Optimization sprint",
      scenario: "Your RUQ view is dark and shallow on a bariatric patient.",
      steps: [
        "Increase depth to include GB + 2 cm posterior.",
        "Add gain, then adjust TGC lower-third for shadowed area.",
        "Lower frequency or enable harmonics; change window intercostal.",
      ],
    },
  },
  {
    slug: "abdominal-anatomy-for-us",
    id: "us-03",
    track: "ultrasound",
    chapter: 3,
    total: 8,
    title: "Abdominal Anatomy for Ultrasound",
    duration: "25 min",
    xp: 150,
    summary: "Landmarks you must recognize with ultrasound-first visuals.",
    story:
      "Day 3: You’re handed the probe: “Find liver, GB, IVC, aorta, kidneys. If you can’t label them, you can’t scan them.”",
    objectives: [
      "Identify liver, gallbladder, kidneys, IVC vs aorta on US",
      "Use mobility/compressibility to tell structures apart",
      "Coach positioning to reveal hidden organs",
    ],
    sections: [
      {
        type: "anatomy",
        title: "Clickable landmarks",
        image: "https://www.bartleby.com/107/illus492.jpg",
        caption: "Gray’s Anatomy abdominal organs (public domain)",
        markers: [
          { label: "Liver", detail: "Largest solid organ RUQ; homogeneous texture" },
          { label: "Gallbladder", detail: "Under liver; mobile; anechoic with thin wall" },
          { label: "IVC vs Aorta", detail: "IVC compressible with respiration; aorta pulsatile" },
          { label: "Kidney", detail: "Cortex brighter than medulla; posterior in flank" },
        ],
      },
      {
        type: "list",
        title: "Landmark cues (tech tips)",
        items: [
          "Gallbladder drifts with patient position—roll left to find it.",
          "IVC collapses >50% with sniff; aorta stays round and pulsatile.",
          "Kidneys: sweep long + short; cortex brighter than medulla.",
        ],
      },
      {
        type: "comparison",
        title: "IVC vs Aorta",
        leftLabel: "IVC",
        rightLabel: "Aorta",
        rows: [
          { left: "Thin walls, compressible", right: "Thick walls, non-compressible" },
          { left: "Respiratory variation", right: "Pulsatile with systole" },
          { left: "Right of spine", right: "Left of spine" },
        ],
      },
      {
        type: "imageGallery",
        title: "Reference stills",
        images: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Gray490.png", caption: "Liver/GB relationship (Gray’s, public domain)" },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/EKG_12derivaciones.png/512px-EKG_12derivaciones.png",
            caption: "IVC vs aorta plane reference (schematic)",
          },
        ],
      },
      {
        type: "mnemonic",
        title: "GB finder",
        content: "“Gel + Gravity”: More gel, roll left, deep breath—GB floats into view.",
      },
    ],
    quickReference: [
      { label: "RUQ sweep", detail: "Subcostal to intercostal; fan + roll patient." },
      { label: "Measure?", detail: "Only if ordered; document views even if limited." },
    ],
    drill: {
      title: "Label the anatomy",
      scenario: "You have a frozen RUQ frame; mentor asks you to call out structures.",
      steps: ["Identify liver dome", "Point out GB neck vs fundus", "Locate IVC and aorta; comment on compressibility"],
      takeaway: "If you can label it fast, you can acquire it fast.",
    },
  },
  {
    slug: "your-first-scan",
    id: "us-04",
    track: "ultrasound",
    chapter: 4,
    total: 8,
    title: "Your First Scan",
    duration: "20 min",
    xp: 140,
    summary: "Patient setup, gel technique, probe orientation, and documentation.",
    story:
      "Day 4: First live scan. The preceptor whispers, “Orientation marker to head/right. Two planes or it didn’t happen.”",
    objectives: [
      "Prep room and patient with clear scripts",
      "Hold probe steady and orient correctly",
      "Document required planes and limitations",
    ],
    sections: [
      {
        type: "script",
        title: "Starter scripts",
        script: [
          { speaker: "You", line: "Hello, I’ll be performing your ultrasound. Please confirm your name and date of birth." },
          { speaker: "You", line: "You’ll feel cool gel and gentle pressure; tell me if anything hurts." },
        ],
      },
      {
        type: "steps",
        title: "Orientation & sweep",
        steps: [
          "Indicator to head/right (standard).",
          "Sagittal then transverse; fan/rock/rotate systematically.",
          "Document in two orthogonal planes.",
        ],
      },
      {
        type: "list",
        title: "STOP / Escalate",
        items: ["Severe pain on probe pressure", "Respiratory distress", "Refusal or withdrawal of consent"],
      },
    ],
    quickReference: [
      { label: "Gel comfort", detail: "Warm gel; wipe thoroughly after." },
      { label: "Two-plane rule", detail: "Long + short axis for any structure documented." },
    ],
  },
  {
    slug: "gallbladder-protocol",
    id: "us-05",
    track: "ultrasound",
    chapter: 5,
    total: 8,
    title: "Gallbladder Protocol",
    duration: "22 min",
    xp: 150,
    summary: "RUQ views, CBD, mobility maneuvers, and artifact cues.",
    story:
      "Day 5: The patient has RUQ pain. You need GB long/short, CBD, and to prove shadowing isn’t artifact.",
    objectives: [
      "Acquire GB in long and short with wall assessment",
      "Use mobility and breath-holds to find stones and ducts",
      "Document limitations and escalation triggers",
    ],
    sections: [
      {
        type: "steps",
        title: "Acquisition steps",
        steps: [
          "GB long & short; assess wall, lumen, pericholecystic fluid.",
          "CBD view; measure if indicated; add color if needed.",
          "Survey adjacent liver parenchyma.",
        ],
      },
      {
        type: "checklist",
        title: "Tips & maneuvers",
        items: ["Left lateral decubitus to move stones/gas", "Deep inspiration to drop liver/GB", "Heel-toe to avoid ribs; generous gel"],
      },
      {
        type: "alert",
        variant: "info",
        title: "Artifact clues",
        items: ["Shadowing confirms stones", "Posterior enhancement supports fluid-filled lumen"],
      },
      {
        type: "mnemonic",
        title: "CBD marker",
        content: "“Cystic-CBD-caudal”: Angle slightly caudal from GB neck to find CBD.",
      },
    ],
    drill: {
      title: "Shadow or artifact?",
      scenario: "Dense shadow behind echogenic focus. Is it a stone?",
      steps: [
        "Roll patient: does the focus move?",
        "Change angle: does shadow persist?",
        "Add color: check for twinkle artifact on stones.",
      ],
      takeaway: "Movement + persistent shadow = real stone.",
    },
  },
  {
    slug: "renal-and-bladder",
    id: "us-06",
    track: "ultrasound",
    chapter: 6,
    total: 8,
    title: "Renal & Bladder",
    duration: "20 min",
    xp: 140,
    summary: "Kidneys in two planes, hydronephrosis grading, and bladder assessment.",
    story:
      "Day 6: Hydronephrosis question. You must show both kidneys and the bladder, even if gas and habitus fight back.",
    objectives: [
      "Capture kidneys long/short with cortex/medulla detail",
      "Grade hydronephrosis visually",
      "Document bladder views and post-void if ordered",
    ],
    sections: [
      {
        type: "steps",
        title: "Kidney protocol",
        steps: [
          "Long and short axis both kidneys; include cortex/medulla.",
          "Measure length if indicated; evaluate for hydronephrosis.",
          "Consider decubitus or prone for better windows.",
        ],
      },
      {
        type: "checklist",
        title: "Bladder protocol",
        items: ["Transverse and sagittal views", "Posterior enhancement expected", "Post-void if ordered; note debris/clots"],
      },
      {
        type: "list",
        title: "Hydronephrosis grading (tech cues)",
        items: ["Mild: Pelviectasis only", "Moderate: Calyceal dilation", "Severe: Cortical thinning—escalate"],
      },
    ],
    quickReference: [
      { label: "Full bladder", detail: "Improves pelvic/ureteral visualization." },
      { label: "Alternate windows", detail: "Use coronal flank with patient prone/decubitus." },
    ],
  },
  {
    slug: "vascular-access",
    id: "us-07",
    track: "ultrasound",
    chapter: 7,
    total: 8,
    title: "Vascular Access Basics",
    duration: "18 min",
    xp: 130,
    summary: "Identify artery vs vein and keep the needle tip in view.",
    story:
      "Day 7: You’re asked to guide a peripheral IV. You must prove vein vs artery before anyone picks up a needle.",
    objectives: [
      "Differentiate artery vs vein (compressibility, pulsatility)",
      "Use in-plane needle visualization",
      "Document vessel, depth, and approach",
    ],
    sections: [
      {
        type: "comparison",
        title: "Artery vs Vein",
        leftLabel: "Vein",
        rightLabel: "Artery",
        rows: [
          { left: "Compressible", right: "Non-compressible" },
          { left: "Non-pulsatile", right: "Pulsatile" },
          { left: "Larger, thin wall", right: "Thicker wall" },
        ],
      },
      {
        type: "list",
        title: "Needle visualization tips",
        items: ["Use in-plane for continuous needle visualization", "Shallow angle improves visualization", "Always visualize tip before advancing"],
      },
      {
        type: "alert",
        variant: "warning",
        title: "Safety",
        items: ["Do not proceed if vessel identity uncertain", "Abort if patient reports severe pain"],
      },
    ],
    quickReference: [
      { label: "Document", detail: "Vessel name, depth, approach, patient tolerance." },
      { label: "Color confirm", detail: "Brief color Doppler to verify flow direction if unsure." },
    ],
  },
  {
    slug: "ultrasound-troubleshooting",
    id: "us-08",
    track: "ultrasound",
    chapter: 8,
    total: 8,
    title: "Troubleshooting & Mastery",
    duration: "16 min",
    xp: 160,
    summary: "Optimization ladder for habitus, gas, ribs, and when to document limits.",
    story:
      "Day 8: Images still look bad. The attending says, “Show me your ladder—don’t just crank the gain.”",
    objectives: [
      "Run a repeatable optimization ladder",
      "Adapt for obesity/COPD/gas",
      "Document limitations clearly",
    ],
    sections: [
      {
        type: "flow",
        title: "Optimization ladder",
        nodes: [
          { label: "Reposition / change breathing" },
          { label: "Switch probe/preset" },
          { label: "Adjust Depth → Gain → TGC" },
          { label: "Focus/Frequency or harmonics" },
          { label: "Change window/intercostal approach" },
          { label: "Document limitation (habitus/gas/cooperation)" },
        ],
      },
      {
        type: "alert",
        variant: "info",
        title: "Document limits",
        items: ["Body habitus", "Bowel gas", "Patient cooperation", "Rib shadowing"],
      },
      {
        type: "list",
        title: "Obesity/COPD specifics",
        items: ["Try subcostal for RUQ/IVC", "Use lower frequency or harmonics", "Sit patient up if tolerated"],
      },
    ],
    drill: {
      title: "Optimization speed-run",
      scenario: "RUQ view is non-diagnostic after first attempt.",
      steps: [
        "Change patient position + deep breath.",
        "Swap to lower frequency/harmonics.",
        "Move intercostal; re-run Depth → Gain → TGC.",
      ],
      takeaway: "Run the ladder, don’t guess randomly.",
    },
  },
];

