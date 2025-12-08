"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function Checklist({
  title,
  items,
}: {
  title?: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-slate-900">{title}</h4> : null}
      <div className="mt-2 space-y-2">
        {items.map((item, idx) => {
          const isChecked = checked[idx];
          return (
            <button
              key={idx}
              onClick={() => setChecked((prev) => ({ ...prev, [idx]: !isChecked }))}
              className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm ring-1 ring-slate-100 transition ${
                isChecked ? "bg-emerald-50 text-emerald-800" : "bg-slate-50 text-slate-800"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                  isChecked ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300"
                }`}
              >
                {isChecked ? <Check size={14} /> : null}
              </span>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

