import { ActivityChart } from "@/components/dashboard/activity-chart";
import { ProgressRing } from "@/components/dashboard/progress-ring";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Plus, Users, Mic2, GraduationCap } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          label="Total Users"
          value="155,000"
          helper="+2.5% vs last month"
          icon={<Users size={18} />}
          tone="primary"
          action={
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <div>
                <p className="text-xs text-slate-500">Active users</p>
                <p className="text-sm font-semibold text-slate-800">37,988</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">New signups</p>
                <p className="text-sm font-semibold text-slate-800">83,832</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Subscribed</p>
                <p className="text-sm font-semibold text-slate-800">35%</p>
              </div>
            </div>
          }
        />
        <StatsCard
          label="Total Podcasts"
          value="322"
          helper="Premium 212"
          icon={<Mic2 size={18} />}
          tone="echo"
          action={
            <button className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
              <Plus size={16} />
              Add New
            </button>
          }
        />
        <StatsCard
          label="Total Quizzes"
          value="3,273"
          helper="New 110"
          icon={<GraduationCap size={18} />}
          tone="ekg"
          action={
            <button className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
              <Plus size={16} />
              Add New
            </button>
          }
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">User Growth</p>
            <span className="text-xs text-slate-500">2023-2024</span>
          </div>
          <ActivityChart />
        </div>
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">
              Revenue From Subscribers
            </p>
            <span className="text-xs text-slate-500">Year to date</span>
          </div>
          <div className="grid place-items-center py-6">
            <ProgressRing value={76} label="Avg. course completion" />
          </div>
        </div>
      </div>
    </div>
  );
}

