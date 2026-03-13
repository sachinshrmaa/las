type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[color:var(--ink-border)] bg-[radial-gradient(circle_at_top_left,rgba(210,168,75,0.28),transparent_32%),linear-gradient(135deg,#0c1f3d,#173463_50%,#f7f3e9)] px-6 py-12 text-white shadow-[0_24px_60px_rgba(5,18,39,0.18)] sm:px-10 sm:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="relative max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
