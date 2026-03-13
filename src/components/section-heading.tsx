type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--navy)]/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--navy)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
