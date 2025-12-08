import { Bell, Upload, Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 rounded-3xl bg-white/80 px-6 py-4 shadow-lg ring-1 ring-slate-200 backdrop-blur">
      <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
        <Search size={18} className="text-slate-500" />
        <input
          className="w-64 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          placeholder="Search modules, quizzes, topics"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
          <Upload size={16} className="inline-block mr-2" />
          Upload
        </button>
        <button className="rounded-full bg-white p-2 ring-1 ring-slate-200 text-slate-600 hover:text-primary-600">
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
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

