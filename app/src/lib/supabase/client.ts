import { createBrowserClient } from "@supabase/ssr";

export function createSupabaseBrowserClient() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost-placeholder";
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "public-anon-key-placeholder";

  return createBrowserClient(url, key);
}

