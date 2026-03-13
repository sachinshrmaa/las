import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/academics",
  "/life-at-las",
  "/gallery",
  "/admissions",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://littleangelschool.edu";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
