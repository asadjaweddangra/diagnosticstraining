export function ComparisonTable({
  title,
  rows,
  leftLabel = "Option A",
  rightLabel = "Option B",
}: {
  title?: string;
  rows: { left: string; right: string }[];
  leftLabel?: string;
  rightLabel?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-slate-900">{title}</h4> : null}
      <div className="mt-2 grid gap-2 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 gap-2 rounded-lg bg-white p-3 text-sm text-slate-700 ring-1 ring-slate-100"
          >
            <p>{row.left}</p>
            <p>{row.right}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

