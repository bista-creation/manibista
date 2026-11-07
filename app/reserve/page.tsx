import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Faq } from "@/components/faq";
import { ContactLinks } from "@/components/contact-links";
import { ReservationForm } from "@/components/reservation-form";
import { ArrowUpRight, WhatsAppIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Reserve the Chef's Table | Chef Mani Bista",
  description:
    "Request Chef Mani Bista for a private dining experience in Kathmandu, across Nepal, or in India. Send your date, guests, and occasion — the chef will confirm availability personally.",
  path: "/reserve",
});

const faqs = [
  {
    question: "How does the reservation work?",
    answer:
      "Send a request with your preferred date, guest count, location, and any dietary needs. The chef will review availability and reply personally. Your date is confirmed once you have spoken with the chef and agreed the details.",
  },
  {
    question: "Is a payment required on this site?",
    answer:
      "No. This site does not take payment. Once availability and the menu direction are confirmed, the chef will share a proposal and the next steps directly.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Ideally two to four weeks before your date. For larger events, travel outside Kathmandu, or visits to India, allow more time so the menu and logistics can be planned properly.",
  },
  {
    question: "Can you accommodate allergies and dietary needs?",
    answer:
      "Yes. Vegetarian, vegan, gluten-free, and allergy-aware menus are available with advance notice. Please share any allergies or dietary requirements when you enquire.",
  },
  {
    question: "Do you travel outside Kathmandu?",
    answer:
      "Yes. Chef Mani cooks across Nepal and travels to India by arrangement. Travel, accommodation, and logistics are discussed and agreed before the date is confirmed.",
  },
  {
    question: "What happens after I send the request?",
    answer:
      "The request opens in WhatsApp (or email, if you prefer). The chef will reply to confirm availability, ask any questions, and begin designing the menu with you.",
  },
];

const serviceJsonLd = serviceSchema({
  name: "Private Chef Reservations — Chef Mani Bista",
  description:
    "Request a private chef experience with Chef Mani Bista in Kathmandu, across Nepal, or in India. Chef's table dinners, private dining, and cooking sessions by arrangement.",
  path: "/reserve",
  areaServed: ["Kathmandu", "Nepal", "India"],
});

export default function ReservePage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title={
          <>
            Reserve
            <br />
            <span className="display-italic gold-text">the chef&apos;s table.</span>
          </>
        }
        description="Tell us the date, the guests, and the occasion. The chef will confirm availability and design the rest."
        meta={[
          "Inquiry → chef approval",
          "No payment required",
          "Kathmandu · Nepal · India",
        ]}
      />

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="reveal">
              <p className="eyebrow">The request</p>
              <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.8rem)]">
                Tell us about
                <br />
                <span className="display-italic gold-text">your evening.</span>
              </h2>
              <p className="body-copy mt-5 max-w-xl">
                Share as much or as little as you know. A date, a rough guest
                count, and a feeling are enough to begin.
              </p>
            </div>

            <div className="mt-10">
              <ReservationForm />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden border border-line reveal-image">
              <Image
                src="/images/chef-mani-bista-himalaya.jpg"
                alt="Chef Mani Bista seated before the Himalayan mountains near Kathmandu"
                fill
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="object-cover object-[center_38%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-cream/60">
                Kathmandu · Nepal
              </p>
            </div>

            <div className="mt-8 border border-line bg-obsidian-soft p-6">
              <p className="eyebrow">How it works</p>
              <ol className="mt-5 space-y-5">
                {[
                  {
                    number: "01",
                    title: "Send your request",
                    copy: "Date, guests, location, and any dietary needs.",
                  },
                  {
                    number: "02",
                    title: "The chef confirms",
                    copy: "Availability and the shape of the evening.",
                  },
                  {
                    number: "03",
                    title: "The menu is designed",
                    copy: "A personal proposal, then the table is yours.",
                  },
                ].map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="font-mono text-[0.5rem] tracking-[0.2em] text-gold/60">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-display text-lg text-cream">
                        {step.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-cream/45">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-4">Prefer to talk?</p>
              <ContactLinks />
            </div>

            <div className="mt-8 border border-gold/15 bg-gold/5 p-5">
              <p className="text-xs leading-relaxed text-cream/50">
                No payment is taken on this site. Once availability is
                confirmed, the chef will share a proposal and the next steps
                directly.
              </p>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp the chef <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </aside>
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
              If your question isn&apos;t here, send a message. The chef will
              answer personally.
            </p>
            <p className="reveal stagger-3 mt-6 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-cream/35">
              {siteConfig.phoneDisplay}
              <br />
              {siteConfig.email}
            </p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section-tight border-t border-line">
        <div className="container-luxe flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow reveal">Not ready to book?</p>
            <h2 className="display reveal stagger-1 mt-5 max-w-2xl text-[clamp(2.6rem,4.6vw,4.6rem)]">
              Start with
              <br />
              <span className="display-italic gold-text">a conversation.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp the chef
            </a>
            <Link href="/experiences" className="btn btn-ghost">
              View experiences
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reserve", path: "/reserve" },
        ])}
      />
    </>
  );
}
