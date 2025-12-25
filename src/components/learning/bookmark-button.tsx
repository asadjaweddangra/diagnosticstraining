"use client";

import { useBookmarksStore, Bookmark } from "@/lib/stores/bookmarks-store";
import { BookmarkPlus, BookmarkMinus } from "lucide-react";

export function BookmarkButton({ item }: { item: Bookmark }) {
  const { toggle, isBookmarked } = useBookmarksStore();
  const active = isBookmarked(item.href);
  return (
    <button
      onClick={() => toggle(item)}
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold border transition ${
        active ? "bg-primary-50 text-primary-700 border-primary-200" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
      }`}
    >
      {active ? <BookmarkMinus size={14} /> : <BookmarkPlus size={14} />}
      {active ? "Saved" : "Save"}
    </button>
  );
}



