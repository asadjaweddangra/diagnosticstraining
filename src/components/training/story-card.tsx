import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function StoryCard({
  title,
  byline,
  body,
  image,
  tone = "info",
}: {
  title: string;
  byline?: string;
  body: string;
  image?: string;
  tone?: "info" | "echo" | "ultrasound" | "ekg";
}) {
  const toneClass =
    tone === "echo"
      ? "from-rose-500/10 to-rose-500/5 border-rose-500/20"
      : tone === "ultrasound"
        ? "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20"
        : tone === "ekg"
          ? "from-amber-500/10 to-amber-500/5 border-amber-500/20"
          : "from-white/10 to-white/5 border-white/10";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border p-5 shadow-lg backdrop-blur",
        "bg-gradient-to-br",
        toneClass
      )}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex-1 space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Story</p>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          {byline ? <p className="text-xs text-white/60">{byline}</p> : null}
          <p className="text-sm leading-relaxed text-white/80">{body}</p>
        </div>
        {image ? (
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <Image src={image} alt={title} fill className="object-cover" sizes="112px" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

