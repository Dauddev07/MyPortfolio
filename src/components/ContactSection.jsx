import { useState } from "react";
import { profile, socialLinks } from "../data/portfolio";
import myPhoto from "../assets/Images/MyPhoto.jpeg";
import { IconMail, IconPhone, SocialIcon } from "./Icons";

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      /* ignore */
    }
  }

  return (
    <section id="contact" className="section section-contact reveal">
      <div className="section-head">
        <h2>Contact</h2>
        <p className="section-lead">
          Reach out for collaborations, freelance work, or questions about my
          projects.
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
                loading="lazy"
                decoding="async"
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
                  <span className="contact-tile-value">{profile.phone}</span>
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
                  <SocialIcon label={s.label} className="contact-pill-icon" />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
