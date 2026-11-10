import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  articleSections,
  licenceFeesGuide,
  restaurantGuide,
  startupCostGuide,
} from "@/lib/articles";
import { images } from "@/lib/images";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { BackToTop } from "@/components/article/back-to-top";
import { ReadingProgress } from "@/components/article/reading-progress";
import { ShareLinks } from "@/components/article/share-links";
import { TableOfContents } from "@/components/article/table-of-contents";
import { PartOne } from "@/components/article/content/part-one";
import { PartTwo } from "@/components/article/content/part-two";
import { PartThree } from "@/components/article/content/part-three";
import { PartFour } from "@/components/article/content/part-four";
import { ArrowRight } from "@/components/icons";

const url = new URL(restaurantGuide.path, siteConfig.url).toString();
const publishedIso = `${restaurantGuide.published}T00:00:00+05:45`;
const modifiedIso = `${restaurantGuide.updated}T00:00:00+05:45`;

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));

export const metadata: Metadata = buildMetadata({
  title: restaurantGuide.title,
  description: restaurantGuide.description,
  path: restaurantGuide.path,
  image: restaurantGuide.image.src,
  imageAlt:
    "Chef Mani Bista overlooking the Kathmandu Valley, Nepal",
  imageWidth: restaurantGuide.image.width,
  imageHeight: restaurantGuide.image.height,
  type: "article",
  keywords: restaurantGuide.keywords,
  authors: [restaurantGuide.author.name],
  publishedTime: publishedIso,
  modifiedTime: modifiedIso,
  section: restaurantGuide.category,
  tags: restaurantGuide.keywords,
});

