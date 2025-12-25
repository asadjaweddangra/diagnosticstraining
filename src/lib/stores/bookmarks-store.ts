"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Bookmark = {
  title: string;
  href: string;
  track?: string;
};

type State = {
  items: Bookmark[];
  toggle: (item: Bookmark) => void;
  isBookmarked: (href: string) => boolean;
};

export const useBookmarksStore = create<State>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (item) =>
        set((state) => {
          const exists = state.items.some((i) => i.href === item.href);
          if (exists) {
            return { items: state.items.filter((i) => i.href !== item.href) };
          }
          return { items: [...state.items, item] };
        }),
      isBookmarked: (href) => get().items.some((i) => i.href === href),
    }),
    { name: "diagnostic-bookmarks" }
  )
);

