import { notFound } from "next/navigation";
import { ultrasoundChapters } from "@/data/ultrasound-chapters";
import { JourneyHeader } from "@/components/training/journey-header";
import { StoryCard } from "@/components/training/story-card";
import { ContentRenderer } from "@/components/learning/content-renderer";
import { SimulatorDrill } from "@/components/training/simulator-drill";
import { QuickReference } from "@/components/training/quick-reference";
import { XPCounter } from "@/components/training/xp-counter";
import { BookmarkButton } from "@/components/learning/bookmark-button";

type Props = { params: { slug: string } };

export default function UltrasoundChapterPage({ params }: Props) {
  const chapter = ultrasoundChapters.find((c) => c.slug === params.slug);
  if (!chapter) return notFound();

  return (
    <div className="space-y-6">
      <JourneyHeader
        track="ultrasound"
        chapter={chapter.chapter}
        total={ultrasoundChapters.length}
        duration={chapter.duration}
        xp={chapter.xp}
        title={chapter.title}
        summary={chapter.summary}
      />

      <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <StoryCard title="Your clinical moment" body={chapter.story} tone="ultrasound" />
          <div className="flex justify-end">
            <BookmarkButton item={{ title: chapter.title, href: `/ultrasound/${chapter.slug}`, track: "ultrasound" }} />
          </div>
          <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-900">Learning objectives</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {chapter.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {chapter.sections.map((section, idx) => (
              <ContentRenderer key={idx} section={section} />
            ))}
          </div>
          {chapter.drill ? (
            <SimulatorDrill
              title={chapter.drill.title}
              scenario={chapter.drill.scenario}
              steps={chapter.drill.steps}
              takeaway={chapter.drill.takeaway}
            />
          ) : null}
        </div>

        <div className="space-y-4">
          <XPCounter xp={chapter.xp} label="Complete to earn" />
          {chapter.quickReference ? (
            <QuickReference title="Quick reference" items={chapter.quickReference} />
          ) : null}
        </div>
      </div>
    </div>
  );
}


