import { Artwork } from "./Artwork";
import { localizeMedia } from "../i18n/content";
import { useLocale } from "../i18n";
import { useEffect, useRef, useState } from "react";
import { Play, Maximize2, X } from "lucide-react";
import type { Media } from "../data/projects";
import { embedUrl, instagramEmbedUrl, safeUrl } from "../lib/media";
export function MediaPlayer({
  media: sourceMedia,
  title,
}: {
  media: Media;
  title: string;
}) {
  const { t, language } = useLocale();
  const media = localizeMedia(sourceMedia, language);
  const [active, setActive] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const player = video.current;
    return () => {
      player?.pause();
      player?.removeAttribute("src");
      player?.load();
    };
  }, [active, media.url]);
  const ratio = media.aspectRatio ?? "16/9";
  const label = t(media.caption ?? title);
  const [width, height] = ratio.split("/").map(Number);
  const vertical = width / height < 0.85;
  if (!media.url) return null;
  if (media.type === "image")
    return (
      <figure className={`media-figure ${vertical ? "vertical" : ""}`}>
        <button
          className="image-open"
          onClick={() => dialog.current?.showModal()}
          aria-label={t("Enlarge {title}").replace("{title}", label)}
        >
          <img
            src={safeUrl(media.url)}
            alt={t(media.alt ?? label)}
            loading="lazy"
            style={{
              aspectRatio: ratio,
            }}
          />
          <Maximize2 size={20} />
        </button>
        {media.caption && <figcaption>{t(media.caption)}</figcaption>}
        <dialog
          ref={dialog}
          className="lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) dialog.current?.close();
          }}
        >
          <button
            className="icon-button lightbox-close"
            onClick={() => dialog.current?.close()}
            aria-label={t("Close image")}
          >
            <X />
          </button>
          <img
            src={safeUrl(media.url)}
            alt={t(media.alt ?? label)}
            loading="lazy"
          />
        </dialog>
      </figure>
    );
  const embed =
    media.type === "youtube" || media.type === "vimeo"
      ? embedUrl(media.type, media.url)
      : media.type === "instagram"
        ? instagramEmbedUrl(media.url)
        : null;
  return (
    <figure className={`media-figure ${vertical ? "vertical" : ""}`}>
      <div
        className={`player ${media.type === "instagram" && active ? "instagram-player" : ""}`}
        style={{
          aspectRatio: ratio,
        }}
      >
        {active ? (
          media.type === "localVideo" ? (
            <video
              ref={video}
              src={safeUrl(media.url)}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={t(label)}
            />
          ) : (
            embed && (
              <iframe
                src={embed}
                title={t(label)}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )
          )
        ) : media.type === "localVideo" || embed ? (
          <button
            className={`facade facade-${media.type}`}
            onClick={() => setActive(true)}
            aria-label={t("Play {title}").replace("{title}", label)}
          >
            {media.thumbnail && (
              <Artwork
                key={media.thumbnail}
                src={media.thumbnail}
                fallbackSrc={media.thumbnailFallback}
                alt=""
                loading="lazy"
              />
            )}
            <span className="play-circle">
              <Play fill="currentColor" size={22} />
            </span>
            <span className="facade-label">
              {t("Play film")}{" "}
              <span>
                {media.type === "localVideo"
                  ? t("Local video")
                  : t("Loads {provider} player").replace(
                      "{provider}",
                      media.type === "youtube"
                        ? "YouTube"
                        : media.type === "instagram"
                          ? "Instagram"
                          : "Vimeo",
                    )}
              </span>
            </span>
          </button>
        ) : (
          <div className="media-error">
            {t(
              "Video link unavailable. Please check the project configuration.",
            )}
          </div>
        )}
      </div>
      {media.caption && <figcaption>{t(media.caption)}</figcaption>}
      {embed && (
        <a
          className="media-source arrow-link"
          href={safeUrl(
            media.url.startsWith("http")
              ? media.url
              : media.type === "youtube"
                ? `https://www.youtube.com/watch?v=${media.url}`
                : `https://vimeo.com/${media.url}`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          {t(
            media.type === "instagram"
              ? "Open on Instagram"
              : media.type === "youtube"
                ? "Watch on YouTube"
                : "Watch on Vimeo",
          )}{" "}
          ↗
        </a>
      )}
    </figure>
  );
}
export function VerticalVideoPlayer({
  media,
  title,
}: {
  media: Media;
  title: string;
}) {
  return (
    <MediaPlayer
      media={{
        ...media,
        aspectRatio: "9/16",
      }}
      title={title}
    />
  );
}
