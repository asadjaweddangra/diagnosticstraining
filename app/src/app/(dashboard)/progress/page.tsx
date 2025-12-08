import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { ProgressRing } from "@/components/dashboard/progress-ring";

export default async function ProgressPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;
  const { data: progress } = await supabase
    .from("user_progress")
    .select("progress_percentage, status")
    .eq("user_id", userId || "");

  const average =
    progress && progress.length
      ? Math.round(
          progress.reduce((acc, p) => acc + (p.progress_percentage || 0), 0) /
            progress.length
        )
      : 0;

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Progress</h1>
        <p className="text-sm text-slate-600">
          Track module completion and quiz performance over time.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
          <ProgressRing value={average} label="Avg. module completion" />
        </div>
        <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
          <ActivityChart />
        </div>
      </div>
    </div>
  );
}

