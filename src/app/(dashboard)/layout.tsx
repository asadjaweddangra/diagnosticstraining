import type { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-soft-gradient p-6 md:p-8 text-ink">
      <div className="mx-auto flex max-w-[1400px] gap-6">
        <Sidebar />
        <div className="flex-1 space-y-4">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

