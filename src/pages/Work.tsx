import { useLocale } from "../i18n";
import { useState, useSyncExternalStore } from "react";
import { useSearchParams } from "react-router-dom";
import {
  categories,
  filterProjects,
  publishedProjects,
} from "../data/projects";
import { EmptyWork, ProjectCard, ContactCTA } from "../components/UI";
const subscribeHydration = () => () => {};
export function Work() {
  const { t } = useLocale();
  const [params, setParams] = useSearchParams();
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    () => true,
    () => false,
  );
  const category =
    hydrated && categories.some((c) => c.id === params.get("category"))
      ? params.get("category")!
      : "all";
  const [limit, setLimit] = useState(12);
  const items = filterProjects(publishedProjects, category);
  return (
    <>
      <section className="wrap page-top">
        <span className="eyebrow">
          {t("The portfolio / Film, motion & more")}
        </span>
        <h1>
          {t("ALL WORK")}
          <span className="heading-dot">.</span>
        </h1>
        <p className="page-lead">
          {t("Different formats. One eye for detail.")}
        </p>
        <div className="filters" role="group" aria-label={t("Filter projects")}>
          {[
            {
              id: "all",
              label: "All",
            },
            ...categories,
          ].map((c) => (
            <button
              key={c.id}
              aria-pressed={category === c.id}
              onClick={() => {
                setParams(
                  c.id === "all"
                    ? {}
                    : {
                        category: c.id,
                      },
                  {
                    replace: true,
                  },
                );
                setLimit(12);
              }}
            >
              {t(c.label)}
              <span>
                {c.id === "all"
                  ? publishedProjects.length
                  : filterProjects(publishedProjects, c.id).length}
              </span>
            </button>
          ))}
        </div>
        <div aria-live="polite" className="sr-only">
          {t("Projects")}: {items.length}
        </div>
        {items.length ? (
          <>
            <div className="work-grid">
              {items.slice(0, limit).map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
            {items.length > limit && (
              <button
                className="load-more"
                onClick={() => setLimit(limit + 12)}
              >
                {t("Load more projects")}
              </button>
            )}
          </>
        ) : (
          <EmptyWork filtered={category !== "all"} />
        )}
      </section>
      <ContactCTA />
    </>
  );
}
