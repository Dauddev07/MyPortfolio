import { Link } from "react-router-dom";
import { profile, resumePdfPath } from "../data/portfolio";

const downloadName = `${profile.name.replace(/\s+/g, "-")}-Resume.pdf`;

export function CvPage() {
  return (
    <main>
      <div className="page-hero section reveal">
        <div className="section-head">
          <p className="section-eyebrow">Resume</p>
          <h1>Curriculum vitae</h1>
          <p className="section-lead">
            Preview below, open the PDF in a new tab, or download a copy.
          </p>
          <div className="resume-actions cv-page-hero-actions">
            <a
              className="btn btn-primary"
              href={resumePdfPath}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open in new tab
            </a>
            <a
              className="btn btn-ghost"
              href={resumePdfPath}
              download={downloadName}
            >
              Download CV
            </a>
          </div>
          <p className="page-back">
            <Link to="/" className="link-back">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>

      <section className="section reveal">
        <div className="resume-frame-wrap card">
          <iframe
            title="Resume PDF"
            className="resume-frame"
            src={`${resumePdfPath}#view=FitH`}
          />
        </div>
      </section>
    </main>
  );
}
