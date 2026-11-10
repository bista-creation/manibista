import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  articleSections,
  licenceFeesGuide,
  licenceFeesSections,
  restaurantGuide,
  startupCostGuide,
  startupCostSections,
  upcomingArticles,
} from "@/lib/articles";
import { images } from "@/lib/images";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "The Journal | Restaurant Business Guides | Chef Mani Bista",
  description:
    "Source-based guides to opening, licensing, and costing a restaurant in Nepal — from official 2083/84 licence fees to startup budgets and the first 90 days.",
  path: "/blog",
  image: images.atWork.src,
  imageAlt: images.atWork.alt,
  imageWidth: images.atWork.width,
  imageHeight: images.atWork.height,
  keywords: [
    "restaurant business Nepal",
    "restaurant licence fees in Nepal",
    "restaurant startup cost Nepal",
    "how to open a restaurant in Nepal",
    "Chef Mani Bista journal",
  ],
});

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={
          <>
            Notes from
            <br />
            <span className="display-italic gold-text">the pass.</span>
          </>
        }
        description="Practical writing on food, hospitality, and the business of building a table in Nepal."
        meta={["Business", "Craft", "Nepal", "For operators"]}
      />

      <section className="section">
        <div className="container-luxe">
          <div className="journal-section-head">
            <p className="eyebrow">Latest guide</p>
            <p className="journal-section-note">
              Long-form, source-based, and written for people who are serious
              about the work.
            </p>
          </div>

          <article className="journal-featured">
            <Link
              href={licenceFeesGuide.path}
              className="journal-featured-media"
              aria-label={licenceFeesGuide.title}
            >
              <Image
                src={licenceFeesGuide.image.src}
                alt={licenceFeesGuide.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 58vw"
                className="object-cover"
              />
              <span className="journal-featured-shade" aria-hidden="true" />
              <span className="journal-featured-badge">
                {licenceFeesGuide.category}
              </span>
            </Link>

            <div className="journal-featured-body">
              <p className="eyebrow">Official 2083/84 guide</p>
              <h2 className="display journal-featured-title">
                <Link href={licenceFeesGuide.path}>
                  Restaurant Licence Fees in Nepal
                </Link>
              </h2>
              <p className="journal-featured-copy">
                {licenceFeesGuide.excerpt}
              </p>

              <div className="journal-meta">
                <span>{licenceFeesGuide.readingMinutes} min read</span>
                <span>Published {formatDate(licenceFeesGuide.published)}</span>
                <span>{licenceFeesSections.length} sections</span>
              </div>

              <Link href={licenceFeesGuide.path} className="btn btn-gold">
                Read the licence guide
                <ArrowRight className="arrow h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-tight border-y border-line bg-obsidian-soft">
        <div className="container-luxe">
          <div className="journal-section-head">
            <p className="eyebrow">Also published</p>
            <p className="journal-section-note">
              The investment model and the operating guide that sit alongside
              the licence file.
            </p>
          </div>

          <div className="journal-grid">
            <article className="journal-card">
              <p className="journal-card-index">01</p>
              <p className="journal-card-category">
                {startupCostGuide.category}
              </p>
              <h2 className="journal-card-title">
                <Link
                  href={startupCostGuide.path}
                  className="journal-card-link"
                >
                  Restaurant Startup Cost in Nepal
                </Link>
              </h2>
              <p className="journal-card-copy">{startupCostGuide.excerpt}</p>
              <div className="journal-meta journal-card-meta">
                <span>{startupCostGuide.readingMinutes} min read</span>
                <span>{startupCostSections.length} sections</span>
              </div>
              <Link
                href={startupCostGuide.path}
                className="journal-card-cta"
              >
                Read the cost guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>

            <article className="journal-card">
              <p className="journal-card-index">02</p>
              <p className="journal-card-category">
                {restaurantGuide.category}
              </p>
              <h2 className="journal-card-title">
                <Link
                  href={restaurantGuide.path}
                  className="journal-card-link"
                >
                  How to Open a Successful Restaurant in Nepal
                </Link>
              </h2>
              <p className="journal-card-copy">{restaurantGuide.excerpt}</p>
              <div className="journal-meta journal-card-meta">
                <span>{restaurantGuide.readingMinutes} min read</span>
                <span>{articleSections.length} sections</span>
              </div>
              <Link
                href={restaurantGuide.path}
                className="journal-card-cta"
              >
                Read the operating guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <div className="journal-section-head">
            <p className="eyebrow">Coming next</p>
            <p className="journal-section-note">
              Templates and field guides now in preparation.
            </p>
          </div>

          <div className="journal-grid">
            {upcomingArticles.map((item, index) => (
              <article className="journal-card" key={item.title}>
                <p className="journal-card-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="journal-card-category">{item.category}</p>
                <h2 className="journal-card-title">{item.title}</h2>
                <p className="journal-card-copy">{item.description}</p>
                <p className="journal-card-status">In preparation</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The table is yours</p>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2.6rem,5vw,4.8rem)]">
              From the page
              <br />
              <span className="display-italic gold-text">to the table.</span>
            </h2>
            <p className="body-copy mt-5 max-w-md">
              If you are planning a private dinner, a chef’s table, or a
              cooking session, start with a conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/reserve" className="btn btn-gold">
              Reserve the chef’s table
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
            <Link href="/experiences" className="btn btn-ghost">
              View experiences
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={blogSchema({
          title: "The Journal | Chef Mani Bista",
          description:
            "Source-based guides to opening, licensing, and costing a restaurant in Nepal.",
          path: "/blog",
          posts: [
            {
              title: licenceFeesGuide.title,
              path: licenceFeesGuide.path,
              description: licenceFeesGuide.description,
              datePublished: licenceFeesGuide.published,
            },
            {
              title: startupCostGuide.title,
              path: startupCostGuide.path,
              description: startupCostGuide.description,
              datePublished: startupCostGuide.published,
            },
            {
              title: restaurantGuide.title,
              path: restaurantGuide.path,
              description: restaurantGuide.description,
              datePublished: restaurantGuide.published,
            },
          ],
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
        ])}
      />
    </>
  );
}
