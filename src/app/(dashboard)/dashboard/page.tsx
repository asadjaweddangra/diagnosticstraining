import { ModuleCard } from "@/components/learning/module-card";
import { getModules } from "@/lib/supabase/queries";
import { ArrowRight, Target, Trophy, BarChart3, Waves, HeartPulse, Activity } from "lucide-react";
import Link from "next/link";
import { ultrasoundChapters } from "@/data/ultrasound-chapters";
import { echoChapters } from "@/data/echo-chapters";
import { ekgChapters } from "@/data/ekg-chapters";

export default async function DashboardPage() {
  const modules = await getModules();
  const featured = modules.slice(0, 3);
  const nextUp = modules.find((m) => m.modality === "ultrasound") ?? modules[0];

  return (
    <div className="space-y-8">
      {/* Main Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Diagnostic Medical Training</h1>
        <p className="text-gray-600 mt-1">
          Master ultrasound, echocardiography, and ECG/EKG with interactive training modules, quizzes, and simulations.
        </p>
      </div>

      {/* Track Overview Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <TrackCard
          href="/ultrasound"
          title="Ultrasound"
          icon={<Waves className="h-5 w-5" />}
          chapters={ultrasoundChapters.length}
          summary="Physics, abdomen, vascular, troubleshooting"
          tone="ultrasound"
        />
        <TrackCard
          href="/echo"
          title="Echo"
          icon={<HeartPulse className="h-5 w-5" />}
          chapters={echoChapters.length}
          summary="PLAX/PSAX, apical, subcostal, IVC"
          tone="echo"
        />
        <TrackCard
          href="/ekg"
          title="EKG"
          icon={<Activity className="h-5 w-5" />}
          chapters={ekgChapters.length}
          summary="Placement, artifacts, rhythms, escalation"
          tone="ekg"
        />
      </div>

      {/* Learning Journey Card */}
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary-500" />
              <h2 className="text-lg font-semibold text-gray-900">Your Learning Journey</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Continue where you left off</p>
          
          {/* Overall Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-2xl font-bold text-gray-900">0%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "0%" }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">0 of 21 modules completed • 21 remaining</p>
          </div>

          {/* Next Module */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Next Module</p>
            {nextUp ? (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{nextUp.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {nextUp.modality?.toUpperCase() || "COMMON"} • {nextUp.estimated_duration || 15} minutes
                </p>
                <Link
                  href={`/modules/${nextUp.id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
                >
                  Continue Learning
                  <ArrowRight size={16} />
                </Link>
              </>
            ) : null}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="h-5 w-5 text-primary-500" />
              <p className="text-sm font-medium text-gray-600">AVG SCORE</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">0%</p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="h-5 w-5 text-primary-500" />
              <p className="text-sm font-medium text-gray-600">QUIZZES TAKEN</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">All Training Modules</h2>
          <Link href="/modules" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TrackCard({
  href,
  title,
  icon,
  chapters,
  summary,
  tone,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  chapters: number;
  summary: string;
  tone: "ultrasound" | "echo" | "ekg";
}) {
  const toneClass =
    tone === "ultrasound"
      ? "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
      : tone === "echo"
        ? "bg-rose-50 border-rose-200 hover:bg-rose-100"
        : "bg-amber-50 border-amber-200 hover:bg-amber-100";
  
  const iconColor =
    tone === "ultrasound"
      ? "text-cyan-600"
      : tone === "echo"
        ? "text-rose-600"
        : "text-amber-600";

  return (
    <Link
      href={href}
      className={`rounded-xl border p-5 shadow-sm ${toneClass} transition hover:shadow-md hover:-translate-y-0.5`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`${iconColor}`}>{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-600">{chapters} chapters</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-3">{summary}</p>
      <span className="text-xs font-semibold text-primary-600 inline-flex items-center gap-1">
        Start track <ArrowRight size={12} />
      </span>
    </Link>
  );
}


