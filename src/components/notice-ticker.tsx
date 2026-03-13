import { notices } from "@/lib/site-content";

export function NoticeTicker() {
  const tickerText = notices
    .map((notice) => `${notice.date} - ${notice.title}`)
    .join("  •  ");

  return (
    <div className="overflow-hidden rounded-full border border-[color:var(--ink-border)] bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-4 text-sm font-medium text-[color:var(--navy)]">
        <span className="shrink-0 rounded-full bg-[color:var(--gold)]/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]">
          Notice Board
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="ticker-track" aria-label="Latest notices">
            <span className="ticker-item">{tickerText}</span>
            <span className="ticker-item" aria-hidden>
              {tickerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
