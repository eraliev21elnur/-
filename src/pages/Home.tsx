import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { demoShowreel } from "../data/demo";
import { site } from "../data/site";
import { selectedProjects } from "../data/projects";
import {
  ArrowLink,
  ContactCTA,
  EmptyWork,
  ProjectCard,
  Reveal,
} from "../components/UI";
import { MediaPlayer } from "../components/MediaPlayer";
export function Home() {
  const heroMedia = site.showreel ?? (site.demoMode ? demoShowreel : undefined);
  return (
    <>
      <section className="hero wrap">
        <div className="hero-top">
          <span className="eyebrow">Independent visual creator</span>
          <span className="eyebrow hero-location">
            Based in {site.location} / Working everywhere
          </span>
        </div>
        <h1>{site.tagline}</h1>
        <div className="hero-bottom">
          <p>{site.subtitle}</p>
          <a
            href="#selected"
            className="circle-link"
            aria-label="Scroll to selected work"
          >
            <ArrowDown size={21} />
          </a>
        </div>
        <div className="hero-media">
          {heroMedia ? (
            <MediaPlayer
              media={heroMedia}
              title={
                site.demoMode && !site.showreel
                  ? "Sample motion loop"
                  : `${site.brand} showreel`
              }
            />
          ) : (
            <div className="reel-placeholder">
              <img
                className="core-art"
                src="/core-study.svg"
                alt=""
                width="1600"
                height="800"
                fetchPriority="high"
              />
              <div className="media-top">
                <span className="eyebrow">{site.brand} / Visual identity</span>
                <span className="crosshair">+</span>
              </div>
              <div className="core-caption">
                <span className="eyebrow">Film. Motion. Form.</span>
                <p>Ideas take shape.</p>
              </div>
              <div className="media-bottom">
                <span>Abstract identity study — not portfolio footage</span>
                <span>
                  Showreel coming later <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="hero-footnote">
          <span>Image-making, from the ground up.</span>
          {site.available && (
            <span className="availability">
              <i />
              {site.availability}
            </span>
          )}
        </div>
      </section>
      <section className="selected wrap" id="selected">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">01 / The portfolio</span>
            <h2>
              SELECTED WORK<span className="heading-dot">.</span>
            </h2>
          </div>
          <ArrowLink to="/work">View all work</ArrowLink>
        </Reveal>
        {selectedProjects.length ? (
          <div className="selected-grid">
            {selectedProjects.map((p, i) => (
              <ProjectCard project={p} index={i} key={p.id} />
            ))}
          </div>
        ) : (
          <EmptyWork />
        )}
      </section>
      <section className="intro wrap">
        <Reveal className="intro-grid">
          <span className="eyebrow">02 / Behind the visuals</span>
          <div>
            <h2>
              A hands-on approach.
              <br />
              <span>A considered result.</span>
            </h2>
            <p>{site.approach}</p>
            <ArrowLink to="/about">More about me</ArrowLink>
          </div>
        </Reveal>
        <div className="discipline-strip">
          <span>Film & production</span>
          <span>Video editing</span>
          <span>Motion design</span>
          <span>3D & design</span>
        </div>
      </section>
      <ContactCTA />
      <div className="wrap home-end">
        <Link to="/work">
          Explore the archive <ArrowUpRight size={15} />
        </Link>
      </div>
    </>
  );
}
