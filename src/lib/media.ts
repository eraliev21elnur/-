import { assetUrl } from "./paths";
// Strict provider parsing prevents arbitrary iframe URLs being injected into the site.
export function embedUrl(
  type: "youtube" | "vimeo",
  input: string,
): string | null {
  let id = input;
  if (input.startsWith("http")) {
    try {
      const u = new URL(input);
      if (type === "youtube") {
        if (
          [
            "youtube.com",
            "www.youtube.com",
            "m.youtube.com",
            "www.youtube-nocookie.com",
          ].includes(u.hostname)
        )
          id =
            u.searchParams.get("v") ??
            u.pathname.split("/").filter(Boolean).pop() ??
            "";
        else if (u.hostname === "youtu.be") id = u.pathname.slice(1);
        else return null;
      } else {
        if (
          !["vimeo.com", "www.vimeo.com", "player.vimeo.com"].includes(
            u.hostname,
          )
        )
          return null;
        id =
          u.pathname
            .split("/")
            .filter(Boolean)
            .find((part) => /^\d+$/.test(part)) ?? "";
        const hash =
          u.searchParams.get("h") ??
          u.pathname
            .split("/")
            .filter(Boolean)
            .find((part) => /^[a-f0-9]{10}$/.test(part));
        if (!/^\d+$/.test(id)) return null;
        return `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1${hash ? `&h=${hash}` : ""}`;
      }
    } catch {
      return null;
    }
  }
  if (type === "youtube")
    return /^[a-zA-Z0-9_-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
      : null;
  return /^\d+$/.test(id)
    ? `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`
    : null;
}
export const safeUrl = (url: string) =>
  /^(https?:\/\/|\/(?!\/))/.test(url) ? assetUrl(url) : "#";

export function instagramEmbedUrl(input: string): string | null {
  try {
    const url = new URL(input);
    if (!["instagram.com", "www.instagram.com"].includes(url.hostname))
      return null;
    const match = url.pathname.match(
      /^\/(?:p|reel|reels)\/([A-Za-z0-9_-]+)\/?$/,
    );
    return match ? `https://www.instagram.com/p/${match[1]}/embed/` : null;
  } catch {
    return null;
  }
}
