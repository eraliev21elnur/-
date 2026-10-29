import { localizeMedia } from "../i18n/content";
import { useLocale } from "../i18n";
import { useRef, useState } from "react";
import { Play, Maximize2, X } from "lucide-react";
import type { Media } from "../data/projects";
import { embedUrl, safeUrl } from "../lib/media";
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
  const ratio = media.aspectRatio ?? "16/9";
  const label = t(media.caption ?? title);
  if (!media.url) return null;
  if (media.type === "image")
    return (
      <figure className={`media-figure ${ratio === "9/16" ? "vertical" : ""}`}>
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
          <img src={safeUrl(media.url)} alt={t(media.alt ?? label)} />
        </dialog>
      </figure>
    );
  const embed =
    media.type === "youtube" || media.type === "vimeo"
      ? embedUrl(media.type, media.url)
      : null;
  return (
    <figure className={`media-figure ${ratio === "9/16" ? "vertical" : ""}`}>
      <div
        className="player"
        style={{
          aspectRatio: ratio,
        }}
      >
        {active ? (
          media.type === "localVideo" ? (
            <video
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
            className="facade"
            onClick={() => setActive(true)}
            aria-label={t("Play {title}").replace("{title}", label)}
          >
            {media.thumbnail && (
              <img src={safeUrl(media.thumbnail)} alt="" loading="lazy" />
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
                      media.type === "youtube" ? "YouTube" : "Vimeo",
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
