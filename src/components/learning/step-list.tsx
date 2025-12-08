"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

export function StepList({
  title,
  steps,
  footnote,
}: {
  title?: string;
  steps: string[];
  footnote?: string;
}) {
  const [done, setDone] = useState<Record<number, boolean>>({});

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-slate-900">{title}</h4> : null}
      <ol className="mt-2 space-y-2 text-sm text-slate-700">
        {steps.map((step, idx) => {
          const completed = done[idx];
          return (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-xl bg-slate-50/60 px-3 py-2 ring-1 ring-slate-100"
            >
              <button
                aria-label="toggle step"
                onClick={() => setDone((prev) => ({ ...prev, [idx]: !completed }))}
                className="mt-0.5 text-primary-500 transition hover:scale-105"
              >
                {completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
              </button>
              <div>
                <span className="font-semibold text-slate-900">Step {idx + 1}</span>
                <p className="text-slate-700">{step}</p>
              </div>
            </li>
          );
        })}
      </ol>
      {footnote ? <p className="mt-3 text-xs text-slate-500">{footnote}</p> : null}
    </div>
  );
}

