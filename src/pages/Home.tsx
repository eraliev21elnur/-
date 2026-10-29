import { useLocale } from "../i18n";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Play, Disc3 } from "lucide-react";
import { site } from "../data/site";
import { selectedProjects } from "../data/projects";
import {
  homeCategories,
  disciplineVisible,
  projectsForDiscipline,
} from "../data/disciplines";
import { assetUrl } from "../lib/paths";
import { ContactCTA, ProjectCard } from "../components/UI";
import { MediaPlayer } from "../components/MediaPlayer";
export function Home() {
  const { t } = useLocale();
  const [reelOpen, setReelOpen] = useState(false);
  return (
    <>
      <section className="home-hero wrap">
        <div className="hero-caption">
          <span className="eyebrow">
            {t("Filmmaker / Motion designer / Visual creator")}
          </span>
          <span className="eyebrow">
            {t("Independent /")} {t(site.location)}
          </span>
        </div>
        <div className="hero-composition">
          <h1>
            {t(site.tagline)}
            <br />
            <span>{t("Without limits.")}</span>
          </h1>
          <div className="hero-mark" aria-hidden="true">
            <span className="mark-top">{t("FULL CORE / VISUAL WORKS")}</span>
            <div className="aperture">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="mark-bottom">
              {t("FILM \u2014 MOTION \u2014 FORM")}
            </span>
          </div>
        </div>
        <div className="hero-summary">
          <div>
            <p className="hero-disciplines">{t(site.subtitle)}</p>
            <p className="hero-location">
              {t("Independent visual creator")} · {t(site.location)}
            </p>
          </div>
          <a className="explore-link" href="#explore">
            {t("Explore my work")}
            <ArrowDown size={18} />
          </a>
        </div>
        {site.showreel && (
          <div className="home-showreel">
            <button
              className="text-button"
              aria-expanded={reelOpen}
              onClick={() => setReelOpen(!reelOpen)}
            >
              <Play size={15} />
              {reelOpen ? t("Close showreel") : t("Watch showreel")}
            </button>
            {reelOpen && (
              <MediaPlayer
                media={site.showreel}
                title={`${site.brand} showreel`}
              />
            )}
          </div>
        )}
      </section>
      <section className="work-doorways wrap" id="explore">
        <div className="section-heading">
          <h2>
            {t("Explore my work")}
            <span>.</span>
          </h2>
          <span className="eyebrow">{t("Choose a discipline")}</span>
        </div>
        <div className="discipline-grid">
          {homeCategories
            .filter((d) => d.id === "music" || disciplineVisible(d.id))
            .map((d, i) => {
              const preview = projectsForDiscipline(d.id)[0];
              const image = preview?.coverImage;
              return (
                <Link
                  className={`discipline-tile tile-${d.id}`}
                  key={d.id}
                  to={`/${d.id}`}
                >
                  {image && (
                    <img
                      className="tile-image"
                      src={assetUrl(image)}
                      alt=""
                      loading="lazy"
                    />
                  )}
                  {d.id === "music" && (
                    <div className="tile-music-art" aria-hidden="true">
                      <Disc3 strokeWidth={0.6} />
                    </div>
                  )}
                  <div className="tile-top">
                    <span className="eyebrow">
                      0{i + 1} / {t(d.short)}
                    </span>
                    <ArrowUpRight size={26} />
                  </div>
                  <div className="tile-copy">
                    <h3>{t(d.title)}</h3>
                    <p>{t(d.description)}</p>
                  </div>
                  {preview?.demo && (
                    <span className="tile-sample">{t("Sample imagery")}</span>
                  )}
                </Link>
              );
            })}
        </div>
      </section>
      <section className="home-selected wrap">
        <div className="section-heading">
          <h2>
            {t("Selected works")}
            <span>.</span>
          </h2>
          <span className="eyebrow">{t("A focused selection")}</span>
        </div>
        {selectedProjects.length ? (
          <div className="selected-grid">
            {selectedProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="selected-empty">
            {t("Confirmed projects will appear here.")}{" "}
            {site.demoMode && (
              <span>
                {t("Layout samples are available inside each discipline.")}
              </span>
            )}
          </p>
        )}
      </section>
      <ContactCTA />
    </>
  );
}
