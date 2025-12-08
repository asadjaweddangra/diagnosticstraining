export function ScriptBlock({
  title,
  script,
}: {
  title?: string;
  script: { speaker: string; line: string }[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-slate-900">{title}</h4> : null}
      <div className="mt-2 space-y-2">
        {script.map((turn, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-100"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {turn.speaker}
            </p>
            <p className="text-slate-800">{turn.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

