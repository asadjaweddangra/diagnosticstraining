export type GlossaryTerm = {
  term: string;
  definition: string;
  modality?: "ultrasound" | "echo" | "ekg" | "general";
};

export const glossary: GlossaryTerm[] = [
  {
    term: "ALARA",
    definition: "As Low As Reasonably Achievable—minimize exposure (applies broadly).",
    modality: "general",
  },
  {
    term: "BART",
    definition: "Blue Away, Red Toward—color Doppler convention.",
    modality: "ultrasound",
  },
  {
    term: "Gain",
    definition: "Amplification of received echoes; too high adds noise, too low hides detail.",
    modality: "ultrasound",
  },
  {
    term: "TGC",
    definition: "Time Gain Compensation—depth-specific gain to offset attenuation.",
    modality: "ultrasound",
  },
  {
    term: "PLAX",
    definition: "Parasternal Long-Axis cardiac ultrasound view.",
    modality: "echo",
  },
  {
    term: "Foreshortening",
    definition: "Cutting off chamber/apex by not aligning in true long axis (echo).",
    modality: "echo",
  },
  {
    term: "IVC collapse",
    definition: "Inferior vena cava variation with respiration; >50% suggests low RA pressure.",
    modality: "echo",
  },
  {
    term: "Lead V1",
    definition: "Placed at 4th intercostal space, right sternal border.",
    modality: "ekg",
  },
  {
    term: "STEMI",
    definition: "ST-segment Elevation Myocardial Infarction—meets elevation criteria in contiguous leads.",
    modality: "ekg",
  },
];

