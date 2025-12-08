import { createSupabaseServerClient } from "./server";
import { Module, Quiz, CompetencyRequirement, UserCompetency } from "@/types";
import { staticModules } from "@/data/modules";

export async function getModules(modality?: string): Promise<Module[]> {
  try {
    const supabase = createSupabaseServerClient();
    let query = supabase
      .from("modules")
      .select("*")
      .order("order_index", { ascending: true });
    if (modality) {
      query = query.or(`modality.eq.${modality},modality.eq.common`);
    }
    const { data, error } = await query;
    if (error) throw error;
    if (data && data.length > 0) return data as Module[];
  } catch {
    // fall back to static
  }
  const fallback = modality
    ? staticModules.filter(
        (m) => m.modality === modality || m.modality === "common"
      )
    : staticModules;
  return fallback.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
}

export async function getModuleById(id: string): Promise<Module | null> {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .eq("id", id)
      .single();
    if (!error && data) return data as Module;
  } catch {
    // ignore and fall back
  }
  return staticModules.find((m) => m.id === id) || null;
}

export async function getQuizzes(): Promise<Quiz[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("quizzes").select("*");
  if (error) throw error;
  return (data || []) as Quiz[];
}

export async function getQuizById(id: string): Promise<Quiz | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data as Quiz;
}

export async function getCompetencyRequirements(): Promise<
  CompetencyRequirement[]
> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("competency_requirements")
    .select("*");
  if (error) throw error;
  return (data || []) as CompetencyRequirement[];
}

export async function getUserCompetencies(
  userId: string
): Promise<UserCompetency[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("user_competency")
    .select("*")
    .eq("user_id", userId);
  if (error) return [];
  return (data || []) as UserCompetency[];
}

export async function getQuizAttempts(userId?: string) {
  const supabase = createSupabaseServerClient();
  let query = supabase.from("quiz_attempts").select("*").order("created_at", {
    ascending: false,
  });
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) return [];
  return data || [];
}

export async function getProfile() {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .maybeSingle();
  if (error) return null;
  return data;
}

