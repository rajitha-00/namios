import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NamiOS — Hotel Operating System",
    short_name: "NamiOS",
    description: "The modern hotel operating system for Sri Lankan independent hotels, villas, resorts, and restaurants.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2aa6a1",
    icons: [
      {
        src: "/brand/nami-mark.svg",
        sizes: "any",
        type: "image/svg+xml"
      },
      {
        src: "/brand/nami-apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
