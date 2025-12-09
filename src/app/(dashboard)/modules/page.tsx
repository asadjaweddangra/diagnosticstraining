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
      <div className="glass-panel p-6">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-xl font-bold text-ink">Choose Your Track</h1>
            <p className="text-sm text-ink/70">
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
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        <p className="text-xs text-ink/60">
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
      ? "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20"
      : tone === "echo"
        ? "from-rose-500/10 to-rose-500/5 border-rose-500/20"
        : "from-amber-500/10 to-amber-500/5 border-amber-500/20";
  return (
    <Link
      href={href}
      className={`relative overflow-hidden rounded-2xl border p-4 shadow-lg backdrop-blur bg-gradient-to-br ${toneClass} transition hover:-translate-y-0.5`}
    >
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ink/70">{summary}</p>
      <span className="mt-3 inline-flex text-xs font-semibold text-primary-200">Start journey →</span>
    </Link>
  );
}

