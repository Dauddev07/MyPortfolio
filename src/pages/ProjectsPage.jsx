import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { allProjects, homeFeaturedProjectCount } from "../data/portfolio";

export function ProjectsPage() {
  const location = useLocation();
  const [visibleCount, setVisibleCount] = useState(homeFeaturedProjectCount);

  useEffect(() => {
    if (location.state?.showAllProjects) {
      setVisibleCount(allProjects.length);
    }
  }, [location.state]);

  const hasMore = visibleCount < allProjects.length;

  return (
    <main>
      <div className="page-hero section reveal">
        <div className="section-head">
          <p className="section-eyebrow">Portfolio</p>
          <h1>All projects</h1>
          <p className="section-lead">
            Live demos and repositories — from product-style React apps to
            earlier static sites.
          </p>
          <p className="page-back">
            <Link to="/" className="link-back">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>

      <section className="section reveal">
        <div className="project-grid">
          {allProjects.slice(0, visibleCount).map((p, i) => (
            <ExpandableProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        {hasMore ? (
          <div className="section-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setVisibleCount(allProjects.length)}
            >
              Show more projects
            </button>
          </div>
        ) : null}
      </section>
    </main>
  );
}

function ExpandableProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const extra = project.extendedDescription;

  return (
    <article
      className="project-card card project-card--expandable"
      style={{ "--stagger": index }}
    >
      <div className="project-card-top">
        <span className="project-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{project.name}</h3>
      </div>
      <p className="project-desc">{project.description}</p>
      {extra && open ? (
        <p className="project-desc project-desc--more">{extra}</p>
      ) : null}
      <ul className="project-tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="project-links project-links--wrap">
        {extra ? (
          <button
            type="button"
            className="btn btn-small btn-ghost"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Show less" : "Show more"}
          </button>
        ) : null}
        {project.liveUrl ? (
          <a
            className="btn btn-small btn-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Live site
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            className="btn btn-small btn-ghost"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source
          </a>
        ) : null}
      </div>
    </article>
  );
}
