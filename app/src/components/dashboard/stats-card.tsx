import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  label: string;
  value: string;
  helper?: string;
  icon?: ReactNode;
  tone?: "primary" | "ultrasound" | "echo" | "ekg";
  action?: ReactNode;
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  primary: "bg-primary-50 text-primary-700",
  ultrasound: "bg-ultrasound/10 text-ultrasound",
  echo: "bg-echo/10 text-echo",
  ekg: "bg-ekg/10 text-ekg",
};

export function StatsCard({
  label,
  value,
  helper,
  icon,
  tone = "primary",
  action,
}: Props) {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-700">{label}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
          {helper ? (
            <p className="text-xs text-slate-500 mt-1">{helper}</p>
          ) : null}
        </div>
        <div
          className={cn(
            "grid h-10 w-10 place-items-center rounded-2xl",
            toneClass[tone]
          )}
        >
          {icon}
        </div>
      </div>
      {action ? <div className="mt-auto">{action}</div> : null}
    </div>
  );
}

