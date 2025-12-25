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
    <div className="rounded-xl bg-white border border-gray-200 shadow-sm space-y-3 p-5">
      <div className="flex items-center gap-2 text-gray-900">
        <PlayCircle className="h-5 w-5 text-primary-500" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-700">{scenario}</p>
      <div className="space-y-2 rounded-lg bg-gray-50 p-4 border border-gray-200">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-primary-500 text-white font-semibold">
              {idx + 1}
            </span>
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
      {takeaway ? (
        <div className="flex items-center gap-2 rounded-lg bg-primary-50 border border-primary-200 px-3 py-2 text-xs text-primary-900">
          <Waypoints size={14} />
          {takeaway}
        </div>
      ) : null}
    </div>
  );
}



