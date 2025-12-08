import { Module } from "@/types";

export const staticModules: Module[] = [
  // Common Core
  {
    id: "c1000000-0000-0000-0000-000000000001",
    title: "Orientation & Fundamentals",
    description: "Plain-English basics, scope of practice, safety signals and escalation.",
    modality: "common",
    order_index: 1,
    estimated_duration: 30,
    content: {
      sections: [
        {
          type: "comparison",
          title: "Plain English vs Technical Definitions",
          leftLabel: "Plain",
          rightLabel: "Technical",
          rows: [
            { left: "Ultrasound = bat echolocation for the body", right: "2–15 MHz sound waves creating images via acoustic reflection" },
            { left: "Echo = live movie of the heart", right: "Cardiac ultrasonography evaluating structure and hemodynamics" },
            { left: "EKG = electrical recording of heartbeats", right: "Surface electrodes record depolarization/repolarization patterns" },
          ],
        },
        {
          type: "mnemonic",
          title: "Your role",
          content: "Acquire + optimize images; document technically; never diagnose.",
          hint: "You are the eyes and hands for the clinician.",
        },
        {
          type: "alert",
          variant: "danger",
          title: "STOP / Escalate Immediately",
          items: ["Severe pain or distress", "Allergic reaction to gel/electrodes", "Equipment malfunction affecting safety", "Unstable rhythm (VF/VT/asystole)"],
        },
      ],
    },
  },
  {
    id: "c1000000-0000-0000-0000-000000000002",
    title: "Safety & Infection Control",
    description: "ALARA, probe disinfection, electrical safety, and daily checklists.",
    modality: "common",
    order_index: 2,
    estimated_duration: 25,
    content: {
      sections: [
        {
          type: "mnemonic",
          title: "ALARA",
          content: "As Low As Reasonably Achievable",
          hint: "Lowest power + minimal dwell time for diagnostic images.",
        },
        {
          type: "steps",
          title: "Probe Disinfection Steps",
          steps: [
            "Remove gel with approved wipes.",
            "Apply disinfectant and respect contact time.",
            "Air dry completely before next patient.",
            "High-level disinfection for TEE/TV/mucosal probes.",
          ],
          footnote: "Follow facility and manufacturer policies.",
        },
        {
          type: "checklist",
          title: "Electrical Safety Quick Check",
          items: ["Inspect cables for damage", "Verify proper grounding", "Avoid wet environments", "Replace damaged electrodes/cables immediately"],
        },
      ],
    },
  },
  {
    id: "c1000000-0000-0000-0000-000000000003",
    title: "Pre-Exam Workflow & Documentation",
    description: "Orders, ID, room setup, device self-test, and documentation traps.",
    modality: "common",
    order_index: 3,
    estimated_duration: 25,
    content: {
      sections: [
        {
          type: "steps",
          title: "Two-Identifier Verification",
          steps: [
            "Ask for full name and DOB (or MRN if unable to speak).",
            "Confirm exam type matches the order.",
            "Review allergies and prior studies if available.",
          ],
        },
        {
          type: "checklist",
          title: "Room & Supplies Ready",
          items: [
            "Gloves, wipes, gel, probe covers/electrodes/razors",
            "Lighting and privacy, emergency call button accessible",
            "Paper/thermal paper loaded; calibration check (EKG)",
          ],
        },
        {
          type: "comparison",
          title: "Documentation Traps (Do / Avoid)",
          leftLabel: "Do",
          rightLabel: "Avoid",
          rows: [
            { left: "Describe technical quality and views obtained", right: "Diagnostic language or clinical interpretation" },
            { left: "Note limitations (habitus, gas, cooperation)", right: "Leaving limitations unstated" },
            { left: "Record patient tolerance and safety events", right: "Speculating on diagnoses" },
          ],
        },
      ],
    },
  },
  {
    id: "c1000000-0000-0000-0000-000000000004",
    title: "Patient Interaction & Scripts",
    description: "Consent, dignity, plain-language explanations, and coaching.",
    modality: "common",
    order_index: 4,
    estimated_duration: 20,
    content: {
      sections: [
        {
          type: "script",
          title: "Starter Scripts",
          script: [
            { speaker: "Tech", line: "Hello, I'm [Name]. I’ll perform your ultrasound/EKG. Please confirm your name and date of birth." },
            { speaker: "Tech", line: "This uses sound waves/stickers to capture images. It shouldn’t hurt; you might feel some pressure." },
            { speaker: "Tech", line: "If anything feels uncomfortable, tell me and I’ll pause." },
          ],
        },
        {
          type: "steps",
          title: "Breath-Hold Coaching",
          steps: [
            "Practice once before scanning: 'Take a breath in... hold... breathe normally.'",
            "During imaging: cue a short breath-hold for 5–10 seconds.",
            "If struggling: reassure and work with normal breathing.",
          ],
        },
        {
          type: "alert",
          variant: "warning",
          title: "De-escalation for Anxiety",
          items: ["Acknowledge feelings; explain safety", "Offer chaperone/family present if appropriate", "Pause or reschedule if distress persists"],
        },
      ],
    },
  },

  // Ultrasound Track
  {
    id: "a2000000-0000-0000-0000-000000000001",
    title: "Ultrasound Physics & Controls",
    description: "Depth, gain, TGC, focus, frequency trade-offs; core artifacts.",
    modality: "ultrasound",
    order_index: 1,
    estimated_duration: 30,
    content: {
      sections: [
        {
          type: "steps",
          title: "Control Sequence",
          steps: [
            "Depth first: frame target with 1–2 cm beyond.",
            "Overall gain, then TGC for depth-specific brightness.",
            "Focus at/just below structure of interest.",
            "Frequency: higher = resolution, lower = penetration.",
          ],
          footnote: "Optimize in this order before moving on.",
        },
        {
          type: "comparison",
          title: "Frequency Trade-off",
          leftLabel: "Higher Frequency",
          rightLabel: "Lower Frequency",
          rows: [
            { left: "Better resolution", right: "Better penetration" },
            { left: "Superficial (thyroid, vessels)", right: "Deep abdomen/heart" },
            { left: "Limited depth", right: "Wider usable depth" },
          ],
        },
        {
          type: "alert",
          variant: "info",
          title: "Artifacts to Recognize",
          items: ["Shadowing: stones/bone", "Posterior enhancement: fluid", "Reverberation/mirror", "Side lobes mimicking echoes"],
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000002",
    title: "Abdominal Core Anatomy",
    description: "Liver/GB, IVC vs aorta, kidney landmarks with real images.",
    modality: "ultrasound",
    order_index: 2,
    estimated_duration: 25,
    content: {
      sections: [
        {
          type: "anatomy",
          title: "Key Landmarks",
          image: "https://www.bartleby.com/107/illus492.jpg",
          caption: "Gray’s Anatomy abdominal organs (public domain)",
          markers: [
            { label: "Liver", detail: "Largest solid organ, right upper quadrant" },
            { label: "Gallbladder", detail: "Under liver, mobile, fluid-filled" },
            { label: "IVC vs Aorta", detail: "IVC compressible; aorta pulsatile" },
          ],
        },
        {
          type: "list",
          title: "Landmark Cues",
          items: [
            "Liver in RUQ; gallbladder under liver (mobile).",
            "IVC is compressible; aorta pulsatile and non-compressible.",
            "Kidneys retroperitoneal; cortex vs medulla differentiation.",
          ],
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000003",
    title: "Scanning Fundamentals & Artifacts",
    description: "Orientation, sweep patterns, and optimization ladder.",
    modality: "ultrasound",
    order_index: 3,
    estimated_duration: 30,
    content: {
      sections: [
        {
          type: "steps",
          title: "Probe Orientation & Sweep",
          steps: [
            "Indicator to head/right (standard).",
            "Sagittal then transverse; fan/rock/rotate systematically.",
            "Document in two orthogonal planes.",
          ],
        },
        {
          type: "mnemonic",
          title: "Golden Rule",
          content: "Never diagnose from one image. Always scan in multiple planes.",
        },
        {
          type: "flow",
          title: "Optimization Ladder",
          nodes: [
            { label: "Reposition patient / breath-hold" },
            { label: "Check probe & preset" },
            { label: "Depth → Gain → TGC" },
            { label: "Focus/Frequency" },
            { label: "Change window" },
            { label: "Document limitation" },
          ],
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000004",
    title: "Gallbladder Protocol",
    description: "RUQ views, CBD, mobility maneuvers, shadowing confirmation.",
    modality: "ultrasound",
    order_index: 4,
    estimated_duration: 25,
    content: {
      sections: [
        {
          type: "steps",
          title: "Acquisition Steps",
          steps: [
            "GB long & short; assess wall, lumen, pericholecystic fluid.",
            "CBD view; measure if indicated; add color if needed.",
            "Survey adjacent liver parenchyma.",
          ],
        },
        {
          type: "checklist",
          title: "Tips & Maneuvers",
          items: ["Left lateral decubitus to move stones/gas", "Deep inspiration to drop liver/GB", "Heel-toe to avoid ribs; add gel for contact"],
        },
        {
          type: "alert",
          variant: "info",
          title: "Artifact Clues",
          items: ["Shadowing confirms stones", "Posterior enhancement supports fluid-filled lumen"],
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000005",
    title: "Renal & Bladder",
    description: "Kidneys in two planes, hydronephrosis screen, bladder volume.",
    modality: "ultrasound",
    order_index: 5,
    estimated_duration: 20,
    content: {
      sections: [
        {
          type: "steps",
          title: "Kidney Protocol",
          steps: [
            "Long and short axis both kidneys; include cortex/medulla.",
            "Measure length if indicated; evaluate for hydronephrosis.",
            "Consider decubitus or prone for better windows.",
          ],
        },
        {
          type: "checklist",
          title: "Bladder Protocol",
          items: [
            "Transverse and sagittal views",
            "Posterior enhancement expected",
            "Post-void if ordered; note debris/clots",
          ],
        },
        {
          type: "mnemonic",
          title: "Full bladder helps",
          content: "Full bladder improves pelvic/ureteral visualization.",
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000006",
    title: "Thyroid & Superficial",
    description: "High-frequency technique, small sweeps, vascular mapping.",
    modality: "ultrasound",
    order_index: 6,
    estimated_duration: 20,
    content: {
      sections: [
        {
          type: "steps",
          title: "Technique Essentials",
          steps: [
            "High-frequency linear probe; light pressure.",
            "Small sweeps; keep probe steady to avoid motion artifacts.",
            "Use color to map vascularity; identify lobes and isthmus.",
          ],
        },
        {
          type: "alert",
          variant: "info",
          title: "Safety",
          items: ["Monitor patient comfort with neck extension", "Document any limitations (body habitus, motion)"],
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000007",
    title: "Vascular Access Guidance",
    description: "Artery vs vein cues, compressibility, in-plane vs out-of-plane.",
    modality: "ultrasound",
    order_index: 7,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "comparison",
          title: "Artery vs Vein",
          leftLabel: "Vein",
          rightLabel: "Artery",
          rows: [
            { left: "Compressible", right: "Non-compressible" },
            { left: "Phasic flow", right: "Pulsatile flow" },
            { left: "Thin wall", right: "Thicker wall" },
          ],
        },
        {
          type: "steps",
          title: "Approach Planning",
          steps: [
            "Confirm depth and vessel diameter.",
            "Choose in-plane vs out-of-plane approach.",
            "Maintain sterile technique; visualize needle tip.",
          ],
          footnote: "Document vessel, depth, and approach.",
        },
        {
          type: "alert",
          variant: "warning",
          title: "Safety",
          items: ["Do not proceed if vessel identity uncertain", "Abort if patient reports severe pain"],
        },
      ],
    },
  },
  {
    id: "a2000000-0000-0000-0000-000000000008",
    title: "Ultrasound Troubleshooting",
    description: "Obesity, gas, ribs; optimization ladder and documentation.",
    modality: "ultrasound",
    order_index: 8,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "flow",
          title: "When Image is Poor",
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
          title: "Document Limits",
          items: ["Body habitus", "Bowel gas", "Patient cooperation", "Rib shadowing"],
        },
      ],
    },
  },

  // Echo Track
  {
    id: "e3000000-0000-0000-0000-000000000001",
    title: "Focused Echo Goals & Scope",
    description: "Binary questions, emergency use, limits vs full echo; when to escalate.",
    modality: "echo",
    order_index: 1,
    estimated_duration: 20,
    content: {
      sections: [
        {
          type: "checklist",
          title: "Focused Goals",
          items: ["Effusion/tamponade?", "Gross LV/RV function?", "Volume status via IVC collapse"],
        },
        {
          type: "alert",
          variant: "danger",
          title: "Escalate",
          items: ["Effusion with RA/RV collapse", "Severely reduced global function", "No adequate windows after optimization"],
        },
        {
          type: "mnemonic",
          title: "Scope",
          content: "POCUS answers binary questions; not a full diagnostic echo.",
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000002",
    title: "Parasternal Views (PLAX/PSAX)",
    description: "Probe placement, looks-right cues, PSAX base/mid/papillary.",
    modality: "echo",
    order_index: 2,
    estimated_duration: 25,
    content: {
      sections: [
        {
          type: "steps",
          title: "PLAX Setup",
          steps: [
            "Left parasternal 3rd–4th ICS; indicator to right shoulder.",
            "Aim toward right scapula; maximize LV length; avoid foreshortening.",
          ],
        },
        {
          type: "steps",
          title: "PSAX Levels",
          steps: ["Rotate 90° from PLAX", "Base (AV), mid (MV), papillary levels", "Fan from base to apex"],
        },
        {
          type: "comparison",
          title: "Looks Right vs Off",
          leftLabel: "Looks Right",
          rightLabel: "Common Miss",
          rows: [
            { left: "RV anterior, LV/LA visible, Ao root centered", right: "Foreshortened LV or off-axis root" },
            { left: "Pericardium as bright line", right: "Poor contact or rib shadowing" },
          ],
        },
        {
          type: "imageGallery",
          title: "Anatomy Reference",
          images: [
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Gray490.png",
              caption: "Heart chambers (Gray’s Anatomy, public domain)",
            },
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000003",
    title: "Apical Views (4/2/3)",
    description: "Find true apex, avoid foreshortening, rotate to A2C/A3C.",
    modality: "echo",
    order_index: 3,
    estimated_duration: 25,
    content: {
      sections: [
        {
          type: "steps",
          title: "Apical 4-Chamber",
          steps: [
            "Find PMI; indicator to patient's left; aim to right shoulder.",
            "Ensure all 4 chambers; avoid foreshortening.",
          ],
        },
        {
          type: "flow",
          title: "Rotate to A2C / A3C",
          nodes: [
            { label: "From A4C → rotate ~90° CCW → A2C (LA/LV only)" },
            { label: "From A2C → rotate ~60° CCW → A3C (Ao root, LV, LA)" },
          ],
        },
        {
          type: "alert",
          variant: "info",
          title: "If Foreshortened",
          items: ["Move more lateral/inferior to find true apex", "Reduce depth to frame LV", "Reacquire with ECG gating if available"],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000004",
    title: "Subcostal & IVC",
    description: "Subxiphoid 4-ch view; IVC measurement and collapsibility.",
    modality: "echo",
    order_index: 4,
    estimated_duration: 20,
    content: {
      sections: [
        {
          type: "steps",
          title: "Subcostal 4-Chamber",
          steps: ["Probe subxiphoid, indicator left", "Aim to left shoulder", "Useful in COPD/ventilated/poor parasternal"],
        },
        {
          type: "steps",
          title: "IVC Assessment",
          steps: [
            "Indicator to head; measure 2–3 cm from RA junction",
            "Normal: >50% collapse with sniff",
            "Collapse <50% suggests elevated RA pressure",
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000005",
    title: "Poor Windows Strategies",
    description: "Obesity, COPD, post-op; alternative windows and positioning.",
    modality: "echo",
    order_index: 5,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "flow",
          title: "If Windows Are Poor",
          nodes: [
            { label: "Obesity: lower frequency, harmonics, subcostal priority" },
            { label: "COPD/ventilated: parasternal limited → subcostal primary" },
            { label: "Try sitting up if tolerated" },
            { label: "Use very low/apical position if needed" },
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000006",
    title: "Focused Findings & Escalation",
    description: "Effusion, severe dysfunction, documentation of limitations.",
    modality: "echo",
    order_index: 6,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "alert",
          variant: "danger",
          title: "Escalate",
          items: ["Pericardial effusion with RA/RV collapse", "Severely reduced global function", "Inability to obtain windows after optimization"],
        },
        {
          type: "checklist",
          title: "Document",
          items: ["Views obtained", "Limitations (habitus, COPD, dressings)", "Patient tolerance", "Arrhythmia noted"],
        },
      ],
    },
  },

  // EKG Track
  {
    id: "b4000000-0000-0000-0000-000000000001",
    title: "Prep & Machine Setup",
    description: "Skin prep, electrodes, paper speed, calibration, filters.",
    modality: "ekg",
    order_index: 1,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "steps",
          title: "Prep",
          steps: [
            "Expose only necessary areas; drape respectfully.",
            "Clean/dry/abrade/shave as needed for contact.",
            "Check electrode dates/gel; replace dry pads.",
          ],
        },
        {
          type: "steps",
          title: "Machine Setup",
          steps: ["Paper speed 25 mm/sec", "Calibration 10 mm/mV", "Lead integrity test", "Filters 0.5–40 Hz (adults)"],
        },
        {
          type: "alert",
          variant: "warning",
          title: "Allergy & Skin",
          items: ["Use latex-free electrodes if needed", "Observe for skin reaction; stop if severe"],
        },
      ],
    },
  },
  {
    id: "b4000000-0000-0000-0000-000000000002",
    title: "Lead Placement Mastery",
    description: "Limb lead colors, chest lead landmarks V1–V6 with references.",
    modality: "ekg",
    order_index: 2,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "mnemonic",
          title: "Limb Lead Colors",
          content: "White on Right, Smoke (Black) over Fire (Red), Green is Ground.",
        },
        {
          type: "steps",
          title: "Chest Lead Landmarks",
          steps: [
            "V1: 4th ICS RSB; V2: 4th ICS LSB",
            "V3: midway V2–V4; V4: 5th ICS MCL",
            "V5: same level as V4, anterior axillary; V6: same level, mid-axillary",
          ],
        },
        {
          type: "imageGallery",
          title: "Placement Reference",
          images: [
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/EKG_12derivaciones.png/512px-EKG_12derivaciones.png",
              caption: "Standard chest lead placement (CC BY-SA 4.0)",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/ConductionsystemoftheheartwithouttheHeart.png/512px-ConductionsystemoftheheartwithouttheHeart.png",
              caption: "Cardiac conduction system (CC BY-SA 3.0)",
            },
          ],
        },
      ],
    },
  },
  {
    id: "b4000000-0000-0000-0000-000000000003",
    title: "Artifact Recognition & Fixes",
    description: "Muscle tremor, 60-cycle, wandering baseline, loose leads.",
    modality: "ekg",
    order_index: 3,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "comparison",
          title: "Artifact Type vs Fix",
          leftLabel: "Artifact",
          rightLabel: "First Fix",
          rows: [
            { left: "Muscle tremor (fuzzy baseline)", right: "Warm patient, support arms, reassure" },
            { left: "60-cycle interference", right: "Remove nearby electronics / check grounding" },
            { left: "Wandering baseline", right: "Clean skin better; replace dry electrodes" },
            { left: "Loose lead", right: "Check connections; replace electrode" },
          ],
        },
        {
          type: "flow",
          title: "If Artifact Persists",
          nodes: [
            { label: "Re-check skin prep and electrodes" },
            { label: "Verify lead order and placement" },
            { label: "Move away electronics / ensure grounding" },
            { label: "Document limitation if unresolved" },
          ],
        },
      ],
    },
  },
  {
    id: "b4000000-0000-0000-0000-000000000004",
    title: "Rhythm Strip & Escalation",
    description: "Lead II strip protocol; dangerous rhythms requiring immediate escalation.",
    modality: "ekg",
    order_index: 4,
    estimated_duration: 15,
    content: {
      sections: [
        {
          type: "steps",
          title: "Lead II Rhythm Strip",
          steps: ["Record 6–10 seconds minimum", "Assess P-QRS-T, rate, rhythm regularity", "Ensure clear baseline"],
        },
        {
          type: "alert",
          variant: "danger",
          title: "Escalate Immediately",
          items: ["VF/VT", "Asystole", "Complete heart block with symptoms"],
        },
      ],
    },
  },
];

