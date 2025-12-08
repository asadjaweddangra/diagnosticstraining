alter table modules
  add column if not exists modality text default 'common';

-- optional index for filtering
create index if not exists modules_modality_idx on modules (modality);

