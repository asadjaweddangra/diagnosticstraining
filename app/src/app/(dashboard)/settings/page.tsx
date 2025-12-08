import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Supervisor & Settings</h1>
        <p className="text-sm text-slate-600">
          Configure account and supervisor tools. Supervisor view is limited to
          sign-off flows; contact admin to enable supervisor role.
        </p>
      </div>
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 space-y-2">
        <h2 className="text-sm font-semibold text-slate-800">Supervisor Tools</h2>
        <p className="text-sm text-slate-600">
          Sign-off and certificate generation will appear here for users with the
          supervisor role. For now, review competency progress from{" "}
          <Link href="/competency" className="text-primary-600 underline">
            Competency
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

