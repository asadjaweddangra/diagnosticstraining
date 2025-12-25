import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { echoChapters } from "@/data/echo-chapters";
import { JourneyHeader } from "@/components/training/journey-header";
import { SkillBadge } from "@/components/training/skill-badge";

export default function EchoTrackPage() {
  return (
    <div className="space-y-6">
      <JourneyHeader
        track="echo"
        chapter={1}
        total={echoChapters.length}
        duration="~2.5 hrs total"
        xp={echoChapters.reduce((sum, c) => sum + c.xp, 0)}
        title="Echo Essentials Track"
        summary="Focused cardiac windows, positioning, and escalation. Build a reliable sequence for every patient."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {echoChapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/echo/${chapter.slug}`}
            className="group rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col gap-3 p-4 transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span className="rounded-full bg-rose-50 px-3 py-1 text-rose-700 font-semibold">
                Chapter {chapter.chapter}/{echoChapters.length}
              </span>
              <span>{chapter.duration} • +{chapter.xp} XP</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{chapter.title}</h3>
              <p className="text-sm text-gray-600">{chapter.summary}</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <SkillBadge
                tone="echo"
                title="Objectives"
                description={chapter.objectives.slice(0, 2).join(" • ")}
              />
              <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


