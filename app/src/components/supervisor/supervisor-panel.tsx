"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { CompetencyRequirement, UserCompetency } from "@/types";
import { cn } from "@/lib/utils/cn";
import { CertificateButton } from "./certificate-button";

type Props = {
  requirements: CompetencyRequirement[];
  isSupervisor: boolean;
};

export function SupervisorPanel({ requirements, isSupervisor }: Props) {
  const supabase = createSupabaseBrowserClient();
  const [userCompetencies, setUserCompetencies] = useState<UserCompetency[]>([]);
  const [loading, setLoading] = useState(false);
  const [traineeId, setTraineeId] = useState<string>("");
  const [traineeName, setTraineeName] = useState<string>("");

  useEffect(() => {
    if (!isSupervisor) return;
    loadForUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSupervisor]);

  async function loadForUser(userId?: string) {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const target = userId || user?.id;
    if (!target) {
      setLoading(false);
      return;
    }
    const { data } = await supabase
      .from("user_competency")
      .select("*")
      .eq("user_id", target);
    setUserCompetencies(data || []);

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", target)
      .maybeSingle();
    setTraineeName(profile?.full_name || "Trainee");
    setLoading(false);
  }

  async function increment(
    requirementId: string,
    field: "supervised_completed" | "independent_completed"
  ) {
    setLoading(true);
    const target = traineeId || (await supabase.auth.getUser()).data.user?.id;
    if (!target) {
      setLoading(false);
      return;
    }
    const existing = userCompetencies.find((u) => u.requirement_id === requirementId);
    const payload: any = {
      user_id: target,
      requirement_id: requirementId,
    };
    payload[field] = (existing?.[field] || 0) + 1;

    await supabase.from("user_competency").upsert(payload);
    await loadForUser(target);
  }

  return (
    <div className="space-y-4">
      {!isSupervisor ? (
        <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
          Supervisor-only features. Please have your supervisor account sign in.
        </div>
      ) : (
        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 space-y-2">
          <p className="font-semibold">Supervisor tools</p>
          <p className="text-xs text-slate-500">
            Enter trainee user ID (UUID from Supabase auth) to record sign-off, or
            leave blank to update your own record for demo purposes.
          </p>
          <input
            value={traineeId}
            onChange={(e) => setTraineeId(e.target.value)}
            placeholder="Trainee user_id (leave blank for yourself)"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
          <div className="text-xs text-slate-500">
            Trainee: {traineeName || "Unknown"}
          </div>
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        {requirements.map((req) => {
          const row = userCompetencies.find((u) => u.requirement_id === req.id);
          return (
            <div
              key={req.id}
              className="rounded-2xl bg-white/80 p-4 shadow ring-1 ring-slate-200 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{req.name}</p>
                  <p className="text-xs text-slate-500 capitalize">
                    {req.modality}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <p>
                    Supervised: {row?.supervised_completed || 0}/
                    {req.supervised_count ?? 0}
                  </p>
                  <p>
                    Independent: {row?.independent_completed || 0}/
                    {req.independent_count ?? 0}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  disabled={loading || !isSupervisor}
                  onClick={() => increment(req.id, "supervised_completed")}
                  className={cn(
                    "rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200",
                    (loading || !isSupervisor) && "opacity-50"
                  )}
                >
                  +1 Supervised
                </button>
                <button
                  disabled={loading || !isSupervisor}
                  onClick={() => increment(req.id, "independent_completed")}
                  className={cn(
                    "rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200",
                    (loading || !isSupervisor) && "opacity-50"
                  )}
                >
                  +1 Independent
                </button>
                <CertificateButton
                  traineeName={traineeName || "Trainee"}
                  requirement={req.name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

