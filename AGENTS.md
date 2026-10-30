# FULL CORE — implementation rules

## Purpose and content integrity
FULL CORE is the personal portfolio of an independent creator from Kazakhstan, not an agency. Present only owner-confirmed work. Never fabricate clients, awards, years, metrics, roles, tools, AI usage or private details. Do not attribute all YEPO materials to the owner. Existing production is traditional unless confirmed otherwise.

The owner's Google Drive archive `my works.zip` supplied portfolio materials and source descriptions, now organized as 62 published visual cases. Its folders determine disciplines; accompanying text files confirm roles, tools, selected status and source links. Retain the earlier real editing/LOVV66 cases and all 16 songs, with no duplicates. Demo projects, their media and non-authorship disclaimers have been removed. Do not restore them. Keep meaningful role attribution: factory footage for Babytravel, separately supplied talent/voiceover for the chair campaign, fictional brands in Vash Product/The Down, and the unofficial Yandex test assignment. These are factual project context, not demo notices.

## Architecture and data
React + Vite + TypeScript, Tailwind 4 and restrained Motion interactions. Static production: no backend, database, auth or CMS. Personal information and four home covers live in src/data/site.ts. Visual projects, translations, roles, tools, media and featured order live in src/data/projects.ts. Music metadata/order lives in src/data/tracks.ts. Drafts stay unpublished. Unknown fields stay absent. Do not publish the old instagram-expert-ad draft without its exact missing 02-2.mp4 or a confirmed link.

src/data/disciplines.ts owns filtering. Preserve Home, Video, Motion, 3D/VFX, Design, Music, About, Contact and the combined /motion-vfx route. Home has four tiles: Video → Motion & 3D/VFX → Design → Music. Its Selected Works has at most four projects. The latest owner-selected order is Crypto Heist first, the personal YouTube film second, the introduction reel third and Vash Product fourth. Crypto Heist remains first in Motion & 3D/VFX, followed by LOVV66. The latest owner request splits the four studio chair films into four independently listed cases. Keep each video separate.

3D/VFX has working video/illustration filters. The combined page also separates motion, 3D video and 3D illustration. Image-only projects are galleries with full-size viewing. Respect original ratios including 1:1, 4:5 and cinematic formats; never stretch or crop player content. Video catalogue filtering and Load More must work for 30–50+ cases.

## Media and performance
Media supports youtube, vimeo, instagram, localVideo and image. Provider parsing must reject arbitrary iframe hosts. No iframe/video/audio requests before Play. YouTube embeds use youtube-nocookie. Original YouTube covers use provider maxres URLs with hqdefault fallback; do not replace them with invented frames. The nine previously embedded Instagram reels are now local H.264/AAC MP4 files with faststart, retaining their original publication covers. Their sourceUrl fields preserve provenance without adding Instagram interface to playback. Keep the provider adapter for future links, but use the imported files for these nine cases. Do not promise external availability or authentication behavior.

Local web exports use H.264/AAC and faststart; originals and raw ZIP stay outside the repository/public directory. No individual Git file may exceed 100 MiB. Keep images optimized and lazy. Use native controls, playsInline and cleanup on leaving a local video. Do not autoplay catalogue media. Music uses one audio element, stops/unloads on leaving Music, and has a viewport-fixed bottom panel with its measured safe-area height reserved through the footer. Preserve the song order requested in the reference playlist. Where are U? now uses the owner's supplied cover art.

## Design and accessibility
Cinematic dark editorial minimalism: #09090b background, white typography, cool gray/silver accents, strong hierarchy and deliberate spacing. Avoid SaaS styling, heavy WebGL, scroll interception, custom cursors and excessive motion. Keep mobile composition, visible EN/RU/KZ switching beside the closed menu, large tap targets, keyboard access, semantic headings, alt text, visible focus and reduced motion.

## Localization and hosting
Default English; Russian and Kazakh are hand-reviewed UTF-8/NFC strings. Kazakh language code is kk; KZ is the displayed label. Use messages.ts and project/media translation overrides. Do not translate artist names, URLs, IDs, licenses or tool brands. Persist explicit locale safely, hydrate English static HTML without mismatch and update client metadata. Do not claim per-language prerendered URLs.

Preserve SITE_BASE/VITE_SITE_URL and assetUrl/routerBase helpers for both root hosting and GitHub Pages /-/. scripts/prerender.tsx generates routes, metadata, 404, robots and sitemap. Direct project URLs and refresh must work. Preserve the existing GitHub Pages workflow and Beget/Cloudflare instructions.

## Changes and verification
Preserve user files and confirmed content. Run typecheck, lint, tests and production build after substantive changes. Test filters, route navigation, lazy media, native playback, galleries, locales and narrow screens when browser QA is available. State external verification limits honestly. Keep README, CONTENT_GUIDE and DEPLOYMENT current. Publish only with user authorization; authorization to update this repository/site has been established in the current conversation. Never connect unrelated accounts, buy services or send unrelated messages.

## Product galleries and desktop sizing
All photos from each supplied Kaspi product card must be included, not just its OG/cover image. There are currently 13 product galleries with 207 images. Preserve source ordering and original image ratios. Each product has its own case; the first product retains the former gallery URL for compatibility. Gallery links show the full photo count while catalogue previews remain limited. At 900px and wider, Motion/3D and Design use two project columns; portrait previews in the screening grid are capped at 280px. Keep mobile layout as one column.
