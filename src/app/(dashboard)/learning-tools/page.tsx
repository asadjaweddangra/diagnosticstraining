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
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-primary-500" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Learning Tools Hub</h1>
            <p className="text-sm text-gray-600">All the accelerators in one place.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="group rounded-xl bg-white border border-gray-200 shadow-sm p-4 transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <PanelsTopLeft className="h-4 w-4 text-primary-500" />
              {tool.title}
            </div>
            <p className="mt-1 text-sm text-gray-700">{tool.desc}</p>
            <span className="text-xs font-semibold text-primary-600">Open →</span>
          </Link>
        ))}
      </div>

      <div className="rounded-xl bg-white border border-gray-200 shadow-sm grid gap-3 p-4 md:grid-cols-3">
        <StatCard title="Flashcards reviewed" value="50+" />
        <StatCard title="Quizzes passed" value="12" />
        <StatCard title="Sim drills completed" value="8" />
      </div>

      <div className="rounded-xl bg-primary-50 border border-primary-200 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Brain className="h-4 w-4 text-primary-600" />
          Suggested next step
        </div>
        <p className="text-sm text-gray-700">Pick one flashcard deck and one simulation drill each session.</p>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg bg-gray-50 border border-gray-200 p-3">
      <p className="text-xs uppercase tracking-wide text-gray-500">{title}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );
}



