import { createSupabaseServerClient } from "./server";
import { Module, Quiz, CompetencyRequirement, UserCompetency } from "@/types";

export async function getModules(): Promise<Module[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .order("order_index", { ascending: true });
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

