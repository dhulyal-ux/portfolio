# Deeksha Hulyal — Portfolio

A calm, minimal, earthy single-page portfolio built from the design brief.
**Next.js (App Router) + Supabase** as a headless CMS for the content collections.

## Tech

- **Next.js 14** (App Router, TypeScript, React Server Components)
- **Tailwind CSS** with a custom earthy theme (see `tailwind.config.ts`)
- **Supabase** for content (experience, PM case studies, AI projects, certifications)
- Fonts: **Fraunces** (serif headings) + **Inter** (sans body) via `next/font`

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

The site renders with **zero setup** — if Supabase env vars are absent it falls
back to the seed content in `lib/content.ts`.

## Assets to drop in

Save the two provided images to `public/` with these exact names:

- `public/headshot.jpg` — hero portrait of Deeksha
- `public/zerofox-logo.png` — ZeroFox logo (Experience section)
- `public/resume.pdf` — the downloadable résumé (wired to the two "Download Resume" buttons)

Until they exist, tasteful placeholders render in their place.

## Connect Supabase (optional CMS)

1. Create a Supabase project.
2. Run `supabase/schema.sql` then `supabase/seed.sql` in the SQL editor.
3. Copy `.env.example` → `.env.local` and fill in:

   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

4. Restart `npm run dev`. Content now loads from Supabase; edit rows there to
   update the site without code changes.

## Design decisions (from the brief)

The brief specified ranges/alternatives; the concrete choices made are:

| Token            | Value                                    |
| ---------------- | ---------------------------------------- |
| Base background  | `#F5F1E8` cream                          |
| Card surface     | `#FBF8F1` paper                          |
| Primary accent   | `#8A9A7E` sage                           |
| Secondary accent | `#4A5D42` olive/forest                   |
| Text             | `#2B2A26` warm charcoal                  |
| Highlight        | `#C4A484` clay / terracotta              |
| Heading font     | Fraunces (medium weight, humanist serif) |
| Body font        | Inter, line-height 1.7                   |
| Button radius    | 10px (soft, within the 8–12px range)     |
