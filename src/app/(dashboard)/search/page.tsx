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
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 text-primary-500" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Search</h1>
            <p className="text-sm text-gray-600">Find chapters, flashcards, and drills across all tracks.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anatomy, artifacts, drills..."
            className="w-full max-w-lg rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <div className="flex gap-2 text-xs">
            {["all", "ultrasound", "echo", "ekg"].map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t as typeof track)}
                className={`
                  rounded-lg px-3 py-2 font-semibold border transition
                  ${
                    track === t
                      ? "bg-primary-500 text-white border-primary-600"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
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
          <p className="text-sm text-gray-500">Type to search the entire training site.</p>
        ) : (
          results.map((r) => (
            <Link
              key={`${r.href}-${r.title}`}
              href={r.href}
              className="flex items-center justify-between rounded-xl bg-white border border-gray-200 shadow-sm p-4 transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">{r.track}</p>
                <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{r.snippet}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}



