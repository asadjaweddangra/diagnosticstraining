"use client";

import Link from "next/link";
import { Brain, Layers, ListChecks, PanelsTopLeft } from "lucide-react";

const tools = [
  { title: "Flashcards", href: "/flashcards", desc: "Rapid recall decks across all tracks." },
  { title: "Quizzes", href: "/quizzes", desc: "Micro and scenario quizzes with images." },
  { title: "Simulations", href: "/simulations", desc: "Scenario drills and troubleshooting ladders." },
  { title: "Glossary", href: "/glossary", desc: "Key terms and modality-specific language." },
  { title: "Search", href: "/search", desc: "Find chapters, drills, and flashcards fast." },
  { title: "Bookmarks", href: "/bookmarks", desc: "Saved chapters and modules." },
];

export default function LearningToolsPage() {
  return (
    <div className="space-y-4">
      <div className="glass-panel p-6">
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-primary-200" />
          <div>
            <h1 className="text-xl font-bold text-ink">Learning Tools Hub</h1>
            <p className="text-sm text-ink/70">All the accelerators in one place.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <PanelsTopLeft className="h-4 w-4 text-primary-200" />
              {tool.title}
            </div>
            <p className="mt-1 text-sm text-ink/80">{tool.desc}</p>
            <span className="text-xs font-semibold text-primary-200">Open →</span>
          </Link>
        ))}
      </div>

      <div className="glass-panel grid gap-3 p-4 md:grid-cols-3">
        <StatCard title="Flashcards reviewed" value="50+" />
        <StatCard title="Quizzes passed" value="12" />
        <StatCard title="Sim drills completed" value="8" />
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-primary-500/15 to-rose-500/15 p-4 ring-1 ring-primary-500/20">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Brain className="h-4 w-4 text-primary-200" />
          Suggested next step
        </div>
        <p className="text-sm text-ink/80">Pick one flashcard deck and one simulation drill each session.</p>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
      <p className="text-xs uppercase tracking-wide text-ink/60">{title}</p>
      <p className="text-lg font-semibold text-ink">{value}</p>
    </div>
  );
}

