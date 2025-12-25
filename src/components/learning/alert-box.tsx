type Variant = "info" | "warning" | "danger";

const tone: Record<Variant, { bg: string; text: string; border: string; label: string }> = {
  info: { bg: "bg-sky-50", text: "text-sky-800", border: "border-sky-200", label: "INFO" },
  warning: { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200", label: "CAUTION" },
  danger: { bg: "bg-rose-50", text: "text-rose-800", border: "border-rose-200", label: "DANGER" },
};

export function AlertBox({
  title,
  items,
  variant = "info",
}: {
  title?: string;
  items: string[];
  variant?: Variant;
}) {
  const t = tone[variant];
  return (
    <div className={`rounded-2xl border ${t.border} ${t.bg} px-4 py-3`}>
      <div className="flex items-center gap-2">
        <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${t.text} ${t.bg}`}>
          {t.label}
        </span>
        {title ? <p className={`text-sm font-semibold ${t.text}`}>{title}</p> : null}
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


