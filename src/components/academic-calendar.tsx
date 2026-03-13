"use client";

import { useState } from "react";

import { calendarMonths } from "@/lib/site-content";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendar(year: number, month: number) {
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const leadingDays = Array.from({ length: firstDayIndex }, () => null);
  const monthDays = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1,
  );

  return [...leadingDays, ...monthDays];
}

export function AcademicCalendar() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const activeMonth = calendarMonths[activeMonthIndex];
  const days = buildCalendar(activeMonth.year, activeMonth.month);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-4">
        {calendarMonths.map((month, index) => {
          const active = index === activeMonthIndex;

          return (
            <button
              key={month.label}
              type="button"
              className={`w-full rounded-[1.5rem] border px-5 py-4 text-left transition ${
                active
                  ? "border-[color:var(--navy)] bg-[color:var(--navy)] text-white"
                  : "border-[color:var(--ink-border)] bg-white hover:border-[color:var(--gold)]"
              }`}
              onClick={() => setActiveMonthIndex(index)}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.24em] ${active ? "text-[color:var(--gold-soft)]" : "text-[color:var(--navy)]/60"}`}
              >
                {month.focus}
              </p>
              <p className="mt-2 text-xl font-semibold">{month.label}</p>
              <div
                className={`mt-4 space-y-2 text-sm ${active ? "text-white/80" : "text-slate-600"}`}
              >
                {month.events.map((event) => (
                  <p key={event.label}>
                    {event.day}: {event.label}
                  </p>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--navy)]/60">
              Interactive Calendar Preview
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[color:var(--navy)]">
              {activeMonth.label}
            </h3>
          </div>
          <a
            href="#"
            className="rounded-full border border-[color:var(--ink-border)] px-4 py-2 text-sm font-semibold text-[color:var(--navy)]"
          >
            PDF upload pending
          </a>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--navy)]/55">
          {weekdays.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const event = activeMonth.events.find((item) => item.day === day);

            return (
              <div
                key={`${activeMonth.label}-${index}`}
                className={`min-h-24 rounded-2xl border p-3 text-sm ${
                  day
                    ? event
                      ? "border-[color:var(--gold)]/55 bg-[color:var(--gold)]/14 text-[color:var(--navy)]"
                      : "border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] text-slate-600"
                    : "border-transparent bg-transparent"
                }`}
              >
                {day ? (
                  <>
                    <p className="font-semibold">{day}</p>
                    {event ? (
                      <p className="mt-2 leading-5">{event.label}</p>
                    ) : null}
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
