import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  alt: string;
  description: string;
  eyebrow: string;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  signals: string[];
  title: string;
}

export const PageHero = ({
  alt,
  description,
  eyebrow,
  image,
  primaryHref = "/offers",
  primaryLabel = "Book a live demo",
  secondaryHref,
  secondaryLabel,
  signals,
  title
}: PageHeroProps) => (
  <section className="page-hero" aria-labelledby="page-hero-title">
    <Image className="page-hero-image" src={image} alt={alt} fill priority sizes="100vw" />
    <div className="page-hero-overlay" aria-hidden="true" />
    <div className="container page-hero-content">
      <span className="eyebrow page-hero-eyebrow">{eyebrow}</span>
      <h1 id="page-hero-title">{title}</h1>
      <p>{description}</p>
      <div className="page-hero-actions">
        <Link className="button" href={primaryHref}>{primaryLabel}</Link>
        {secondaryHref && secondaryLabel ? (
          <Link className="button secondary" href={secondaryHref}>{secondaryLabel}</Link>
        ) : null}
      </div>
      <div className="page-hero-signals" aria-label={`${eyebrow} highlights`}>
        {signals.map((signal, index) => (
          <span key={signal}><i>0{index + 1}</i>{signal}</span>
        ))}
      </div>
    </div>
  </section>
);
