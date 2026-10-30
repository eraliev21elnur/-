import { videoFilters } from "../src/data/disciplines";
import { categories, projects } from "../src/data/projects";
import { embedUrl, instagramEmbedUrl } from "../src/lib/media";
import { site } from "../src/data/site";
export function validateProjects() {
  if (site.url && new URL(site.url).protocol !== "https:")
    throw new Error("site.url must be an HTTPS origin.");
  const ids = new Set<string>(),
    slugs = new Set<string>();
  for (const p of projects) {
    if (ids.has(p.id) || slugs.has(p.slug))
      throw new Error(`Duplicate project ID or slug: ${p.id}`);
    ids.add(p.id);
    slugs.add(p.slug);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))
      throw new Error(`Invalid slug: ${p.slug}`);
    if (!categories.some((c) => c.id === p.category))
      throw new Error(`Unknown category: ${p.category}`);
    if (p.videoType && !videoFilters.some((f) => f.id === p.videoType))
      throw new Error(`Unknown video filter: ${p.videoType}`);
    if (p.status !== "published") continue;
    if (p.category === "design" && !p.media.some((m) => m.type === "image"))
      throw new Error(`Design projects require images: ${p.slug}`);
    if (p.category === "motion" && !p.media.some((m) => m.type !== "image"))
      throw new Error(`Motion projects require video: ${p.slug}`);
    if (!p.title.trim() || !p.media.length)
      throw new Error(
        `Published project requires a title and media: ${p.slug}`,
      );
    const mediaIds = new Set();
    for (const m of p.media) {
      if (mediaIds.has(m.id))
        throw new Error(`Duplicate media ID: ${p.slug}/${m.id}`);
      mediaIds.add(m.id);
      if (
        !m.url ||
        ((m.type === "youtube" || m.type === "vimeo") &&
          !embedUrl(m.type, m.url)) ||
        (m.type === "instagram" && !instagramEmbedUrl(m.url))
      )
        throw new Error(`Invalid media URL: ${p.slug}/${m.id}`);
      if (
        m.aspectRatio &&
        !m.aspectRatio
          .split("/")
          .every((value) => Number.isFinite(Number(value)) && Number(value) > 0)
      )
        throw new Error(`Invalid media aspect ratio: ${p.slug}/${m.id}`);
      if (m.type === "image" && !m.alt)
        throw new Error(`Image requires alt text: ${p.slug}/${m.id}`);
    }
  }
}
