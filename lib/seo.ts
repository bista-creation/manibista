import type { Metadata } from "next";
import { siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article";
  noIndex?: boolean;
  keywords?: readonly string[];
  authors?: readonly string[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: readonly string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og/chef-mani-bista.jpg",
  imageAlt = "Chef Mani Bista — private chef in Kathmandu, Nepal, and India",
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  noIndex = false,
  keywords,
  authors,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  const openGraphBase = {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: imageUrl,
        width: imageWidth,
        height: imageHeight,
        alt: imageAlt,
      },
    ],
  };

  return {
    title: { absolute: title },
    description,
    keywords: keywords ? [...keywords] : undefined,
    authors: authors?.map((name) => ({ name })),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph:
      type === "article"
        ? {
            ...openGraphBase,
            type: "article",
            publishedTime,
            modifiedTime,
            authors: authors ? [...authors] : undefined,
            section,
            tags: tags ? [...tags] : undefined,
          }
        : {
            ...openGraphBase,
            type: "website",
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
