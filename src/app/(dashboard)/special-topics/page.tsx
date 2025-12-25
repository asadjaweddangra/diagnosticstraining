"use client";

import { specialTopics } from "@/data/special-topics";
import { Link2 } from "lucide-react";
import Link from "next/link";

export default function SpecialTopicsPage() {
  return (
    <div className="space-y-4">
      <div className="glass-panel p-6">
        <h1 className="text-xl font-bold text-ink">Special Topics & Troubleshooting</h1>
        <p className="text-sm text-ink/70">Difficult patients, artifacts, and escalation guides.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {specialTopics.map((topic) => (
          <div key={topic.title} className="glass-panel space-y-2 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">{topic.title}</p>
              {topic.link ? (
                <Link href={topic.link} className="text-xs font-semibold text-primary-200 inline-flex items-center gap-1">
                  Open <Link2 size={14} />
                </Link>
              ) : null}
            </div>
            <p className="text-xs text-ink/70">{topic.summary}</p>
            <ul className="space-y-1 text-xs text-ink/80">
              {topic.items.map((i) => (
                <li key={i.label} className="flex gap-2">
                  <span className="font-semibold text-ink">{i.label}:</span>
                  <span>{i.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}



