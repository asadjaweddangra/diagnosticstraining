"use client";

import Link from "next/link";
import { useBookmarksStore } from "@/lib/stores/bookmarks-store";
import { BookmarkMinus, BookmarkPlus } from "lucide-react";

export default function BookmarksPage() {
  const { items, toggle } = useBookmarksStore();

  return (
    <div className="space-y-4">
      <div className="glass-panel p-6">
        <h1 className="text-xl font-bold text-ink">Bookmarks</h1>
        <p className="text-sm text-ink/70">Saved chapters, modules, and tools for quick return.</p>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-ink/60">No bookmarks yet. Add any chapter or module to see it here.</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item.href} className="glass-panel flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-ink/60">
                <span>{item.track ?? "general"}</span>
                <button
                  onClick={() => toggle(item)}
                  className="rounded-lg bg-white/5 px-2 py-1 text-ink ring-1 ring-white/10 hover:-translate-y-0.5"
                >
                  <BookmarkMinus size={14} />
                </button>
              </div>
              <Link href={item.href} className="text-sm font-semibold text-ink hover:underline">
                {item.title}
              </Link>
              <Link href={item.href} className="inline-flex items-center gap-1 text-xs font-semibold text-primary-200">
                Open <BookmarkPlus size={14} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

