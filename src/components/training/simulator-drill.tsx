import { PlayCircle, Waypoints } from "lucide-react";

export function SimulatorDrill({
  title,
  scenario,
  steps,
  takeaway,
}: {
  title: string;
  scenario: string;
  steps: string[];
  takeaway?: string;
}) {
  return (
    <div className="glass-panel space-y-3 p-5">
      <div className="flex items-center gap-2 text-ink">
        <PlayCircle className="h-5 w-5 text-primary-200" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-ink/80">{scenario}</p>
      <div className="space-y-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-primary-500/20 text-primary-100 font-semibold">
              {idx + 1}
            </span>
            <p className="text-ink/90">{step}</p>
          </div>
        ))}
      </div>
      {takeaway ? (
        <div className="flex items-center gap-2 rounded-xl bg-primary-500/10 px-3 py-2 text-xs text-primary-50 ring-1 ring-primary-500/20">
          <Waypoints size={14} />
          {takeaway}
        </div>
      ) : null}
    </div>
  );
}

