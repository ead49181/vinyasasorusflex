import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vinyasasorusflex.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://vinyasasorusflex.vercel.app/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://vinyasasorusflex.vercel.app/privacy",
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
