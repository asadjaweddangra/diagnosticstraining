import { notFound } from "next/navigation";
import { getQuizById } from "@/lib/supabase/queries";
import { QuizEngine } from "@/components/quiz/quiz-engine";
import { FlashcardDeck } from "@/components/quiz/flashcard-deck";

const fallbackFlashcards = [
  {
    front: "ALARA principle stands for?",
    back: "As Low As Reasonably Achievable (minimize exposure).",
  },
  {
    front: "BART in Doppler?",
    back: "Blue Away, Red Toward the probe.",
  },
  {
    front: "V1 lead placement?",
    back: "4th intercostal space, right sternal border.",
  },
  {
    front: "Primary alternative window when parasternal echo views fail?",
    back: "Subcostal window.",
  },
];

type Props = {
  params: { id: string };
};

export default async function QuizDetailPage({ params }: Props) {
  const quiz = await getQuizById(params.id);
  if (!quiz) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">{quiz?.title}</h1>
        <p className="text-sm text-slate-600 capitalize">{quiz?.type}</p>
      </div>
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        {quiz ? <QuizEngine quiz={quiz} /> : null}
      </div>
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Flashcards</h2>
        <FlashcardDeck cards={fallbackFlashcards} />
      </div>
    </div>
  );
}

