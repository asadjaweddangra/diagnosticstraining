import { type ContentSection } from "@/types";

export type EkgChapter = {
  slug: string;
  id: string;
  track: "ekg";
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

export const ekgChapters: EkgChapter[] = [
  {
    slug: "electricity-of-the-heart",
    id: "ekg-01",
    track: "ekg",
    chapter: 1,
    total: 6,
    title: "Electricity of the Heart",
    duration: "15 min",
    xp: 120,
    summary: "Plain-language conduction pathway with visuals.",
    story:
      "Day 1: You hold the electrode pack. The instructor asks, “Where does the beat start?” You answer with the pathway, not just acronyms.",
    objectives: [
      "Explain SA→AV→His→Purkinje pathway",
      "Match P/QRS/T to depolarization/repolarization",
      "Use visuals to teach patients if asked",
    ],
    sections: [
      {
        type: "imageGallery",
        title: "Conduction system",
        images: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/ConductionsystemoftheheartwithouttheHeart.png/512px-ConductionsystemoftheheartwithouttheHeart.png",
            caption: "Cardiac conduction system (CC BY-SA 3.0)",
          },
        ],
      },
      {
        type: "list",
        title: "Waveform meaning",
        items: [
          "P wave: atrial depolarization",
          "QRS: ventricular depolarization",
          "T wave: ventricular repolarization",
        ],
      },
      {
        type: "mnemonic",
        title: "Pathway",
        content: "SA → AV → His → Bundle branches → Purkinje",
      },
    ],
    quickReference: [
      { label: "Normal rate", detail: "SA node fires 60–100 bpm." },
      { label: "PQRST", detail: "Electrical, not mechanical; always correlate with patient." },
    ],
  },
  {
    slug: "machine-and-setup",
    id: "ekg-02",
    track: "ekg",
    chapter: 2,
    total: 6,
    title: "Machine & Setup",
    duration: "15 min",
    xp: 120,
    summary: "Calibration, filters, and pre-checks before electrodes go on.",
    story:
      "Day 2: The printer spits artifact. You realize calibration and lead integrity matter before the first lead touches skin.",
    objectives: [
      "Run pre-use checklist",
      "Set paper speed and calibration correctly",
      "Confirm lead integrity and filters",
    ],
    sections: [
      {
        type: "steps",
        title: "Pre-use checklist",
        steps: ["Power/battery check", "Paper loaded & aligned", "Lead integrity test", "Calibration 10 mm/mV, 25 mm/sec"],
      },
      {
        type: "alert",
        variant: "warning",
        title: "Allergy & skin",
        items: ["Use latex-free if needed", "Observe for skin reaction; stop if severe"],
      },
    ],
    quickReference: [
      { label: "Filters", detail: "0.5–40 Hz for adults; adjust per protocol." },
      { label: "Torso placement", detail: "Document if limb leads on torso; can change morphology." },
    ],
  },
  {
    slug: "lead-placement-mastery",
    id: "ekg-03",
    track: "ekg",
    chapter: 3,
    total: 6,
    title: "Lead Placement Mastery",
    duration: "18 min",
    xp: 140,
    summary: "Interactive landmarks for limb and precordial leads with images.",
    story:
      "Day 3: Misplaced V1/V2 ruins interpretation. You count ribs, not guess.",
    objectives: [
      "Place limb leads correctly (or torso alt) and document",
      "Place V1–V6 using sternal angle landmarks",
      "Verify symmetric placement before recording",
    ],
    sections: [
      {
        type: "mnemonic",
        title: "Limb lead colors",
        content: "White on Right, Smoke (Black) over Fire (Red), Green is Ground.",
      },
      {
        type: "steps",
        title: "Chest lead landmarks",
        steps: [
          "Find sternal angle = 2nd ICS; count to 4th ICS for V1/V2.",
          "V1: 4th ICS RSB; V2: 4th ICS LSB.",
          "V3: midway V2–V4; V4: 5th ICS MCL; V5/6 same level at axillary lines.",
        ],
      },
      {
        type: "imageGallery",
        title: "Placement reference",
        images: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/EKG_12derivaciones.png/512px-EKG_12derivaciones.png",
            caption: "Standard chest lead placement (CC BY-SA 4.0)",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/ConductionsystemoftheheartwithouttheHeart.png/512px-ConductionsystemoftheheartwithouttheHeart.png",
            caption: "Conduction system context (CC BY-SA 3.0)",
          },
        ],
      },
    ],
    drill: {
      title: "Count the spaces",
      scenario: "You need perfect V1/V2. Patient has prominent ribs.",
      steps: ["Find sternal angle (2nd ICS)", "Count down to 4th ICS bilaterally", "Place V1/V2; double-check symmetry"],
      takeaway: "Counting beats guessing every time.",
    },
  },
  {
    slug: "artifact-detective",
    id: "ekg-04",
    track: "ekg",
    chapter: 4,
    total: 6,
    title: "Artifact Detective",
    duration: "16 min",
    xp: 130,
    summary: "Spot common artifacts and fix them fast.",
    story:
      "Day 4: Your tracing is unreadable. Instead of repeating blindly, you identify the artifact and solve it.",
    objectives: [
      "Identify muscle tremor, wandering baseline, 60-cycle interference, loose leads",
      "Apply the right fix for each",
      "Know when to escalate",
    ],
    sections: [
      {
        type: "comparison",
        title: "Artifact → Fix",
        leftLabel: "Appearance",
        rightLabel: "Fix",
        rows: [
          { left: "Fuzzy baseline (tremor)", right: "Warm patient, support arms" },
          { left: "Baseline drift", right: "Clean skin, new electrodes" },
          { left: "60-cycle oscillation", right: "Remove electrical devices, check grounding" },
          { left: "Straight line", right: "Reconnect/replace lead" },
        ],
      },
      {
        type: "checklist",
        title: "Environment check",
        items: ["Remove nearby electronics", "Ensure patient not touching metal rails", "Warm room to reduce shiver"],
      },
    ],
    quickReference: [
      { label: "When to stop", detail: "If patient distress or unsafe conditions—pause and escalate." },
      { label: "Document", detail: "Note artifact type and mitigation attempted." },
    ],
  },
  {
    slug: "rhythm-recognition",
    id: "ekg-05",
    track: "ekg",
    chapter: 5,
    total: 6,
    title: "Rhythm Recognition (Tech Scope)",
    duration: "18 min",
    xp: 140,
    summary: "Recognize dangerous rhythms to escalate immediately.",
    story:
      "Day 5: You spot chaotic tracing. Recognition—not diagnosis—triggers the alarm.",
    objectives: [
      "Recognize V-fib, V-tach, asystole, complete heart block",
      "Know immediate notification steps",
      "Stay within technician scope",
    ],
    sections: [
      {
        type: "list",
        title: "Report immediately",
        items: ["Ventricular fibrillation", "Ventricular tachycardia", "Asystole", "Complete heart block"],
      },
      {
        type: "alert",
        variant: "danger",
        title: "Action",
        items: ["Stop recording", "Call for help/activate response", "Stay with patient until relieved"],
      },
    ],
    quickReference: [
      { label: "Your role", detail: "Recognition and escalation, not clinical interpretation." },
      { label: "Document time", detail: "Record time of event and who was notified." },
    ],
  },
  {
    slug: "real-world-scenarios",
    id: "ekg-06",
    track: "ekg",
    chapter: 6,
    total: 6,
    title: "Real-World Scenarios",
    duration: "16 min",
    xp: 150,
    summary: "Troubleshoot sweaty skin, tremor, anxiety, and safety stops.",
    story:
      "Day 6: The patient is anxious and sweaty. You adapt: dry, clean, reassure, and still get a clean tracing.",
    objectives: [
      "Solve adhesion issues from sweat/hair",
      "De-escalate anxious patients politely",
      "Know stop/escalate criteria",
    ],
    sections: [
      {
        type: "steps",
        title: "Sweat/poor adhesion",
        steps: ["Dry thoroughly", "Alcohol prep and let dry", "Light abrasion if needed", "Fresh electrodes with firm pressure"],
      },
      {
        type: "script",
        title: "Anxiety de-escalation",
        script: [
          { speaker: "You", line: "This is painless and quick. You’re in control—tell me if you need a pause." },
          { speaker: "You", line: "We’ll finish in just a few minutes; I’ll explain each step." },
        ],
      },
      {
        type: "alert",
        variant: "warning",
        title: "Stop / escalate",
        items: ["Severe distress", "Allergic reaction", "Equipment malfunction impacting safety"],
      },
    ],
    drill: {
      title: "Anxious patient",
      scenario: "Patient wants to stop mid-tracing.",
      steps: ["Pause immediately", "Reassure with plain language", "Offer chaperone/family; resume only if comfortable"],
    },
  },
];

