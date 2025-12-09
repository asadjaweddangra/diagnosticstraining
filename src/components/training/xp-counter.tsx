import { Sparkles } from "lucide-react";

export function XPCounter({ xp, label = "Earned" }: { xp: number; label?: string }) {
  return (
    <div className="glass-panel flex items-center gap-3 px-4 py-3 text-sm text-ink">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-500/20 text-primary-100">
        <Sparkles size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-ink/60">{label}</p>
        <p className="text-lg font-semibold text-ink">+{xp} XP</p>
      </div>
    </div>
  );
}

