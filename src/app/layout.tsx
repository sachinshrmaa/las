import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://littleangelschool.edu"),
  title: {
    default: "Little Angel Senior Secondary School",
    template: "%s | Little Angel Senior Secondary School",
  },
  description:
    "Little Angel Senior Secondary School is a responsive digital hub for admissions, notices, academics, events, and school life.",
  keywords: [
    "Little Angel School",
    "Little Angel Senior Secondary School",
    "Best School in Location",
    "School admissions",
    "Senior Secondary School",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <SiteHeader />
        <main className="mx-auto min-h-screen w-full max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
