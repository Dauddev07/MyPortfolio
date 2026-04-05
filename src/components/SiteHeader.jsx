import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/portfolio";
import myPhoto from "../assets/Images/MyPhoto.jpeg";

const sectionIds = ["about", "skills", "projects", "experience", "contact"];

export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNavId, setActiveNavId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    let ticking = false;

    function updateActiveNav() {
      const headerEl = document.querySelector(".site-header");
      const headerH = headerEl?.getBoundingClientRect().height ?? 72;
      const scrollY = window.scrollY;
      const heroHandoff = 96;

      if (scrollY < heroHandoff) {
        setActiveNavId(null);
        return;
      }

      const marker = scrollY + headerH + 28;
      let current = null;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) {
          current = id;
        }
      }

      setActiveNavId(current);
    }

    function onScrollOrResize() {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
          updateActiveNav();
        });
        ticking = true;
      }
    }

    updateActiveNav();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeIfDesktop = () => {
      if (mq.matches) setNavOpen(false);
    };
    mq.addEventListener("change", closeIfDesktop);
    closeIfDesktop();
    return () => mq.removeEventListener("change", closeIfDesktop);
  }, []);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function goSection(id) {
    setNavOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  const nameParts = profile.name.trim().split(/\s+/);
  const logoFirstName = nameParts[0] ?? "";
  const logoRestName = nameParts.slice(1).join(" ");

  return (
    <header
      className={`site-header site-header--enter ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <div className="site-header__top">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            setNavOpen(false);
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
              loading="lazy"
              decoding="async"
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
        </Link>

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
          {!isHome ? (
            <li>
              <Link
                to="/"
                onClick={() => {
                  setNavOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
            </li>
          ) : null}
          <li>
            <a
              href="/#about"
              className={isHome && activeNavId === "about" ? "is-active" : undefined}
              aria-current={
                isHome && activeNavId === "about" ? "location" : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                goSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className={isHome && activeNavId === "skills" ? "is-active" : undefined}
              aria-current={
                isHome && activeNavId === "skills" ? "location" : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                goSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className={isHome && activeNavId === "projects" ? "is-active" : undefined}
              aria-current={
                isHome && activeNavId === "projects" ? "location" : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                goSection("projects");
              }}
            >
              Featured work
            </a>
          </li>
          <li>
            <a
              href="/#experience"
              className={
                isHome && activeNavId === "experience" ? "is-active" : undefined
              }
              aria-current={
                isHome && activeNavId === "experience" ? "location" : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                goSection("experience");
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className={
                isHome && activeNavId === "contact" ? "is-active" : undefined
              }
              aria-current={
                isHome && activeNavId === "contact" ? "location" : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                goSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
