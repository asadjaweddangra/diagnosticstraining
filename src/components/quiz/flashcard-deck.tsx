"use client";

import { useState } from "react";
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

  const card = cards[index];

  function next() {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  }

  function prev() {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "min-h-[160px] cursor-pointer rounded-2xl bg-white/80 p-4 text-sm text-slate-800 shadow ring-1 ring-slate-200 transition-transform",
          flipped ? "rotate-y-180" : ""
        )}
        onClick={() => setFlipped((f) => !f)}
      >
        <p className="font-semibold text-primary-700">
          Card {index + 1} / {cards.length}
        </p>
        <p className="mt-2">{flipped ? card.back : card.front}</p>
      </div>
      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
        <button
          onClick={prev}
          className="rounded-xl bg-slate-100 px-4 py-2 hover:bg-slate-200"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="rounded-xl bg-slate-100 px-4 py-2 hover:bg-slate-200"
        >
          Next
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Tap the card to flip. Use for quick recall and spaced repetition.
      </p>
    </div>
  );
}

