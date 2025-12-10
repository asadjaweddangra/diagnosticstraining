import { getCompetencyRequirements } from "@/lib/supabase/queries";
import { CompetencyList } from "@/components/competency/competency-list";

export default async function CompetencyPage() {
  const requirements = await getCompetencyRequirements();

  return (
    <div className="space-y-4">
      <div className="glass-panel p-6">
        <h1 className="text-xl font-bold text-ink">Competency</h1>
        <p className="text-sm text-ink/70">
          Skills checklist and supervised/independent counts for ultrasound, echo, and EKG.
        </p>
      </div>
      <CompetencyList requirements={requirements} />
    </div>
  );
}

