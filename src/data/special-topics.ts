export type SpecialTopic = {
  title: string;
  summary: string;
  items: { label: string; detail: string }[];
  link?: string;
};

export const specialTopics: SpecialTopic[] = [
  {
    title: "Poor acoustic windows",
    summary: "When ribs, gas, or habitus block your view.",
    items: [
      { label: "Reposition", detail: "Roll patient, intercostal windows, higher/lower ICS." },
      { label: "Optimize ladder", detail: "Depth → Gain → TGC → Focus/Frequency → Change window." },
      { label: "Respiratory assists", detail: "Deep inspiration for liver window, sniff for IVC." },
    ],
  },
  {
    title: "Obese patient strategies",
    summary: "Increase penetration and adjust ergonomics.",
    items: [
      { label: "Lower frequency", detail: "Curved probe 2–5 MHz; enable harmonics if available." },
      { label: "More gel, less pressure", detail: "Prevent loss of contact; avoid discomfort." },
      { label: "Alternative windows", detail: "Posterior/flank for kidneys, subcostal for heart." },
    ],
  },
  {
    title: "Pregnant patient considerations",
    summary: "Safety and positioning.",
    items: [
      { label: "Left lateral tilt", detail: "Avoid IVC compression in late pregnancy." },
      { label: "Limit dwell time", detail: "Keep exposure ALARA; avoid prolonged Doppler." },
      { label: "Clear consent", detail: "Explain purpose and limits of exam." },
    ],
  },
  {
    title: "Pediatric scanning",
    summary: "Gentle technique and smaller landmarks.",
    items: [
      { label: "Warm gel", detail: "Comfort first; reduce movement." },
      { label: "Smaller footprint", detail: "Linear or small curved probes as needed." },
      { label: "Parental presence", detail: "Helps cooperation and reassurance." },
    ],
  },
  {
    title: "Artifact troubleshooting",
    summary: "Identify and fix common artifacts.",
    items: [
      { label: "Reverberation", detail: "Change angle or use more gel to reduce." },
      { label: "Mirror artifact", detail: "Seen near diaphragm—confirm true structure." },
      { label: "Electrical noise (EKG)", detail: "Move electronics, check lead contact." },
    ],
  },
];



