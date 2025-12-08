import { SupabaseClient } from "@supabase/supabase-js";

type ProfilePayload = {
  id: string;
  email: string;
  full_name?: string | null;
};

export async function ensureProfile(
  supabase: SupabaseClient,
  payload: ProfilePayload
) {
  const { error } = await supabase.from("profiles").upsert(
    {
      id: payload.id,
      email: payload.email,
      full_name: payload.full_name ?? undefined,
    },
    { onConflict: "id" }
  );
  return { error };
}

