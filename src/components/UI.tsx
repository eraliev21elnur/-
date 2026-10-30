import { Artwork } from "./Artwork";
import { localizeProject } from "../i18n/content";
import { useLocale } from "../i18n";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categoryLabel, type Project } from "../data/projects";
import type { ReactNode } from "react";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reducedMotion ? undefined : { opacity: [0.75, 1], y: [16, 0] }
      }
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
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
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function EmptyWork({
  filtered = false,
}: {
  filtered?: boolean;
  discipline?: string;
}) {
  const { t } = useLocale();
  return (
    <div className="empty-work">
      <span className="empty-marker" aria-hidden="true">
        [ — ]
      </span>
      <div>
        <h3>
          {filtered
            ? t("No projects in this filter yet.")
            : t("No published projects yet.")}
        </h3>
        <p>
          {t("Projects will appear here once selected and ready to share.")}
        </p>
      </div>
    </div>
  );
}
export function ProjectCard({
  project: sourceProject,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const { t, language } = useLocale();
  const project = localizeProject(sourceProject, language);
  const [coverWidth, coverHeight] = (project.coverAspectRatio ?? "16/9")
    .split("/")
    .map(Number);
  const portrait = coverWidth / coverHeight < 0.85;
  return (
    <Reveal
      delay={Math.min(index * 0.04, 0.12)}
      className={`project-card ratio-${(project.coverAspectRatio ?? "16/9").replace("/", "-")} ${portrait ? "portrait-card" : ""}`}
    >
      <Link to={`/work/${project.slug}`} className="project-card-link">
        <div
          className="project-cover"
          style={{
            aspectRatio: project.coverAspectRatio ?? "16/9",
          }}
        >
          {project.coverImage ? (
            <Artwork
              key={project.coverImage}
              src={project.coverImage}
              fallbackSrc={project.coverFallback}
              alt={project.coverAlt ?? project.title}
              loading="lazy"
            />
          ) : (
            <span className="cover-missing">{t("Preview unavailable")}</span>
          )}
          {project.demo && (
            <span className="demo-badge">{t("Sample / Preview")}</span>
          )}
          <span className="cover-action">
            {t("View project")}
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="project-info">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{t(project.title)}</h3>
            <p>
              {t(categoryLabel(project.category))}
              {project.year ? ` / ${project.year}` : ""}
            </p>
          </div>
          <ArrowUpRight size={20} />
        </div>
      </Link>
    </Reveal>
  );
}
export function ContactCTA() {
  const { t } = useLocale();
  return (
    <section className="contact-cta wrap">
      <div>
        <span className="eyebrow">
          {t("Projects / Collaborations / Opportunities")}
        </span>
        <h2>{t("Let\u2019s make it happen.")}</h2>
      </div>
      <ArrowLink to="/contact">{t("Get in touch")}</ArrowLink>
    </section>
  );
}
