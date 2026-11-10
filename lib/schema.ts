import { siteConfig } from "./site";

type SchemaValue = Record<string, unknown>;

export function safeJsonLd(value: SchemaValue) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function siteGraph(): SchemaValue {
  const personId = `${siteConfig.url}/#chef`;
  const businessId = `${siteConfig.url}/#business`;
  const websiteId = `${siteConfig.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Mani Bista",
        alternateName: ["Chef Mani Bista", "Chef Bista"],
        jobTitle: "Private Chef",
        description:
          "Chef Mani Bista is a Kathmandu-based private chef known for blending Nepali ingredients with global technique through intimate chef's table experiences, private dining, and cooking sessions across Nepal and India.",
        image: `${siteConfig.url}/images/chef-mani-bista-kathmandu-temple.jpg`,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        sameAs: Object.values(siteConfig.socials),
        knowsAbout: [
          "Nepali cuisine",
          "Himalayan cuisine",
          "Fine dining",
          "Fusion cuisine",
          "Private dining",
          "Chef's table experiences",
          "Cooking classes",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Private Chef",
          occupationLocation: {
            "@type": "City",
            name: "Kathmandu",
          },
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: "Chef Mani Bista",
        description:
          "Private chef experiences, chef's table dinners, private dining, and cooking sessions in Kathmandu, across Nepal, and in India.",
        url: siteConfig.url,
        image: `${siteConfig.url}/images/chef-mani-bista-kathmandu-temple.jpg`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$$",
        founder: { "@id": personId },
        areaServed: [
          { "@type": "City", name: "Kathmandu" },
          { "@type": "Country", name: "Nepal" },
          { "@type": "Country", name: "India" },
        ],
        serviceType: [
          "Private chef",
          "Chef's table",
          "Private dining",
          "Cooking classes",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "reservations",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: siteConfig.whatsapp,
          availableLanguage: ["English", "Nepali"],
        },
        sameAs: Object.values(siteConfig.socials),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
}): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${siteConfig.url}/#chef` },
    areaServed: areaServed.map((area) => ({
      "@type": area === "Kathmandu" ? "City" : "Country",
      name: area,
    })),
    url: new URL(path, siteConfig.url).toString(),
    serviceType: "Private chef",
  };
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>,
): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  datePublished,
  dateModified,
  section,
  keywords,
  wordCount,
  readingMinutes,
  about = [],
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  datePublished: string;
  dateModified: string;
  section: string;
  keywords: readonly string[];
  wordCount: number;
  readingMinutes: number;
  about?: readonly string[];
}): SchemaValue {
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();
  const articleId = `${url}#article`;
  const webpageId = `${url}#webpage`;
  const imageId = `${url}#primaryimage`;
  const breadcrumbId = `${url}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": articleId,
        headline: title,
        description,
        image: { "@id": imageId },
        datePublished,
        dateModified,
        author: { "@id": `${siteConfig.url}/#chef` },
        publisher: { "@id": `${siteConfig.url}/#business` },
        mainEntityOfPage: { "@id": webpageId },
        isPartOf: { "@id": `${siteConfig.url}/blog#blog` },
        articleSection: section,
        keywords: keywords.join(", "),
        wordCount,
        timeRequired: `PT${readingMinutes}M`,
        inLanguage: "en",
        about: about.map((name) => ({ "@type": "Thing", name })),
        copyrightHolder: { "@id": `${siteConfig.url}/#chef` },
        copyrightYear: new Date(datePublished).getFullYear(),
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": articleId },
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: imageUrl,
        contentUrl: imageUrl,
        caption: imageAlt,
        width: imageWidth,
        height: imageHeight,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Journal",
            item: new URL("/blog", siteConfig.url).toString(),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };
}

export function blogSchema({
  title,
  description,
  path,
  posts,
}: {
  title: string;
  description: string;
  path: string;
  posts: Array<{
    title: string;
    path: string;
    description: string;
    datePublished: string;
  }>;
}): SchemaValue {
  const url = new URL(path, siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: title,
    description,
    url,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: new URL(post.path, siteConfig.url).toString(),
      datePublished: post.datePublished,
      author: { "@id": `${siteConfig.url}/#chef` },
    })),
  };
}

export function menuSchema(
  sections: Array<{
    name: string;
    description: string;
    courses: Array<{ name: string; description: string }>;
  }>,
): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Signature Menu by Chef Mani Bista",
    description:
      "A seasonal, ingredient-led private dining menu shaped around the guest, the occasion, and the best produce available.",
    inLanguage: "en",
    provider: { "@id": `${siteConfig.url}/#chef` },
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      description: section.description,
      hasMenuItem: section.courses.map((course) => ({
        "@type": "MenuItem",
        name: course.name,
        description: course.description,
      })),
    })),
  };
}
