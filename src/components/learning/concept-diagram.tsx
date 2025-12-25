type HierarchyData = {
  top: { title: string; description?: string };
  children: { icon?: string; title: string; description?: string }[];
};

type ComparisonData = {
  left: { title: string; points: string[] };
  right: { title: string; points: string[] };
};

type ScatterData = {
  source: { icon?: string; label: string };
  zones: { radius: number; color: string; label: string; description: string; labelX?: number; labelY?: number }[];
  description?: string;
};

export function ConceptDiagram({
  section,
}: {
  section: {
    title: string;
    diagramType: "hierarchy" | "comparison" | "scatter";
    data: HierarchyData | ComparisonData | ScatterData;
  };
}) {
  if (section.diagramType === "hierarchy") {
    const data = section.data as HierarchyData;
    return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-ink">{section.title}</h3>
        <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="text-center">
            <p className="text-sm font-semibold text-ink">{data.top.title}</p>
            {data.top.description ? <p className="text-xs text-ink/70">{data.top.description}</p> : null}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {data.children.map((child) => (
              <div key={child.title} className="rounded-xl bg-white/5 p-3 text-center ring-1 ring-white/10">
                <p className="text-lg">{child.icon}</p>
                <p className="text-sm font-semibold text-ink">{child.title}</p>
                {child.description ? <p className="text-xs text-ink/70">{child.description}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section.diagramType === "comparison") {
    const data = section.data as ComparisonData;
    return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-ink">{section.title}</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {[data.left, data.right].map((side, idx) => (
            <div key={side.title} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-wide text-ink/60">{idx === 0 ? "Option A" : "Option B"}</p>
              <p className="text-sm font-semibold text-ink">{side.title}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-ink/80">
                {side.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.diagramType === "scatter") {
    const data = section.data as ScatterData;
    return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-ink">{section.title}</h3>
        <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="relative mx-auto h-72 w-full max-w-xl">
            <div className="absolute left-1/2 top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary-500/20 text-sm font-semibold text-primary-100 ring-1 ring-primary-500/30">
              {data.source.icon ?? "⚠️"}
              <span className="text-[10px] text-ink/80">{data.source.label}</span>
            </div>
            {data.zones.map((zone, idx) => (
              <div
                key={zone.label}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: `${zone.radius}%`,
                  height: `${zone.radius}%`,
                  backgroundColor: `${zone.color}22`,
                  border: `1px solid ${zone.color}`,
                  zIndex: 5 - idx,
                }}
              >
                <div
                  className="absolute text-[11px] font-semibold text-ink"
                  style={{
                    left: `${zone.labelX ?? 50}%`,
                    top: `${zone.labelY ?? 10}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {zone.label}
                </div>
              </div>
            ))}
          </div>
          {data.description ? <p className="mt-3 text-xs text-ink/70">{data.description}</p> : null}
          <ul className="mt-3 space-y-1 text-xs text-ink/80">
            {data.zones.map((zone) => (
              <li key={zone.label} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: zone.color }} />
                <span className="font-semibold text-ink">{zone.label}:</span> {zone.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
}

