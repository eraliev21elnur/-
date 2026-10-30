import { useLocale } from "../i18n";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/paths";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { ContactCTA } from "../components/UI";
export function About() {
  const { t } = useLocale();
  return (
    <>
      <section className="wrap page-top about">
        <span className="eyebrow">
          {t("The person behind")} {site.brand}
        </span>
        <h1>
          {t("Behind the work")}
          <span className="heading-dot">.</span>
        </h1>
        <div className="about-story">
          <div className="portrait">
            {site.portrait ? (
              <img
                src={assetUrl(site.portrait)}
                alt={site.brand}
                width={960}
                height={1280}
                loading="lazy"
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-monogram">
                  {t("FC")}
                  <span>®</span>
                </span>
                <span className="eyebrow">
                  {t("Independent. Hands-on. Curious.")}
                </span>
                <span className="portrait-note">
                  {t("Portrait to be added")}
                </span>
              </div>
            )}
          </div>
          <div className="about-copy">
            <span className="eyebrow">
              {t("Based in")} {t(site.location)}
            </span>
            <h2>
              {t("Making visuals.")}
              <br />
              {t("From idea to final cut.")}
            </h2>
            <p>{t(site.about)}</p>
            <p>{t(site.experience)}</p>
            <p>{t(site.creativeBackground)}</p>
            <p>{t(site.musicAbout)}</p>
            <Link className="arrow-link" to="/music">
              {t("Explore my music")}
              <ArrowUpRight size={18} />
            </Link>
            {site.cv && (
              <a
                className="arrow-link"
                href={assetUrl(site.cv)}
                target="_blank"
                rel="noreferrer"
              >
                {t("Download CV")}
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
        <div className="about-lists">
          <section>
            <span className="eyebrow">{t("01 / What I do")}</span>
            <ul>
              {site.disciplines.map((d, i) => (
                <li key={d}>
                  <span>0{i + 1}</span>
                  {t(d)}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <span className="eyebrow">{t("02 / Tools I work with")}</span>
            <p className="small-copy tools-note">
              {t("A toolkit shaped by different projects.")}
            </p>
            <div className="tool-list">
              {site.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
