import { getModules } from "@/lib/supabase/queries";
import { ModuleCard } from "@/components/learning/module-card";
import { TrackTabs } from "@/components/learning/track-tabs";
import Link from "next/link";
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
    <div className="space-y-6">
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Choose Your Track</h1>
            <p className="text-sm text-gray-600">
              Jump into the immersive journeys for Ultrasound, Echo, or EKG. Legacy common modules are still available below.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <TrackCard
              href="/ultrasound"
              title="Ultrasound Mastery"
              summary="Physics to protocols with annotated images and drills."
              tone="ultrasound"
            />
            <TrackCard
              href="/echo"
              title="Echo Essentials"
              summary="Parasternal, apical, subcostal windows with good-vs-bad visuals."
              tone="echo"
            />
            <TrackCard
              href="/ekg"
              title="EKG Excellence"
              summary="Lead placement mastery, artifacts, and rapid escalation."
              tone="ekg"
            />
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
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-xs text-gray-500">
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

function TrackCard({
  href,
  title,
  summary,
  tone,
}: {
  href: string;
  title: string;
  summary: string;
  tone: "ultrasound" | "echo" | "ekg";
}) {
  const toneClass =
    tone === "ultrasound"
      ? "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
      : tone === "echo"
        ? "bg-rose-50 border-rose-200 hover:bg-rose-100"
        : "bg-amber-50 border-amber-200 hover:bg-amber-100";
  return (
    <Link
      href={href}
      className={`relative overflow-hidden rounded-xl border p-4 shadow-sm ${toneClass} transition hover:shadow-md hover:-translate-y-0.5`}
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700">{summary}</p>
      <span className="mt-3 inline-flex text-xs font-semibold text-primary-600">Start journey →</span>
    </Link>
  );
}

