import { Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Track = "ultrasound" | "echo" | "ekg";

const trackStyles: Record<Track, { from: string; to: string; label: string }> = {
  ultrasound: { from: "from-cyan-500/70", to: "to-cyan-300/40", label: "Ultrasound" },
  echo: { from: "from-rose-500/70", to: "to-rose-300/40", label: "Echo" },
  ekg: { from: "from-amber-500/70", to: "to-amber-300/40", label: "EKG" },
};

export function JourneyHeader({
  track,
  chapter,
  total,
  duration,
  xp,
  title,
  summary,
}: {
  track: Track;
  chapter: number;
  total: number;
  duration: string;
  xp: number;
  title: string;
  summary?: string;
}) {
  const style = trackStyles[track];
  const progress = Math.min(100, Math.round((chapter / total) * 100));
  const barColor =
    track === "ultrasound" ? "bg-cyan-200" : track === "echo" ? "bg-rose-200" : "bg-amber-200";

  const barColorLight =
    track === "ultrasound" ? "bg-cyan-500" : track === "echo" ? "bg-rose-500" : "bg-amber-500";

  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
              {style.label}
            </span>
            <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
              Chapter {chapter} of {total}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              <Clock size={14} />
              {duration}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              <Sparkles size={14} />
              +{xp} XP
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {summary ? <p className="mt-2 max-w-3xl text-sm text-gray-600">{summary}</p> : null}
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div className={cn("h-full rounded-full", barColorLight)} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

