import { Link } from "react-router-dom";
import { profile, servicesContent } from "../data/portfolio";
import myPhoto from "../assets/Images/MyPhoto.jpeg";

export function ServicesPage() {
  return (
    <main>
      <section className="section services-hero reveal">
        <div className="services-hero-inner card">
          <div className="services-hero-visual">
            <div className="services-hero-photo-card">
              <div className="services-hero-photo-glow" aria-hidden="true" />
              <img
                src={myPhoto}
                alt={`${profile.name}, ${profile.title}`}
                className="services-hero-photo"
                width={640}
                height={640}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="services-hero-copy">
            <p className="section-eyebrow">Work with me</p>
            <h1 className="services-hero-title">{servicesContent.headline}</h1>
            <p className="services-hero-intro">{servicesContent.intro}</p>
            <p className="services-hero-meta">
              <span>{profile.title}</span>
              <span className="services-hero-meta-sep" aria-hidden="true">
                ·
              </span>
              <span>{profile.location}</span>
            </p>
            <p className="services-hero-back page-back">
              <Link to="/" className="link-back">
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="services-offerings card">
          <h2 className="card-title">What I can help with</h2>
          <ul className="services-list">
            {servicesContent.offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="services-closing">{servicesContent.closing}</p>
          <div className="services-contact-cta">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="btn btn-primary"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
