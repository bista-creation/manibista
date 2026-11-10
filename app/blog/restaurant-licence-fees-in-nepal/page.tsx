import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  licenceFeesGuide,
  licenceFeesSections,
  restaurantGuide,
  startupCostGuide,
} from "@/lib/articles";
import { images } from "@/lib/images";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { BackToTop } from "@/components/article/back-to-top";
import { ReadingProgress } from "@/components/article/reading-progress";
import { ShareLinks } from "@/components/article/share-links";
import { TableOfContents } from "@/components/article/table-of-contents";
import { LicenceFeesPartOne } from "@/components/article/content/licence-fees/part-one";
import { LicenceFeesPartTwo } from "@/components/article/content/licence-fees/part-two";
import { LicenceFeesPartThree } from "@/components/article/content/licence-fees/part-three";
import { licenceFeesFaqs } from "@/components/article/content/licence-fees/data";
import { ArrowRight } from "@/components/icons";

const url = new URL(licenceFeesGuide.path, siteConfig.url).toString();
const publishedIso = `${licenceFeesGuide.published}T00:00:00+05:45`;
const modifiedIso = `${licenceFeesGuide.updated}T00:00:00+05:45`;

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));

export const metadata: Metadata = buildMetadata({
  title: licenceFeesGuide.title,
  description: licenceFeesGuide.description,
  path: licenceFeesGuide.path,
  image: licenceFeesGuide.image.src,
  imageAlt: licenceFeesGuide.image.alt,
  imageWidth: licenceFeesGuide.image.width,
  imageHeight: licenceFeesGuide.image.height,
  type: "article",
  keywords: licenceFeesGuide.keywords,
  authors: [licenceFeesGuide.author.name],
  publishedTime: publishedIso,
  modifiedTime: modifiedIso,
  section: licenceFeesGuide.category,
  tags: licenceFeesGuide.keywords,
});

export default function LicenceFeesGuidePage() {
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
                <li aria-current="page">Restaurant licence fees in Nepal</li>
              </ol>
            </nav>

            <div className="article-hero-top">
              <div>
                <p className="eyebrow article-kicker">
                  Journal · {licenceFeesGuide.category}
                </p>
                <h1 className="display article-title">
                  Restaurant Licence Fees in Nepal:
                  <br />
                  <span className="display-italic gold-text">
                    Official 2083/84 Guide (2026)
                  </span>
                </h1>
                <p className="article-deck">{licenceFeesGuide.excerpt}</p>
              </div>

              <ShareLinks url={url} title={licenceFeesGuide.title} />
            </div>

            <div className="article-byline">
              <div className="article-byline-author">
                <span className="article-byline-avatar">
                  <Image
                    src={licenceFeesGuide.author.image.src}
                    alt={licenceFeesGuide.author.image.alt}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>
                  <span className="article-byline-name">
                    By {licenceFeesGuide.author.name}
                  </span>
                  <span className="article-byline-role">
                    {licenceFeesGuide.author.role}
                  </span>
                </span>
              </div>

              <div className="article-byline-meta">
                <span>Published {formatDate(licenceFeesGuide.published)}</span>
                <span>{`Last research update ${formatDate(licenceFeesGuide.updated)}`}</span>
                <span>{licenceFeesGuide.readingMinutes} min read</span>
              </div>
            </div>
          </div>
        </header>

        <figure className="article-hero-figure container-luxe">
          <div className="article-hero-image">
            <Image
              src={licenceFeesGuide.image.src}
              alt={licenceFeesGuide.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="article-hero-image-shade" aria-hidden="true" />
          </div>
          <figcaption>
            Chef Mani Bista in modern Kathmandu. A restaurant licence is a
            sequence of separate approvals, not one fee. Photograph by Chef Mani
            Bista.
          </figcaption>
        </figure>

        <div className="container-luxe article-layout">
          <aside className="article-sidebar">
            <div className="article-sidebar-inner">
              <TableOfContents
                sections={licenceFeesSections}
                variant="desktop"
              />

              <div className="article-sidebar-card">
                <p className="eyebrow">Plan the whole project</p>
                <p className="article-sidebar-title">
                  The licence file sits inside the investment model.
                </p>
                <p className="article-sidebar-copy">
                  The startup cost guide shows how registration, fit-out,
                  equipment, working capital, and compliance fit into one
                  investment envelope.
                </p>
                <Link href={startupCostGuide.path} className="btn btn-gold">
                  Read the cost guide
                </Link>
              </div>
            </div>
          </aside>

          <div className="article-content">
            <TableOfContents sections={licenceFeesSections} variant="mobile" />

            <LicenceFeesPartOne />
            <LicenceFeesPartTwo />
            <LicenceFeesPartThree />

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
                  dinners, chef&apos;s table experiences, and cooking sessions
                  across Nepal and India. This guide draws on that operating
                  experience and on the official sources listed above.
                </p>
                <div className="article-author-links">
                  <Link href="/story" className="article-inline-link">
                    Read the story
                  </Link>
                  <Link href="/reserve" className="article-inline-link">
                    Reserve the chef&apos;s table
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
                  The licence file is one layer. These guides cover the
                  investment model and the operating sequence around it.
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
                    {restaurantGuide.category}
                  </p>
                  <h3 className="article-related-card-title">
                    <Link
                      href={restaurantGuide.path}
                      className="article-related-card-link"
                    >
                      {restaurantGuide.navLabel}
                    </Link>
                  </h3>
                  <p className="article-related-card-copy">
                    The complete step-by-step guide to feasibility, location,
                    licensing, staffing, menu costing, marketing, and the first
                    90 days.
                  </p>
                  <Link
                    href={restaurantGuide.path}
                    className="article-related-link"
                  >
                    Read the operating guide
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
          title: licenceFeesGuide.title,
          description: licenceFeesGuide.description,
          path: licenceFeesGuide.path,
          image: licenceFeesGuide.image.src,
          imageAlt: licenceFeesGuide.image.alt,
          imageWidth: licenceFeesGuide.image.width,
          imageHeight: licenceFeesGuide.image.height,
          datePublished: publishedIso,
          dateModified: modifiedIso,
          section: licenceFeesGuide.category,
          keywords: licenceFeesGuide.keywords,
          wordCount: licenceFeesGuide.wordCount,
          readingMinutes: licenceFeesGuide.readingMinutes,
          about: [
            "Restaurant licence fees in Nepal",
            "Restaurant registration in Nepal",
            "Food business licensing",
            "Liquor licensing",
            "Municipal business tax",
            "VAT registration",
            "Foreign investment in Nepal",
            "Restaurant compliance",
          ],
        })}
      />

      <JsonLd data={faqSchema(licenceFeesFaqs)} />
    </>
  );
}
