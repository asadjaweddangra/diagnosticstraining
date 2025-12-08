import { ActivityChart } from "@/components/dashboard/activity-chart";
import { RadarCompetency } from "@/components/analytics/radar-competency";
import { QuizTrend } from "@/components/analytics/quiz-trend";
import { TimeDistribution } from "@/components/analytics/time-distribution";
import { getQuizAttempts, getUserCompetencies } from "@/lib/supabase/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AnalyticsPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user.id;

  const attempts = await getQuizAttempts(userId || undefined);
  const competencies = userId ? await getUserCompetencies(userId) : [];

  const competencyRadar = [
    {
      area: "Ultrasound",
      value: percent(
        competencies.find((c) => c.requirement_id === "d1111111-1111-1111-1111-111111111111")?.supervised_completed || 0,
        25
      ),
    },
    {
      area: "Echo",
      value: percent(
        competencies.find((c) => c.requirement_id === "d5555555-5555-5555-5555-555555555555")?.supervised_completed || 0,
        30
      ),
    },
    {
      area: "EKG",
      value: percent(
        competencies.find((c) => c.requirement_id === "d7777777-7777-7777-7777-777777777777")?.supervised_completed || 0,
        50
      ),
    },
    {
      area: "Common",
      value: 70,
    },
  ];

  const timeData = [
    { name: "Ultrasound", value: 40 },
    { name: "Echo", value: 25 },
    { name: "EKG", value: 20 },
    { name: "Common", value: 15 },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Analytics</h1>
        <p className="text-sm text-slate-600">
          Track quiz performance, competency radar, time distribution, and activity.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-sm font-semibold text-slate-800">
            Quiz Performance Trend
          </div>
          <QuizTrend attempts={attempts} />
        </div>
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-sm font-semibold text-slate-800">
            Competency Radar
          </div>
          <RadarCompetency data={competencyRadar} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-sm font-semibold text-slate-800">
            Time Distribution (by modality)
          </div>
          <TimeDistribution data={timeData} />
        </div>
        <div className="rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-sm font-semibold text-slate-800">
            Activity
          </div>
          <ActivityChart />
        </div>
      </div>
    </div>
  );
}

function percent(val: number, total: number) {
  if (!total) return 0;
  const p = Math.round((val / total) * 100);
  return Math.min(100, p);
}

