import { createSupabaseServerClient } from "./server";
import { Module, Quiz, CompetencyRequirement, UserCompetency } from "@/types";

export async function getModules(modality?: string): Promise<Module[]> {
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
  return data as Module[];
}

export async function getModuleById(id: string): Promise<Module | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data as Module;
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

