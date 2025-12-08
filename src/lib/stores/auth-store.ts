import { create } from "zustand";

type AuthState = {
  userId?: string;
  email?: string;
  role?: "student" | "supervisor" | "admin";
  setAuth: (payload: Partial<AuthState>) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  userId: undefined,
  email: undefined,
  role: undefined,
  setAuth: (payload) => set((state) => ({ ...state, ...payload })),
  clear: () => set({ userId: undefined, email: undefined, role: undefined }),
}));

