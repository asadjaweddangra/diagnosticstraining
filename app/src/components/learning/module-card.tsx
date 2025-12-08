import Link from "next/link";
import { Clock3 } from "lucide-react";
import { Module } from "@/types";

export function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/modules/${module.id}`}
      className="group flex flex-col gap-2 rounded-2xl bg-white/80 p-4 shadow ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">
          {module.title}
        </h3>
        {module.estimated_duration ? (
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock3 size={14} />
            {module.estimated_duration} min
          </span>
        ) : null}
      </div>
      <p className="text-sm text-slate-600">{module.description}</p>
    </Link>
  );
}

