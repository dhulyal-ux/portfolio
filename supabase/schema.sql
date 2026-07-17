-- ---------------------------------------------------------------------------
-- Schema for the portfolio CMS content.
-- Run this in the Supabase SQL editor (or `supabase db push`) once per project.
-- Content is public/read-only from the site, so RLS allows anonymous SELECT.
-- ---------------------------------------------------------------------------

create table if not exists public.experience (
  id          uuid primary key default gen_random_uuid(),
  sort_order  int  not null default 0,
  logo_url    text not null,
  logo_alt    text not null,
  title       text not null,
  company     text not null,
  location    text not null,
  period      text not null,
  bullets     jsonb not null, -- [{ "text": "...", "highlight": true }]
  created_at  timestamptz not null default now()
);

create table if not exists public.pm_projects (
  id          uuid primary key default gen_random_uuid(),
  sort_order  int  not null default 0,
  slug        text not null unique,
  name        text not null,
  description text not null,
  role        text not null,
  tools       text not null,
  outcome     text not null,
  created_at  timestamptz not null default now()
);

create table if not exists public.ai_projects (
  id          uuid primary key default gen_random_uuid(),
  sort_order  int  not null default 0,
  slug        text not null unique,
  name        text not null,
  description text not null,
  tech_stack  text not null,
  case_study  text not null,
  created_at  timestamptz not null default now()
);

create table if not exists public.certifications (
  id          uuid primary key default gen_random_uuid(),
  sort_order  int  not null default 0,
  title       text not null,
  issuer      text not null,
  date        text not null,
  issued_by   text not null,
  created_at  timestamptz not null default now()
);

-- Row Level Security: allow anonymous read of published content.
alter table public.experience     enable row level security;
alter table public.pm_projects     enable row level security;
alter table public.ai_projects     enable row level security;
alter table public.certifications  enable row level security;

do $$
begin
  if not exists (select 1 from pg_policies where tablename = 'experience' and policyname = 'Public read') then
    create policy "Public read" on public.experience for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'pm_projects' and policyname = 'Public read') then
    create policy "Public read" on public.pm_projects for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'ai_projects' and policyname = 'Public read') then
    create policy "Public read" on public.ai_projects for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'certifications' and policyname = 'Public read') then
    create policy "Public read" on public.certifications for select using (true);
  end if;
end $$;
