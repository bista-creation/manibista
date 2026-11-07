import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/images";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight, ArrowUpRight, WhatsAppIcon } from "@/components/icons";

export type LocationPageProps = {
  path: string;
  breadcrumbName: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  meta: string[];
  introEyebrow: string;
  introTitle: ReactNode;
  introCopy: string[];
  image: SiteImage;
  imageCaption: string;
  areasTitle: ReactNode;
  areas: Array<{ name: string; copy: string }>;
  experiences: string[];
  faqs: Array<{ question: string; answer: string }>;
  schemaName: string;
  schemaDescription: string;
  areaServed: string[];
  ctaTitle: ReactNode;
  ctaCopy: string;
};

export function LocationPage({
  path,
  breadcrumbName,
  eyebrow,
  title,
  description,
  meta,
  introEyebrow,
  introTitle,
  introCopy,
  image,
  imageCaption,
  areasTitle,
  areas,
  experiences,
  faqs,
  schemaName,
  schemaDescription,
  areaServed,
  ctaTitle,
  ctaCopy,
}: LocationPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        meta={meta}
      />

      <section className="section">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-line reveal-image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 z-10 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-cream/60">
                {imageCaption}
              </p>
            </div>

            <div>
              <p className="eyebrow reveal">{introEyebrow}</p>
              <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.6rem,4.6vw,4.8rem)]">
                {introTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {introCopy.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`body-copy max-w-xl reveal stagger-${index + 2}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="reveal stagger-4 mt-8 flex flex-wrap gap-3">
                <Link href="/reserve" className="btn btn-gold">
                  Request a date
                  <ArrowRight className="arrow h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink(
                    `Hello Chef Mani, I'd like to ask about a private dining experience in ${breadcrumbName}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight border-y border-line bg-obsidian-soft">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Where we cook"
            title={areasTitle}
            description="The table comes to you. These are the places Chef Mani cooks most often — and the door is open elsewhere by arrangement."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <div
                key={area.name}
                className={`border border-line bg-obsidian p-6 reveal stagger-${(index % 4) + 1}`}
              >
                <p className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-8 text-2xl">{area.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/50">
                  {area.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow reveal">What we bring</p>
            <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.4rem,4vw,4rem)]">
              A full
              <br />
              <span className="display-italic gold-text">table.</span>
            </h2>
            <p className="body-copy reveal stagger-2 mt-5 max-w-sm">
              From the first conversation to the last plate, the experience is
              designed to feel effortless for you.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {experiences.map((experience, index) => (
              <div
                key={experience}
                className={`flex items-center gap-4 border-b border-line py-5 reveal stagger-${(index % 4) + 1}`}
              >
                <span className="font-mono text-[0.5rem] tracking-[0.2em] text-gold/60">
                  0{index + 1}
                </span>
                <span className="text-sm text-cream/70">{experience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight border-y border-line bg-obsidian-soft">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow reveal">Questions</p>
            <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.4rem,4vw,4rem)]">
              Before
              <br />
              <span className="display-italic gold-text">you book.</span>
            </h2>
            <p className="body-copy reveal stagger-2 mt-5 max-w-sm">
              Still deciding? Send a message. The chef will answer personally.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow reveal stagger-3 mt-6"
            >
              WhatsApp the chef <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <div className="relative overflow-hidden border border-gold/20 bg-obsidian-soft p-[clamp(1.5rem,4vw,4rem)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.12), transparent 34%), radial-gradient(circle at 20% 90%, rgba(184,115,51,0.08), transparent 36%)",
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow reveal">The next step</p>
                <h2 className="display reveal stagger-1 mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5rem)]">
                  {ctaTitle}
                </h2>
                <p className="body-copy reveal stagger-2 mt-5 max-w-xl">
                  {ctaCopy}
                </p>
                <p className="reveal stagger-3 mt-5 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-cream/35">
                  {siteConfig.phoneDisplay} · {siteConfig.email}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/reserve" className="btn btn-gold">
                  Request a date <ArrowRight className="arrow h-4 w-4" />
                </Link>
                <Link href="/experiences" className="btn btn-ghost">
                  View experiences <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: schemaName,
          description: schemaDescription,
          path,
          areaServed,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: breadcrumbName, path },
        ])}
      />
    </>
  );
}
