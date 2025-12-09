export type ContentLink = { label: string; href: string };

export type ImageItem = {
  src: string;
  caption?: string;
  callouts?: { label: string; detail: string }[];
};

export type ContentSection =
  | ({
      type?: undefined | "list";
      title?: string;
      body?: string;
      items?: string[];
      callout?: string;
      links?: ContentLink[];
      image?: string;
      caption?: string;
    })
  | {
      type: "alert";
      title?: string;
      variant?: "info" | "warning" | "danger";
      items: string[];
    }
  | {
      type: "steps";
      title?: string;
      steps: string[];
      footnote?: string;
    }
  | {
      type: "comparison";
      title?: string;
      rows: { left: string; right: string }[];
      leftLabel?: string;
      rightLabel?: string;
      body?: string;
    }
  | {
      type: "flow";
      title?: string;
      nodes: { label: string; detail?: string }[];
    }
  | {
      type: "mnemonic";
      title?: string;
      content: string;
      hint?: string;
    }
  | {
      type: "script";
      title?: string;
      script: { speaker: string; line: string }[];
    }
  | {
      type: "imageGallery";
      title?: string;
      images: ImageItem[];
    }
  | {
      type: "checklist";
      title?: string;
      items: string[];
    }
  | {
      type: "anatomy";
      title?: string;
      image: string;
      caption?: string;
      markers?: { label: string; detail?: string }[];
    };

export type Module = {
  id: string;
  title: string;
  description: string | null;
  content: { sections: ContentSection[] } | null;
  modality?: "ultrasound" | "echo" | "ekg" | "common";
  order_index: number | null;
  estimated_duration: number | null;
};

export type QuizQuestion = {
  id: string;
  type: "multiple_choice" | "scenario";
  question: string;
  options: string[];
  answer: string;
  rationale?: string;
};

export type Quiz = {
  id: string;
  module_id: string | null;
  title: string;
  type: string | null;
  passing_score: number;
  time_limit: number | null;
  max_attempts: number | null;
  questions: QuizQuestion[];
};

export type CompetencyRequirement = {
  id: string;
  name: string;
  description: string | null;
  modality: string | null;
  supervised_count: number | null;
  independent_count: number | null;
  skills_checklist: string[];
};

export type UserCompetency = {
  id: string;
  user_id: string;
  requirement_id: string;
  supervised_completed: number;
  independent_completed: number;
  skills_completed: string[];
  supervisor_signoffs: any[];
  status: string;
  certification_date: string | null;
};

