# FULL CORE — implementation rules

## Purpose
A personal portfolio of an independent visual creator from Kazakhstan, built to present verified film, editing, motion and commercial production work to recruiters and collaborators. FULL CORE is one person's brand, not a fictitious agency. All public UI copy is in English. Documentation can be Russian.

## Design
Cinematic dark editorial minimalism: #09090b background, #111114 surfaces, #f5f5f5 text, readable cool grays, restrained borders. Large typography, deliberate spacing, mixed media ratios. Video work is the focus. Do not add SaaS cards, bright gradients, fake footage, custom cursors, scroll interception or heavy WebGL. Preserve mobile compositions and keyboard access. Respect reduced motion.

## Architecture
React + Vite + TypeScript; Tailwind 4 and component CSS; Motion for restrained interactions. No backend, database, CMS or auth. `src/data/site.ts` contains personal information. `src/data/projects.ts` defines typed content, categories, publishing status and selected order. Components should not contain copies of personal data. `scripts/prerender.tsx` generates route HTML, metadata, 404, robots and optional domain-dependent sitemap. Keep prerender/hydration output consistent.

## Content integrity
Never fabricate projects, awards, clients, metrics, dates, experience, faces, email or AI usage. Existing production is traditional unless explicitly confirmed otherwise. Six initial records are planning drafts; do not automatically publish them. Public content must have approved media. Files in public are publicly accessible even if referenced only by drafts. Do not scrape/download/reuse YEPO or other creators' materials without explicit authorization. Do not pretend to have watched videos.

## Authorized design preview
The owner explicitly requested sample photos and videos for visual review. `site.demoMode` currently enables five temporary sample cases from `src/data/demo.ts`, a sample hero and clear preview labels. Actual client-project drafts remain unpublished. Preserve sample attribution (`public/media/demo/CREDITS.md`) and do not turn sample media into claimed personal work. Setting demoMode=false must remove all sample routes/cards and the sample hero. Do not substitute stock portraits for the owner.

## Quality
Keep semantic markup, hierarchy, visible focus, alt text, touch targets and no mobile overflow. Preserve 9:16/16:9/1:1/4:3 ratios; do not crop player content. Embed only supported providers; use privacy-enhanced YouTube. No provider requests until Play. Keep media lazy and catalogue paginated. Avoid new dependencies without need.

Run `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` after substantive changes. Test actual media with permission when available. Record verification limitations honestly. Never deploy, connect accounts or purchase services without user authorization. Maintain README, CONTENT_GUIDE and DEPLOYMENT when behavior changes.

## Static hosting paths
GitHub Pages is supported via `.github/workflows/deploy-pages.yml`. Preserve SITE_BASE/VITE_SITE_URL support and src/lib/paths.ts helpers. Prefix local assets with assetUrl; React Router uses routerBase. Prerendered links use the same basename as the browser. Do not hardcode a repository name into content paths. Keep root deployments working.
