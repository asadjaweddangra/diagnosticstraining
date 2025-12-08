import Link from "next/link";
import { getCompetencyRequirements, getProfile } from "@/lib/supabase/queries";
import { SupervisorPanel } from "@/components/supervisor/supervisor-panel";

export default async function SettingsPage() {
  const profile = await getProfile();
  const requirements = await getCompetencyRequirements();
  const isSupervisor =
    profile?.role === "supervisor" || profile?.role === "admin";

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Supervisor & Settings</h1>
        <p className="text-sm text-slate-600">
          Configure account and supervisor tools. Supervisor view is limited to
          sign-off flows; contact admin to enable supervisor role.
        </p>
      </div>
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 space-y-3">
        <h2 className="text-sm font-semibold text-slate-800">Supervisor Tools</h2>
        <p className="text-sm text-slate-600">
          Use a supervisor/admin account to record supervised/independent counts and
          generate certificates. Common users can still view their own progress.
        </p>
        <p className="text-xs text-slate-500">
          Tip: set your profile role to &quot;supervisor&quot; or &quot;admin&quot; in Supabase to unlock
          sign-off capabilities.
        </p>
        <SupervisorPanel requirements={requirements} isSupervisor={!!isSupervisor} />
        <p className="text-xs text-slate-500">
          Need help? Review competency progress from{" "}
          <Link href="/competency" className="text-primary-600 underline">
            Competency
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

