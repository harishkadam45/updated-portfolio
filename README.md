# Harish Kadam — Portfolio

A modern, SEO-optimized personal portfolio built with **Astro**, **TypeScript**, and a hand-rolled design system. Light on JavaScript, fast on all devices, and built to rank well.

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Astro](https://img.shields.io/badge/Astro-7.x-ff5d01?logo=astro&logoColor=white)

---

## ✨ Features

- **Static-first** — Astro static output, near-zero client JS
- **SEO-optimized** — semantic HTML, canonical URLs, Open Graph + Twitter cards, `sitemap`, `robots.txt`, JSON-LD structured data, per-page metadata
- **Custom design system** — design tokens via CSS custom properties. Dark blue/violet theme with gradient accents, glow orbs, and a subtle grid overlay
- **Accessible** — semantic landmarks, ARIA labels, skip link, keyboard-friendly focus states, reduced-motion support
- **Fast** — preconnected fonts, optimized images (WebP/AVIF), auto-inlined critical CSS
- **Reveal-on-scroll** animations that gracefully degrade without JavaScript
- **Responsive** — fluid layout from mobile to desktop with a collapsible mobile menu

## 🧑‍💻 Sections

Hero · About · Projects · Experience · Skills · Education · Contact

## 🚀 Getting Started

```bash
# install dependencies
npm install

# local dev server → http://localhost:4321
npm run dev

# production build → dist/
npm run build

# preview the production build
npm run preview
```

## 📁 Project Structure

```
├── public/                  # favicon, robots.txt, og-image
├── src/
│   ├── components/          # Header, Hero, About, Projects, Experience, Skills, Education, Contact
│   ├── data/                # ✅ all site content lives here (edit these!)
│   │   ├── site.ts          #   name, role, contact, socials
│   │   └── content.ts       #   projects, experience, skills, education
│   ├── layouts/             # BaseLayout (SEO head, header, footer)
│   ├── pages/               # index.astro
│   └── styles/              # design tokens + base styles
├── astro.config.mjs
└── package.json
```

## ✏️ Editing Your Content

All content is centralized in `src/data/`:

- **`site.ts`** → name, role, headline, email, phone, location, GitHub / LinkedIn, site URL
- **`content.ts`** → projects, experience, skills, and education arrays

Edit the values and the site updates automatically — no component changes needed.

## 🔧 Commands

| Command          | Action                                          |
| ---------------- | ----------------------------------------------- |
| `npm install`    | Install dependencies                           |
| `npm run dev`    | Start local dev server at `localhost:4321`     |
| `npm run build`  | Build production site to `dist/`               |
| `npm run preview`| Preview the production build locally           |

## 🌐 Deploy

The build output is fully static in `dist/` and works on any host: **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

- Build command: `npm run build`
- Output directory: `dist`

## 📄 License

MIT — free to use and adapt.
