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
import { ContactCTA, ProjectCard, Reveal } from "../components/UI";
import { MediaPlayer } from "../components/MediaPlayer";
export function Home() {
  const { t } = useLocale();
  const [reelOpen, setReelOpen] = useState(false);
  return (
    <>
      <section className="home-intro wrap" aria-labelledby="home-title">
        <h1 id="home-title">{site.brand}</h1>
        <p className="home-intro-roles">{t(site.homeIntro.roles)}</p>
        <p className="home-intro-description">
          {t(site.homeIntro.description)}
        </p>
        <div className="home-intro-footer">
          <p className="home-intro-location">
            {t(site.homeIntro.availability)}
          </p>
          <div className="home-intro-actions">
            <Link className="home-about-button" to="/about">
              {t("About Me")}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="explore-link" href="#explore">
              {t("Explore my work")}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
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
              const image = site.homeCovers[d.id] || preview?.coverImage;
              return (
                <Reveal
                  key={d.id}
                  className="discipline-reveal"
                  delay={i * 0.05}
                >
                  <Link
                    className={`discipline-tile tile-${d.id}`}
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
                    {d.id === "music" && !image && (
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
                      <p>
                        {t(
                          site.homeIntro.categoryDescriptions[d.id] ??
                            d.description,
                        )}
                      </p>
                    </div>
                    {preview?.demo && (
                      <span className="tile-sample">{t("Sample imagery")}</span>
                    )}
                  </Link>
                </Reveal>
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
