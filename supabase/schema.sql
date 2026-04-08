-- Run this in Supabase SQL Editor

create table if not exists public.news_items (
  id text primary key,
  title text not null,
  date date not null default current_date,
  created_at timestamptz not null default now()
);

create table if not exists public.event_items (
  id text primary key,
  title text not null,
  date date not null default current_date,
  location text not null default 'Campus',
  created_at timestamptz not null default now()
);

create table if not exists public.gallery_items (
  id text primary key,
  title text not null,
  "desc" text not null default '',
  src text not null,
  created_at timestamptz not null default now()
);

alter table public.news_items enable row level security;
alter table public.event_items enable row level security;
alter table public.gallery_items enable row level security;

-- Public read access for website pages
drop policy if exists "Public can read news" on public.news_items;
create policy "Public can read news"
  on public.news_items for select using (true);

drop policy if exists "Public can read events" on public.event_items;
create policy "Public can read events"
  on public.event_items for select using (true);

drop policy if exists "Public can read gallery" on public.gallery_items;
create policy "Public can read gallery"
  on public.gallery_items for select using (true);

-- Authenticated users can manage content (admin login required)
drop policy if exists "Authenticated can manage news" on public.news_items;
create policy "Authenticated can manage news"
  on public.news_items for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated can manage events" on public.event_items;
create policy "Authenticated can manage events"
  on public.event_items for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated can manage gallery" on public.gallery_items;
create policy "Authenticated can manage gallery"
  on public.gallery_items for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage bucket and policies for gallery uploads
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view gallery storage" on storage.objects;
create policy "Public can view gallery storage"
  on storage.objects for select
  using (bucket_id = 'gallery');

drop policy if exists "Authenticated can upload gallery storage" on storage.objects;
create policy "Authenticated can upload gallery storage"
  on storage.objects for insert
  with check (bucket_id = 'gallery' and auth.role() = 'authenticated');

drop policy if exists "Authenticated can update gallery storage" on storage.objects;
create policy "Authenticated can update gallery storage"
  on storage.objects for update
  using (bucket_id = 'gallery' and auth.role() = 'authenticated')
  with check (bucket_id = 'gallery' and auth.role() = 'authenticated');

drop policy if exists "Authenticated can delete gallery storage" on storage.objects;
create policy "Authenticated can delete gallery storage"
  on storage.objects for delete
  using (bucket_id = 'gallery' and auth.role() = 'authenticated');
