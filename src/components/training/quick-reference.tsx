import { ChevronDown } from "lucide-react";

export function QuickReference({
  title,
  items,
}: {
  title: string;
  items: { label: string; detail: string }[];
}) {
  return (
    <details className="glass-panel group cursor-pointer overflow-hidden">
      <summary className="flex list-none items-center justify-between px-4 py-3 text-sm font-semibold text-ink">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="divide-y divide-white/5">
        {items.map((item) => (
          <div key={item.label} className="px-4 py-3 text-sm">
            <p className="font-semibold text-ink">{item.label}</p>
            <p className="text-ink/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </details>
  );
}

