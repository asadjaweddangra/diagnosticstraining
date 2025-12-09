import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-soft-gradient text-ink">
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-surface via-panel to-surface p-10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,0.18),transparent_40%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.3fr,1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
                Future-ready clinicians
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-ink">
                Transforming bedside training with interactive ultrasound, echo, and EKG.
              </h1>
              <p className="text-base text-ink/80">
                Walk a story-driven journey with real images, annotated callouts, simulator drills, and escalation cues. Zero-to-competent for portable ultrasound, focused echo, and EKG acquisition.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTA href="/dashboard" label="Go to dashboard" primary />
                <CTA href="/ultrasound" label="Explore ultrasound" />
                <CTA href="/echo" label="Explore echo" />
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-ink/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  <PlayCircle className="h-4 w-4" />
                  Simulator drills per chapter
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Annotated callouts on real images
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-ink/60">Immersive tracks</p>
                  <FeatureRow title="Ultrasound Mastery" body="8 chapters with abdomen, vascular access, troubleshooting ladder." />
                  <FeatureRow title="Echo Essentials" body="7 chapters with PLAX/PSAX, apical, subcostal/IVC, escalation." />
                  <FeatureRow title="EKG Excellence" body="6 chapters on lead placement, artifact detective, rhythm escalation." />
                </div>
                <div className="mt-6 rounded-2xl bg-primary-500/10 p-4 ring-1 ring-primary-500/20">
                  <p className="text-sm font-semibold text-primary-100">Why it clicks</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-ink/80">
                    <li>Story-led chapters with scripts and patient communication.</li>
                    <li>Callouts on every key image so you know what “right” looks like.</li>
                    <li>Simulator drills with stepwise “what to do next”.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card title="Programs" body="Zero-to-competent journeys per modality with clear sequences." />
          <Card title="Exam simulator" body="Scenario drills and checklists to rehearse decisions." />
          <Card title="Notes & references" body="Quick references, mnemonics, and escalation triggers." />
        </section>
      </main>
    </div>
  );
}

function CTA({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
        primary
          ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
          : "bg-white/5 text-primary-100 ring-1 ring-white/15"
      }`}
    >
      {label} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function FeatureRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="text-xs text-ink/70">{body}</p>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass-panel p-5">
      <p className="text-base font-semibold text-ink">{title}</p>
      <p className="text-sm text-ink/70">{body}</p>
    </div>
  );
}
