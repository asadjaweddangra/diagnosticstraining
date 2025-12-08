import { getModules } from "@/lib/supabase/queries";
import { ModuleCard } from "@/components/learning/module-card";

export default async function ModulesPage() {
  const modules = await getModules();

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Modules</h1>
        <p className="text-sm text-slate-600">
          Zero-to-competent training across Ultrasound, Echo, and EKG.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </div>
    </div>
  );
}

