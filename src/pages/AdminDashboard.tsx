import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  type ContentStore,
  createEventItem,
  createGalleryItem,
  createNewsItem,
  defaultContent,
  deleteEventItem,
  deleteGalleryItem,
  deleteNewsItem,
  fetchContentStore,
  uploadGalleryImage,
} from "@/lib/contentStore";
import { hasSupabaseConfig, supabase } from "@/lib/supabaseClient";

function formatDate(dateValue: string) {
  if (!dateValue) return "";
  try {
    return new Date(dateValue).toLocaleDateString();
  } catch {
    return dateValue;
  }
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "gallery">(
    "news",
  );
  const [content, setContent] = useState<ContentStore>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(Boolean(hasSupabaseConfig));
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDate, setNewsDate] = useState("");

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryDesc, setGalleryDesc] = useState("");
  const [gallerySrc, setGallerySrc] = useState("");
  const [galleryFile, setGalleryFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const counts = useMemo(
    () => ({
      news: content.news.length,
      events: content.events.length,
      gallery: content.gallery.length,
    }),
    [content],
  );

  const loadContent = async () => {
    setLoading(true);
    const data = await fetchContentStore();
    setContent(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!hasSupabaseConfig || !supabase) {
      setAuthLoading(false);
      loadContent();
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSessionEmail(data.session?.user?.email ?? null);
      setAuthLoading(false);
      if (data.session) {
        loadContent();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user?.email ?? null);
      if (session) {
        loadContent();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    if (!supabase) return;
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setAuthError(error.message);
    } else {
      setPassword("");
    }
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  const addNews = async () => {
    if (!newsTitle.trim()) return;
    await createNewsItem({
      title: newsTitle.trim(),
      date: newsDate || new Date().toISOString().slice(0, 10),
    });
    await loadContent();
    setNewsTitle("");
    setNewsDate("");
  };

  const addEvent = async () => {
    if (!eventTitle.trim()) return;
    await createEventItem({
      title: eventTitle.trim(),
      date: eventDate || new Date().toISOString().slice(0, 10),
      location: eventLocation.trim() || "Campus",
    });
    await loadContent();
    setEventTitle("");
    setEventDate("");
    setEventLocation("");
  };

  const addGallery = async () => {
    if (!galleryTitle.trim()) return;
    if (!gallerySrc.trim() && !galleryFile) return;

    let finalSrc = gallerySrc.trim();
    if (galleryFile) {
      setIsUploading(true);
      try {
        finalSrc = await uploadGalleryImage(galleryFile);
      } finally {
        setIsUploading(false);
      }
    }

    await createGalleryItem({
      title: galleryTitle.trim(),
      desc: galleryDesc.trim() || "Gallery update",
      src: finalSrc,
    });
    await loadContent();
    setGalleryTitle("");
    setGalleryDesc("");
    setGallerySrc("");
    setGalleryFile(null);
  };

  const removeNews = async (id: string) => {
    await deleteNewsItem(id);
    await loadContent();
  };

  const removeEvent = async (id: string) => {
    await deleteEventItem(id);
    await loadContent();
  };

  const removeGallery = async (id: string) => {
    await deleteGalleryItem(id);
    await loadContent();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {(!hasSupabaseConfig || sessionEmail) && (
        <section className="border-b border-slate-200 bg-white">
          <div className="container py-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
              Admin Panel
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Content Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Manage website updates for news, events, and gallery photos.
              {hasSupabaseConfig
                ? " Changes are saved to Supabase and sync across users."
                : " Supabase is not configured yet; currently using local browser storage."}
            </p>

            {hasSupabaseConfig && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                {sessionEmail
                  ? `Signed in as ${sessionEmail}`
                  : "Please sign in to manage content."}
              </div>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  News
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {counts.news}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Events
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {counts.events}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Gallery Photos
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {counts.gallery}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {authLoading && (
        <section className="container py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
            Checking admin session...
          </div>
        </section>
      )}

      {!authLoading && hasSupabaseConfig && !sessionEmail && (
        <section className="container py-10">
          <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Admin Sign In</h2>
            <p className="mt-2 text-sm text-slate-600">
              Use your Supabase Auth email and password.
            </p>
            <div className="mt-4 space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              {authError && (
                <p className="text-sm text-rose-600">{authError}</p>
              )}
              <button
                onClick={signIn}
                className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                Sign In
              </button>
            </div>
          </div>
        </section>
      )}

      {(!hasSupabaseConfig || sessionEmail) && (
        <section className="container py-8 md:py-10">
          {hasSupabaseConfig && (
            <div className="mb-4">
              <button
                onClick={signOut}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Sign Out
              </button>
            </div>
          )}

          {loading && (
            <div className="mb-6 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-600">
              Loading content...
            </div>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { id: "news", label: "News" },
              { id: "events", label: "Events" },
              { id: "gallery", label: "Gallery Photos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as "news" | "events" | "gallery")
                }
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-green-700 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "news" && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Add News</h2>
                <div className="mt-4 space-y-3">
                  <input
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    placeholder="News title"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <input
                    value={newsDate}
                    onChange={(e) => setNewsDate(e.target.value)}
                    type="date"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <button
                    onClick={addNews}
                    className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                  >
                    Save News
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">News List</h2>
                <div className="mt-4 space-y-3">
                  {content.news.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-slate-200 p-3 text-sm"
                    >
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {formatDate(item.date)}
                      </p>
                      <button
                        onClick={() => removeNews(item.id)}
                        className="mt-2 text-xs font-semibold text-rose-600"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Add Event</h2>
                <div className="mt-4 space-y-3">
                  <input
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Event title"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <input
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    type="date"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <input
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Location"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <button
                    onClick={addEvent}
                    className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                  >
                    Save Event
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  Events List
                </h2>
                <div className="mt-4 space-y-3">
                  {content.events.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-slate-200 p-3 text-sm"
                    >
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {formatDate(item.date)} • {item.location}
                      </p>
                      <button
                        onClick={() => removeEvent(item.id)}
                        className="mt-2 text-xs font-semibold text-rose-600"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  Add Gallery Photo
                </h2>
                <div className="mt-4 space-y-3">
                  <input
                    value={galleryTitle}
                    onChange={(e) => setGalleryTitle(e.target.value)}
                    placeholder="Photo title"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <textarea
                    value={galleryDesc}
                    onChange={(e) => setGalleryDesc(e.target.value)}
                    placeholder="Description"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                    rows={3}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setGalleryFile(e.target.files?.[0] ?? null)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <p className="text-xs text-slate-500">
                    Upload an image file, or provide a direct image URL below.
                  </p>
                  <input
                    value={gallerySrc}
                    onChange={(e) => setGallerySrc(e.target.value)}
                    placeholder="Image URL (https://...)"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                  <button
                    onClick={addGallery}
                    disabled={isUploading}
                    className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                  >
                    {isUploading ? "Uploading..." : "Save Photo"}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  Gallery List
                </h2>
                <div className="mt-4 space-y-3">
                  {content.gallery.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-slate-200 p-3 text-sm"
                    >
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                      <p className="mt-1 break-all text-xs text-slate-500">
                        {item.src}
                      </p>
                      <button
                        onClick={() => removeGallery(item.id)}
                        className="mt-2 text-xs font-semibold text-rose-600"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      <Footer />
    </div>
  );
};

export default AdminDashboard;
