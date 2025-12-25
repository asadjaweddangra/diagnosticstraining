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
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <h1 className="text-xl font-bold text-gray-900">Flashcards</h1>
        <p className="text-sm text-gray-600">
          Rapid recall for physics, anatomy, echo views, EKG placement, and safety—tap to show answer; next/prev for spaced repetition.
        </p>
      </div>

      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4">
        <div className="flex flex-wrap gap-2">
          {decks.map((d) => (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold border transition ${
                active === d.key
                  ? "bg-primary-500 text-white border-primary-600"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
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

