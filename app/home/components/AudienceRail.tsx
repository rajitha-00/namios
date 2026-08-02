import Image from "next/image";

const audiences = [
  {
    name: "Boutique hotels",
    body: "Give a small team the operating clarity of a much larger property.",
    metric: "90% faster",
    note: "guest arrival workflow",
    className: "hotel",
    image: "/brand/hero-courtyard-hotel.webp",
    alt: "A modern tropical boutique hotel courtyard"
  },
  {
    name: "Villas and guesthouses",
    body: "Protect every room night with deposits and direct booking control.",
    metric: "0% fake",
    note: "bookings after deposit lock",
    className: "villa",
    image: "/brand/hero-hill-villa.webp",
    alt: "A contemporary hill-country villa in Sri Lanka"
  },
  {
    name: "Resorts",
    body: "Connect rooms, dining, housekeeping, finance, and management.",
    metric: "One timeline",
    note: "across guest operations",
    className: "resort",
    image: "/brand/hero-coastal-resort-v2.webp",
    alt: "A coastal resort with an infinity pool"
  },
  {
    name: "Hotel groups",
    body: "Give owners clean visibility without slowing property teams.",
    metric: "Real time",
    note: "multi-property oversight",
    className: "group",
    image: "/brand/nami-hospitality-landscape.webp",
    alt: "A Sri Lankan hospitality property overlooking a tropical landscape"
  }
];

export const AudienceRail = () => (
  <section className="section-pad audience-section" aria-labelledby="audience-title">
    <div className="container audience-head">
      <div>
        <span className="eyebrow">Built for hospitality</span>
        <h2 id="audience-title">A better operating day, at every kind of property.</h2>
      </div>
      <p>
        NamiOS adapts to the property you run today, then keeps rooms, guests, teams, dining, and ownership moving from the same operating truth.
      </p>
    </div>

    <div className="container audience-rail">
      {audiences.map((audience, index) => (
        <article className={`audience-card ${audience.className}`} key={audience.name}>
          <Image
            className="audience-image"
            src={audience.image}
            alt={audience.alt}
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 60vw"
          />
          <div className="audience-index">0{index + 1}</div>
          <div className="audience-content">
            <h3>{audience.name}</h3>
            <p>{audience.body}</p>
          </div>
          <div className="audience-proof">
            <strong>{audience.metric}</strong>
            <span>{audience.note}</span>
          </div>
        </article>
      ))}
    </div>

    <div className="audience-quote container">
      <div className="quote-pills">
        <span>Sri Lanka ready</span>
        <span>Lightweight</span>
        <span>Secure by design</span>
        <span>Local billing</span>
      </div>
      <div>
        <blockquote>Hospitality software should disappear into the work, then make the result unmistakably better.</blockquote>
        <p>NamiOS product principle</p>
      </div>
    </div>
  </section>
);
