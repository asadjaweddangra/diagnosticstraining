-- Extend RLS to allow supervisors/admins (based on profiles.role) to view/update trainee data.
-- Assumes profiles.role can be set to 'supervisor' or 'admin'.

-- Helper expression used inline: supervisor/admin check
-- exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))

-- Profiles: allow supervisors/admins to select all profiles
drop policy if exists "Profiles are viewable by self" on profiles;
drop policy if exists "Users can update their profile" on profiles;
drop policy if exists "Insert profile for self" on profiles;

create policy "Profiles view self or supervisor" on profiles
  for select using (
    auth.uid() = id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  );

create policy "Profiles update self" on profiles
  for update using (auth.uid() = id);

create policy "Insert profile for self" on profiles
  for insert with check (auth.uid() = id);

-- User progress: owner or supervisor/admin
drop policy if exists "Progress is viewable by owner" on user_progress;
drop policy if exists "Progress insert by owner" on user_progress;
drop policy if exists "Progress update by owner" on user_progress;

create policy "Progress view owner or supervisor" on user_progress
  for select using (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  );

create policy "Progress insert owner" on user_progress
  for insert with check (auth.uid() = user_id);

create policy "Progress update owner or supervisor" on user_progress
  for update using (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  ) with check (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  );

-- Quiz attempts: owner or supervisor/admin view (insert remains owner-only)
drop policy if exists "Quiz attempts viewable by owner" on quiz_attempts;
drop policy if exists "Quiz attempts insert by owner" on quiz_attempts;

create policy "Quiz attempts view owner or supervisor" on quiz_attempts
  for select using (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  );

create policy "Quiz attempts insert owner" on quiz_attempts
  for insert with check (auth.uid() = user_id);

-- User competency: owner or supervisor/admin
drop policy if exists "Competency viewable by owner" on user_competency;
drop policy if exists "Competency insert by owner" on user_competency;
drop policy if exists "Competency update by owner" on user_competency;

create policy "Competency view owner or supervisor" on user_competency
  for select using (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  );

create policy "Competency insert owner" on user_competency
  for insert with check (auth.uid() = user_id);

create policy "Competency update owner or supervisor" on user_competency
  for update using (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  ) with check (
    auth.uid() = user_id
    or exists(select 1 from profiles p where p.id = auth.uid() and p.role in ('supervisor','admin'))
  );

