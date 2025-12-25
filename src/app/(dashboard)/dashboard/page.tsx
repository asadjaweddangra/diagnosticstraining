import { ModuleCard } from "@/components/learning/module-card";
import { getModules } from "@/lib/supabase/queries";
import { ArrowRight, Target, Trophy, BarChart3 } from "lucide-react";
import Link from "next/link";

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
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Training Modules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
}


