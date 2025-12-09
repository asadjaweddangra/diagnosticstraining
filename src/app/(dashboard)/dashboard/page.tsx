import { ModuleCard } from "@/components/learning/module-card";
import { getModules } from "@/lib/supabase/queries";
import { ArrowRight, HeartPulse, HeartPulseIcon, LayoutDashboard, Sparkles, Waves } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const modules = await getModules();
  const featured = modules.slice(0, 3);
  const nextUp = modules.find((m) => m.modality === "ultrasound") ?? modules[0];

  return (
    <div className="space-y-6">
      <div className="glass-panel relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,0.15),transparent_40%)]" />
        <div className="relative flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary-100">
            <Sparkles size={16} />
            DiagnostiCore Journey
          </div>
          <h1 className="text-2xl font-bold text-ink">Pick up where you left off</h1>
          <p className="text-sm text-ink/80">
            Immersive tracks for Ultrasound, Echo, and EKG with real images, drills, and annotated callouts.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTA href="/ultrasound" icon={<Waves className="h-4 w-4" />} label="Continue Ultrasound" />
            <CTA href="/echo" icon={<HeartPulse className="h-4 w-4" />} label="Continue Echo" />
            <CTA href="/ekg" icon={<HeartPulseIcon className="h-4 w-4" />} label="Continue EKG" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <TrackMiniCard
          title="Ultrasound"
          value="8 chapters"
          helper="Physics, abdomen, vascular, troubleshooting"
          tone="ultrasound"
          href="/ultrasound"
        />
        <TrackMiniCard
          title="Echo"
          value="7 chapters"
          helper="PLAX/PSAX, apical, subcostal, IVC"
          tone="echo"
          href="/echo"
        />
        <TrackMiniCard
          title="EKG"
          value="6 chapters"
          helper="Placement, artifacts, rhythms, escalation"
          tone="ekg"
          href="/ekg"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[1.4fr,1fr]">
        <div className="glass-panel p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Next up</p>
            <Link className="text-xs text-primary-200" href={`/${nextUp?.modality ?? "ultrasound"}`}>
              View track →
            </Link>
          </div>
          {nextUp ? <ModuleCard module={nextUp} /> : null}
          <div className="mt-3 space-y-2 text-xs text-ink/70">
            <p>Tip: complete one Simulator Drill and one annotated image review per session.</p>
          </div>
        </div>
        <div className="glass-panel p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Featured modules</p>
            <span className="text-xs text-ink/60">Handpicked</span>
          </div>
          <div className="space-y-3">
            {featured.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
        </div>
      </div>

      <div className="glass-panel p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
          <LayoutDashboard className="h-4 w-4" />
          Training cues
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <TipCard title="Run the ladder" body="Depth → Gain → TGC → Focus/Frequency → change window before giving up." />
          <TipCard title="Annotate every image" body="Use the callouts to verbalize what you see; prevents mislabeling." />
          <TipCard title="Escalation ready" body="Effusion with collapse, V-tach/V-fib, severe pain—stop and notify immediately." />
        </div>
      </div>
    </div>
  );
}

function CTA({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-xl bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-100 ring-1 ring-primary-500/30 transition hover:-translate-y-0.5"
    >
      {icon}
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function TrackMiniCard({
  title,
  value,
  helper,
  tone,
  href,
}: {
  title: string;
  value: string;
  helper: string;
  tone: "ultrasound" | "echo" | "ekg";
  href: string;
}) {
  const toneClass =
    tone === "ultrasound"
      ? "from-cyan-500/15 to-cyan-500/5 border-cyan-500/30"
      : tone === "echo"
        ? "from-rose-500/15 to-rose-500/5 border-rose-500/30"
        : "from-amber-500/15 to-amber-500/5 border-amber-500/30";
  return (
    <Link
      href={href}
      className={`relative overflow-hidden rounded-2xl border p-4 shadow-lg backdrop-blur bg-gradient-to-br ${toneClass} transition hover:-translate-y-0.5`}
    >
      <p className="text-xs uppercase tracking-wide text-ink/70">{title} track</p>
      <h3 className="text-lg font-semibold text-ink">{value}</h3>
      <p className="text-sm text-ink/70">{helper}</p>
      <span className="mt-2 inline-flex text-xs font-semibold text-primary-200">Open track →</span>
    </Link>
  );
}

function TipCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="text-xs text-ink/70">{body}</p>
    </div>
  );
}


