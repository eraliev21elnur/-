import { useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowUpRight, Disc3 } from "lucide-react";
import { useLocale } from "../i18n";
import { publishedTracks } from "../data/tracks";
import { MusicPlayer } from "../components/MusicPlayer";
import { NotFound } from "./ProjectDetail";
import { musicTrackPath } from "../lib/music";
import { site } from "../data/site";
export function Music() {
  const { t } = useLocale();
  const { trackId } = useParams();
  const navigate = useNavigate();
  const changeTrack = useCallback(
    (id: string) => navigate(musicTrackPath(id), { replace: true }),
    [navigate],
  );
  const openTrack = useCallback(
    (id: string) => navigate(musicTrackPath(id)),
    [navigate],
  );
  if (trackId && !publishedTracks.some((track) => track.id === trackId))
    return <NotFound />;
  return (
    <div className="discipline-page music-page wrap">
      <div className="breadcrumb">
        <Link to="/">{t("Home")}</Link>
        <span>/</span>
        <span>{t("Music")}</span>
      </div>
      <header className="discipline-heading">
        <div>
          <span className="eyebrow">
            {t("Composition / Production / Mixing / Mastering")}
          </span>
          <h1>
            {t("Music")}
            <span>.</span>
          </h1>
        </div>
        <p>
          {t(
            "Original music by FULL CORE. From the first idea to the final master.",
          )}
        </p>
      </header>
      {publishedTracks.length ? (
        <MusicPlayer
          tracks={publishedTracks}
          trackId={trackId}
          onTrackChange={changeTrack}
          onTrackOpen={openTrack}
        />
      ) : (
        <section className="music-empty">
          <div className="music-disc" aria-hidden="true">
            <Disc3 strokeWidth={0.65} />
          </div>
          <div>
            <span className="eyebrow">{t("An independent practice")}</span>
            <h2>{t("A different way to tell a story.")}</h2>
            <p>{t(site.musicAbout)}</p>
            <p className="music-release-note">
              {t("Original tracks will appear here when ready to share.")}
            </p>
          </div>
        </section>
      )}
      <div className="discipline-end">
        <span className="eyebrow">{t("Have a collaboration in mind?")}</span>
        <Link className="arrow-link" to="/contact">
          {t("Get in touch")}
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
