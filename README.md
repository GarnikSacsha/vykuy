# VYKUY portfolio

AI · Automation · Web Products

Frontend-only React + TypeScript + Vite + Tailwind CSS. Requires Node.js 22.12+ (validated locally with Node 24).

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Structure

- `src/components/`: reusable Container, Section, Button, Tag, and honest foundation placeholders.
- `src/sections/`: page sections; `App.tsx` defines their requested order.
- `src/data/site.ts`: copy, navigation, section metadata, and About content.
- `src/data/contact.ts`: single editable Email, Telegram, LinkedIn, and GitHub configuration shared by Contact and Footer; missing/invalid values are hidden.
- `src/data/projects.ts`: typed featured projects, optional links, and media asset mappings.
- `src/data/moreProjects.ts`: compact secondary projects, tags, capabilities, and optional links/posters.
- `src/data/buildProcess.ts` and `src/data/capabilities.ts`: the five-step process and six capability groups.
- `src/lib/types.ts`: content contracts, including video-first project media.
- `src/styles/global.css`: exact brand tokens, Tailwind theme mapping, typography, focus and reduced-motion rules.
- `src/assets/`: guidance for real media assets.

Alegreya and Geist Latin variable fonts are self-hosted through Fontsource. No runtime font CDN, router, backend, UI kit, icon package, or animation library is required. Tailwind uses its official Vite plugin: https://tailwindcss.com/docs/installation/using-vite.

## Scope and next step

All page sections are implemented, including About, Contact, and Footer. Featured Work is ordered Pitstop, HORECA Training Platform, Access Flow. Pitstop uses the supplied final description, six proof points, and confirmed stack. Impact estimates remain explicitly labeled as estimates. No visible TODO content remains.

Real contact links are configured centrally in `src/data/contact.ts`: endidyfreim@gmail.com, Telegram @PackChoOi, GitHub GarnikSacsha, and LinkedIn denys-yefimenko. Contact and Footer share this configuration. Email uses `mailto:`; external links use `noopener noreferrer`. Public project links remain optional and unset.

More Projects is a compact text-led grid: Family Life OS, Dental Booking Platform, Dota 2 AI Coach (experimental), and Vacation Rental Booking Demo. Optional links and small posters render only when supplied; no fake URLs, impact estimates, or long capability lists appear on these cards. Family Life OS and Dental recordings remain untouched in the originals folder and are not copied or loaded by this section. The process uses five numbered steps, vertical on smaller screens and horizontal on wide desktops. Six capability groups describe the broader toolkit without implying every project uses each technology.

Real demos are copied from `D:\Aivora\Projects\` into the three featured asset folders; originals remain untouched. MP4 is the required minimum, WebM is preferred but optional, and posters are recommended. See `src/assets/projects/README.md` for the exact source mappings, generated media, and replacement instructions. Only add public project links when approved and available.

ProjectVideo supports WebM with MP4 fallback, a custom accessible Play/Pause button (no native controls), visibility-based autoplay/pause, reduced-motion manual playback, and per-project reserved aspect ratios. Autoplay rejection preserves manual playback, and missing/broken videos fall back to the poster or an explicit message. Browser behavior follows https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play.

## Cloudflare Pages

Install with `npm ci`, develop with `npm run dev`, check with `npm run typecheck`, and generate production files with `npm run build`. Preview the result with `npm run preview`.

Use the **React (Vite)** preset, build command **npm run build**, and output directory **dist**. The repository root is the build root. Node 24.11.1 is pinned in `.node-version`; no backend, secrets, or runtime environment variables are required. Connect your repository to Pages, or upload the built `dist` directory using Pages Direct Upload. This project has not been deployed by this pass.

[Cloudflare build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)

## Domain and social preview setup

The final domain is intentionally unset. Once selected, add a canonical link and `og:url` to `index.html`, and replace both relative social image values with the absolute public URL of `/og-preview.png`. Verify the image with your social sharing debugger after deployment. The branded 1200×630 preview is a replaceable placeholder; its editable source is `scripts/social-preview.html`.

`public/robots.txt` permits indexing. A sitemap is deferred until the final domain is known: this is one page, so add a single canonical homepage URL to `public/sitemap.xml` and a Sitemap directive to robots.txt at that time. Never publish an example domain as the canonical URL.

## Media and performance

Keep real demos in `src/assets/projects/pitstop/`, `horeca-training/`, and `access-flow/` as `demo.webm`, `demo.mp4`, and `poster.webp`. See the asset README for encoding and replacement notes. Keep the per-project aspect ratio accurate to reserve space. Videos mount near visibility with preload disabled; posters load lazily. Reduced motion keeps playback manual. Fonts are local variable WOFF2 files with font-display swap. Vite hashes production assets; there are no third-party font or analytics requests.
