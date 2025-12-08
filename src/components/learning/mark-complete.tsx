"use client";

import { useState, useEffect } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";

type Props = {
  moduleId: string;
};

export function MarkComplete({ moduleId }: Props) {
  const supabase = createSupabaseBrowserClient();
  const [status, setStatus] = useState<"not_started" | "in_progress" | "completed">(
    "not_started"
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("user_progress")
        .select("status")
        .eq("user_id", user.id)
        .eq("module_id", moduleId)
        .maybeSingle();
      if (data?.status) setStatus(data.status as any);
    }
    load();
  }, [moduleId, supabase]);

  async function updateStatus(next: "in_progress" | "completed") {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }
    await supabase.from("user_progress").upsert({
      user_id: user.id,
      module_id: moduleId,
      status: next,
      progress_percentage: next === "completed" ? 100 : 50,
    });
    setStatus(next);
    setLoading(false);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={loading}
        onClick={() => updateStatus("in_progress")}
        className={cn(
          "rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200",
          loading && "opacity-60"
        )}
      >
        Mark In Progress
      </button>
      <button
        disabled={loading}
        onClick={() => updateStatus("completed")}
        className={cn(
          "rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-3 py-2 text-xs font-semibold text-white shadow",
          loading && "opacity-60"
        )}
      >
        Mark Complete ({status})
      </button>
    </div>
  );
}

