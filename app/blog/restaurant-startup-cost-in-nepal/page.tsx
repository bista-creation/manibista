import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  licenceFeesGuide,
  restaurantGuide,
  startupCostGuide,
  startupCostSections,
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
import { StartupCostPartOne } from "@/components/article/content/startup-cost/part-one";
import { StartupCostPartTwo } from "@/components/article/content/startup-cost/part-two";
import { StartupCostPartThree } from "@/components/article/content/startup-cost/part-three";
import { StartupCostPartFour } from "@/components/article/content/startup-cost/part-four";
import { startupCostFaqs } from "@/components/article/content/startup-cost/data";
import { ArrowRight } from "@/components/icons";

const url = new URL(startupCostGuide.path, siteConfig.url).toString();
const publishedIso = `${startupCostGuide.published}T00:00:00+05:45`;
const modifiedIso = `${startupCostGuide.updated}T00:00:00+05:45`;

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));

export const metadata: Metadata = buildMetadata({
  title: startupCostGuide.title,
  description: startupCostGuide.description,
  path: startupCostGuide.path,
  image: startupCostGuide.image.src,
  imageAlt: startupCostGuide.image.alt,
  imageWidth: startupCostGuide.image.width,
  imageHeight: startupCostGuide.image.height,
  type: "article",
  keywords: startupCostGuide.keywords,
  authors: [startupCostGuide.author.name],
  publishedTime: publishedIso,
  modifiedTime: modifiedIso,
  section: startupCostGuide.category,
  tags: startupCostGuide.keywords,
});

export default function StartupCostGuidePage() {
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
                <li aria-current="page">Restaurant startup cost in Nepal</li>
              </ol>
            </nav>

            <div className="article-hero-top">
              <div>
                <p className="eyebrow article-kicker">
                  Journal · {startupCostGuide.category}
                </p>
                <h1 className="display article-title">
                  Restaurant Startup Cost in Nepal:
                  <br />
                  <span className="display-italic gold-text">
                    Complete Investment Breakdown (2026)
                  </span>
                </h1>
                <p className="article-deck">{startupCostGuide.excerpt}</p>
              </div>

              <ShareLinks url={url} title={startupCostGuide.title} />
            </div>

            <div className="article-byline">
              <div className="article-byline-author">
                <span className="article-byline-avatar">
                  <Image
                    src={startupCostGuide.author.image.src}
                    alt={startupCostGuide.author.image.alt}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>
                  <span className="article-byline-name">
                    By {startupCostGuide.author.name}
                  </span>
                  <span className="article-byline-role">
                    {startupCostGuide.author.role}
                  </span>
                </span>
              </div>

              <div className="article-byline-meta">
                <span>Published {formatDate(startupCostGuide.published)}</span>
                <span>{`Last research update ${formatDate(startupCostGuide.updated)}`}</span>
                <span>{startupCostGuide.readingMinutes} min read</span>
              </div>
            </div>
          </div>
        </header>

        <figure className="article-hero-figure container-luxe">
          <div className="article-hero-image">
            <Image
              src={startupCostGuide.image.src}
              alt={startupCostGuide.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="article-hero-image-shade" aria-hidden="true" />
          </div>
          <figcaption>
            Chef Mani Bista at work in a Kathmandu café. The kitchen and the
            cash buffer usually decide whether the room opens well. Photograph by
            Chef Mani Bista.
          </figcaption>
        </figure>

        <div className="container-luxe article-layout">
          <aside className="article-sidebar">
            <div className="article-sidebar-inner">
              <TableOfContents
                sections={startupCostSections}
                variant="desktop"
              />

              <div className="article-sidebar-card">
                <p className="eyebrow">Plan the whole project</p>
                <p className="article-sidebar-title">
                  From the first lease to the first 90 days.
                </p>
                <p className="article-sidebar-copy">
                  The operating guide covers feasibility, location, licensing,
                  staffing, and the launch sequence that sits around this
                  budget.
                </p>
                <Link
                  href={restaurantGuide.path}
                  className="btn btn-gold"
                >
                  Read the operating guide
                </Link>
              </div>
            </div>
          </aside>

          <div className="article-content">
            <TableOfContents sections={startupCostSections} variant="mobile" />

            <StartupCostPartOne />
            <StartupCostPartTwo />
            <StartupCostPartThree />
            <StartupCostPartFour />

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
                  The budget is one half of the decision. The licence file and
                  the operating plan are the other. These guides go deeper on
                  all three.
                </p>
              </div>

              <div className="article-related-grid">
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
          title: startupCostGuide.title,
          description: startupCostGuide.description,
          path: startupCostGuide.path,
          image: startupCostGuide.image.src,
          imageAlt: startupCostGuide.image.alt,
          imageWidth: startupCostGuide.image.width,
          imageHeight: startupCostGuide.image.height,
          datePublished: publishedIso,
          dateModified: modifiedIso,
          section: startupCostGuide.category,
          keywords: startupCostGuide.keywords,
          wordCount: startupCostGuide.wordCount,
          readingMinutes: startupCostGuide.readingMinutes,
          about: [
            "Restaurant startup costs",
            "Restaurant licence fees in Nepal",
            "Restaurant registration in Nepal",
            "Commercial kitchen equipment prices in Nepal",
            "Restaurant tax rates in Nepal",
            "Foreign investment in Nepal",
            "Food business licensing",
            "Working capital",
          ],
        })}
      />

      <JsonLd data={faqSchema(startupCostFaqs)} />
    </>
  );
}
