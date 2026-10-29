import { useEffect, useRef, useState } from "react";
import {
  Disc3,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  ArrowUpRight,
} from "lucide-react";
import type { Track } from "../data/tracks";
import { site } from "../data/site";
import { safeUrl } from "../lib/media";
import { useLocale, type Language } from "../i18n";
export function trackText(track: Track, language: Language): Track {
  return language === "en"
    ? track
    : { ...track, ...track.translations?.[language] };
}
export function MusicPlayer({ tracks }: { tracks: Track[] }) {
  const { t, language } = useLocale();
  const audio = useRef<HTMLAudioElement>(null);
  const activeId = useRef<string | null>(null);
  const request = useRef(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const selectedTrack = selected === null ? null : tracks[selected];
  const current = selectedTrack ? trackText(selectedTrack, language) : null;
  useEffect(() => {
    const player = audio.current;
    return () => {
      player?.pause();
      player?.removeAttribute("src");
      player?.load();
    };
  }, []);
  function start(index: number) {
    const player = audio.current;
    const track = tracks[index];
    if (!player || !track) return;
    const token = ++request.current;
    const same = activeId.current === track.id;
    if (same && !player.paused) {
      player.pause();
      return;
    }
    if (!same) {
      player.pause();
      player.src = safeUrl(track.src);
      player.load();
      activeId.current = track.id;
      setSelected(index);
    }
    setFailed(false);
    const pending = player.play();
    if (pending)
      pending.catch((error: Error) => {
        if (
          token === request.current &&
          player.isConnected &&
          error.name !== "AbortError"
        ) {
          setFailed(true);
          setPlaying(false);
        }
      });
  }
  if (!tracks.length) return null;
  return (
    <section className="music-collection" aria-label={t("Original tracks")}>
      <div className="track-list">
        {tracks.map((original, index) => {
          const track = trackText(original, language);
          const active = selected === index;
          const isPlaying = active && playing;
          return (
            <article
              className={`track-row ${active ? "is-active" : ""}`}
              key={track.id}
            >
              <button
                type="button"
                className="track-play"
                onClick={() => start(index)}
                aria-label={t(
                  isPlaying ? "Pause {title}" : "Play track: {title}",
                ).replace("{title}", track.title)}
                aria-pressed={isPlaying}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="track-art">
                {track.artwork ? (
                  <img
                    src={safeUrl(track.artwork)}
                    alt=""
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                ) : (
                  <Disc3 size={28} aria-hidden="true" />
                )}
              </div>
              <div className="track-info">
                <h2>{track.title}</h2>
                <p>
                  {site.brand}
                  {track.year ? ` / ${track.year}` : ""}
                </p>
                {track.description && <p>{track.description}</p>}
                {track.credits && (
                  <p className="track-credits">
                    {t("Credits:")} {track.credits}
                  </p>
                )}
                {track.externalLinks?.length ? (
                  <div className="track-links">
                    {track.externalLinks.map((link) => (
                      <a
                        key={link.url}
                        href={safeUrl(link.url)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t(link.label)}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <span className="track-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          );
        })}
      </div>
      <div className={`music-player-panel ${current ? "has-track" : ""}`}>
        <div className="now-playing">
          <span className="eyebrow">
            {t(playing ? "Now playing" : "Audio player")}
          </span>
          <p aria-live="polite">
            {current?.title ?? t("Choose a track to listen")}
          </p>
        </div>
        <div className="audio-controls">
          <audio
            ref={audio}
            controls
            preload="none"
            aria-label={t("Audio player")}
            onPlay={() => {
              setPlaying(true);
              setFailed(false);
            }}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onError={() => {
              if (activeId.current) {
                setFailed(true);
                setPlaying(false);
              }
            }}
          />
          <div className="track-navigation">
            <button
              type="button"
              onClick={() => selected !== null && start(selected - 1)}
              disabled={selected === null || selected === 0}
              aria-label={t("Previous track")}
            >
              <SkipBack size={18} />
            </button>
            <button
              type="button"
              onClick={() => selected !== null && start(selected + 1)}
              disabled={selected === null || selected >= tracks.length - 1}
              aria-label={t("Next track")}
            >
              <SkipForward size={18} />
            </button>
          </div>
        </div>
        {failed && (
          <p className="audio-error" role="alert">
            {t("This track could not be played. Please try again.")}
          </p>
        )}
      </div>
      <p className="music-listening-note">
        {t(
          "Playback starts only when you press play. Leaving this page stops the music.",
        )}
      </p>
    </section>
  );
}
