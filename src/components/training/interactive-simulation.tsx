"use client";

import { useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";

type Step = {
  prompt: string;
  choices: { label: string; correct: boolean; rationale: string }[];
};

export function InteractiveSimulation({
  title,
  scenario,
  steps,
}: {
  title: string;
  scenario: string;
  steps: Step[];
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const step = steps[index];

  const onChoose = (i: number) => {
    setSelected(i);
    if (step.choices[i].correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (index < steps.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
  };

  const done = index === steps.length - 1 && selected !== null;

  return (
    <div className="glass-panel space-y-3 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink/60">Interactive simulation</p>
          <h3 className="text-base font-semibold text-ink">{title}</h3>
        </div>
        <div className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-100 ring-1 ring-primary-500/20">
          {score}/{steps.length} correct
        </div>
      </div>
      <p className="text-sm text-ink/80">{scenario}</p>
      <div className="space-y-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <p className="text-sm font-semibold text-ink">
          Step {index + 1}: {step.prompt}
        </p>
        <div className="space-y-2">
          {step.choices.map((c, i) => {
            const isSelected = selected === i;
            const state =
              selected === null
                ? ""
                : c.correct
                  ? "border-emerald-400 bg-emerald-500/10"
                  : isSelected
                    ? "border-rose-400 bg-rose-500/10"
                    : "opacity-70";
            return (
              <button
                key={c.label}
                onClick={() => onChoose(i)}
                disabled={selected !== null}
                className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${state || "border-white/10 bg-white/5 hover:-translate-y-0.5"}`}
              >
                {c.label}
                {isSelected ? <p className="text-xs text-ink/70">{c.rationale}</p> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <button
          onClick={reset}
          className="inline-flex items-center gap-1 rounded-xl bg-white/5 px-3 py-2 font-semibold text-ink ring-1 ring-white/10"
        >
          <RefreshCw size={14} /> Restart
        </button>
        <button
          onClick={next}
          disabled={selected === null || index === steps.length - 1}
          className="inline-flex items-center gap-1 rounded-xl bg-primary-500/15 px-3 py-2 font-semibold text-primary-100 ring-1 ring-primary-500/30 disabled:opacity-50"
        >
          Next <ArrowRight size={14} />
        </button>
        {done ? <span className="text-emerald-200">Completed</span> : null}
      </div>
    </div>
  );
}