export default function RestaurantGuidePage() {
  return (
    <>
      <ReadingProgress />
      <article className="article-page">
        <header className="article-hero">
          <div className="container-luxe">
            <nav className="article-breadcrumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog">Journal</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Opening a restaurant in Nepal</li>
              </ol>
            </nav>

            <div className="article-hero-top">
              <div>
                <p className="eyebrow article-kicker">
                  Journal · {restaurantGuide.category}
                </p>
                <h1 className="display article-title">
                  How to Open a Successful Restaurant in Nepal:
                  <br />
                  <span className="display-italic gold-text">
                    A Complete Step-by-Step Guide
                  </span>
                </h1>
                <p className="article-deck">{restaurantGuide.excerpt}</p>
              </div>

              <ShareLinks url={url} title={restaurantGuide.title} />
            </div>

            <div className="article-byline">
              <div className="article-byline-author">
                <span className="article-byline-avatar">
                  <Image
                    src={restaurantGuide.author.image.src}
                    alt={restaurantGuide.author.image.alt}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>
                  <span className="article-byline-name">
                    By {restaurantGuide.author.name}
                  </span>
                  <span className="article-byline-role">
                    {restaurantGuide.author.role}
                  </span>
                </span>
              </div>

              <div className="article-byline-meta">
                <span>Published {formatDate(restaurantGuide.published)}</span>
                <span>Updated {formatDate(restaurantGuide.updated)}</span>
                <span>{restaurantGuide.readingMinutes} min read</span>
              </div>
            </div>
          </div>
        </header>

        <figure className="article-hero-figure container-luxe">
          <div className="article-hero-image">
            <Image
              src={restaurantGuide.image.src}
              alt={restaurantGuide.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="article-hero-image-shade" aria-hidden="true" />
          </div>
          <figcaption>
            Kathmandu Valley, where roughly half of Nepal’s restaurant seating
            capacity is concentrated. Photograph by Chef Mani Bista.
          </figcaption>
        </figure>

        <div className="container-luxe article-layout">
          <aside className="article-sidebar">
            <div className="article-sidebar-inner">
              <TableOfContents
                sections={articleSections}
                variant="desktop"
              />

              <div className="article-sidebar-card">
                <p className="eyebrow">The chef’s table</p>
                <p className="article-sidebar-title">
                  A private table, designed around you.
                </p>
                <p className="article-sidebar-copy">
                  Intimate dinners, chef’s table experiences, and cooking
                  sessions across Nepal and India.
                </p>
                <Link href="/reserve" className="btn btn-gold">
                  Reserve
                </Link>
              </div>
            </div>
          </aside>

          <div className="article-content">
            <TableOfContents sections={articleSections} variant="mobile" />

            <PartOne />
            <PartTwo />
            <PartThree />
            <PartFour />

            <section className="article-author" aria-labelledby="author-title">
              <div className="article-author-image">
                <Image
                  src={images.portrait.src}
                  alt={images.portrait.alt}
                  fill
                  sizes="(max-width: 768px) 30vw, 180px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">About the author</p>
                <h2 id="author-title" className="display article-author-name">
                  Chef Mani Bista
                </h2>
                <p className="article-author-copy">
                  Chef Mani Bista is a Kathmandu-based private chef with more
                  than fifteen years in professional kitchens. He cooks private
                  dinners, chef’s table experiences, and cooking sessions across
                  Nepal and India. This guide draws on that operating experience
                  and on the official sources listed above.
                </p>
                <div className="article-author-links">
                  <Link href="/story" className="article-inline-link">
                    Read the story
                  </Link>
                  <Link href="/reserve" className="article-inline-link">
                    Reserve the chef’s table
                  </Link>
                </div>
              </div>
            </section>

            <section
              className="article-related"
              aria-labelledby="related-title"
            >
              <div className="article-related-head">
                <p className="eyebrow">The Journal</p>
                <h2 id="related-title" className="display article-related-title">
                  Related reading
                </h2>
                <p>
                  The operating plan is one half of the decision. The investment
                  model and the licence file are the other. These guides go
                  deeper on all three.
                </p>
              </div>

              <div className="article-related-grid">
                <article className="article-related-card">
                  <p className="article-related-category">
                    {startupCostGuide.category}
                  </p>
                  <h3 className="article-related-card-title">
                    <Link
                      href={startupCostGuide.path}
                      className="article-related-card-link"
                    >
                      {startupCostGuide.navLabel}
                    </Link>
                  </h3>
                  <p className="article-related-card-copy">
                    Five 2026 investment models, detailed cost tables, working
                    capital, break-even math, and the geographic differences that
                    change the budget.
                  </p>
                  <Link
                    href={startupCostGuide.path}
                    className="article-related-link"
                  >
                    Read the cost guide
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>

                <article className="article-related-card">
                  <p className="article-related-category">
                    {licenceFeesGuide.category}
                  </p>
                  <h3 className="article-related-card-title">
                    <Link
                      href={licenceFeesGuide.path}
                      className="article-related-card-link"
                    >
                      {licenceFeesGuide.navLabel}
                    </Link>
                  </h3>
                  <p className="article-related-card-copy">
                    Official 2083/84 fees for company registration, municipal
                    business tax, food licensing, liquor excise and renewals,
                    with the local gaps clearly marked.
                  </p>
                  <Link
                    href={licenceFeesGuide.path}
                    className="article-related-link"
                  >
                    Read the licence guide
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </div>

              <Link href="/blog" className="btn btn-ghost">
                Back to the Journal
              </Link>
            </section>
          </div>
        </div>
      </article>

      <BackToTop />

      <JsonLd
        data={articleSchema({
          title: restaurantGuide.title,
          description: restaurantGuide.description,
          path: restaurantGuide.path,
          image: restaurantGuide.image.src,
          imageAlt: restaurantGuide.image.alt,
          imageWidth: restaurantGuide.image.width,
          imageHeight: restaurantGuide.image.height,
          datePublished: publishedIso,
          dateModified: modifiedIso,
          section: restaurantGuide.category,
          keywords: restaurantGuide.keywords,
          wordCount: restaurantGuide.wordCount,
          readingMinutes: restaurantGuide.readingMinutes,
          about: [
            "Restaurant management",
            "Hospitality industry in Nepal",
            "Food business licensing",
            "Restaurant finance",
            "Restaurant marketing",
          ],
        })}
      />
    </>
  );
}
