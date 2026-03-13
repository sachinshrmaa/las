import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type InquiryInput = {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
};

export type InquiryRecord = InquiryInput & {
  id: string;
  submittedAt: string;
};

const inquiryFilePath = path.join(process.cwd(), "data", "inquiries.json");

export async function saveInquiry(record: InquiryRecord) {
  await mkdir(path.dirname(inquiryFilePath), { recursive: true });

  let existingRecords: InquiryRecord[] = [];

  try {
    const file = await readFile(inquiryFilePath, "utf8");
    existingRecords = JSON.parse(file) as InquiryRecord[];
  } catch {
    existingRecords = [];
  }

  existingRecords.unshift(record);

  await writeFile(inquiryFilePath, JSON.stringify(existingRecords, null, 2));

  return record;
}
