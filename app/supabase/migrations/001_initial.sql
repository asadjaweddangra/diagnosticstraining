-- Supabase schema for clinical training platform
-- Generated from PRD, includes core tables and basic RLS policies

create extension if not exists "uuid-ossp";

-- User Management
create table if not exists profiles (
  id uuid references auth.users primary key,
  email text unique not null,
  full_name text,
  role text default 'student',
  institution text,
  created_at timestamptz default now()
);

-- Learning Modules
create table if not exists modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  content jsonb,
  order_index integer,
  estimated_duration integer,
  prerequisites uuid[],
  created_at timestamptz default now()
);

-- User Progress Tracking
create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  module_id uuid references modules(id),
  status text default 'not_started',
  progress_percentage integer default 0,
  time_spent integer default 0,
  last_accessed timestamptz default now(),
  completed_at timestamptz,
  unique(user_id, module_id)
);

-- Quiz System
create table if not exists quizzes (
  id uuid primary key default gen_random_uuid(),
  module_id uuid references modules(id),
  title text not null,
  type text,
  questions jsonb,
  passing_score integer default 80,
  time_limit integer,
  max_attempts integer default 3
);

create table if not exists quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  quiz_id uuid references quizzes(id),
  score integer,
  answers jsonb,
  time_taken integer,
  passed boolean,
  attempt_number integer,
  created_at timestamptz default now()
);

-- Competency Tracking
create table if not exists competency_requirements (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  modality text,
  supervised_count integer,
  independent_count integer,
  skills_checklist jsonb
);

create table if not exists user_competency (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  requirement_id uuid references competency_requirements(id),
  supervised_completed integer default 0,
  independent_completed integer default 0,
  skills_completed jsonb default '[]'::jsonb,
  supervisor_signoffs jsonb default '[]'::jsonb,
  status text default 'in_progress',
  certification_date timestamptz
);

-- Learning Analytics
create table if not exists learning_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  module_id uuid references modules(id),
  session_start timestamptz default now(),
  session_end timestamptz,
  activities jsonb,
  engagement_score real
);

-- Enable RLS
alter table profiles enable row level security;
alter table user_progress enable row level security;
alter table quiz_attempts enable row level security;
alter table user_competency enable row level security;
alter table learning_sessions enable row level security;

-- Policies
create policy "Profiles are viewable by self" on profiles
  for select using (auth.uid() = id);

create policy "Users can update their profile" on profiles
  for update using (auth.uid() = id);

create policy "Insert profile for self" on profiles
  for insert with check (auth.uid() = id);

create policy "Progress is viewable by owner" on user_progress
  for select using (auth.uid() = user_id);

create policy "Progress insert by owner" on user_progress
  for insert with check (auth.uid() = user_id);

create policy "Progress update by owner" on user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Quiz attempts viewable by owner" on quiz_attempts
  for select using (auth.uid() = user_id);

create policy "Quiz attempts insert by owner" on quiz_attempts
  for insert with check (auth.uid() = user_id);

create policy "Competency viewable by owner" on user_competency
  for select using (auth.uid() = user_id);

create policy "Competency insert by owner" on user_competency
  for insert with check (auth.uid() = user_id);

create policy "Competency update by owner" on user_competency
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Sessions viewable by owner" on learning_sessions
  for select using (auth.uid() = user_id);

create policy "Sessions insert by owner" on learning_sessions
  for insert with check (auth.uid() = user_id);

