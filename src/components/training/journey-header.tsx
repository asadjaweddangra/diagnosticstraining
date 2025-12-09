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

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-xl backdrop-blur",
        "bg-gradient-to-br",
        style.from,
        style.to
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%)]" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {style.label}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
              Chapter {chapter} of {total}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-full bg-black/20 px-3 py-1 text-xs font-medium">
              <Clock size={14} />
              {duration}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-black/20 px-3 py-1 text-xs font-semibold">
              <Sparkles size={14} className="text-white" />
              +{xp} XP
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white drop-shadow-sm">{title}</h1>
          {summary ? <p className="mt-2 max-w-3xl text-sm text-white/85">{summary}</p> : null}
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
          <div className={cn("h-full rounded-full", barColor)} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

