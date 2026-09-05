create table if not exists public.artworks (
 id text primary key default gen_random_uuid()::text,
 title text not null, year integer not null, medium text not null,
 dimensions text not null default '', notes text not null default '', alt text not null,
 image text not null, position integer not null default 0, published boolean not null default false
);
create table if not exists public.enquiries (
 id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
 name text not null, email text not null, subject text not null, message text not null
);
create table if not exists public.rate_limits (key text primary key, started_at timestamptz not null default now(), hits integer not null default 1);
alter table public.artworks enable row level security;
alter table public.enquiries enable row level security;
alter table public.rate_limits enable row level security;
revoke all on public.artworks, public.enquiries, public.rate_limits from anon, authenticated;
grant all on public.artworks, public.enquiries, public.rate_limits to service_role;
create or replace function public.check_rate(key_value text, max_hits integer) returns boolean
language plpgsql security definer set search_path=public as $$
declare count_value integer;
begin
 delete from public.rate_limits where started_at < now()-interval '1 day';
 insert into public.rate_limits(key) values(key_value)
 on conflict(key) do update set
 hits=case when rate_limits.started_at < now()-interval '15 minutes' then 1 else rate_limits.hits+1 end,
 started_at=case when rate_limits.started_at < now()-interval '15 minutes' then now() else rate_limits.started_at end
 returning hits into count_value;
 return count_value <= max_hits;
end; $$;
revoke all on function public.check_rate(text,integer) from public,anon,authenticated;
grant execute on function public.check_rate(text,integer) to service_role;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('artworks','artworks',true,3000000,array['image/jpeg','image/png','image/webp'])
on conflict(id) do nothing;
-- No public upload policy: only the server can write to this bucket.
