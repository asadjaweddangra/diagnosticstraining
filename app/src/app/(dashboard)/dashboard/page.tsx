import { ActivityChart } from "@/components/dashboard/activity-chart";
import { ProgressRing } from "@/components/dashboard/progress-ring";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ModuleCard } from "@/components/learning/module-card";
import { getModules } from "@/lib/supabase/queries";
import { BookOpenCheck, ClipboardCheck, Sparkles } from "lucide-react";

export default async function DashboardPage() {
  const modules = await getModules();
  const featured = modules.slice(0, 3);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-200">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-sm font-semibold text-primary-700">
            <Sparkles size={16} />
            SmartNurse Clinical Tracks
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Choose your track: Ultrasound, Echo, or EKG
          </h1>
          <p className="text-sm text-slate-600">
            Structured, zero-to-competent paths with common core modules shared
            across all modalities.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          label="Ultrasound Track"
          value="8 modules"
          helper="Foundations, abdomen, vascular, troubleshooting"
          icon={<BookOpenCheck size={18} />}
          tone="ultrasound"
        />
        <StatsCard
          label="Echo Track"
          value="6 modules"
          helper="PLAX/PSAX, apical, subcostal, IVC, escalation"
          icon={<BookOpenCheck size={18} />}
          tone="echo"
        />
        <StatsCard
          label="EKG Track"
          value="4 modules"
          helper="Prep, placement, artifacts, rhythm escalation"
          icon={<ClipboardCheck size={18} />}
          tone="ekg"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">
              Keep Going: Featured Modules
            </p>
            <span className="text-xs text-slate-500">Start with these</span>
          </div>
          <div className="space-y-3">
            {featured.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">
              Your Progress Snapshot
            </p>
            <span className="text-xs text-slate-500">Demo data</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ProgressRing value={32} label="Ultrasound" />
            <ProgressRing value={20} label="Echo" />
            <ProgressRing value={15} label="EKG" />
            <ProgressRing value={40} label="Common Core" />
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-800">Activity</p>
          <span className="text-xs text-slate-500">Demo trends</span>
        </div>
        <ActivityChart />
      </div>
    </div>
  );
}


