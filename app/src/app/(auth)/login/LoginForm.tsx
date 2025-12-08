"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";
import { ensureProfile } from "@/lib/supabase/profile";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = createSupabaseBrowserClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    if (data.user) {
      await ensureProfile(supabase, {
        id: data.user.id,
        email,
        full_name: data.user.user_metadata?.full_name,
      });
    }
    const redirectTo = searchParams.get("redirectedFrom") || "/dashboard";
    router.replace(redirectTo);
  }

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <div>
        <label className="text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          className={cn(
            "mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none",
            "focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          )}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">Password</label>
        <input
          type="password"
          className={cn(
            "mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none",
            "focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          )}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error ? <p className="text-sm text-rose-500">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md disabled:opacity-70"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
      <p className="text-center text-sm text-slate-600">
        No account?{" "}
        <Link className="text-primary-600 hover:underline" href="/signup">
          Create one
        </Link>
      </p>
    </form>
  );
}

