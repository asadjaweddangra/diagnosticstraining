import { Sparkles } from "lucide-react";

export function XPCounter({ xp, label = "Earned" }: { xp: number; label?: string }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-3 px-4 py-3 text-sm">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-100 text-primary-600">
        <Sparkles size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-gray-900">+{xp} XP</p>
      </div>
    </div>
  );
}



