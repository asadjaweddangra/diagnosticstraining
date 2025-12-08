import Link from "next/link";
import { getQuizzes } from "@/lib/supabase/queries";

export default async function QuizzesPage() {
  const quizzes = await getQuizzes();

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Quizzes</h1>
        <p className="text-sm text-slate-600">
          Micro-quizzes and comprehensive exams mapped to the training manual.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/quizzes/${quiz.id}`}
            className="rounded-2xl bg-white/80 p-4 shadow ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-slate-900">{quiz.title}</p>
            <p className="text-xs text-slate-500 capitalize">{quiz.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

