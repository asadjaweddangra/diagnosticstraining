import { getModules } from "@/lib/supabase/queries";
import { ModuleCard } from "@/components/learning/module-card";
import { TrackTabs } from "@/components/learning/track-tabs";
import { Module } from "@/types";
import { Suspense } from "react";

function groupModules(modules: Module[]) {
  return {
    ultrasound: modules.filter((m) => m.modality === "ultrasound"),
    echo: modules.filter((m) => m.modality === "echo"),
    ekg: modules.filter((m) => m.modality === "ekg"),
    common: modules.filter((m) => m.modality === "common"),
  };
}

export default async function ModulesPage({
  searchParams,
}: {
  searchParams: { track?: string };
}) {
  const track = searchParams.track ?? "all";
  const modules = await getModules();
  const grouped = groupModules(modules);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Tracks & Modules
            </h1>
            <p className="text-sm text-slate-600">
              Follow a clear path per modality. Common modules appear in every
              track.
            </p>
          </div>
          <Suspense fallback={null}>
            <TrackTabs />
          </Suspense>
        </div>
      </div>

      {(track === "all" || track === "common") && grouped.common.length ? (
        <Section title="Common Core" modules={grouped.common} />
      ) : null}
      {(track === "all" || track === "ultrasound") && grouped.ultrasound.length ? (
        <Section title="Ultrasound Track" modules={grouped.ultrasound} />
      ) : null}
      {(track === "all" || track === "echo") && grouped.echo.length ? (
        <Section title="Echo Track" modules={grouped.echo} />
      ) : null}
      {(track === "all" || track === "ekg") && grouped.ekg.length ? (
        <Section title="EKG Track" modules={grouped.ekg} />
      ) : null}
    </div>
  );
}

function Section({ title, modules }: { title: string; modules: Module[] }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-xs text-slate-500">
          {modules.length} module{modules.length > 1 ? "s" : ""}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </div>
    </div>
  );
}

