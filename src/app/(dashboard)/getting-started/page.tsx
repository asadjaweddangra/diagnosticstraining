"use client";

import Link from "next/link";
import { Sparkles, Shield, Wrench, BookOpen } from "lucide-react";

const steps = [
  {
    title: "Foundations first",
    body: "Physics, anatomy, terminology. Build mental models before scanning.",
    href: "/ultrasound/welcome-to-ultrasound",
  },
  {
    title: "Know your equipment",
    body: "Probe selection, presets, depth/gain/TGC sequence.",
    href: "/ultrasound/know-your-machine",
  },
  {
    title: "Choose your modality",
    body: "Pick Ultrasound, Echo, or EKG track and follow the chapter order.",
    href: "/dashboard",
  },
  {
    title: "Assess & certify",
    body: "Micro quizzes per chapter, then final exam and supervisor sign-off.",
    href: "/quizzes",
  },
];

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <div className="glass-panel relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,0.15),transparent_40%)]" />
        <div className="relative flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-primary-100 ring-1 ring-white/10">
            <Sparkles size={14} />
            Start here
          </div>
          <h1 className="text-2xl font-bold text-ink">Getting Started</h1>
          <p className="text-sm text-ink/80">
            A guided path from zero to competent: foundations, equipment, safety, then modality tracks with drills.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <Link key={s.title} href={s.href} className="glass-panel group flex flex-col gap-2 p-4 transition hover:-translate-y-0.5">
            <p className="text-xs uppercase tracking-wide text-ink/60">{s.title}</p>
            <p className="text-sm text-ink/80">{s.body}</p>
            <span className="text-xs font-semibold text-primary-200">Open →</span>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card
          icon={<Shield className="h-5 w-5 text-amber-200" />}
          title="Safety & infection control"
          body="Standard precautions, probe covers, high-level disinfection reminders."
          href="/modules"
        />
        <Card
          icon={<Wrench className="h-5 w-5 text-primary-200" />}
          title="Troubleshooting ladder"
          body="Depth → Gain → TGC → Focus/Frequency → Change window → Escalate."
          href="/simulations"
        />
        <Card
          icon={<BookOpen className="h-5 w-5 text-rose-200" />}
          title="Study aids"
          body="Flashcards, quizzes, annotated images, and comparison sliders in each chapter."
          href="/learning-tools"
        />
      </div>
    </div>
  );
}

function Card({ icon, title, body, href }: { icon: React.ReactNode; title: string; body: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-ink">
        {icon}
        {title}
      </div>
      <p className="text-xs text-ink/70">{body}</p>
      <span className="text-xs font-semibold text-primary-200">Open →</span>
    </Link>
  );
}

