import { useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  profile,
  skillCategories,
  allProjects,
  homeFeaturedProjectCount,
  experience,
  education,
  resumePdfPath,
} from "../data/portfolio";
import myPhoto from "../assets/Images/MyPhoto.jpeg";
import { ProjectCard } from "../components/ProjectCard";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: {} });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.state, location.pathname, navigate]);

  const featured = allProjects.slice(0, homeFeaturedProjectCount);

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Portfolio</p>
          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToId("projects")}
            >
              View projects
            </button>
            <Link className="btn btn-ghost" to="/services">
              Request services
            </Link>
            <Link className="btn btn-ghost" to="/cv">
              See CV
            </Link>
            <a
              className="btn btn-ghost"
              href={resumePdfPath}
              download={`${profile.name.replace(/\s+/g, "-")}-Resume.pdf`}
            >
              Download CV
            </a>
          </div>
          <div className="hero-meta">
            <span className="meta-pill">{profile.location}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <img
              src={myPhoto}
              alt={`${profile.name}, ${profile.title}`}
              className="hero-avatar"
              width={640}
              height={640}
              decoding="async"
              fetchPriority="high"
            />
            <div className="hero-card-glow" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section id="about" className="section section-about reveal">
        <div className="section-head">
          <h2>About</h2>
          <p className="section-lead">
            Background, studies, and how I approach the web.
          </p>
        </div>
        <div className="about-card card">
          <p className="about-text">{profile.bio}</p>
        </div>
      </section>

      <section id="skills" className="section section-skills reveal">
        <div className="section-head">
          <p className="section-eyebrow">Tech stack</p>
          <h2>Skills</h2>
          <p className="section-lead">
            Technologies I use to design, build, and ship frontend experiences.
          </p>
        </div>
        <div className="skill-category-grid">
          {skillCategories.map((cat, ci) => (
            <article
              key={cat.id}
              className="skill-category card"
              style={{ "--stagger": ci }}
            >
              <div className="skill-category-head">
                <span className="skill-category-index" aria-hidden="true">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="skill-category-title">{cat.title}</h3>
                  <p className="skill-category-blurb">{cat.blurb}</p>
                </div>
              </div>
              <ul className="skill-list skill-list--in-card">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    <span className="skill-pill-dot" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section reveal">
        <div className="section-head">
          <h2>Featured projects</h2>
          <p className="section-lead">
            Recent React apps with live demos and source on GitHub. See the full
            list on the projects page.
          </p>
        </div>
        <div className="project-grid">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="section-actions">
          <Link className="btn btn-primary" to="/projects">
            Show more projects
          </Link>
        </div>
      </section>

      <section id="experience" className="section reveal">
        <div className="section-head">
          <h2>Experience & education</h2>
          <p className="section-lead">
            My current development focus and education journey.
          </p>
        </div>
        <div className="two-col">
          <div className="card timeline-card">
            <h3 className="card-title">Focus</h3>
            <ul className="timeline">
              {experience.map((job) => (
                <li key={`${job.company}-${job.period}`}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-body">
                    <p className="timeline-role">{job.role}</p>
                    <p className="timeline-meta">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="timeline-company-link"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}{" "}
                      · {job.period}
                    </p>
                    <p className="timeline-detail">{job.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card timeline-card">
            <h3 className="card-title">Education</h3>
            <ul className="timeline timeline--compact">
              {education.map((ed) => (
                <li key={`${ed.school}-${ed.period}`}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-body">
                    <p className="timeline-role">{ed.degree}</p>
                    <p className="timeline-meta">
                      {ed.school} · {ed.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
