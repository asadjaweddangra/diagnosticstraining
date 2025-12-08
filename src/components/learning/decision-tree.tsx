export function DecisionTree({
  title,
  nodes,
}: {
  title?: string;
  nodes: { label: string; detail?: string }[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-slate-900">{title}</h4> : null}
      <div className="mt-3 space-y-3">
        {nodes.map((node, idx) => (
          <div key={idx} className="relative rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
            {idx < nodes.length - 1 ? (
              <div className="absolute left-4 top-full h-3 w-px bg-slate-200" />
            ) : null}
            <div className="flex items-start gap-2">
              <span className="mt-0.5 rounded-full bg-primary-100 px-2 py-1 text-[11px] font-semibold text-primary-700">
                {idx + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{node.label}</p>
                {node.detail ? <p className="text-xs text-slate-600">{node.detail}</p> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

