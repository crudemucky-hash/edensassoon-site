# Eden Sassoon — Personal Brand Site

Next.js 14 · Tailwind CSS · Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Photos

All placeholder sections have comments showing exactly where to swap in real images.

1. Drop photos into `/public/images/`
2. Add `import Image from "next/image"` at the top of the component
3. Replace the placeholder `<div>` with `<Image src="/images/your-photo.jpg" ... />`

**Recommended photos to request from Eden:**
- `eden-hero.jpg` — full bleed portrait, vertical preferred (Hero section)
- `eden-portrait.jpg` — editorial portrait (About section)
- `vidal-eden.jpg` — photo with her dad (Legacy section)

## Deploying to Vercel

```bash
# Push to GitHub first
git init
git add .
git commit -m "initial build"
git remote add origin https://github.com/YOUR_USERNAME/edensassoon.git
git push -u origin main
```

Then connect the repo in [vercel.com](https://vercel.com) — it auto-detects Next.js.

## Pointing the Domain

While GoDaddy transfer is in progress, point DNS immediately:

In GoDaddy DNS settings, add:
- Type: `A` | Name: `@` | Value: `76.76.21.21`
- Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

Then in Vercel project settings → Domains → add `edensassoon.com`

## Content Updates

All copy lives directly in each component file — no CMS needed yet.
- `components/About.tsx` — bio text
- `components/Work.tsx` — venture descriptions + links
- `components/Legacy.tsx` — Vidal section copy
- `components/Podcasts.tsx` — podcast info
- `components/Connect.tsx` — email + socials

## Brand Colors

| Name | Hex |
|------|-----|
| Ink (primary bg) | `#0D0D0D` |
| Cream (text) | `#F5F0E8` |
| Gold (accent) | `#C9A96E` |
| Stone (secondary text) | `#9E9589` |
| Warm Gray | `#2A2825` |

## Fonts
- **Cormorant Garamond** — headlines, display, quotes
- **Jost** — body, labels, UI
