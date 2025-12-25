"use client";

import { useBookmarksStore, Bookmark } from "@/lib/stores/bookmarks-store";
import { BookmarkPlus, BookmarkMinus } from "lucide-react";

export function BookmarkButton({ item }: { item: Bookmark }) {
  const { toggle, isBookmarked } = useBookmarksStore();
  const active = isBookmarked(item.href);
  return (
    <button
      onClick={() => toggle(item)}
      className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold ring-1 transition ${
        active ? "bg-primary-500/15 text-primary-100 ring-primary-500/30" : "bg-white/5 text-ink ring-white/10"
      }`}
    >
      {active ? <BookmarkMinus size={14} /> : <BookmarkPlus size={14} />}
      {active ? "Saved" : "Save"}
    </button>
  );
}

