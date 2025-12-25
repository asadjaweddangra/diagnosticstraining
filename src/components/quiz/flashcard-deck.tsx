"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils/cn";

type Card = {
  front: string;
  back: string;
};

type Props = {
  cards: readonly Card[];
};

export function FlashcardDeck({ cards }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled] = useState(() => [...cards].sort(() => Math.random() - 0.5));

  const card = useMemo(() => shuffled[index], [shuffled, index]);

  function next() {
    setFlipped(false);
    setIndex((i) => (i + 1) % shuffled.length);
  }

  function prev() {
    setFlipped(false);
    setIndex((i) => (i - 1 + shuffled.length) % shuffled.length);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-500">
        <span>
          Card {index + 1} / {shuffled.length}
        </span>
        <span>{flipped ? "Answer" : "Question"}</span>
      </div>
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm space-y-3 p-4">
        <div
          className={cn(
            "relative min-h-[140px] overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-white p-4 border border-gray-200 text-sm text-gray-900",
            "transition"
          )}
        >
          <p className="font-medium">{flipped ? card.back : card.front}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setFlipped((f) => !f)}
            className={cn(
              "rounded-lg px-3 py-2 font-semibold border transition",
              flipped ? "bg-primary-500 text-white border-primary-600" : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            )}
          >
            {flipped ? "Hide answer" : "Show answer"}
          </button>
          <button
            onClick={next}
            className="rounded-lg bg-primary-500 px-3 py-2 font-semibold text-white border border-primary-600 hover:bg-primary-600 transition"
          >
            Next
          </button>
          <button
            onClick={prev}
            className="rounded-lg bg-gray-100 px-3 py-2 font-semibold text-gray-700 border border-gray-300 hover:bg-gray-200 transition"
          >
            Prev
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-500">Tap &quot;Show answer&quot; or flip. Cards are shuffled for spaced recall.</p>
    </div>
  );
}

