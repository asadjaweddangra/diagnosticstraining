"use client";

import Link from "next/link";
import { Flame, ShieldAlert, Stethoscope, Zap } from "lucide-react";
import { ultrasoundChapters } from "@/data/ultrasound-chapters";
import { echoChapters } from "@/data/echo-chapters";
import { ekgChapters } from "@/data/ekg-chapters";
import { InteractiveSimulation } from "@/components/training/interactive-simulation";

const drills = [
  ...ultrasoundChapters
    .filter((c) => c.drill)
    .map((c) => ({ ...c.drill!, href: `/ultrasound/${c.slug}`, track: "ultrasound" as const })),
  ...echoChapters
    .filter((c) => c.drill)
    .map((c) => ({ ...c.drill!, href: `/echo/${c.slug}`, track: "echo" as const })),
  ...ekgChapters
    .filter((c) => c.drill)
    .map((c) => ({ ...c.drill!, href: `/ekg/${c.slug}`, track: "ekg" as const })),
];

const icons = {
  ultrasound: <Stethoscope className="h-4 w-4" />,
  echo: <HeartIcon />,
  ekg: <Zap className="h-4 w-4" />,
};

function HeartIcon() {
  return <span className="text-rose-200">❤</span>;
}

export default function SimulationsPage() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <div className="flex items-center gap-3">
          <Flame className="h-5 w-5 text-primary-200" />
          <div>
            <h1 className="text-xl font-semibold text-ink">Simulator Drills & Case Assist</h1>
            <p className="text-sm text-ink/70">
              Quick scenarios, troubleshooting ladders, and escalation cues pulled from every chapter.
            </p>
          </div>
        </div>
      </div>

      <InteractiveSimulation
        title="RUQ pain ultrasound optimization"
        scenario="You have shadowing and gas obscuring the gallbladder on a bariatric patient."
        steps={[
          {
            prompt: "First move?",
            choices: [
              { label: "Crank up overall gain", correct: false, rationale: "Gain alone won’t overcome gas/rib shadow." },
              { label: "Roll patient to LLD and use intercostal window", correct: true, rationale: "Change window/position first." },
              { label: "Switch to linear probe", correct: false, rationale: "Penetration too low for RUQ depth." },
            ],
          },
          {
            prompt: "Still limited after repositioning. Next best action?",
            choices: [
              { label: "Lower frequency / harmonics on curved probe", correct: true, rationale: "Increase penetration after window change." },
              { label: "Increase depth to max", correct: false, rationale: "Depth alone reduces frame rate and may not help." },
              { label: "Stop exam immediately", correct: false, rationale: "Try optimization ladder before stopping." },
            ],
          },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {drills.map((d, idx) => (
          <Link
            key={`${d.title}-${idx}`}
            href={d.href}
            className="group flex h-full flex-col justify-between rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-ink/60">
              {icons[d.track]}
              {d.track}
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-sm font-semibold text-ink">{d.title}</p>
              <p className="text-xs text-ink/70 line-clamp-3">{d.scenario}</p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-ink/70">
                {d.steps.slice(0, 3).map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              {d.takeaway ? <p className="text-xs font-semibold text-primary-100">{d.takeaway}</p> : null}
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-primary-200">
              Review chapter <ShieldAlert className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


