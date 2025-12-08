 "use client";

import { useState } from "react";
import { FlashcardDeck } from "@/components/quiz/flashcard-deck";
import { flashcards } from "@/data/flashcards";

const decks = [
  { key: "ultrasound", label: "Ultrasound Physics" },
  { key: "anatomy", label: "Core Anatomy" },
  { key: "echo", label: "Echo Views" },
  { key: "ekg", label: "EKG Leads" },
  { key: "safety", label: "Safety & Workflow" },
];

export default function FlashcardsPage() {
  const [active, setActive] = useState<string>("ultrasound");
  const activeCards = flashcards[active as keyof typeof flashcards];

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Flashcards</h1>
        <p className="text-sm text-slate-600">
          Rapid recall for physics, anatomy, echo views, EKG placement, and safety—tap to flip; use
          next/prev for spaced repetition.
        </p>
      </div>

      <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {decks.map((d) => (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                active === d.key
                  ? "border-primary-500 bg-primary-50 text-primary-700"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="pt-4">
          <FlashcardDeck cards={activeCards} />
        </div>
      </div>
    </div>
  );
}

