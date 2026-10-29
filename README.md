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

Set `demoMode: false` in `src/data/site.ts` to hide all sample cases and the sample hero at once. Add your approved media to the real project records and publish them. See `public/media/demo/CREDITS.md` for sample sources and licenses. The code is ready to populate; a recruiter-ready portfolio requires replacing samples with your work. Nothing has been deployed.

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

TypeScript, ESLint, production build and four behavioral tests passed. Chromium checks covered 375 / 390 / 768 / 1440 px layouts, navigation, mobile menu/Escape, URL-backed filters and reload, prerendered page hydration and horizontal overflow. Static HTML and HTTP 404 were checked through the production preview. Screenshots are saved in `review/`. Actual owner media, YouTube/Vimeo playback on a production domain and Lighthouse scores have not been verified. Temporary local MP4 files are provided for preview. Simulated viewport testing does not replace testing on physical devices.

Design-preview update: five sample cases are enabled. Chromium verified playback of the procedural horizontal loop, vertical loop and licensed Sintel excerpt, no video requests before Play, image-dialog opening, working category filtering and no overflow at the four viewport widths above. All sample media remains clearly labeled and can be disabled centrally.
