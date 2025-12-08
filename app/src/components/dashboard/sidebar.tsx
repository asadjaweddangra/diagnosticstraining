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
} from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/modules", label: "Modules", icon: Library },
  { href: "/quizzes", label: "Quizzes", icon: ClipboardCheck },
  { href: "/progress", label: "Progress", icon: BarChart3 },
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
    <aside className="hidden md:flex w-64 shrink-0 flex-col rounded-3xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200 backdrop-blur">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-100 text-primary-600 font-semibold">
          SN
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">SmartNurse</p>
          <p className="text-xs text-slate-500">Training Platform</p>
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
                  ? "bg-primary-50 text-primary-700"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <Icon size={18} className={cn(active ? "text-primary-600" : "")} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-4">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-rose-500 hover:bg-rose-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

