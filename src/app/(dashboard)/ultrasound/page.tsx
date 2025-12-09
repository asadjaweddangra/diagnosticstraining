import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ultrasoundChapters } from "@/data/ultrasound-chapters";
import { JourneyHeader } from "@/components/training/journey-header";
import { SkillBadge } from "@/components/training/skill-badge";

export default function UltrasoundTrackPage() {
  return (
    <div className="space-y-6">
      <JourneyHeader
        track="ultrasound"
        chapter={1}
        total={8}
        duration="~2.5 hrs total"
        xp={ultrasoundChapters.reduce((sum, c) => sum + c.xp, 0)}
        title="Ultrasound Mastery Track"
        summary="From physics to protocols and troubleshooting. Follow the clinical journey, chapter by chapter."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ultrasoundChapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/ultrasound/${chapter.slug}`}
            className="group glass-panel flex flex-col gap-3 p-4 transition hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between text-xs text-ink/70">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-100">
                Chapter {chapter.chapter}/{chapter.total}
              </span>
              <span>{chapter.duration} • +{chapter.xp} XP</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">{chapter.title}</h3>
              <p className="text-sm text-ink/70">{chapter.summary}</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <SkillBadge
                tone="ultrasound"
                title="Objectives"
                description={chapter.objectives.slice(0, 2).join(" • ")}
              />
              <ArrowRight className="h-4 w-4 text-ink/60 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

