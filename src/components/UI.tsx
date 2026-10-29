import { assetUrl } from "../lib/paths";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { categoryLabel, type Project } from "../data/projects";
import type { ReactNode } from "react";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: [0.65, 1], y: [12, 0] }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export function ArrowLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`arrow-link ${className}`} to={to}>
      {children}
      <ArrowUpRight size={19} />
    </Link>
  );
}
export function EmptyWork({ filtered = false }: { filtered?: boolean }) {
  return (
    <div className="empty-work">
      <span className="eyebrow">
        {filtered ? "Nothing here yet" : "Portfolio in progress"}
      </span>
      <h3>{filtered ? "More work, in time." : "The work comes first."}</h3>
      <p>
        {filtered
          ? "Projects in this discipline will appear here when selected."
          : "Selected films and visual projects are being prepared for this space. In the meantime, explore my existing work on Telegram."}
      </p>
      <a
        className="arrow-link"
        href={site.socialLinks[0].url}
        target="_blank"
        rel="noreferrer"
      >
        Explore Telegram portfolio
        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal
      className={`project-card ratio-${(project.coverAspectRatio ?? "16/9").replace("/", "-")}`}
    >
      <Link to={`/work/${project.slug}`} className="project-card-link">
        <div
          className="project-cover"
          style={{ aspectRatio: project.coverAspectRatio ?? "16/9" }}
        >
          {project.coverImage ? (
            <img
              src={assetUrl(project.coverImage)}
              alt={project.coverAlt ?? project.title}
              loading="lazy"
            />
          ) : (
            <span className="cover-missing">Preview unavailable</span>
          )}
          {project.demo && <span className="demo-badge">Sample / Preview</span>}
          <span className="cover-action">
            View project <ArrowUpRight size={20} />
          </span>
        </div>
        <div className="project-info">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{project.title}</h3>
            <p>
              {categoryLabel(project.category)}
              {project.year ? ` / ${project.year}` : ""}
            </p>
          </div>
          <ArrowUpRight className="project-arrow" size={24} />
        </div>
      </Link>
    </Reveal>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-cta wrap">
      <span className="eyebrow">Have something in mind?</span>
      <Link to="/contact" className="contact-title">
        LET’S MAKE
        <br />
        <span>IT HAPPEN.</span>
        <ArrowUpRight aria-hidden="true" />
      </Link>
      <div className="cta-bottom">
        <span>Creative projects. New possibilities.</span>
        <Link to="/contact">
          Get in touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
