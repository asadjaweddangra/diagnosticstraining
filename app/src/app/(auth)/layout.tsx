import type { ReactNode } from "react";
import "../globals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-soft-gradient flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-slate-200 backdrop-blur">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-primary-100 text-primary-600 font-bold">
            SN
          </div>
          <h1 className="text-xl font-semibold text-slate-900">
            SmartNurse Training
          </h1>
          <p className="text-sm text-slate-500">
            Ultrasound, Echo & EKG mastery platform
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

