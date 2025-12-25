"use client";

import { useMemo, useState } from "react";
import { Quiz, QuizQuestion } from "@/types";
import { cn } from "@/lib/utils/cn";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import Image from "next/image";

type Props = {
  quiz: Quiz;
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function QuizEngine({ quiz }: Props) {
  const supabase = createSupabaseBrowserClient();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const questions = useMemo<QuizQuestion[]>(
    () => quiz.questions ?? [],
    [quiz.questions]
  );

  const currentQuestion = questions[current];

  function selectAnswer(questionId: string, option: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }

  function next() {
    if (current < questions.length - 1) setCurrent((c) => c + 1);
  }

  function prev() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  async function submit() {
    const correct = questions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.answer ? 1 : 0);
    }, 0);
    const percent = Math.round((correct / questions.length) * 100);
    setScore(percent);
    setSubmitted(true);

    setSaving(true);
    setError(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { error: attemptError } = await supabase
        .from("quiz_attempts")
        .insert({
          quiz_id: quiz.id,
          user_id: user.id,
          score: percent,
          answers,
          passed: percent >= quiz.passing_score,
          attempt_number: 1,
          time_taken: null,
        });
      if (attemptError) setError(attemptError.message);
    }
    setSaving(false);
  }

  const shuffledOptions = useMemo(() => {
    return shuffle(currentQuestion?.options || []);
  }, [currentQuestion]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">{quiz.title}</p>
          <p className="text-xs text-slate-500">
            Question {current + 1} of {questions.length}
          </p>
        </div>
        {currentQuestion?.difficulty ? (
          <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase text-primary-100 ring-1 ring-primary-500/20">
            {currentQuestion.difficulty}
          </span>
        ) : null}
        {score !== null ? (
          <div
            className={cn(
              "rounded-xl px-3 py-2 text-sm font-semibold",
              score >= quiz.passing_score
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            )}
          >
            Score {score}% ({score >= quiz.passing_score ? "Pass" : "Retry"})
          </div>
        ) : null}
      </div>

      <div className="rounded-2xl bg-white/80 p-4 shadow ring-1 ring-slate-200">
        <h3 className="text-base font-semibold text-slate-900">{currentQuestion?.question}</h3>
        {currentQuestion?.image_url ? (
          <div className="relative mt-3 h-56 w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
            <Image src={currentQuestion.image_url} alt="Question reference" fill sizes="100vw" className="object-cover" />
          </div>
        ) : null}
        <div className="mt-3 space-y-2">
          {shuffledOptions.map((option) => {
            const chosen = answers[currentQuestion.id] === option;
            const correct = submitted && option === currentQuestion.answer;
            const wrong = submitted && chosen && option !== currentQuestion.answer;
            return (
              <button
                key={option}
                onClick={() => selectAnswer(currentQuestion.id, option)}
                className={cn(
                  "w-full rounded-xl border px-3 py-2 text-left text-sm transition",
                  chosen ? "border-primary-500 bg-primary-50" : "border-slate-200",
                  correct ? "border-emerald-500 bg-emerald-50" : "",
                  wrong ? "border-rose-500 bg-rose-50" : ""
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
        {submitted && currentQuestion.rationale ? (
          <p className="mt-3 text-xs text-slate-600">
            Rationale: {currentQuestion.rationale}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          disabled={current === 0}
          className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 disabled:opacity-40"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={next}
            disabled={current === questions.length - 1}
            className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40"
          >
            Next
          </button>
          <button
            onClick={submit}
            disabled={submitted || questions.length === 0}
            className="rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : submitted ? "Submitted" : "Submit"}
          </button>
        </div>
      </div>
      {error ? <p className="text-sm text-rose-500">{error}</p> : null}
    </div>
  );
}

