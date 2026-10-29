// Vite replaces BASE_URL in the browser; the static renderer reads SITE_BASE.
export function normalizeBase(value: string): string {
  const path = value.trim().replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}
export const basePath = normalizeBase(
  import.meta.env?.BASE_URL ??
    (typeof process !== "undefined" ? process.env.SITE_BASE : undefined) ??
    "/",
);
export const routerBase = basePath === "/" ? "/" : basePath.replace(/\/$/, "");
export function assetUrl(path: string): string {
  return path.startsWith("/") && !path.startsWith("//")
    ? `${basePath}${path.slice(1)}`
    : path;
}
export function absoluteSiteUrl(path: string, siteUrl: string): string {
  return new URL(path.replace(/^\//, ""), `${siteUrl.replace(/\/+$/, "")}/`)
    .href;
}
