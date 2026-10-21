# Happy Birthday, Sis — a scrapbook

A single-page, collage-style birthday site. Rust walls, taped paper, public-domain
portraits, poets, an apothecary, a wall of ice, a punk zine, and a stage with the
lights on.

Built with **Vite + React + TypeScript**. No backend, no database, no runtime
services — it is a static site, so it will comfortably handle far more traffic than a
birthday needs.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build     # type-check + production build into dist/
npm run preview   # preview the production build
```

## Make it yours

Almost all of the words live in **`src/content.ts`**:

- `site.recipient` — the name in the hero, letter, footer and tab title (`Sis` by default)
- `site.year` — the year in the nav and footer
- `letter` — the letter and envelope details
- `quotes` — the three commonplace-book cards
- `apothecary`, `ice`, `nana`, `stage`, `wish` — the copy for each chapter

Pictures are in `public/art/`. Swap in your own photos and update the `alt` text in
the matching component. The hero portrait is used in the social preview at
`public/og.jpg` too — if you change the name in the hero, update or regenerate that
image as well.

The site ships with `noindex, nofollow` and a `robots.txt` that disallows crawlers —
it is meant to be shared by link, not found in search. Remove both if you want it
indexed.

The fonts are loaded from Google Fonts in `index.html`. To make the site fully
offline/self-contained, download the WOFF2 files and add `@font-face` rules.

## Deploy

The site is static, so any of these work. **Vercel is the simplest** because the
repo is already configured for it.

### Vercel (recommended)

```bash
npx vercel          # preview deploy, first run asks you to log in
npx vercel --prod   # production deploy
```

Or import the GitHub repo at [vercel.com/new](https://vercel.com/new). Vercel will
detect Vite; the settings are also pinned in `vercel.json`.

After deploying, replace the relative `og:image` path in `index.html` with the final
absolute URL (for example `https://your-site.vercel.app/og.jpg`) so social previews
work everywhere.

### Netlify

```bash
npx netlify deploy --prod
```

`netlify.toml` is included (build command `npm run build`, publish directory `dist`).

### Cloudflare Pages

Create a Pages project from the repo and use:

- Build command: `npm run build`
- Output directory: `dist`

`public/_headers` adds long-lived caching for the built assets and artwork.

### GitHub Pages

Build with `npm run build`, then publish the `dist/` folder (for example with the
`gh-pages` package). If you host under a subpath such as
`username.github.io/birthday/`, set `base: '/birthday/'` in `vite.config.ts`.

## Accessibility & motion

- The site is keyboard navigable; the frost card, stage lights and cake candles are
  real buttons/controls with visible focus states.
- `prefers-reduced-motion` disables the decorative animations and falling petals.
- The footer includes a collapsible art/reference credit panel. The full list is in
  [`CREDITS.md`](./CREDITS.md).

## A note on the references

This is a personal, fan-made gift. The decorative background art is public domain or
CC0. The author portraits and character/manga images are copyrighted and are included
for a **private, non-commercial** project; they are not licensed for redistribution.
If you publish this site publicly, replace those images with licensed assets or get
permission from the rights holders. See [`CREDITS.md`](./CREDITS.md) for sources and
licenses.

Made with love, tape, and a little bit of chaos.
