# FULL CORE — implementation rules

## Purpose
A personal portfolio of an independent visual creator from Kazakhstan, built to present verified film, editing, motion and commercial production work to recruiters and collaborators. FULL CORE is one person's brand, not a fictitious agency. Public UI supports English (default), Russian and Kazakh. Documentation can be Russian.

## Design
Cinematic dark editorial minimalism: #09090b background, #111114 surfaces, #f5f5f5 text, readable cool grays, restrained borders. Large typography, deliberate spacing, mixed media ratios. Video work is the focus. Do not add SaaS cards, bright gradients, fake footage, custom cursors, scroll interception or heavy WebGL. Preserve mobile compositions and keyboard access. Respect reduced motion.

## Architecture
React + Vite + TypeScript; Tailwind 4 and component CSS; Motion for restrained interactions. No backend, database, CMS or auth. `src/data/site.ts` contains personal information. `src/data/projects.ts` defines typed content, categories, publishing status and selected order. Components should not contain copies of personal data. `scripts/prerender.tsx` generates route HTML, metadata, 404, robots and optional domain-dependent sitemap. Keep prerender/hydration output consistent.

## Content integrity
Never fabricate projects, awards, clients, metrics, dates, experience, faces, email or AI usage. Existing production is traditional unless explicitly confirmed otherwise. Six initial records are planning drafts; do not automatically publish them. Public content must have approved media. Files in public are publicly accessible even if referenced only by drafts. Do not scrape/download/reuse YEPO or other creators' materials without explicit authorization. Do not pretend to have watched videos.

## Authorized design preview
The owner explicitly requested sample photos and videos for visual review. `site.demoMode` currently enables five temporary sample cases from `src/data/demo.ts` and clear preview labels. Actual client-project drafts remain unpublished. Preserve sample attribution (`public/media/demo/CREDITS.md`) and do not turn sample media into claimed personal work. Setting demoMode=false must remove all sample routes/cards. Do not substitute stock portraits for the owner.

## Quality
Keep semantic markup, hierarchy, visible focus, alt text, touch targets and no mobile overflow. Preserve 9:16/16:9/1:1/4:3 ratios; do not crop player content. Embed only supported providers; use privacy-enhanced YouTube. No provider requests until Play. Keep media lazy and catalogue paginated. Avoid new dependencies without need.

Run `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` after substantive changes. Test actual media with permission when available. Record verification limitations honestly. Never deploy, connect accounts or purchase services without user authorization. Maintain README, CONTENT_GUIDE and DEPLOYMENT when behavior changes.

## Static hosting paths
GitHub Pages is supported via `.github/workflows/deploy-pages.yml`. Preserve SITE_BASE/VITE_SITE_URL support and src/lib/paths.ts helpers. Prefix local assets with assetUrl; React Router uses routerBase. Prerendered links use the same basename as the browser. Do not hardcode a repository name into content paths. Keep root deployments working.

## Clarity-first navigation
Preserve direct HOME, VIDEO, MOTION, 3D / VFX, DESIGN, ABOUT, CONTACT routes. Keep HOME concise: positioning, four discipline tiles, at most four real selected projects, short contact CTA. Samples must never appear in Selected Works. VIDEO combines commercial/film and uses the four videoType subfilters. MOTION must allow playback immediately on the page; DESIGN must be an image gallery, not video players. Keep legacy archive/case URLs valid. Empty disciplines are preview-only unless publishEmptyDisciplines is explicitly true. Normalize SITE_BASE with a trailing slash, since configure-pages may omit it.

## Localization
The owner requested EN / RU / KZ in the header immediately after Contact, and after Contact inside the mobile menu. The locale identifier for Kazakh is kk (KZ is the displayed country-style label). Use src/i18n/messages.ts for explicit reviewed phrase translations and useLocale for UI text. Do not translate URLs, IDs, brands, tool names or rewrite facts. Store files in UTF-8 without BOM, preserve Kazakh letters and test narrow screens with longer Cyrillic text. Persist explicit selection with guarded localStorage; default to English, hydrate English static HTML safely, update document.lang and client metadata. Project and Media translations support ru/kk overrides; missing project translations fall back to original content. Do not claim per-language static SEO pages: current static documents remain English.

## Profile and music requirements
The owner supplied the updated biography, birth date (2005-10-21), age 21 as of October 2026, YEPO work, a 3D animation collaboration with LOVV66 and independent composition/mixing/mastering. Keep these claims factual and do not invent case media. Direct contacts live in site.ts; do not restore the Telegram channel link. WhatsApp uses wa.me with the supplied phone number, not a guessed username URL.

Music is an explicitly requested separate route `/music`, retained even while there are no supplied songs. Track data lives in src/data/tracks.ts, with published/draft states and optional ru/kk overrides. Do not add fake tracks or ship test tones. Use one native audio element for the playlist, no source requests before Play, no overlapping songs or autoplay next, and pause/unload on leaving the page. Preserve accessible controls and test real playback with temporary fixtures kept outside the release.

The latest mobile-language requirement overrides the older instruction to put the switch inside the mobile menu: mobile EN/RU/KZ must be visible in the header with the menu closed. Keep desktop switching after Contact; do not duplicate mobile controls inside the menu.

## Latest home/audio/social revision
The owner explicitly requested three playable music examples. This supersedes the earlier restriction against shipping test audio for these clearly labeled procedural musical demos only. src/data/demoTracks.ts and public/media/music/demo contain temporary synthesized loops, not FULL CORE releases. Preserve demo:true, the page/row disclaimers and demoMode gating. Real tracks stay in tracks.ts. Do not add outside copyrighted music or attribute these samples to the owner.

Home now has Video → Motion & 3D / VFX → Graphic Design → Music. The combined /motion-vfx route aggregates existing motion and 3d-vfx data; retain the separate existing routes and header entries. Social contacts include Instagram @fullxcore (corrected), YouTube @Full_Core and TikTok @full_core. Contact rows have recognizable SVG platform icons alongside readable labels.
