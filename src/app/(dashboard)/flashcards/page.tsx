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
      <div className="glass-panel p-6">
        <h1 className="text-xl font-bold text-ink">Flashcards</h1>
        <p className="text-sm text-ink/70">
          Rapid recall for physics, anatomy, echo views, EKG placement, and safety—tap to show answer; next/prev for spaced repetition.
        </p>
      </div>

      <div className="glass-panel p-4">
        <div className="flex flex-wrap gap-2">
          {decks.map((d) => (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ring-1 transition ${
                active === d.key
                  ? "bg-primary-500/15 text-primary-100 ring-primary-500/30"
                  : "bg-white/5 text-ink ring-white/10"
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

