import type { Metadata } from "next";
import { siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og/chef-mani-bista.jpg",
  imageAlt = "Chef Mani Bista — private chef in Kathmandu, Nepal, and India",
  type = "website",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title: { absolute: title },
    description,
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
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
