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
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <h1 className="text-xl font-bold text-gray-900">Glossary</h1>
        <p className="text-sm text-gray-600">Key terms across ultrasound, echo, and EKG.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full max-w-lg rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <div className="flex gap-2 text-xs">
            {modalities.map((m) => (
              <button
                key={m}
                onClick={() => setModality(m)}
                className={`rounded-lg px-3 py-2 font-semibold border transition ${
                  modality === m ? "bg-primary-500 text-white border-primary-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
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
          <div key={item.term} className="rounded-xl bg-white border border-gray-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">{item.term}</h3>
              <span className="text-[11px] uppercase tracking-wide text-gray-500">{item.modality ?? "general"}</span>
            </div>
            <p className="mt-1 text-sm text-gray-700">{item.definition}</p>
          </div>
        ))}
        {results.length === 0 ? <p className="text-sm text-gray-500">No terms found.</p> : null}
      </div>
    </div>
  );
}



