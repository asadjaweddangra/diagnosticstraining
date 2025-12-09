import { type ContentSection } from "@/types";

export type EchoChapter = {
  slug: string;
  id: string;
  track: "echo";
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

export const echoChapters: EchoChapter[] = [
  {
    slug: "heart-of-the-matter",
    id: "echo-01",
    track: "echo",
    chapter: 1,
    total: 7,
    title: "Heart of the Matter",
    duration: "18 min",
    xp: 140,
    summary: "Cardiac anatomy with echo-first perspectives and chamber cues.",
    story:
      "Day 1: The cardiologist asks, “Show me the four chambers.” You need to picture them before you ever place the probe.",
    objectives: [
      "Recall four chambers and valves with echo orientation",
      "Relate echo windows to cardiac anatomy",
      "State what focused echo can and cannot answer",
    ],
    sections: [
      {
        type: "imageGallery",
        title: "Chamber orientation",
        images: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Gray490.png", caption: "Heart chambers (Gray’s Anatomy, public domain)" },
        ],
      },
      {
        type: "alert",
        variant: "info",
        title: "Focused vs full echo",
        items: [
          "Focused: effusion/tamponade, gross LV/RV function, IVC/volume",
          "Not a replacement for full diagnostic study or valve quantification",
        ],
      },
      {
        type: "mnemonic",
        title: "Scope reminder",
        content: "POCUS answers binary questions; escalate when unsure.",
      },
    ],
    quickReference: [
      { label: "RV is anterior", detail: "Closest to probe in parasternal views." },
      { label: "LV thicker wall", detail: "Higher pressure system; helps orientation." },
    ],
  },
  {
    slug: "focused-vs-full-echo",
    id: "echo-02",
    track: "echo",
    chapter: 2,
    total: 7,
    title: "Focused vs Full Echo",
    duration: "16 min",
    xp: 130,
    summary: "Define scope, escalation triggers, and documentation language.",
    story:
      "Day 2: A resident asks for ‘EF’. You need to clarify scope and stay in your lane while capturing solid images.",
    objectives: [
      "State goals of focused echo",
      "List escalation triggers",
      "Document limitations clearly",
    ],
    sections: [
      {
        type: "checklist",
        title: "Focused goals",
        items: ["Effusion/tamponade?", "Gross LV/RV function?", "Volume status via IVC"],
      },
      {
        type: "alert",
        variant: "danger",
        title: "Escalate",
        items: ["Effusion with RA/RV collapse", "Severely reduced global function", "No adequate windows after optimization"],
      },
      {
        type: "list",
        title: "Document",
        items: ["Views obtained", "Limitations (habitus, COPD, dressings)", "Patient tolerance", "Arrhythmia noted"],
      },
    ],
  },
  {
    slug: "patient-setup-and-windows",
    id: "echo-03",
    track: "echo",
    chapter: 3,
    total: 7,
    title: "Patient Setup & Windows",
    duration: "18 min",
    xp: 140,
    summary: "Positioning, ECG gating, and window selection before the first clip.",
    story:
      "Day 3: The patient is short of breath. You need windows fast: parasternal if possible, subcostal if not.",
    objectives: [
      "Position patient for optimal windows",
      "Set ECG gating for clip timing",
      "Choose alternative windows when lungs block views",
    ],
    sections: [
      {
        type: "steps",
        title: "Setup",
        steps: ["Left lateral decubitus ideal", "ECG electrodes for gating", "Parasternal first; subcostal if poor windows"],
      },
      {
        type: "alert",
        variant: "warning",
        title: "Difficult windows",
        items: ["Obesity/COPD: favor subcostal", "Mechanical ventilation: subcostal primary", "Move up/down interspaces"],
      },
    ],
    quickReference: [
      { label: "ECG gating", detail: "Clear QRS improves timing of clips." },
      { label: "Subcostal", detail: "Go early if parasternal blocked by lung." },
    ],
  },
  {
    slug: "parasternal-views",
    id: "echo-04",
    track: "echo",
    chapter: 4,
    total: 7,
    title: "Parasternal Views (PLAX/PSAX)",
    duration: "22 min",
    xp: 160,
    summary: "PLAX acquisition, PSAX levels, and good-vs-bad comparisons.",
    story:
      "Day 4: You place the probe at 3rd–4th ICS. The attending says, “Don’t foreshorten the LV. Show me pericardium crisp.”",
    objectives: [
      "Acquire PLAX without foreshortening",
      "Rotate to PSAX and capture base/mid/papillary",
      "Identify common errors and fixes",
    ],
    sections: [
      {
        type: "steps",
        title: "PLAX setup",
        steps: ["Left parasternal 3rd–4th ICS; indicator to right shoulder", "Aim toward right scapula; maximize LV length"],
      },
      {
        type: "steps",
        title: "PSAX levels",
        steps: ["Rotate ~90° from PLAX", "Base (AV), mid (MV), papillary levels", "Fan from base to apex"],
      },
      {
        type: "comparison",
        title: "Looks right vs off",
        leftLabel: "Looks Right",
        rightLabel: "Common Miss",
        rows: [
          { left: "RV anterior, LV/LA visible, Ao root centered", right: "Foreshortened LV or off-axis root" },
          { left: "Pericardium as bright line", right: "Poor contact or rib shadowing" },
        ],
      },
      {
        type: "imageGallery",
        title: "Anatomy reference",
        images: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Gray490.png", caption: "Heart chambers (Gray’s Anatomy, public domain)" },
        ],
      },
      {
        type: "alert",
        variant: "info",
        title: "Common fixes",
        items: ["Move up/down one interspace", "Increase gel/contact", "Heel-toe to center LV"],
      },
    ],
    drill: {
      title: "Foreshortening fix",
      scenario: "LV looks round and short in PLAX.",
      steps: ["Slide slightly superior/inferior", "Angle toward right shoulder", "Add gel and heel-toe to open the window"],
    },
  },
  {
    slug: "apical-views",
    id: "echo-05",
    track: "echo",
    chapter: 5,
    total: 7,
    title: "Apical Views (4/2/3)",
    duration: "20 min",
    xp: 150,
    summary: "Find true apex, rotate to A2C/A3C, and avoid foreshortening.",
    story:
      "Day 5: You chase the apex. The mentor says, “If you’re on the ribs, you’re too high. Drop lower, rotate with intention.”",
    objectives: [
      "Locate true apex and avoid foreshortening",
      "Rotate correctly to A2C and A3C",
      "Capture all four chambers with clear endocardial borders",
    ],
    sections: [
      {
        type: "steps",
        title: "A4C setup",
        steps: ["Find PMI; indicator to patient’s left (9 o’clock)", "Aim to right shoulder; include all four chambers"],
      },
      {
        type: "flow",
        title: "Rotate sequence",
        nodes: [
          { label: "A4C → rotate ~90° CCW → A2C (LA/LV)" },
          { label: "A2C → rotate ~60° CCW → A3C (Ao root, LV, LA)" },
        ],
      },
      {
        type: "alert",
        variant: "warning",
        title: "Avoid foreshortening",
        items: ["Drop lower on the chest wall", "Angle toward the base, not straight up", "Ensure LV long axis is elongated"],
      },
    ],
    drill: {
      title: "Find the true apex",
      scenario: "Chambers look cut off in A4C.",
      steps: ["Palpate PMI and move lower/lateral", "Angle toward right shoulder", "Reacquire and reassess LV length"],
    },
  },
  {
    slug: "subcostal-and-ivc",
    id: "echo-06",
    track: "echo",
    chapter: 6,
    total: 7,
    title: "Subcostal & IVC",
    duration: "16 min",
    xp: 140,
    summary: "Alternative windows for difficult lungs and volume assessment via IVC.",
    story:
      "Day 6: Parasternal is impossible in a COPD patient. You switch to subcostal—it’s your hero window today.",
    objectives: [
      "Use subcostal window for chambers",
      "Assess IVC size and collapsibility",
      "Document findings and limitations",
    ],
    sections: [
      {
        type: "steps",
        title: "Subcostal 4-chamber",
        steps: ["Probe under xiphoid; indicator left", "Aim to left shoulder; apply firm pressure", "Use for pericardial effusion and global function"],
      },
      {
        type: "steps",
        title: "IVC view",
        steps: ["Indicator to head", "Aim toward spine; depth ~15–20 cm", "Measure 2–3 cm from RA junction; assess collapse"],
      },
      {
        type: "list",
        title: "Interpretation cues",
        items: [">50% collapse: likely normal RA pressure", "<50% collapse: consider elevated pressure / volume overload"],
      },
    ],
    quickReference: [
      { label: "When to subcostal", detail: "Poor parasternal/apical, COPD, post-op, ventilated." },
      { label: "IVC measure", detail: "2–3 cm from RA junction; end-expiration diameter." },
    ],
  },
  {
    slug: "putting-it-together",
    id: "echo-07",
    track: "echo",
    chapter: 7,
    total: 7,
    title: "Putting It Together",
    duration: "18 min",
    xp: 160,
    summary: "Flow from PLAX to IVC, document, and call out limitations.",
    story:
      "Day 7: You run the full sequence alone. The checklist in your mind keeps you on rails.",
    objectives: [
      "Run the standard view sequence efficiently",
      "Capture required clips and stills",
      "Document quality, limitations, and escalation triggers",
    ],
    sections: [
      {
        type: "steps",
        title: "Standard sequence",
        steps: ["PLAX → PSAX base/mid/pap", "Apical 4/2/3", "Subcostal 4C + IVC", "Clips 3–5 cycles with ECG"],
      },
      {
        type: "checklist",
        title: "Document",
        items: ["Views obtained", "Limitations (habitus/lungs/dressings)", "Patient tolerance", "Any arrhythmia noted"],
      },
    ],
    drill: {
      title: "Full run-through",
      scenario: "You have 6 minutes to acquire focused echo in the ED.",
      steps: [
        "Parasternal: PLAX + rotate PSAX base/mid",
        "Apical: A4C then rotate to A2C/A3C",
        "Subcostal: 4C + IVC with collapse estimate",
      ],
      takeaway: "Repetition builds speed; stick to the sequence.",
    },
  },
];

