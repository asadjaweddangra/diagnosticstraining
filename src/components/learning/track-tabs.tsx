"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const tracks = [
  { key: "all", label: "All" },
  { key: "ultrasound", label: "Ultrasound" },
  { key: "echo", label: "Echo" },
  { key: "ekg", label: "EKG" },
  { key: "common", label: "Common" },
];

export function TrackTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("track") || "all";

  function setTrack(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") {
      params.delete("track");
    } else {
      params.set("track", key);
    }
    router.replace(`/modules?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tracks.map((t) => (
        <button
          key={t.key}
          onClick={() => setTrack(t.key)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            current === t.key
              ? "bg-primary-100 text-primary-700"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

