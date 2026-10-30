# FULL CORE

A personal, video-first portfolio: cinematic dark editorial design, responsive layouts and honest content. React 19, Vite, TypeScript, Tailwind 4, Motion and React Router. Static HTML is generated for every public route. No production backend, accounts, paid services or CMS.

## Start

Use Node.js 22.12+ (Node 24 LTS recommended).

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. Source is in `src/`. Personal text lives in `src/data/site.ts`; projects in `src/data/projects.ts`.

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

Production output: `dist/`. Build validates public content and prerenders HTML, route metadata and a real 404. Set `site.url` to your HTTPS domain to generate canonical URLs, absolute social image URL and sitemap.

## Content status

The site currently runs in **design preview mode** (`site.demoMode: true`). Five clearly labeled sample cases demonstrate landscape/vertical video, product photography, architecture and image galleries. Demo case data lives in `src/data/demo.ts`; six real content-planning records in `projects.ts` remain hidden drafts. All visible samples are labeled and attributed, without FULL CORE production claims. No portrait or fictitious contact details have been added.

Set `demoMode: false` in `src/data/site.ts` to hide all sample cases at once. Add your approved media to the real project records and publish them. See `public/media/demo/CREDITS.md` for sample sources and licenses. The code is ready to populate; a recruiter-ready portfolio requires replacing samples with your work. The redesign is tracked in GitHub pull request #1.

## Structure

- `src/components/`: shared layout, cards, players and UI
- `src/pages/`: Home, Work, ProjectDetail, About, Contact, 404
- `src/data/`: editable personal information, project schema and categories
- `src/lib/`: provider URL handling and metadata
- `src/styles/index.css`: design tokens, responsive layouts, focus and reduced motion
- `scripts/`: prerender, content validation and behavioral tests
- `public/media/`: your approved covers, video files, images, CV

GitHub Pages auto-deployment is included in `.github/workflows/deploy-pages.yml`: choose Settings → Pages → Source: GitHub Actions, then run the workflow or push to main. It automatically handles repository subpaths.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) and [DEPLOYMENT.md](DEPLOYMENT.md). No website has been deployed automatically.

## Verification

TypeScript, ESLint, production build and eight behavioral tests passed. Chromium checks covered 375 / 390 / 768 / 1440 px layouts, navigation, mobile menu/Escape, URL-backed filters and reload, prerendered page hydration and horizontal overflow. Static HTML and HTTP 404 were checked through the production preview. Screenshots are saved in `review/`. Actual owner media, YouTube/Vimeo playback on a production domain and Lighthouse scores have not been verified. Temporary local MP4 files are provided for preview. Simulated viewport testing does not replace testing on physical devices.

Design-preview update: five sample cases are enabled. Chromium verified playback of the procedural horizontal loop, vertical loop and licensed Sintel excerpt, no video requests before Play, image-dialog opening, working category filtering and no overflow at the four viewport widths above. All sample media remains clearly labeled and can be disabled centrally.

## Navigation redesign

The primary routes are `/`, `/video`, `/motion`, `/3d-vfx`, `/design`, `/about`, `/contact`. Sticky navigation and four homepage tiles lead directly to the work. `/work` and `/work/:slug` are preserved for archive/backward compatibility. Project pages link back to their discipline.

VIDEO groups `commercial` and `film` records and filters by `videoType`. MOTION shows playable films inline. DESIGN shows image galleries only. HOME shows up to four real, featured projects; samples never enter Selected Works. Existing samples remain clearly marked in their sections.

`publishEmptyDisciplines: false` hides empty discipline links and excludes their pages from static generation after demoMode is switched off. While preview mode is enabled all four sections can be reviewed, including the honest 3D empty state. Set publishEmptyDisciplines=true only when intentionally choosing to publish empty pages.

Verified after redesign: eight tests, typecheck, lint, production build, Chromium at 320/390/768/1024/1440 px, all seven primary pages, project navigation, category filters and reload, image dialog and Escape, local video playback, zero eager MP4 requests and no JS errors. The GitHub Pages base path `/-` is normalized to `/-/` for both server-rendered and client URLs. 

## Languages
EN (default), RU and KZ (language code kk) are available after Contact in desktop/mobile navigation. Selection persists with guarded localStorage. The phrase dictionary is UTF-8 in src/i18n/messages.ts; custom Project/Media translations are documented in CONTENT_GUIDE.md. English prerendering and hydration are retained; localized metadata updates in the browser, without separate localized SEO routes.

## Profile, contacts and music update

Direct Telegram/Instagram/WhatsApp contacts and a telephone link are configured in site.ts. The Telegram channel is no longer linked. About now includes the owner's supplied biography and music practice; FL Studio is in the tool list. All new copy has English, Russian and Kazakh versions. Mobile language controls remain visible outside the menu.

The `/music` route reads `src/data/tracks.ts`. No owner-supplied songs are present; explicitly requested listening demos are now enabled in preview mode. A reusable single-instance audio player supports lazy loading, native seek/volume controls, play/pause, explicit previous/next selection, error recovery and cleanup on leaving the page. No autoplay, automatic next song or persistent background playback. See CONTENT_GUIDE for adding original tracks.

## Home and listening demos

Home groups Motion and 3D/VFX at `/motion-vfx`, followed by Design and Music. Existing category routes remain available. Contact icons accompany the supplied social profiles, including corrected Instagram, YouTube and TikTok.

Three short procedural MP3 listening examples are enabled by demoMode. They are clearly labeled samples, not FULL CORE releases, with provenance beside the files. Original track data remains separate and can replace them without player changes. npm build uses the committed MP3 assets; Python/NumPy/FFmpeg are optional regeneration tools only.

Раздел Music наполнен 16 предоставленными владельцем треками. Данные и порядок: src/data/tracks.ts; MP3 и заменяемые нейтральные обложки: public/media/music/tracks/. Исполнители взяты из тегов, включая соавторов. Музыкальные примеры удалены; примеры визуальных работ остаются в preview-режиме.
