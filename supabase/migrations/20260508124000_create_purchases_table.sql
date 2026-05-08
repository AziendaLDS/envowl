create extension if not exists pgcrypto;

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  pack_name text not null,
  access_token text not null,
  created_at timestamptz not null default now()
);

alter table public.purchases enable row level security;
