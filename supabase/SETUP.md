# Supabase Setup

## 1) Environment variables

Create a `.env` file in project root:

VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key

Restart dev server after changing env vars.

## 2) Database + Storage

Open Supabase SQL Editor and run:

- supabase/schema.sql

This creates:

- news_items, event_items, gallery_items tables
- RLS policies for public read + authenticated admin write
- public storage bucket `gallery` and object policies

## 3) Authentication

In Supabase dashboard:

- Authentication -> Users -> Add user
- Create admin email/password

Then sign in at `/admin`.

## 4) Upload workflow

In Admin -> Gallery tab, you can now:

- upload an image file directly (recommended)
- or paste an external image URL

Uploaded files are stored in Supabase Storage bucket `gallery` and saved to gallery_items.src as public URL.
