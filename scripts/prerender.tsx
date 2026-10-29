import { absoluteSiteUrl, assetUrl, routerBase } from "../src/lib/paths";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, join } from "node:path";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { App } from "../src/App";
import { site } from "../src/data/site";
import { publishedProjects } from "../src/data/projects";
import { metadata } from "../src/lib/metadata";
import { validateProjects } from "./validate-content";

validateProjects();
const out = resolve("dist");
const template = await readFile(join(out, "index.html"), "utf8");
const routes = [
  "/",
  "/work",
  "/about",
  "/contact",
  ...publishedProjects.map((p) => `/work/${p.slug}`),
];
const escape = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const path of [...routes, "/404"]) {
  const meta = metadata(path);
  const url = site.url ? absoluteSiteUrl(path, site.url) : "";
  const tags = `<meta property="og:type" content="website"/><meta property="og:title" content="${escape(meta.title)}"/><meta property="og:description" content="${escape(meta.description)}"/><meta name="twitter:card" content="summary_large_image"/>${url ? `<link rel="canonical" href="${escape(url)}"/><meta property="og:url" content="${escape(url)}"/><meta property="og:image" content="${escape(absoluteSiteUrl("/social-preview.png", site.url))}"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>` : ""}${path === "/404" ? '<meta name="robots" content="noindex"/>' : ""}`;
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escape(meta.description)}"/>`,
    )
    .replace("</head>", `${tags}</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(
        <MemoryRouter basename={routerBase} initialEntries={[assetUrl(path)]}>
          <App />
        </MemoryRouter>,
      )}</div>`,
    );
  const file =
    path === "/404" ? join(out, "404.html") : join(out, path, "index.html");
  await mkdir(resolve(file, ".."), { recursive: true });
  await writeFile(file, html);
}
await writeFile(join(out, ".nojekyll"), "");
await writeFile(
  join(out, "robots.txt"),
  `User-agent: *\nAllow: /\n${site.url ? `Sitemap: ${absoluteSiteUrl("/sitemap.xml", site.url)}\n` : ""}`,
);
if (site.url)
  await writeFile(
    join(out, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((r) => `<url><loc>${escape(absoluteSiteUrl(r, site.url))}</loc></url>`).join("")}</urlset>`,
  );
console.log(
  `Prerendered ${routes.length} public routes + 404. ${site.url ? "Sitemap generated." : "Domain unset: canonical URLs, OG image URL and sitemap omitted."}`,
);
