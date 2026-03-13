import { NextResponse } from "next/server";

import { InquiryInput, saveInquiry } from "@/lib/inquiries";

function sanitizeField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<InquiryInput>;

  const inquiry: InquiryInput = {
    parentName: sanitizeField(payload.parentName),
    studentName: sanitizeField(payload.studentName),
    email: sanitizeField(payload.email),
    phone: sanitizeField(payload.phone),
    grade: sanitizeField(payload.grade),
    message: sanitizeField(payload.message),
  };

  if (Object.values(inquiry).some((value) => value.length === 0)) {
    return NextResponse.json(
      { message: "All inquiry fields are required." },
      { status: 400 },
    );
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email);

  if (!emailValid) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  await saveInquiry({
    ...inquiry,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({ message: "Inquiry submitted successfully." });
}
