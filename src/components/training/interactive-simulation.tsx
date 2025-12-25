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
    <div className="rounded-xl bg-white border border-gray-200 shadow-sm space-y-3 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Interactive simulation</p>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="rounded-full bg-primary-50 border border-primary-200 px-3 py-1 text-xs font-semibold text-primary-700">
          {score}/{steps.length} correct
        </div>
      </div>
      <p className="text-sm text-gray-700">{scenario}</p>
      <div className="space-y-2 rounded-lg bg-gray-50 p-4 border border-gray-200">
        <p className="text-sm font-semibold text-gray-900">
          Step {index + 1}: {step.prompt}
        </p>
        <div className="space-y-2">
          {step.choices.map((c, i) => {
            const isSelected = selected === i;
            const state =
              selected === null
                ? ""
                : c.correct
                  ? "border-emerald-400 bg-emerald-50"
                  : isSelected
                    ? "border-rose-400 bg-rose-50"
                    : "opacity-70";
            return (
              <button
                key={c.label}
                onClick={() => onChoose(i)}
                disabled={selected !== null}
                className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${state || "border-gray-200 bg-white hover:bg-gray-50"}`}
              >
                <span className="text-gray-900">{c.label}</span>
                {isSelected ? <p className="text-xs text-gray-600 mt-1">{c.rationale}</p> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <button
          onClick={reset}
          className="inline-flex items-center gap-1 rounded-lg bg-gray-100 border border-gray-200 px-3 py-2 font-semibold text-gray-700 hover:bg-gray-200"
        >
          <RefreshCw size={14} /> Restart
        </button>
        <button
          onClick={next}
          disabled={selected === null || index === steps.length - 1}
          className="inline-flex items-center gap-1 rounded-lg bg-primary-500 px-3 py-2 font-semibold text-white hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next <ArrowRight size={14} />
        </button>
        {done ? <span className="text-emerald-600 font-semibold">Completed</span> : null}
      </div>
    </div>
  );
}



