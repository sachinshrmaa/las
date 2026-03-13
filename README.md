# Little Angel Senior Secondary School Website

This repository contains a Next.js website build for Little Angel Senior Secondary School. It is structured as a responsive school information hub with dedicated sections for admissions, academics, school life, gallery content, notices, and contact operations.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS v4
- Built-in Next.js metadata, sitemap, and robots support for SEO

## Implemented Scope

- Home page with hero slider, principal's welcome, latest notices, quick links, and school-life highlights
- Dedicated pages for About Us, Academics, Life at LAS, Gallery, Admissions, and Contact Us
- Admissions inquiry form backed by a local JSON storage layer at `data/inquiries.json`
- SEO-ready metadata plus generated `sitemap.xml` and `robots.txt`
- Responsive header, footer, and school-branded design system using navy, gold, and white

## Development

Run the local development server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

For a production build:

```bash
npm run build
```

## Content Handoff Items

The following placeholders should be replaced with school-provided content before launch:

- High-resolution campus, classroom, event, and student photography
- Faculty and leadership biographies with approved titles and portraits
- Final address, phone numbers, extensions, and official email contacts
- Real academic calendar PDF and confirmed event dates
- Final fee values and admissions policy copy

## Production Notes

- Configure HTTPS and weekly automated backups at the hosting provider or deployment platform.
- Replace the local inquiry storage layer with a managed database or CMS-backed workflow if the school requires multi-user administration.
- Confirm domain and hosting details for the school's final `.edu` or approved TLD setup.
