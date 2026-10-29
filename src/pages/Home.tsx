import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { site } from "../data/site";
import { selectedProjects } from "../data/projects";
import {
  disciplines,
  disciplineVisible,
  projectsForDiscipline,
} from "../data/disciplines";
import { assetUrl } from "../lib/paths";
import { ContactCTA, ProjectCard } from "../components/UI";
import { MediaPlayer } from "../components/MediaPlayer";
export function Home() {
  const [reelOpen, setReelOpen] = useState(false);
  return (
    <>
      <section className="home-hero wrap">
        <div className="hero-caption">
          <span className="eyebrow">
            Filmmaker / Motion designer / Visual creator
          </span>
          <span className="eyebrow">Independent / {site.location}</span>
        </div>
        <div className="hero-composition">
          <h1>
            {site.tagline}
            <br />
            <span>Without limits.</span>
          </h1>
          <div className="hero-mark" aria-hidden="true">
            <span className="mark-top">FULL CORE / VISUAL WORKS</span>
            <div className="aperture">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="mark-bottom">FILM — MOTION — FORM</span>
          </div>
        </div>
        <div className="hero-summary">
          <div>
            <p className="hero-disciplines">{site.subtitle}</p>
            <p className="hero-location">
              Independent visual creator based in {site.location}.
            </p>
          </div>
          <a className="explore-link" href="#explore">
            Explore my work <ArrowDown size={18} />
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
              {reelOpen ? "Close showreel" : "Watch showreel"}
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
            Explore my work<span>.</span>
          </h2>
          <span className="eyebrow">Choose a discipline</span>
        </div>
        <div className="discipline-grid">
          {disciplines
            .filter((d) => disciplineVisible(d.id))
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
                  {d.id === "3d-vfx" && (
                    <div className="wire-art" aria-hidden="true">
                      {Array.from({ length: 7 }, (_, i) => (
                        <i
                          key={i}
                          style={{ transform: `rotate(${i * 25}deg)` }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="tile-top">
                    <span className="eyebrow">
                      0{i + 1} / {d.short}
                    </span>
                    <ArrowUpRight size={26} />
                  </div>
                  <div className="tile-copy">
                    <h3>{d.title}</h3>
                    <p>{d.description}</p>
                  </div>
                  {preview?.demo && (
                    <span className="tile-sample">Sample imagery</span>
                  )}
                </Link>
              );
            })}
        </div>
      </section>
      <section className="home-selected wrap">
        <div className="section-heading">
          <h2>
            Selected works<span>.</span>
          </h2>
          <span className="eyebrow">A focused selection</span>
        </div>
        {selectedProjects.length ? (
          <div className="selected-grid">
            {selectedProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="selected-empty">
            Confirmed projects will appear here.{" "}
            {site.demoMode && (
              <span>Layout samples are available inside each discipline.</span>
            )}
          </p>
        )}
      </section>
      <ContactCTA />
    </>
  );
}
