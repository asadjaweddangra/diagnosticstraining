import Link from "next/link";
import { Clock3 } from "lucide-react";
import { Module } from "@/types";
import { cn } from "@/lib/utils/cn";

const tone: Record<string, string> = {
  ultrasound: "bg-cyan-50 text-cyan-700",
  echo: "bg-rose-50 text-rose-700",
  ekg: "bg-amber-50 text-amber-700",
  common: "bg-gray-100 text-gray-700",
};

export function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/modules/${module.id}`}
      className="group flex flex-col gap-3 rounded-xl bg-white border border-gray-200 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          {module.modality ? (
            <span
              className={cn(
                "inline-block rounded-full px-2 py-1 text-xs font-semibold mb-2",
                tone[module.modality] || tone.common
              )}
            >
              {module.modality.toUpperCase()}
            </span>
          ) : null}
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            {module.title}
          </h3>
        </div>
        {module.estimated_duration ? (
          <span className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
            <Clock3 size={14} />
            {module.estimated_duration} min
          </span>
        ) : null}
      </div>
      <p className="text-sm text-gray-600 line-clamp-2">{module.description}</p>
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-gray-500">Not started</span>
        <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700">
          Start →
        </span>
      </div>
    </Link>
  );
}

