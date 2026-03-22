import { useEffect, useState } from "react";
import {
  profile,
  socialLinks,
  skillCategories,
  projects,
  experience,
  education,
} from "./data/portfolio";
import myPhoto from "./assets/Images/MyPhoto.jpeg";
import "./App.css";

function IconMail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconGitHub(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialIcon({ label, className }) {
  if (label === "GitHub") return <IconGitHub className={className} />;
  if (label === "LinkedIn") return <IconLinkedIn className={className} />;
  return null;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      /* ignore */
    }
  }

  const nameParts = profile.name.trim().split(/\s+/);
  const logoFirstName = nameParts[0] ?? "";
  const logoRestName = nameParts.slice(1).join(" ");

  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--1" aria-hidden="true" />
      <div className="bg-glow bg-glow--2" aria-hidden="true" />

      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="site-header__top">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="logo-photo-wrap">
              <img
                src={myPhoto}
                alt=""
                className="logo-photo"
                width="44"
                height="44"
              />
            </span>
            <span className="logo-wordmark">
              <span className="logo-name logo-name--first">{logoFirstName}</span>
              {logoRestName ? (
                <>
                  <span className="logo-name-sep" aria-hidden="true" />
                  <span className="logo-name logo-name--last">{logoRestName}</span>
                </>
              ) : null}
            </span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-label="Menu"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`site-nav ${navOpen ? "site-nav--open" : ""}`}>
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(id);
                    setNavOpen(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

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
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => scrollToId("contact")}
              >
                Get in touch
              </button>
            </div>
            <div className="hero-meta">
              <span className="meta-pill">{profile.location}</span>
              <a
                className="meta-pill meta-pill--link"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              {profile.phoneTel ? (
                <a
                  className="meta-pill meta-pill--link"
                  href={profile.phoneTel}
                >
                  {profile.phone}
                </a>
              ) : null}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <img
                src={myPhoto}
                alt={`${profile.name}, ${profile.title}`}
                className="hero-avatar"
              />
              <div className="hero-card-glow" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="about" className="section section-about">
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

        <section id="skills" className="section section-skills">
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

        <section id="projects" className="section">
          <div className="section-head">
            <h2>Projects</h2>
            <p className="section-lead">
              Selected frontend work—live demos and GitHub sources.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article
                key={p.id}
                className="project-card card"
                style={{ "--stagger": i }}
              >
                <div className="project-card-top">
                  <span className="project-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{p.name}</h3>
                </div>
                <p className="project-desc">{p.description}</p>
                <ul className="project-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {p.liveUrl ? (
                    <a
                      className="btn btn-small btn-primary"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live site
                    </a>
                  ) : null}
                  {p.repoUrl ? (
                    <a
                      className="btn btn-small btn-ghost"
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Source
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <h2>Experience & education</h2>
            <p className="section-lead">
              What I&apos;m focused on and where I study.
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
                        {job.company} · {job.period}
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

        <section id="contact" className="section section-contact">
          <div className="section-head">
            <h2>Get in touch</h2>
            <p className="section-lead">
              Have a project, question, or opportunity? Reach out by email or
              phone—or connect on socials.
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-panel card">
              <div className="contact-panel-top">
                <div className="contact-panel-photo-ring">
                  <img
                    src={myPhoto}
                    alt=""
                    className="contact-panel-photo"
                    width="112"
                    height="112"
                  />
                </div>
                <div className="contact-panel-intro">
                  <p className="contact-panel-eyebrow">Let&apos;s talk</p>
                  <h3 className="contact-panel-name">{profile.name}</h3>
                  <p className="contact-panel-role">{profile.title}</p>
                  <p className="contact-panel-loc">{profile.location}</p>
                </div>
              </div>

              <div className="contact-tiles">
                <a className="contact-tile" href={`mailto:${profile.email}`}>
                  <span className="contact-tile-icon" aria-hidden>
                    <IconMail />
                  </span>
                  <span className="contact-tile-body">
                    <span className="contact-tile-label">Email</span>
                    <span className="contact-tile-value">{profile.email}</span>
                  </span>
                  <span className="contact-tile-chevron" aria-hidden>
                    →
                  </span>
                </a>
                {profile.phoneTel ? (
                  <a className="contact-tile" href={profile.phoneTel}>
                    <span className="contact-tile-icon" aria-hidden>
                      <IconPhone />
                    </span>
                    <span className="contact-tile-body">
                      <span className="contact-tile-label">Phone</span>
                      <span className="contact-tile-value">
                        {profile.phone}
                      </span>
                    </span>
                    <span className="contact-tile-chevron" aria-hidden>
                      →
                    </span>
                  </a>
                ) : null}
              </div>

              <div className="contact-copy-row">
                <button
                  type="button"
                  className="btn-copy-email"
                  onClick={copyEmail}
                >
                  {emailCopied ? "Copied to clipboard" : "Copy email address"}
                </button>
              </div>

              <p className="contact-social-heading">Social</p>
              <ul className="contact-pills">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      className="contact-pill"
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <SocialIcon
                        label={s.label}
                        className="contact-pill-icon"
                      />
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Copyright © DaudKhalil All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
