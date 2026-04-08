import { hasSupabaseConfig, supabase } from "@/lib/supabaseClient";

const GALLERY_BUCKET = "gallery";

export type NewsItem = {
  id: string;
  title: string;
  date: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  desc: string;
  src: string;
};

export type ContentStore = {
  news: NewsItem[];
  events: EventItem[];
  gallery: GalleryItem[];
};

export const CONTENT_STORAGE_KEY = "lasss_admin_content_v1";

export const defaultContent: ContentStore = {
  news: [
    {
      id: "n1",
      title: "Admissions open for Nursery to Class XII (Session 2026-27).",
      date: "2026-04-07",
    },
    {
      id: "n2",
      title: "Scholarship test for Classes VI-IX on 20 April 2026.",
      date: "2026-04-06",
    },
    {
      id: "n3",
      title: "Parent-Teacher interaction week starts from 25 April 2026.",
      date: "2026-04-05",
    },
    {
      id: "n4",
      title: "Summer enrichment camp registrations now available.",
      date: "2026-04-04",
    },
  ],
  events: [
    {
      id: "e1",
      title: "Inter-house Quiz Competition",
      date: "2026-04-18",
      location: "School Auditorium",
    },
    {
      id: "e2",
      title: "Annual Sports Meet",
      date: "2026-05-02",
      location: "Main Ground",
    },
  ],
  gallery: [],
};

function canUseStorage() {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function getContentStore(): ContentStore {
  if (!canUseStorage()) {
    return defaultContent;
  }

  const raw = window.localStorage.getItem(CONTENT_STORAGE_KEY);
  if (!raw) {
    return defaultContent;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ContentStore>;
    return {
      news: Array.isArray(parsed.news) ? parsed.news : defaultContent.news,
      events: Array.isArray(parsed.events)
        ? parsed.events
        : defaultContent.events,
      gallery: Array.isArray(parsed.gallery)
        ? parsed.gallery
        : defaultContent.gallery,
    };
  } catch {
    return defaultContent;
  }
}

export function saveContentStore(content: ContentStore) {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
}

export function newId(prefix: "n" | "e" | "g") {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function fileNameSafe(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9._-]/g, "-");
}

function extractStoragePathFromPublicUrl(publicUrl: string) {
  const marker = `/storage/v1/object/public/${GALLERY_BUCKET}/`;
  const markerIndex = publicUrl.indexOf(marker);
  if (markerIndex === -1) {
    return null;
  }
  return decodeURIComponent(publicUrl.slice(markerIndex + marker.length));
}

export async function uploadGalleryImage(file: File): Promise<string> {
  if (!hasSupabaseConfig || !supabase) {
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Failed to read image file."));
      reader.readAsDataURL(file);
    });
  }

  const extension = file.name.split(".").pop() || "jpg";
  const safeName = fileNameSafe(file.name.replace(/\.[^.]+$/, ""));
  const filePath = `${Date.now()}-${safeName}.${extension}`;

  const { error } = await supabase.storage
    .from(GALLERY_BUCKET)
    .upload(filePath, file, { upsert: false });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from(GALLERY_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}

function normalizeContent(content: Partial<ContentStore>): ContentStore {
  return {
    news: Array.isArray(content.news) ? content.news : defaultContent.news,
    events: Array.isArray(content.events)
      ? content.events
      : defaultContent.events,
    gallery: Array.isArray(content.gallery)
      ? content.gallery
      : defaultContent.gallery,
  };
}

export async function fetchContentStore(): Promise<ContentStore> {
  if (!hasSupabaseConfig || !supabase) {
    return getContentStore();
  }

  const [newsRes, eventsRes, galleryRes] = await Promise.all([
    supabase
      .from("news_items")
      .select("id,title,date")
      .order("date", { ascending: false }),
    supabase
      .from("event_items")
      .select("id,title,date,location")
      .order("date", { ascending: true }),
    supabase
      .from("gallery_items")
      .select("id,title,desc,src")
      .order("created_at", { ascending: false }),
  ]);

  const hasError = newsRes.error || eventsRes.error || galleryRes.error;
  if (hasError) {
    return getContentStore();
  }

  return normalizeContent({
    news: (newsRes.data ?? []) as NewsItem[],
    events: (eventsRes.data ?? []) as EventItem[],
    gallery: (galleryRes.data ?? []) as GalleryItem[],
  });
}

export async function createNewsItem(input: Omit<NewsItem, "id">) {
  const item: NewsItem = {
    id: newId("n"),
    title: input.title,
    date: input.date,
  };

  if (hasSupabaseConfig && supabase) {
    const { error } = await supabase.from("news_items").insert(item);
    if (error) throw error;
    return item;
  }

  const store = getContentStore();
  saveContentStore({ ...store, news: [item, ...store.news] });
  return item;
}

export async function deleteNewsItem(id: string) {
  if (hasSupabaseConfig && supabase) {
    const { error } = await supabase.from("news_items").delete().eq("id", id);
    if (error) throw error;
    return;
  }

  const store = getContentStore();
  saveContentStore({ ...store, news: store.news.filter((n) => n.id !== id) });
}

export async function createEventItem(input: Omit<EventItem, "id">) {
  const item: EventItem = {
    id: newId("e"),
    title: input.title,
    date: input.date,
    location: input.location,
  };

  if (hasSupabaseConfig && supabase) {
    const { error } = await supabase.from("event_items").insert(item);
    if (error) throw error;
    return item;
  }

  const store = getContentStore();
  saveContentStore({ ...store, events: [item, ...store.events] });
  return item;
}

export async function deleteEventItem(id: string) {
  if (hasSupabaseConfig && supabase) {
    const { error } = await supabase.from("event_items").delete().eq("id", id);
    if (error) throw error;
    return;
  }

  const store = getContentStore();
  saveContentStore({
    ...store,
    events: store.events.filter((event) => event.id !== id),
  });
}

export async function createGalleryItem(input: Omit<GalleryItem, "id">) {
  const item: GalleryItem = {
    id: newId("g"),
    title: input.title,
    desc: input.desc,
    src: input.src,
  };

  if (hasSupabaseConfig && supabase) {
    const { error } = await supabase.from("gallery_items").insert(item);
    if (error) throw error;
    return item;
  }

  const store = getContentStore();
  saveContentStore({ ...store, gallery: [item, ...store.gallery] });
  return item;
}

export async function deleteGalleryItem(id: string) {
  if (hasSupabaseConfig && supabase) {
    const { data: row } = await supabase
      .from("gallery_items")
      .select("src")
      .eq("id", id)
      .maybeSingle();

    const { error } = await supabase
      .from("gallery_items")
      .delete()
      .eq("id", id);
    if (error) throw error;

    const path = row?.src ? extractStoragePathFromPublicUrl(row.src) : null;
    if (path) {
      await supabase.storage.from(GALLERY_BUCKET).remove([path]);
    }
    return;
  }

  const store = getContentStore();
  saveContentStore({
    ...store,
    gallery: store.gallery.filter((g) => g.id !== id),
  });
}
