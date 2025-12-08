import { getCompetencyRequirements } from "@/lib/supabase/queries";
import { CompetencyList } from "@/components/competency/competency-list";

export default async function CompetencyPage() {
  const requirements = await getCompetencyRequirements();

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Competency</h1>
        <p className="text-sm text-slate-600">
          Skills checklist and supervised/independent counts for ultrasound, echo,
          and EKG.
        </p>
      </div>
      <CompetencyList requirements={requirements} />
    </div>
  );
}

