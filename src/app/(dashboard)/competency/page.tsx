import { getCompetencyRequirements } from "@/lib/supabase/queries";
import { CompetencyList } from "@/components/competency/competency-list";

export default async function CompetencyPage() {
  const requirements = await getCompetencyRequirements();

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <h1 className="text-xl font-bold text-gray-900">Competency</h1>
        <p className="text-sm text-gray-600">
          Skills checklist and supervised/independent counts for ultrasound, echo, and EKG.
        </p>
      </div>
      <CompetencyList requirements={requirements} />
    </div>
  );
}

