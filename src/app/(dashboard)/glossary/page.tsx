"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/data/glossary";

const modalities = ["all", "ultrasound", "echo", "ekg", "general"] as const;

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [modality, setModality] = useState<(typeof modalities)[number]>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((g) => (modality === "all" ? true : g.modality === modality))
      .filter((g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q));
  }, [query, modality]);

  return (
    <div className="space-y-4">
      <div className="glass-panel p-6">
        <h1 className="text-xl font-bold text-ink">Glossary</h1>
        <p className="text-sm text-ink/70">Key terms across ultrasound, echo, and EKG.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full max-w-lg rounded-xl bg-white/5 px-4 py-2 text-sm text-ink ring-1 ring-white/10 focus:outline-none"
          />
          <div className="flex gap-2 text-xs">
            {modalities.map((m) => (
              <button
                key={m}
                onClick={() => setModality(m)}
                className={`rounded-xl px-3 py-2 font-semibold ring-1 transition ${
                  modality === m ? "bg-primary-500/15 text-primary-100 ring-primary-500/30" : "bg-white/5 text-ink ring-white/10"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {results.map((item) => (
          <div key={item.term} className="glass-panel p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-ink">{item.term}</h3>
              <span className="text-[11px] uppercase tracking-wide text-ink/60">{item.modality ?? "general"}</span>
            </div>
            <p className="mt-1 text-sm text-ink/80">{item.definition}</p>
          </div>
        ))}
        {results.length === 0 ? <p className="text-sm text-ink/60">No terms found.</p> : null}
      </div>
    </div>
  );
}

