import { useLocale } from "../i18n";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
export function Contact() {
  const { t } = useLocale();
  return (
    <section className="wrap page-top contact-page">
      <div className="contact-intro">
        <span className="eyebrow">{t("New conversations start here")}</span>
        {site.available && (
          <span className="availability">
            <i />
            {t(site.availability)}
          </span>
        )}
      </div>
      <h1>
        {t("Let\u2019s talk")}
        <br />
        <span className="muted">{t("Make something.")}</span>
      </h1>
      <p className="page-lead">
        {t("A project, a collaboration, or a new opportunity.")}
        <br />
        {t("I\u2019d like to hear about it.")}
      </p>
      <div className="contact-links">
        {site.email && (
          <a href={`mailto:${site.email}`}>
            <span>
              <small>{t("Email")}</small>
              {site.email}
            </span>
            <ArrowUpRight />
          </a>
        )}
        {site.socialLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            <span>
              <small>{t(link.label)}</small>
              {link.value}
            </span>
            <ArrowUpRight />
          </a>
        ))}
        <a href={`tel:${site.phone.number}`}>
          <span>
            <small>{t("Phone calls")}</small>
            {site.phone.display}
          </span>
          <ArrowUpRight />
        </a>
      </div>
      <div className="contact-note">
        <span className="eyebrow">{t(site.location)}</span>
        <span>{t("Film / Motion / Commercial production")}</span>
      </div>
    </section>
  );
}
