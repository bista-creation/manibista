import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/story",
  "/menu",
  "/experiences",
  "/reserve",
  "/private-chef-kathmandu",
  "/private-chef-nepal",
  "/private-chef-india",
  "/blog",
  "/blog/how-to-open-a-successful-restaurant-in-nepal",
  "/blog/restaurant-startup-cost-in-nepal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
