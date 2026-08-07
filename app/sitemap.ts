import type { MetadataRoute } from "next";

const BASE_URL = "https://namios.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes with their priority and change frequency
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${BASE_URL}/benefits`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88
    },
    {
      url: `${BASE_URL}/offers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: `${BASE_URL}/qa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  // Dynamic product application routes
  const productApplications = ["dine", "pay", "people", "control", "payments"];
  const dynamicRoutes: MetadataRoute.Sitemap = productApplications.map((application) => ({
    url: `${BASE_URL}/products/${application}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
