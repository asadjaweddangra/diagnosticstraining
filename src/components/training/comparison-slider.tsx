"use client";

import Image from "next/image";
import { useState } from "react";

export function ComparisonSlider({
  good,
  bad,
}: {
  good: { src: string; label: string };
  bad: { src: string; label: string };
}) {
  const [value, setValue] = useState(50);
  return (
    <div className="rounded-xl bg-white border border-gray-200 shadow-sm relative overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src={bad.src} alt={bad.label} fill className="object-cover" sizes="100vw" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%`, transition: "width 120ms ease-out" }}
        >
          <Image src={good.src} alt={good.label} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute left-3 top-3 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Needs Work
        </div>
        <div className="absolute right-3 bottom-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Looks Right
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-3 text-xs text-gray-600 bg-gray-50">
        <span>{bad.label}</span>
        <input
          aria-label="Comparison slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="h-1 flex-1 accent-primary-500"
        />
        <span>{good.label}</span>
      </div>
    </div>
  );
}


