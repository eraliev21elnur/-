import { useEffect, useMemo, useRef, useState } from "react";
import {
  Disc3,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  ArrowUpRight,
  ArrowUp,
  ArrowDown,
  GripVertical,
  Shuffle,
  Repeat,
  Maximize2,
  X,
  FileText,
  Volume2,
} from "lucide-react";
import type { Track } from "../data/tracks";
import { site } from "../data/site";
import { safeUrl } from "../lib/media";
import {
  followingTrack,
  formatTime,
  moveTrack,
  shuffleTracks,
  type RepeatMode,
} from "../lib/music";
import { useLocale, type Language } from "../i18n";
import { useMusicOrder } from "../hooks/useMusicOrder";
export function trackText(track: Track, language: Language): Track {
  return language === "en"
    ? track
    : { ...track, ...track.translations?.[language] };
}
export function MusicPlayer({ tracks }: { tracks: Track[] }) {
  const { t, language } = useLocale();
  const audio = useRef<HTMLAudioElement>(null);
  const panel = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const activeId = useRef<string | null>(null);
  const request = useRef(0);
  const dragging = useRef<string | null>(null);
  const defaultIds = useMemo(() => tracks.map((track) => track.id), [tracks]);
  const trackMap = useMemo(
    () => new Map(tracks.map((track) => [track.id, track])),
    [tracks],
  );
  const [order, setOrder] = useMusicOrder(defaultIds);
  const [shuffled, setShuffled] = useState<string[] | null>(null);
  const [editing, setEditing] = useState(false);
  const [notice, setNotice] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [repeat, setRepeat] = useState<RepeatMode>("off");
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const ids = shuffled ?? order;
  const selectedTrack = selectedId ? trackMap.get(selectedId) : null;
  const current = selectedTrack ? trackText(selectedTrack, language) : null;
  const selectedIndex = selectedId ? ids.indexOf(selectedId) : -1;
  const length = duration || current?.duration || 0;
  useEffect(() => {
    const player = audio.current;
    const root = document.documentElement;
    const updateSpace = () => {
      if (panel.current)
        root.style.setProperty(
          "--music-player-height",
          `${Math.ceil(panel.current.getBoundingClientRect().height)}px`,
        );
    };
    document.body.classList.add("has-music-player");
    updateSpace();
    const observer = new ResizeObserver(updateSpace);
    if (panel.current) observer.observe(panel.current);
    return () => {
      observer.disconnect();
      document.body.classList.remove("has-music-player");
      root.style.removeProperty("--music-player-height");
      player?.pause();
      player?.removeAttribute("src");
      player?.load();
    };
  }, []);
  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [expanded]);
  function start(id: string, forcePlay = false) {
    const player = audio.current,
      track = trackMap.get(id);
    if (!player || !track) return;
    const token = ++request.current,
      same = activeId.current === id;
    if (same && !player.paused && !forcePlay) {
      player.pause();
      return;
    }
    if (!same) {
      player.pause();
      player.src = safeUrl(track.src);
      player.load();
      activeId.current = id;
      setSelectedId(id);
      setElapsed(0);
      setDuration(0);
      if (dialog.current?.open) dialog.current.scrollTop = 0;
    }
    setFailed(false);
    player.play()?.catch((error: Error) => {
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
  function navigate(direction: -1 | 1) {
    if (!selectedId) return;
    if (direction === -1 && audio.current && audio.current.currentTime > 3) {
      audio.current.currentTime = 0;
      setElapsed(0);
      return;
    }
    const index = selectedIndex + direction;
    const next =
      ids[index] ??
      (repeat === "all" ? ids[(index + ids.length) % ids.length] : null);
    if (next) start(next, true);
  }
  function ended() {
    setPlaying(false);
    if (!selectedId) return;
    const next = followingTrack(ids, selectedId, repeat);
    if (next) {
      if (next === selectedId && audio.current) audio.current.currentTime = 0;
      start(next, true);
    }
  }
  function reorder(id: string, target: number) {
    const result = moveTrack(ids, id, target);
    if (result === ids) return;
    setOrder(result);
    setShuffled(null);
    setNotice(
      t("Moved {title} to position {position}")
        .replace("{title}", trackMap.get(id)?.title ?? id)
        .replace("{position}", String(target + 1)),
    );
  }
  function openExpanded() {
    if (current) {
      dialog.current?.showModal();
      setExpanded(true);
    }
  }
  function seek(value: number) {
    if (!audio.current || !Number.isFinite(audio.current.duration)) return;
    audio.current.currentTime = Math.max(
      0,
      Math.min(value, audio.current.duration),
    );
    setElapsed(audio.current.currentTime);
  }
  function transport() {
    return (
      <div className="music-transport">
        <button
          type="button"
          aria-label={t("Shuffle")}
          aria-pressed={shuffled !== null}
          onClick={() =>
            setShuffled(shuffled ? null : shuffleTracks(order, selectedId))
          }
        >
          <Shuffle size={18} />
        </button>
        <button
          type="button"
          aria-label={t("Previous track")}
          disabled={
            !selectedId ||
            (selectedIndex === 0 && repeat !== "all" && elapsed <= 3)
          }
          onClick={() => navigate(-1)}
        >
          <SkipBack size={19} />
        </button>
        <button
          type="button"
          className="music-main-play"
          aria-label={t(playing ? "Pause playback" : "Play playback")}
          onClick={() => {
            const id = selectedId ?? ids[0];
            if (id) start(id);
          }}
        >
          {playing ? (
            <Pause size={21} fill="currentColor" />
          ) : (
            <Play size={21} fill="currentColor" />
          )}
        </button>
        <button
          type="button"
          aria-label={t("Next track")}
          disabled={
            !selectedId ||
            (selectedIndex === ids.length - 1 && repeat !== "all")
          }
          onClick={() => navigate(1)}
        >
          <SkipForward size={19} />
        </button>
        <button
          type="button"
          className="repeat-control"
          aria-label={t(
            repeat === "off"
              ? "Repeat off"
              : repeat === "all"
                ? "Repeat all"
                : "Repeat one",
          )}
          aria-pressed={repeat !== "off"}
          onClick={() =>
            setRepeat(
              repeat === "off" ? "all" : repeat === "all" ? "one" : "off",
            )
          }
        >
          <Repeat size={18} />
          {repeat === "one" && <span aria-hidden="true">1</span>}
        </button>
      </div>
    );
  }
  function progress(id: string) {
    return (
      <div className="music-progress">
        <span>{formatTime(elapsed)}</span>
        <input
          id={id}
          type="range"
          min={0}
          max={length || 1}
          step={0.1}
          value={Math.min(elapsed, length || 1)}
          disabled={!current || !length}
          onChange={(e) => seek(Number(e.target.value))}
          aria-label={t("Seek playback")}
          aria-valuetext={`${formatTime(elapsed)} / ${formatTime(length)}`}
        />
        <span>{formatTime(length)}</span>
      </div>
    );
  }
  if (!tracks.length) return null;
  return (
    <section className="music-collection" aria-label={t("Original tracks")}>
      <div className="queue-toolbar">
        <div>
          <span className="eyebrow">{t("Listening queue")}</span>
          <p>
            {t(
              editing
                ? "Drag a handle or use the arrows to reorder."
                : "Your order is saved in this browser.",
            )}
          </p>
        </div>
        <div className="queue-toolbar-actions">
          {editing && (
            <button
              type="button"
              className="text-button"
              onClick={() => {
                setOrder(defaultIds);
                setShuffled(null);
                setNotice(t("Default order restored"));
              }}
            >
              {t("Reset order")}
            </button>
          )}
          <button
            type="button"
            className="queue-edit-button"
            aria-pressed={editing}
            onClick={() => setEditing(!editing)}
          >
            {t(editing ? "Done" : "Edit order")}
          </button>
        </div>
      </div>
      <p className="sr-only" role="status">
        {notice}
      </p>
      <div className={`track-list ${editing ? "is-editing" : ""}`}>
        {ids.map((id, index) => {
          const original = trackMap.get(id);
          if (!original) return null;
          const track = trackText(original, language),
            active = selectedId === id,
            isPlaying = active && playing;
          return (
            <article
              className={`track-row ${active ? "is-active" : ""}`}
              key={id}
              data-track-id={id}
              onDragOver={(e) => {
                if (dragging.current) e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (editing && dragging.current)
                  reorder(dragging.current, index);
                dragging.current = null;
              }}
            >
              <button
                type="button"
                className="track-play"
                onClick={() => start(id)}
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
                  {track.artist || site.brand}
                  {track.year ? ` / ${track.year}` : ""}
                  {track.duration ? ` · ${formatTime(track.duration)}` : ""}
                </p>
                {track.description && <p>{track.description}</p>}
                {track.credits && (
                  <p className="track-credits">
                    {t("Credits:")} {track.credits}
                  </p>
                )}
                {track.lyrics && (
                  <span className="track-lyrics-badge">
                    <FileText size={12} />
                    {t("Lyrics available")}
                  </span>
                )}
                {!!track.externalLinks?.length && (
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
                )}
              </div>
              {editing ? (
                <div className="track-order-controls">
                  <button
                    type="button"
                    className="drag-handle"
                    draggable
                    onDragStart={(e) => {
                      dragging.current = id;
                      e.dataTransfer.effectAllowed = "move";
                      e.dataTransfer.setData("text/plain", id);
                    }}
                    onDragEnd={() => {
                      dragging.current = null;
                    }}
                    aria-label={t("Drag {title} to reorder").replace(
                      "{title}",
                      track.title,
                    )}
                  >
                    <GripVertical size={17} />
                  </button>
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => reorder(id, index - 1)}
                    aria-label={t("Move {title} up").replace(
                      "{title}",
                      track.title,
                    )}
                  >
                    <ArrowUp size={17} />
                  </button>
                  <button
                    type="button"
                    disabled={index === ids.length - 1}
                    onClick={() => reorder(id, index + 1)}
                    aria-label={t("Move {title} down").replace(
                      "{title}",
                      track.title,
                    )}
                  >
                    <ArrowDown size={17} />
                  </button>
                </div>
              ) : (
                <span className="track-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </article>
          );
        })}
      </div>
      <aside
        ref={panel}
        className={`music-player-panel ${current ? "has-track" : ""}`}
        aria-label={t("Audio player")}
      >
        <div className="music-player-inner wrap">
          <div className="now-playing">
            <div className="now-playing-art" aria-hidden="true">
              {current?.artwork ? (
                <img
                  src={safeUrl(current.artwork)}
                  alt=""
                  width="56"
                  height="56"
                />
              ) : (
                <Disc3 size={25} />
              )}
            </div>
            <div className="now-playing-copy">
              <span className="eyebrow">
                {t(playing ? "Now playing" : "Audio player")}
              </span>
              <p aria-live="polite">
                {current?.title ?? t("Choose a track to listen")}
              </p>
              {current?.artist && (
                <span className="now-playing-artist">{current.artist}</span>
              )}
            </div>
          </div>
          <div className="music-compact-controls">
            {transport()}
            {progress("compact-seek")}
          </div>
          <button
            type="button"
            className="music-expand-button"
            disabled={!current}
            onClick={openExpanded}
            aria-label={t("Open now playing")}
          >
            <Maximize2 size={20} />
          </button>
          <audio
            ref={audio}
            controls
            hidden
            className="music-audio-source"
            preload="none"
            loop={repeat === "one"}
            aria-label={t("Audio player")}
            onPlay={() => {
              setPlaying(true);
              setFailed(false);
            }}
            onPause={() => setPlaying(false)}
            onEnded={ended}
            onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => {
              if (Number.isFinite(e.currentTarget.duration))
                setDuration(e.currentTarget.duration);
            }}
            onError={() => {
              if (activeId.current) {
                setFailed(true);
                setPlaying(false);
              }
            }}
          />
          {failed && (
            <p className="audio-error" role="alert">
              {t("This track could not be played. Please try again.")}
            </p>
          )}
        </div>
      </aside>
      <dialog
        ref={dialog}
        className="expanded-music"
        aria-labelledby="expanded-title"
        onClose={() => setExpanded(false)}
      >
        <header className="expanded-music-header">
          <span className="eyebrow">
            {t("Now playing")} / {site.brand}
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label={t("Close now playing")}
          >
            <X size={23} />
          </button>
        </header>
        <div className="expanded-music-layout">
          <section className="expanded-music-card">
            <div className="expanded-artwork">
              {current?.artwork ? (
                <img
                  src={safeUrl(current.artwork)}
                  alt=""
                  width="480"
                  height="480"
                />
              ) : (
                <Disc3 size={90} />
              )}
            </div>
            <h2 id="expanded-title">
              {current?.title ?? t("Choose a track to listen")}
            </h2>
            <p className="expanded-artist">{current?.artist}</p>
            {progress("expanded-seek")}
            {transport()}
            <label className="music-volume">
              <Volume2 size={17} />
              <span>{t("Volume")}</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setVolume(value);
                  if (audio.current) audio.current.volume = value;
                }}
              />
            </label>
            {failed && (
              <p className="audio-error" role="alert">
                {t("This track could not be played. Please try again.")}
              </p>
            )}
          </section>
          <section className="lyrics-panel" aria-labelledby="lyrics-title">
            <span className="eyebrow" id="lyrics-title">
              {t("Lyrics")}
            </span>
            {current?.lyrics ? (
              <p className="track-lyrics" lang={current.lyrics.language}>
                {current.lyrics.text}
              </p>
            ) : (
              <p className="lyrics-empty">
                {t("Lyrics have not been added for this track yet.")}
              </p>
            )}
          </section>
        </div>
      </dialog>
      <p className="music-listening-note">
        {t("Open Now playing to view artwork and lyrics.")}
      </p>
      <p className="music-listening-note">
        {t(
          "Playback starts only when you press play. Leaving this page stops the music.",
        )}
      </p>
    </section>
  );
}
