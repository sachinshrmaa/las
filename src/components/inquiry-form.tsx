"use client";

import { useState } from "react";

type FormState = {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
};

const initialState: FormState = {
  parentName: "",
  studentName: "",
  email: "",
  phone: "",
  grade: "",
  message: "",
};

export function InquiryForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("Submitting inquiry...");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to submit inquiry.");
      }

      setStatus("success");
      setStatusMessage(
        "Inquiry submitted. The admissions desk can now review it from the stored records.",
      );
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  function updateField<Key extends keyof FormState>(
    field: Key,
    value: FormState[Key],
  ) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  return (
    <form
      className="space-y-5 rounded-[2rem] border border-[color:var(--ink-border)] bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[color:var(--navy)]">
          Parent Name
          <input
            required
            value={formState.parentName}
            onChange={(event) => updateField("parentName", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[color:var(--navy)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--navy)]">
          Student Name
          <input
            required
            value={formState.studentName}
            onChange={(event) => updateField("studentName", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[color:var(--navy)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--navy)]">
          Email
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[color:var(--navy)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--navy)]">
          Phone
          <input
            required
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[color:var(--navy)]"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr]">
        <label className="space-y-2 text-sm font-medium text-[color:var(--navy)]">
          Grade Seeking Admission
          <select
            required
            value={formState.grade}
            onChange={(event) => updateField("grade", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[color:var(--navy)]"
          >
            <option value="">Select class</option>
            <option value="Primary">Primary</option>
            <option value="Middle">Middle</option>
            <option value="Secondary">Secondary</option>
            <option value="Senior Secondary">Senior Secondary</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-[color:var(--navy)]">
          Message
          <textarea
            required
            rows={5}
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="w-full rounded-2xl border border-[color:var(--ink-border)] bg-[color:var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[color:var(--navy)]"
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12315c] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
        </button>
        <p
          className={`text-sm ${
            status === "error"
              ? "text-rose-700"
              : status === "success"
                ? "text-emerald-700"
                : "text-slate-500"
          }`}
        >
          {statusMessage ||
            "Admissions inquiries are stored for the administration team."}
        </p>
      </div>
    </form>
  );
}
