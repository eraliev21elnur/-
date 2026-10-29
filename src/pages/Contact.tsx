import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
export function Contact() {
  return (
    <section className="wrap page-top contact-page">
      <div className="contact-intro">
        <span className="eyebrow">New conversations start here</span>
        {site.available && (
          <span className="availability">
            <i />
            {site.availability}
          </span>
        )}
      </div>
      <h1>
        LET’S CREATE
        <br />
        <span className="muted">SOMETHING.</span>
      </h1>
      <p className="page-lead">
        A project, a collaboration, or a new opportunity.
        <br />
        I’d like to hear about it.
      </p>
      <div className="contact-links">
        {site.email && (
          <a href={`mailto:${site.email}`}>
            <span>
              <small>Email</small>
              {site.email}
            </span>
            <ArrowUpRight />
          </a>
        )}
        {site.socialLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            <span>
              <small>Find my work / Start a conversation</small>
              {link.label}
            </span>
            <ArrowUpRight />
          </a>
        ))}
      </div>
      <div className="contact-note">
        <span className="eyebrow">{site.location}</span>
        <span>Film / Motion / Commercial production</span>
      </div>
    </section>
  );
}
