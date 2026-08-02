import Link from "next/link";
import type { UpcomingApplication } from "../constants";

interface ApplicationComingSoonProps {
  application: UpcomingApplication;
}

export const ApplicationComingSoon = ({ application }: ApplicationComingSoonProps) => {
  return (
    <main className={`application-coming-soon ${application.accent}`}>
      <section className="coming-soon-hero">
        <div className="container coming-soon-layout">
          <div className="coming-soon-copy">
            <span className="eyebrow"><i /> {application.eyebrow}</span>
            <span className="coming-soon-status">In product research · Coming soon</span>
            <h1>{application.name} is joining the NamiOS platform.</h1>
            <p>{application.description}</p>
            <div className="coming-soon-actions">
              <a
                className="button"
                href={`mailto:hellonamios@outlook.com?subject=${encodeURIComponent(`Early access: ${application.name}`)}`}
              >
                Request early access
              </a>
              <Link className="button ghost" href="/products">Explore Nami Stay</Link>
            </div>
            <small>No release-date promise yet. We are validating the workflows with hospitality operators first.</small>
          </div>

          <div className="coming-soon-visual" aria-label={`${application.name} product preview`}>
            <div className="coming-orbit orbit-one" />
            <div className="coming-orbit orbit-two" />
            <div className="coming-app-core">
              <span>N</span>
              <strong>{application.name}</strong>
              <small>Connected to NamiOS</small>
            </div>
            <div className="coming-float-card card-one"><i /> Live property context</div>
            <div className="coming-float-card card-two"><strong>01</strong> shared guest record</div>
            <div className="coming-float-card card-three">Research in progress <span>↗</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad coming-capabilities reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow">Planned direction</span><h2>{application.promise}</h2></div>
            <p>Each NamiOS application is being designed as part of the same operating system—not as another disconnected login.</p>
          </div>
          <div className="coming-capability-grid">
            {application.capabilities.map((capability, index) => (
              <article key={capability}>
                <span>0{index + 1}</span>
                <strong>{capability}</strong>
                <p>Shared identity, permissions, reporting, and operational context across the NamiOS platform.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coming-next-step reveal-section">
        <div className="container coming-next-card">
          <div><span>Available today</span><h2>Start with Nami Stay.</h2><p>Run bookings, rooms, guests, housekeeping, billing, and compliance while the wider platform grows.</p></div>
          <Link className="button" href="/products">See Nami Stay <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
};
