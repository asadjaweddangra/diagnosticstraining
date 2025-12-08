export type Module = {
  id: string;
  title: string;
  description: string | null;
  content: any;
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

