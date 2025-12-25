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
      ? "bg-cyan-50 text-cyan-900 border-cyan-200"
      : tone === "echo"
        ? "bg-rose-50 text-rose-900 border-rose-200"
        : tone === "ekg"
          ? "bg-amber-50 text-amber-900 border-amber-200"
          : "bg-gray-50 text-gray-900 border-gray-200";

  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3 shadow-sm transition hover:-translate-y-0.5",
        toneClass
      )}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}



