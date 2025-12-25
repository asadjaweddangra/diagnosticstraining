import { ChevronDown } from "lucide-react";

export function QuickReference({
  title,
  items,
}: {
  title: string;
  items: { label: string; detail: string }[];
}) {
  return (
    <details className="rounded-xl bg-white border border-gray-200 shadow-sm group cursor-pointer overflow-hidden">
      <summary className="flex list-none items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 text-gray-500" />
      </summary>
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.label} className="px-4 py-3 text-sm">
            <p className="font-semibold text-gray-900">{item.label}</p>
            <p className="text-gray-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </details>
  );
}



