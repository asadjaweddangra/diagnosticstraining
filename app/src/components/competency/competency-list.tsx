"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { CompetencyRequirement, UserCompetency } from "@/types";
import { cn } from "@/lib/utils/cn";

type Props = {
  requirements: CompetencyRequirement[];
};

export function CompetencyList({ requirements }: Props) {
  const supabase = createSupabaseBrowserClient();
  const [userCompetencies, setUserCompetencies] = useState<UserCompetency[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("user_competency")
        .select("*")
        .eq("user_id", user.id);
      setUserCompetencies(data || []);
    }
    fetchData();
  }, [supabase]);

  async function updateCounts(
    requirementId: string,
    fields: Partial<UserCompetency>
  ) {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("user_competency").upsert({
      user_id: user.id,
      requirement_id: requirementId,
      ...fields,
    });
    const { data } = await supabase
      .from("user_competency")
      .select("*")
      .eq("user_id", user.id);
    setUserCompetencies(data || []);
    setLoading(false);
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {requirements.map((req) => {
        const userRow = userCompetencies.find(
          (u) => u.requirement_id === req.id
        );
        return (
          <div
            key={req.id}
            className="flex flex-col gap-3 rounded-2xl bg-white/80 p-4 shadow ring-1 ring-slate-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {req.name}
                </p>
                <p className="text-xs text-slate-500 capitalize">
                  {req.modality}
                </p>
              </div>
              <div className="text-right text-xs text-slate-500">
                <p>
                  Supervised: {userRow?.supervised_completed || 0}/
                  {req.supervised_count ?? 0}
                </p>
                <p>
                  Independent: {userRow?.independent_completed || 0}/
                  {req.independent_count ?? 0}
                </p>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              {req.skills_checklist?.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <button
                disabled={loading}
                onClick={() =>
                  updateCounts(req.id, {
                    supervised_completed: (userRow?.supervised_completed || 0) + 1,
                  })
                }
                className={cn(
                  "rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200",
                  loading && "opacity-60"
                )}
              >
                +1 Supervised
              </button>
              <button
                disabled={loading}
                onClick={() =>
                  updateCounts(req.id, {
                    independent_completed:
                      (userRow?.independent_completed || 0) + 1,
                  })
                }
                className={cn(
                  "rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200",
                  loading && "opacity-60"
                )}
              >
                +1 Independent
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

