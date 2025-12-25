"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { ultrasoundChapters } from "@/data/ultrasound-chapters";
import { echoChapters } from "@/data/echo-chapters";
import { ekgChapters } from "@/data/ekg-chapters";
import { flashcards } from "@/data/flashcards";

type Result = {
  title: string;
  snippet: string;
  href: string;
  track: "ultrasound" | "echo" | "ekg";
};

const searchable: Result[] = [
  ...ultrasoundChapters.map((c) => ({
    title: c.title,
    snippet: c.summary,
    href: `/ultrasound/${c.slug}`,
    track: "ultrasound" as const,
  })),
  ...echoChapters.map((c) => ({
    title: c.title,
    snippet: c.summary,
    href: `/echo/${c.slug}`,
    track: "echo" as const,
  })),
  ...ekgChapters.map((c) => ({
    title: c.title,
    snippet: c.summary,
    href: `/ekg/${c.slug}`,
    track: "ekg" as const,
  })),
];

const flashcardResults: Result[] = Object.entries(flashcards).flatMap(([track, cards]) =>
  cards.map((card) => ({
    title: `Flashcard: ${card.front}`,
    snippet: card.back,
    href: `/flashcards?tab=${track}`,
    track: track as Result["track"],
  }))
);

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState<"all" | Result["track"]>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const pool = [...searchable, ...flashcardResults];
    return pool
      .filter((r) => (track === "all" ? true : r.track === track))
      .filter((r) => r.title.toLowerCase().includes(q) || r.snippet.toLowerCase().includes(q))
      .slice(0, 30);
  }, [query, track]);

  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 text-primary-200" />
          <div>
            <h1 className="text-xl font-semibold text-ink">Search</h1>
            <p className="text-sm text-ink/70">Find chapters, flashcards, and drills across all tracks.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anatomy, artifacts, drills..."
            className="w-full max-w-lg rounded-xl bg-white/5 px-4 py-2 text-sm text-ink ring-1 ring-white/10 focus:outline-none"
          />
          <div className="flex gap-2 text-xs">
            {["all", "ultrasound", "echo", "ekg"].map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t as typeof track)}
                className={`
                  rounded-xl px-3 py-2 font-semibold ring-1 transition
                  ${
                    track === t
                      ? "bg-primary-500/15 text-primary-100 ring-primary-500/30"
                      : "bg-white/5 text-ink ring-white/10"
                  }
                `}
              >
                {t === "all" ? "All tracks" : t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {results.length === 0 ? (
          <p className="text-sm text-ink/60">Type to search the entire training site.</p>
        ) : (
          results.map((r) => (
            <Link
              key={`${r.href}-${r.title}`}
              href={r.href}
              className="flex items-center justify-between rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:-translate-y-0.5"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/60">{r.track}</p>
                <p className="text-sm font-semibold text-ink">{r.title}</p>
                <p className="text-xs text-ink/70 line-clamp-2">{r.snippet}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-ink/60" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}



