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
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200 px-3 py-1 text-xs font-semibold text-primary-700">
            <Sparkles size={14} />
            Start here
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Getting Started</h1>
          <p className="text-sm text-gray-600">
            A guided path from zero to competent: foundations, equipment, safety, then modality tracks with drills.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <Link key={s.title} href={s.href} className="rounded-xl bg-white border border-gray-200 shadow-sm group flex flex-col gap-2 p-4 transition hover:shadow-md hover:-translate-y-0.5">
            <p className="text-xs uppercase tracking-wide text-gray-500">{s.title}</p>
            <p className="text-sm text-gray-700">{s.body}</p>
            <span className="text-xs font-semibold text-primary-600">Open →</span>
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
      className="flex flex-col gap-2 rounded-xl bg-white border border-gray-200 shadow-sm p-4 transition hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
        {icon}
        {title}
      </div>
      <p className="text-xs text-gray-600">{body}</p>
      <span className="text-xs font-semibold text-primary-600">Open →</span>
    </Link>
  );
}



