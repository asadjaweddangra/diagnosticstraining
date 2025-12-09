import { Bell, Upload, Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 glass-panel px-6 py-4">
      <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
        <Search size={18} className="text-ink/70" />
        <input
          className="w-64 bg-transparent text-sm text-ink outline-none placeholder:text-ink/50"
          placeholder="Search modules, tracks, topics"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-xl bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary-500/30">
          <Upload size={16} className="inline-block mr-2" />
          Upload
        </button>
        <button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 text-ink hover:text-primary-200">
          <Bell size={18} className="text-ink" />
        </button>
        <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <Image
            src="https://api.dicebear.com/7.x/initials/svg?seed=DR"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">D. Rahi</p>
            <p className="text-xs text-slate-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

