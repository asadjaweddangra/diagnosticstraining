 "use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import {
  LayoutDashboard,
  Library,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Settings,
  LogOut,
  Activity,
  Layers,
} from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/modules", label: "Modules", icon: Library },
  { href: "/ultrasound", label: "Ultrasound", icon: Layers },
  { href: "/echo", label: "Echo", icon: BookOpen },
  { href: "/ekg", label: "EKG", icon: Activity },
  { href: "/quizzes", label: "Quizzes", icon: ClipboardCheck },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/competency", label: "Competency", icon: BookOpen },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col rounded-3xl bg-panel p-4 shadow-lg ring-1 ring-white/10 backdrop-blur">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-500/10 text-primary-200 font-semibold border border-primary-500/30">
          DC
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">DiagnostiCore</p>
          <p className="text-xs text-ink/60">Clinical Academy</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary-500/10 text-primary-100 ring-1 ring-primary-500/30"
                  : "text-ink/70 hover:bg-white/5"
              )}
            >
              <Icon size={18} className={cn(active ? "text-primary-200" : "text-ink/70")} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-4">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-rose-200 hover:bg-rose-500/10"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

