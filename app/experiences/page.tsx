import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Faq } from "@/components/faq";
import { ArrowRight, ArrowUpRight, FlameIcon, LeafIcon, TableIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Private Chef Experiences in Nepal & India | Chef Mani Bista",
  description:
    "From chef's table dinners in Kathmandu to private celebrations across Nepal and India, discover intimate culinary experiences with Chef Mani Bista.",
  path: "/experiences",
});

const experiences = [
  {
    number: "01",
    label: "The Chef's Table",
    title: "One table. One menu. One evening.",
    description:
      "An intimate evening built around one table. Chef Mani cooks in front of you, course by course, explaining the ingredients, the technique, and the story behind each plate. The menu is designed after a conversation about what you love — and what you'd like to discover.",
    includes: [
      "A private menu designed for your table",
      "Cooked and finished in front of you",
      "Wine, sake, or zero-proof pairing",
      "A printed menu to take home",
    ],
    details: ["4–10 guests", "3–5 hours", "Kathmandu Valley", "Pricing on request"],
    image: images.atWork,
    icon: TableIcon,
    cta: "Request the chef's table",
  },
  {
    number: "02",
    label: "Private Dining & Celebrations",
    title: "A personal menu for a meaningful night.",
    description:
      "For birthdays, anniversaries, family gatherings, and intimate weddings. Chef Mani brings the kitchen to your home, villa, or private venue — and handles the menu, the service, and the details that make the evening feel effortless.",
    includes: [
      "A personal menu for your occasion",
      "Service staff by arrangement",
      "Dietary and allergy planning",
      "Nepal and India travel",
    ],
    details: ["Up to 40 guests", "Nepal & India", "Full service by arrangement", "Pricing on request"],
    image: images.temple,
    icon: FlameIcon,
    cta: "Plan a private dinner",
  },
  {
    number: "03",
    label: "Cooking Sessions",
    title: "Learn the why, not just the recipe.",
    description:
      "A hands-on session in Nepali technique, spice, and seasonality. Learn how to build layers of flavor, how to use timur and other mountain spices, and how to plate with confidence. Private or small group.",
    includes: [
      "Market-to-table ingredient walkthrough",
      "Hands-on cooking",
      "A shared meal at the end",
      "Recipe notes to take home",
    ],
    details: ["2–8 guests", "2–3 hours", "Kathmandu", "Pricing on request"],
    image: images.plateThree,
    icon: LeafIcon,
    cta: "Book a cooking session",
  },
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "As early as possible, ideally two to four weeks before your date. For larger events or travel outside Kathmandu, allow more time so the menu, logistics, and any travel arrangements can be planned properly.",
  },
  {
    question: "Can you travel outside Kathmandu?",
    answer:
      "Yes. Chef Mani is available across Nepal and in India by arrangement. Travel, accommodation, and logistics are discussed during the planning process.",
  },
  {
    question: "Do you accommodate dietary needs?",
    answer:
      "Yes. Vegetarian, vegan, gluten-free, and allergy-aware menus are available with advance notice. Please share any allergies or dietary requirements when you enquire.",
  },
  {
    question: "Are wine and pairings included?",
    answer:
      "Pairings can be arranged and are quoted separately. Wine, sake, and zero-proof progressions are all possible. The chef will suggest a pairing that follows the menu and the mood of the evening.",
  },
  {
    question: "How many guests can you serve?",
    answer:
      "From an intimate table of four to a private celebration of up to forty guests. Larger events can be discussed depending on the format, location, and support required.",
  },
  {
    question: "How do I reserve?",
    answer:
      "Send a request through the reservation page or WhatsApp with your date, guest count, location, and any dietary needs. The chef will confirm availability and the next steps personally.",
  },
];

const serviceJsonLd = serviceSchema({
  name: "Private Chef Experiences in Nepal and India",
  description:
    "Private chef experiences, chef's table dinners, private dining, and cooking sessions in Kathmandu, across Nepal, and in India.",
  path: "/experiences",
  areaServed: ["Kathmandu", "Nepal", "India"],
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title={
          <>
            An evening
            <br />
            <span className="display-italic gold-text">with the chef.</span>
          </>
        }
        description="Three ways to bring the table to life. Each begins with a conversation and ends with something you won't find on a menu."
        meta={["Chef's table", "Private dining", "Cooking sessions", "Kathmandu · Nepal · India"]}
      />

      <section className="section">
        <div className="container-luxe space-y-24">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <article
                key={experience.number}
                className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
              >
                <div
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden border border-line reveal-image",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <Image
                    src={experience.image.src}
                    alt={experience.image.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 44vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-obsidian/50 text-gold backdrop-blur">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-cream/60">
                      {experience.label}
                    </span>
                  </div>
                </div>

                <div className={cn(index % 2 === 1 && "lg:order-1")}>
                  <p className="eyebrow">Experience {experience.number}</p>
                  <h2 className="display mt-4 text-[clamp(2.3rem,4.2vw,4.2rem)]">
                    {experience.title}
                  </h2>
                  <p className="body-copy mt-5 max-w-xl">{experience.description}</p>

                  <ul className="mt-7 grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
                    {experience.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-cream/60"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                    {experience.details.map((detail) => (
                      <span
                        key={detail}
                        className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-cream/35"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  <Link href="/reserve" className="link-arrow mt-8">
                    {experience.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-tight border-y border-line bg-obsidian-soft">
        <div className="container-luxe">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow reveal">How it works</p>
              <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.4rem,4vw,4rem)]">
                Three steps
                <br />
                <span className="display-italic gold-text">to the table.</span>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Tell us about the evening",
                  copy: "Share the date, guests, location, occasion, and any dietary needs.",
                },
                {
                  number: "02",
                  title: "The chef designs the menu",
                  copy: "A conversation, a proposal, and a plan shaped around the season.",
                },
                {
                  number: "03",
                  title: "The evening arrives",
                  copy: "The chef brings the kitchen, the team, and the details.",
                },
              ].map((step, index) => (
                <div
                  key={step.number}
                  className={`border border-line bg-obsidian p-6 reveal stagger-${index + 1}`}
                >
                  <p className="card-number">{step.number}</p>
                  <h3 className="display mt-8 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/50">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow reveal">Where we cook</p>
            <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.4rem,4vw,4rem)]">
              Kathmandu.
              <br />
              <span className="display-italic gold-text">Nepal. India.</span>
            </h2>
            <p className="body-copy reveal stagger-2 mt-5 max-w-md">
              Based in Kathmandu, available across Nepal and in India by
              arrangement. The table travels with the chef.
            </p>
            <div className="reveal stagger-3 mt-7 flex flex-col gap-3">
              <Link href="/private-chef-kathmandu" className="link-arrow">
                Private chef in Kathmandu <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/private-chef-nepal" className="link-arrow">
                Private chef in Nepal <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/private-chef-india" className="link-arrow">
                Private chef in India <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow reveal">Questions</p>
            <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.4rem,4vw,4rem)]">
              Before you book.
            </h2>
            <Faq items={faqs} className="mt-8" />
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-line">
        <div className="container-luxe flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow reveal">The next step</p>
            <h2 className="display reveal stagger-1 mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5rem)]">
              Tell us about
              <br />
              <span className="display-italic gold-text">your evening.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/reserve" className="btn btn-gold">
              Request a date <ArrowRight className="arrow h-4 w-4" />
            </Link>
            <Link href="/menu" className="btn btn-ghost">
              Explore the menu
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
        ])}
      />
    </>
  );
}
