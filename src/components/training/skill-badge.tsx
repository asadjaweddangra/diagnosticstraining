import { cn } from "@/lib/utils/cn";

export function SkillBadge({
  title,
  description,
  tone = "neutral",
}: {
  title: string;
  description: string;
  tone?: "neutral" | "ultrasound" | "echo" | "ekg";
}) {
  const toneClass =
    tone === "ultrasound"
      ? "bg-cyan-500/10 text-cyan-100 border-cyan-500/30"
      : tone === "echo"
        ? "bg-rose-500/10 text-rose-100 border-rose-500/30"
        : tone === "ekg"
          ? "bg-amber-500/10 text-amber-100 border-amber-500/30"
          : "bg-white/5 text-ink border-white/10";

  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 shadow-sm backdrop-blur transition hover:-translate-y-0.5",
        toneClass
      )}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-white/70">{description}</p>
    </div>
  );
}

