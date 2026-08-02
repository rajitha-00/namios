import Image from "next/image";

const propertyScenes = [
  {
    src: "/brand/hero-hill-villa.webp",
    title: "Hill-country villas",
    location: "Ella"
  },
  {
    src: "/brand/hero-courtyard-hotel.webp",
    title: "Boutique stays",
    location: "Galle"
  }
];

export const PropertyHeroMedia = () => (
  <>
    <Image
      className="property-hero-image"
      src="/brand/hero-coastal-resort-v2.webp"
      alt="A contemporary Sri Lankan coastal resort with an infinity pool and open-air guest spaces"
      fill
      priority
      sizes="100vw"
    />
    <div className="property-hero-overlay" aria-hidden="true" />
    <div className="property-gallery" aria-label="Properties powered by NamiOS">
      {propertyScenes.map((scene, index) => (
        <article className="property-scene" key={scene.title}>
          <Image
            src={scene.src}
            alt={`${scene.title} in ${scene.location}`}
            fill
            sizes="(max-width: 620px) 42vw, 220px"
          />
          <div className="property-scene-copy">
            <span>0{index + 1}</span>
            <div>
              <strong>{scene.title}</strong>
              <small>{scene.location}</small>
            </div>
          </div>
        </article>
      ))}
    </div>
  </>
);
