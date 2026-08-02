import Image from "next/image";
import Link from "next/link";

const integrations = ["PayHere", "LankaPay", "Booking.com", "Agoda", "Google Sheets", "WhatsApp"];

export const IntegrationLandscape = () => (
  <section className="section-pad integration-section" aria-labelledby="integration-title">
    <div className="container integration-shell">
      <Image
        className="integration-photo"
        src="/brand/nami-hospitality-landscape.webp"
        alt="A contemporary Sri Lankan boutique hotel reception overlooking a tropical landscape"
        fill
        sizes="(max-width: 1240px) 100vw, 1240px"
      />
      <div className="integration-wash" aria-hidden="true" />
      <div className="integration-copy">
        <span className="eyebrow">Connected operations</span>
        <h2 id="integration-title">Keep the tools your property already relies on.</h2>
        <p>Bring payments, booking channels, compliance sheets, and guest communication into one coherent operating flow.</p>
        <Link className="button" href="/products">Explore NamiOS products</Link>
      </div>
      <div className="integration-orbit" aria-label="Supported hospitality connections">
        <i className="integration-ring ring-one" aria-hidden="true" />
        <i className="integration-ring ring-two" aria-hidden="true" />
        <div className="integration-core"><Image src="/brand/nami-logo-teal.svg" alt="NamiOS" width={74} height={74} /></div>
        {integrations.map((item, index) => (
          <span className={`integration-chip chip-${index + 1}`} key={item}>{item}</span>
        ))}
      </div>
    </div>
  </section>
);
