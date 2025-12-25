"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Circle, AlertTriangle } from "lucide-react";

type StepItem = {
  title?: string;
  description: string;
  tips?: string[];
  warnings?: string[];
  image?: string;
};

export function StepList({
  title,
  steps,
  footnote,
}: {
  title?: string;
  steps: (StepItem | string)[];
  footnote?: string;
}) {
  const [done, setDone] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-3">
      {title ? <h4 className="text-sm font-semibold text-ink">{title}</h4> : null}
      <ol className="space-y-3">
        {steps.map((raw, idx) => {
          const step = typeof raw === "string" ? { description: raw } : raw;
          const completed = done[idx];
          return (
            <li key={idx} className="space-y-2 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <div className="flex gap-3">
                <button
                  aria-label="toggle step"
                  onClick={() => setDone((prev) => ({ ...prev, [idx]: !completed }))}
                  className="mt-0.5 text-primary-200 transition hover:scale-105"
                >
                  {completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                </button>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink/60">Step {idx + 1}</span>
                    {step.title ? <span className="text-sm font-semibold text-ink">{step.title}</span> : null}
                  </div>
                  <p className="text-sm text-ink/80">{step.description}</p>
                </div>
              </div>
              {step.image ? (
                <div className="relative h-40 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                  <Image src={step.image} alt={step.title ?? "Step"} fill sizes="100vw" className="object-cover" />
                </div>
              ) : null}
              {step.tips?.length ? (
                <div className="rounded-xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-50 ring-1 ring-emerald-500/20">
                  <p className="font-semibold">Tips</p>
                  <ul className="mt-1 list-disc space-y-1 pl-4">
                    {step.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {step.warnings?.length ? (
                <div className="rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-50 ring-1 ring-rose-500/20">
                  <p className="inline-flex items-center gap-1 font-semibold">
                    <AlertTriangle size={14} />
                    Warnings
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4">
                    {step.warnings.map((warn) => (
                      <li key={warn}>{warn}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
      {footnote ? <p className="text-xs text-ink/60">{footnote}</p> : null}
    </div>
  );
}
