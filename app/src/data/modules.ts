import { Module } from "@/types";

export const staticModules: Module[] = [
  // Common Core
  {
    id: "c1000000-0000-0000-0000-000000000001",
    title: "Orientation & Fundamentals",
    description:
      "Plain-English definitions of ultrasound, echo, EKG; scope of practice; safety signals.",
    modality: "common",
    order_index: 1,
    estimated_duration: 30,
    content: {
      sections: [
        {
          title: "Plain English definitions",
          items: [
            "Ultrasound = sound waves imaging (no radiation).",
            "Echo = ultrasound focused on the heart (structure + flow).",
            "EKG = electrical recording of the heart’s rhythm.",
          ],
        },
        {
          title: "Role vs interpretation",
          items: [
            "Acquire images/data and optimize quality.",
            "Document technical quality and limitations; do not diagnose.",
            "Escalate safety concerns immediately.",
          ],
        },
        {
          title: "Safety signals (STOP / escalate)",
          items: [
            "Severe pain or distress during exam.",
            "Allergic reaction to gel/electrodes.",
            "Equipment malfunction affecting safety.",
            "Unstable rhythm seen on monitor.",
          ],
        },
      ],
    },
  },
  {
    id: "c1000000-0000-0000-0000-000000000002",
    title: "Safety & Infection Control",
    description:
      "ALARA, probe disinfection, electrical safety; practical checklists.",
    modality: "common",
    order_index: 2,
    estimated_duration: 25,
    content: {
      sections: [
        {
          title: "ALARA in practice",
          items: [
            "Minimize dwell time; only as long as needed.",
            "Lowest power/output that yields diagnostic image.",
            "Avoid prolonged scanning over fetal tissue or eyes.",
          ],
          callout: "ALARA = As Low As Reasonably Achievable.",
        },
        {
          title: "Probe disinfection",
          items: [
            "Remove gel with approved wipes.",
            "Respect contact time per manufacturer.",
            "Air dry fully before reuse.",
            "High-level disinfection for TEE/TV and mucosal probes.",
          ],
        },
        {
          title: "Electrical safety",
          items: [
            "Inspect cables for damage each use.",
            "Ensure proper grounding; avoid wet environments.",
            "Replace damaged electrodes/cables immediately.",
          ],
        },
      ],
    },
  },
  {
    id: "c1000000-0000-0000-0000-000000000003",
    title: "Pre-Exam Workflow & Documentation",
    description:
      "Orders, two-identifier ID, room/supply setup, device self-test, documentation traps.",
    modality: "common",
    order_index: 3,
    estimated_duration: 25,
    content: {
      sections: [
        {
          title: "Verify orders & ID",
          items: [
            "Two identifiers: name + DOB/MRN.",
            "Confirm exam type matches order; note indication.",
            "Review allergies and prior studies if available.",
          ],
        },
        {
          title: "Room & supplies",
          items: [
            "Gloves, wipes, gel, probe covers/electrodes/razors.",
            "Lighting and privacy; emergency call button accessible.",
            "Paper/thermal paper and calibration checks for EKG.",
          ],
        },
        {
          title: "Documentation traps (avoid diagnostic language)",
          items: [
            "Document views obtained and technical limitations.",
            "Note patient tolerance and cooperation.",
            "Avoid interpretations; use technical descriptors only.",
          ],
        },
      ],
    },
  },
  {
    id: "c1000000-0000-0000-0000-000000000004",
    title: "Patient Interaction & Scripts",
    description:
      "Consent, dignity, simple explanations, breath-hold coaching, escalation.",
    modality: "common",
    order_index: 4,
    estimated_duration: 20,
    content: {
      sections: [
        {
          title: "Starter scripts",
          items: [
            "Introduce and verify ID: name + DOB.",
            "Explain exam simply (sound waves / stickers) and what to expect.",
            "Offer chaperone/draping; pause if distressed.",
          ],
        },
        {
          title: "Coaching",
          items: [
            "Practice breath-holds before scanning.",
            "Explain pressure vs pain; invite feedback.",
            "For anxious patients: reassure, narrate steps, keep exposure minimal.",
          ],
        },
      ],
    },
  },

  // Ultrasound Track
  {
    id: "u2000000-0000-0000-0000-000000000001",
    title: "Ultrasound Physics & Controls",
    description:
      "Depth, gain, TGC, focus, frequency trade-offs; artifacts recognition.",
    modality: "ultrasound",
    order_index: 1,
    estimated_duration: 30,
    content: {
      sections: [
        {
          title: "Control sequence",
          items: [
            "Depth first to frame target with 1–2 cm beyond.",
            "Overall gain, then TGC for depth-specific brightness.",
            "Focus at/just below structure of interest.",
            "Frequency: higher = resolution, lower = penetration.",
          ],
        },
        {
          title: "Common artifacts",
          items: [
            "Shadowing: stones/bone; posterior enhancement: fluid.",
            "Reverberation/mirror; side lobes mimicking echoes.",
          ],
        },
      ],
    },
  },
  {
    id: "u2000000-0000-0000-0000-000000000002",
    title: "Abdominal Core Anatomy",
    description:
      "Liver/GB, IVC vs Aorta cues, kidney landmarks with real images.",
    modality: "ultrasound",
    order_index: 2,
    estimated_duration: 25,
    content: {
      sections: [
        {
          title: "Landmarks",
          items: [
            "Liver RUQ; GB under liver; IVC compressible vs aorta pulsatile.",
            "Kidneys retroperitoneal, cortex vs medulla visualization.",
          ],
          image:
            "https://www.bartleby.com/107/illus492.jpg",
          caption: "Gray’s Anatomy abdominal organs (public domain).",
        },
      ],
    },
  },
  {
    id: "u2000000-0000-0000-0000-000000000004",
    title: "Gallbladder Protocol",
    description:
      "RUQ views, CBD, mobility maneuvers, shadowing confirmation.",
    modality: "ultrasound",
    order_index: 3,
    estimated_duration: 25,
    content: {
      sections: [
        {
          title: "Protocol",
          items: [
            "GB long and short; wall and lumen assessment.",
            "CBD view; measure if indicated; use color if needed.",
            "Liver survey adjacent to GB.",
          ],
        },
        {
          title: "Tips & maneuvers",
          items: [
            "Left lateral decubitus to move stones/gas.",
            "Deep inspiration to move diaphragm/liver caudad.",
            "Heel-toe to avoid ribs; more gel for contact.",
          ],
        },
      ],
    },
  },
  {
    id: "u2000000-0000-0000-0000-000000000005",
    title: "Renal & Bladder",
    description:
      "Kidneys in two planes, hydronephrosis screen, bladder volume.",
    modality: "ultrasound",
    order_index: 4,
    estimated_duration: 20,
    content: {
      sections: [
        {
          title: "Kidney protocol",
          items: [
            "Long and short axis both kidneys; assess cortex/medulla.",
            "Measure length if indicated; assess hydronephrosis.",
          ],
        },
        {
          title: "Bladder protocol",
          items: [
            "Transverse and sagittal; post-void if ordered.",
            "Posterior enhancement is expected; look for debris/clots.",
          ],
        },
      ],
    },
  },
  {
    id: "u2000000-0000-0000-0000-000000000006",
    title: "Thyroid & Superficial",
    description:
      "High-frequency technique, small sweeps, vascular mapping.",
    modality: "ultrasound",
    order_index: 5,
    estimated_duration: 20,
    content: {
      sections: [
        {
          title: "Technique",
          items: [
            "High-frequency linear; light pressure; small sweeps.",
            "Use color for vascular mapping; identify lobes and isthmus.",
          ],
        },
      ],
    },
  },
  {
    id: "u2000000-0000-0000-0000-000000000007",
    title: "Vascular Access Guidance",
    description:
      "Artery vs vein cues, compressibility, in-plane vs out-of-plane.",
    modality: "ultrasound",
    order_index: 6,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Identify vessels",
          items: [
            "Compression test for veins; pulsatility for arteries.",
            "Use color: phasic vs pulsatile flow.",
          ],
        },
        {
          title: "Approach",
          items: [
            "Plan depth and angle; in-plane vs out-of-plane.",
            "Sterile technique per policy; document vessel and depth.",
          ],
        },
      ],
    },
  },
  {
    id: "u2000000-0000-0000-0000-000000000008",
    title: "Ultrasound Troubleshooting",
    description:
      "Obesity, gas, ribs; optimization ladder and documentation.",
    modality: "ultrasound",
    order_index: 7,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Optimization ladder",
          items: [
            "Reposition patient; intercostal windows; change side.",
            "Lower frequency; harmonics; increase contact/gel.",
            "Change window; document limitations (habitus/gas).",
          ],
        },
      ],
    },
  },

  // Echo Track
  {
    id: "e3000000-0000-0000-0000-000000000001",
    title: "Focused Echo Goals & Scope",
    description:
      "Binary questions, emergency use, limits vs full echo; when to escalate.",
    modality: "echo",
    order_index: 1,
    estimated_duration: 20,
    content: {
      sections: [
        {
          title: "Goals",
          items: [
            "Effusion/tamponade?",
            "Gross LV/RV function?",
            "Volume status via IVC collapse.",
          ],
        },
        {
          title: "Escalate",
          items: [
            "Effusion with RA/RV collapse.",
            "Severely reduced global function.",
            "No adequate windows despite optimization.",
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000002",
    title: "Parasternal Views (PLAX/PSAX)",
    description:
      "Probe placement, looks-right cues, PSAX base/mid/papillary.",
    modality: "echo",
    order_index: 2,
    estimated_duration: 25,
    content: {
      sections: [
        {
          title: "PLAX setup",
          items: [
            "Left parasternal 3rd–4th ICS; indicator to right shoulder.",
            "Aim toward right scapula; maximize LV length; avoid foreshortening.",
          ],
        },
        {
          title: "PSAX levels",
          items: [
            "Rotate 90° from PLAX.",
            "Base (aortic), mid (mitral), papillary levels; fan apex to base.",
          ],
        },
        {
          title: "Looks-right cues",
          items: [
            "RV anterior; Ao root between RV/LA; MV visible; pericardium bright.",
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000003",
    title: "Apical Views (4/2/3)",
    description:
      "Find true apex, avoid foreshortening, rotate to A2C/A3C.",
    modality: "echo",
    order_index: 3,
    estimated_duration: 25,
    content: {
      sections: [
        {
          title: "Apical 4-chamber",
          items: [
            "Probe at PMI; indicator left; angle to right shoulder.",
            "All 4 chambers; both AV valves; avoid foreshortening.",
          ],
        },
        {
          title: "Rotate to A2C/A3C",
          items: [
            "A2C: rotate ~90° CCW from A4C (LA/LV only).",
            "A3C: rotate ~60° CCW from A2C (Ao root, LV, LA).",
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000004",
    title: "Subcostal & IVC",
    description:
      "Subxiphoid 4-ch view; IVC measurement and collapsibility.",
    modality: "echo",
    order_index: 4,
    estimated_duration: 20,
    content: {
      sections: [
        {
          title: "Subcostal 4-ch",
          items: [
            "Probe subxiphoid, indicator left; aim to left shoulder.",
            "Use in COPD/ventilated/poor parasternal.",
          ],
        },
        {
          title: "IVC",
          items: [
            "Indicator to head; measure 2–3 cm from RA junction.",
            "Normal: >50% collapse with sniff; <50% suggests elevated RA pressure.",
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000005",
    title: "Poor Windows Strategies",
    description:
      "Obesity, COPD, post-op; alternative windows and positioning.",
    modality: "echo",
    order_index: 5,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Obesity",
          items: [
            "Lower frequency; harmonics; more time for windows.",
            "Subcostal priority; lateral decubitus with roll if tolerated.",
          ],
        },
        {
          title: "COPD/ventilated",
          items: [
            "Parasternal often limited; subcostal primary.",
            "Sit up if tolerated; very low probe position for apical.",
          ],
        },
      ],
    },
  },
  {
    id: "e3000000-0000-0000-0000-000000000006",
    title: "Focused Findings & Escalation",
    description:
      "Effusion, severe dysfunction, documentation of limitations.",
    modality: "echo",
    order_index: 6,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Escalate",
          items: [
            "Pericardial effusion with RA/RV collapse.",
            "Severely reduced global function.",
            "Inability to obtain windows after optimization.",
          ],
        },
        {
          title: "Document",
          items: [
            "Views obtained; limitations (habitus, COPD, dressings).",
            "Patient tolerance; arrhythmia noted.",
          ],
        },
      ],
    },
  },

  // EKG Track
  {
    id: "k4000000-0000-0000-0000-000000000001",
    title: "Prep & Machine Setup",
    description:
      "Skin prep, electrodes, paper speed, calibration, filters.",
    modality: "ekg",
    order_index: 1,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Prep",
          items: [
            "Expose only necessary areas; clean/dry/abrade/shave as needed.",
            "Check electrode dates/gel; replace dry pads.",
          ],
        },
        {
          title: "Machine",
          items: [
            "Paper speed 25 mm/sec; calibration 10 mm/mV.",
            "Lead integrity test; filters 0.5–40 Hz adults.",
          ],
        },
      ],
    },
  },
  {
    id: "k4000000-0000-0000-0000-000000000002",
    title: "Lead Placement Mastery",
    description:
      "Limb lead colors, chest lead landmarks V1–V6 with references.",
    modality: "ekg",
    order_index: 2,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Limb leads",
          items: [
            "RA white (right), LA black (left arm), RL green (ground), LL red (left leg).",
          ],
        },
        {
          title: "Chest leads",
          items: [
            "V1 4th ICS RSB; V2 4th ICS LSB.",
            "V3 midway V2–V4; V4 5th ICS MCL.",
            "V5 same level at AAL; V6 same level at MAL.",
          ],
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/EKG_12derivaciones.png/512px-EKG_12derivaciones.png",
          caption: "Standard chest lead placement (CC BY-SA 4.0).",
        },
      ],
    },
  },
  {
    id: "k4000000-0000-0000-0000-000000000003",
    title: "Artifact Recognition & Fixes",
    description:
      "Muscle tremor, 60-cycle, wandering baseline, loose leads.",
    modality: "ekg",
    order_index: 3,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Muscle tremor",
          items: [
            "Warm patient/room; support arms; reassure.",
          ],
        },
        {
          title: "60-cycle interference",
          items: [
            "Remove nearby electronics; check grounding; replace electrodes if needed.",
          ],
        },
        {
          title: "Wandering baseline",
          items: [
            "Clean skin thoroughly; replace dry pads; coach stillness.",
          ],
        },
      ],
    },
  },
  {
    id: "k4000000-0000-0000-0000-000000000004",
    title: "Rhythm Strip & Escalation",
    description:
      "Lead II strip protocol; dangerous rhythms requiring immediate escalation.",
    modality: "ekg",
    order_index: 4,
    estimated_duration: 15,
    content: {
      sections: [
        {
          title: "Strip protocol",
          items: ["Lead II, 6–10 seconds; assess P-QRS-T; rate/rhythm regularity."],
        },
        {
          title: "Escalate immediately",
          items: ["VF/VT", "Asystole", "Complete heart block with symptoms"],
        },
      ],
    },
  },
];

