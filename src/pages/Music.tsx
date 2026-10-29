import { Link } from "react-router-dom";
import { ArrowUpRight, Disc3 } from "lucide-react";
import { useLocale } from "../i18n";
import { publishedTracks } from "../data/tracks";
import { MusicPlayer } from "../components/MusicPlayer";
import { site } from "../data/site";
export function Music() {
  const { t } = useLocale();
  const hasDemos = publishedTracks.some((track) => track.demo);
  const demosOnly = hasDemos && publishedTracks.every((track) => track.demo);
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
            demosOnly
              ? "Playback demos for testing the music player."
              : "Original music by FULL CORE. From the first idea to the final master.",
          )}
        </p>
      </header>
      {hasDemos && (
        <p className="music-demo-note">
          {t(
            "These procedural music samples are for testing. They are not FULL CORE releases.",
          )}
        </p>
      )}
      {publishedTracks.length ? (
        <MusicPlayer tracks={publishedTracks} />
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
