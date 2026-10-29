import { assetUrl } from "../lib/paths";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { ContactCTA } from "../components/UI";
export function About() {
  return (
    <>
      <section className="wrap page-top about">
        <span className="eyebrow">The person behind {site.brand}</span>
        <h1>
          Behind the work<span className="heading-dot">.</span>
        </h1>
        <div className="about-story">
          <div className="portrait">
            {site.portrait ? (
              <img
                src={assetUrl(site.portrait)}
                alt={site.brand}
                loading="lazy"
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-monogram">
                  FC<span>®</span>
                </span>
                <span className="eyebrow">Independent. Hands-on. Curious.</span>
                <span className="portrait-note">Portrait to be added</span>
              </div>
            )}
          </div>
          <div className="about-copy">
            <span className="eyebrow">Based in {site.location}</span>
            <h2>
              Making visuals.
              <br />
              From idea to final cut.
            </h2>
            <p>{site.about}</p>
            <p>{site.experience}</p>
            <p className="small-copy">
              My existing portfolio is rooted in hands-on production, editing,
              motion graphics and design.
            </p>
            {site.cv && (
              <a
                className="arrow-link"
                href={assetUrl(site.cv)}
                target="_blank"
                rel="noreferrer"
              >
                Download CV <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="about-lists">
          <section>
            <span className="eyebrow">01 / What I do</span>
            <ul>
              {site.disciplines.map((d, i) => (
                <li key={d}>
                  <span>0{i + 1}</span>
                  {d}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <span className="eyebrow">02 / Tools I work with</span>
            <p className="small-copy tools-note">
              A toolkit shaped by different projects.
            </p>
            <div className="tool-list">
              {site.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
