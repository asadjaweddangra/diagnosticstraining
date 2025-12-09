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
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-ink/60">
        <span>
          Card {index + 1} / {shuffled.length}
        </span>
        <span>{flipped ? "Answer" : "Question"}</span>
      </div>
      <div className="glass-panel space-y-3 p-4">
        <div className="text-sm text-ink/80">{flipped ? card.back : card.front}</div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setFlipped((f) => !f)}
            className={cn(
              "rounded-xl px-3 py-2 font-semibold ring-1 transition",
              flipped ? "bg-primary-500/15 text-primary-100 ring-primary-500/30" : "bg-white/5 text-ink ring-white/10"
            )}
          >
            {flipped ? "Hide answer" : "Show answer"}
          </button>
          <button
            onClick={next}
            className="rounded-xl bg-white/5 px-3 py-2 font-semibold text-ink ring-1 ring-white/10 hover:-translate-y-0.5"
          >
            Next
          </button>
          <button
            onClick={prev}
            className="rounded-xl bg-white/5 px-3 py-2 font-semibold text-ink ring-1 ring-white/10 hover:-translate-y-0.5"
          >
            Prev
          </button>
        </div>
      </div>
      <p className="text-xs text-ink/60">Tap “Show answer” or flip. Cards are shuffled for spaced recall.</p>
    </div>
  );
}

