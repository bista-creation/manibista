import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { siteConfig, whatsappLink } from "@/lib/site";
import { ExperienceCard } from "@/components/experience-card";
import { Marquee } from "@/components/marquee";
import { PlateCard } from "@/components/plate-card";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  ArrowUpRight,
  FlameIcon,
  KnifeIcon,
  LeafIcon,
  TableIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata = buildMetadata({
  title: "Chef Mani Bista | Private Chef in Kathmandu & Nepal",
  description:
    "Book Chef Mani Bista for private dining, chef's table experiences, and cooking classes in Kathmandu, across Nepal, and in India. Nepali soul, global technique.",
  path: "/",
});

const plates = [
  {
    image: images.plateOne,
    title: "Smoke & restraint",
    description: "A study in char, texture, and quiet precision.",
  },
  {
    image: images.plateTwo,
    title: "Memory & spice",
    description: "The warmth of home, composed with a modern hand.",
  },
  {
    image: images.plateThree,
    title: "Technique & patience",
    description: "Layers of craft, finished at the last moment.",
  },
  {
    image: images.plateFour,
    title: "Comfort & fire",
    description: "A familiar idea, sharpened by the fire.",
  },
];

const chapters = [
  {
    image: images.chapterCity,
    title: "City",
    caption: "The energy of Kathmandu",
  },
  {
    image: images.chapterMountain,
    title: "Mountain",
    caption: "The silence of the Himalaya",
  },
  {
    image: images.chapterCandlelight,
    title: "Candlelight",
    caption: "The intimacy of the table",
  },
];

const embers = [
  { left: "8%", top: "28%", delay: "0s", duration: "10s" },
  { left: "16%", top: "68%", delay: "2.5s", duration: "12s" },
  { left: "32%", top: "18%", delay: "4s", duration: "9s" },
  { left: "48%", top: "78%", delay: "1.2s", duration: "11s" },
  { left: "61%", top: "22%", delay: "5.5s", duration: "13s" },
  { left: "74%", top: "62%", delay: "3s", duration: "10s" },
  { left: "88%", top: "34%", delay: "6.5s", duration: "12s" },
  { left: "94%", top: "76%", delay: "0.8s", duration: "9s" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        {embers.map((ember, index) => (
          <span
            key={index}
            className="ember"
            style={{
              left: ember.left,
              top: ember.top,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
            }}
            aria-hidden="true"
          />
        ))}

        <div className="container-luxe relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <p className="eyebrow reveal">
                Private chef · Kathmandu · Nepal · India
              </p>

              <h1 className="hero-title mt-7">
                <span className="hero-line">
                  <span>Chase</span>
                </span>
                <span className="hero-line">
                  <span className="display-italic gold-text">the flavor</span>
                </span>
              </h1>

              <p className="lede reveal stagger-2 mt-8 max-w-xl">
                The culinary world of Chef Mani Bista — Nepali soul, global
                technique, and intimate dining experiences designed around you.
              </p>

              <div className="reveal stagger-3 mt-9 flex flex-wrap gap-3">
                <Link href="/reserve" className="btn btn-gold">
                  Reserve the chef&apos;s table
                  <ArrowRight className="arrow h-4 w-4" />
                </Link>
                <Link href="/menu" className="btn btn-ghost">
                  Explore the menu
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="reveal stagger-4 mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-line pt-6">
                <div>
                  <p className="font-display text-2xl text-cream">15+</p>
                  <p className="mt-1 font-mono text-[0.5rem] uppercase leading-relaxed tracking-[0.16em] text-cream/40">
                    Years in kitchens
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-cream">3</p>
                  <p className="mt-1 font-mono text-[0.5rem] uppercase leading-relaxed tracking-[0.16em] text-cream/40">
                    Service regions
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-cream">1</p>
                  <p className="mt-1 font-mono text-[0.5rem] uppercase leading-relaxed tracking-[0.16em] text-cream/40">
                    Table at a time
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-orbit" aria-hidden="true" />
              <div className="hero-portrait reveal-image">
                <Image
                  src={images.himalaya.src}
                  alt={images.himalaya.alt}
                  width={images.himalaya.width}
                  height={images.himalaya.height}
                  priority
                  quality={86}
                  sizes="(max-width: 1024px) 82vw, 420px"
                />
                <div className="hero-badge">
                  <p className="eyebrow text-[0.45rem]">Chef Mani Bista</p>
                  <p className="mt-1 font-display text-lg text-cream">
                    Private chef
                  </p>
                  <p className="mt-1 font-mono text-[0.42rem] uppercase tracking-[0.22em] text-cream/45">
                    Kathmandu · Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between gap-6">
            <div className="hero-scroll">
              <span className="hero-scroll-line" aria-hidden="true" />
              Scroll to begin
            </div>
            <p className="hidden font-mono text-[0.5rem] uppercase tracking-[0.22em] text-cream/30 sm:block">
              Est. Kathmandu · Available across Nepal &amp; India
            </p>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Kathmandu",
          "Nepal",
          "India",
          "Private dining",
          "Chef's table",
          "Cooking sessions",
          "Chase the flavor",
        ]}
      />

      <section className="section relative overflow-hidden">
        <div className="container-luxe">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden border border-line reveal-image">
                <Image
                  src={images.temple.src}
                  alt={images.temple.alt}
                  fill
                  quality={84}
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
                <p className="absolute bottom-5 left-5 z-10 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-cream/60">
                  Kathmandu · Nepal
                </p>
              </div>

              <div className="absolute -bottom-6 -right-4 z-10 hidden border border-gold/20 bg-obsidian/90 p-5 backdrop-blur lg:block">
                <p className="eyebrow text-[0.45rem]">Origin</p>
                <p className="mt-2 font-display text-xl text-cream">
                  The Himalaya
                </p>
                <p className="mt-1 font-mono text-[0.45rem] uppercase tracking-[0.2em] text-cream/40">
                  27.7172° N · 85.3240° E
                </p>
              </div>

              <span className="absolute -left-4 top-10 hidden border border-gold/15 bg-obsidian/80 px-3 py-2 font-mono text-[0.45rem] uppercase tracking-[0.22em] text-gold/60 backdrop-blur lg:block">
                Timur
              </span>
              <span className="absolute -right-2 top-1/3 hidden border border-gold/15 bg-obsidian/80 px-3 py-2 font-mono text-[0.45rem] uppercase tracking-[0.22em] text-gold/60 backdrop-blur lg:block">
                Himalayan salt
              </span>
              <span className="absolute -left-2 bottom-1/4 hidden border border-gold/15 bg-obsidian/80 px-3 py-2 font-mono text-[0.45rem] uppercase tracking-[0.22em] text-gold/60 backdrop-blur lg:block">
                Mustard oil
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow reveal">Act I · Origin</p>
              <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)]">
                Born in Nepal.
                <br />
                <span className="display-italic gold-text">Shaped by fire.</span>
              </h2>
              <p className="body-copy reveal stagger-2 mt-7 max-w-xl">
                Chef Mani Bista grew up in Nepal, always in the kitchen. His
                cooking is a conversation between the ingredients of home and
                the techniques of the world — a personal language of smoke,
                spice, and memory.
              </p>
              <blockquote className="reveal stagger-3 mt-9 border-l border-gold/30 pl-5">
                <p className="font-display text-[clamp(1.4rem,2vw,1.85rem)] italic leading-snug text-cream/85">
                  “I love food. What I love most is the interaction between
                  people.”
                </p>
                <cite className="mt-3 block font-mono text-[0.5rem] uppercase not-italic tracking-[0.22em] text-gold/70">
                  Chef Mani Bista
                </cite>
              </blockquote>

              <div className="reveal stagger-4 mt-9 flex flex-wrap gap-x-10 gap-y-5">
                <div>
                  <p className="font-display text-3xl text-cream">15+</p>
                  <p className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-cream/40">
                    Years in professional kitchens
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-cream">Nepal → World</p>
                  <p className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-cream/40">
                    A global palate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 hairline reveal-line" />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-obsidian-soft">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 10%, rgba(255,122,0,0.07), transparent 30%), radial-gradient(circle at 20% 90%, rgba(212,175,55,0.06), transparent 32%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[24vw] leading-none text-outline opacity-20"
          aria-hidden="true"
        >
          Fire
        </div>

        <div className="container-luxe relative py-[clamp(5rem,10vw,10rem)]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Act II · Fire"
              title={
                <>
                  Every plate begins
                  <br />
                  <span className="display-italic gold-text">with heat.</span>
                </>
              }
              description="The knife, the flame, the last-second finish. Technique is the quiet choreography behind every plate — and the reason a familiar ingredient can still surprise you."
            />
            <Link href="/menu" className="link-arrow shrink-0">
              Explore the menu <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plates.map((plate, index) => (
              <PlateCard
                key={plate.title}
                image={plate.image}
                index={index + 1}
                title={plate.title}
                description={plate.description}
                className={`reveal stagger-${(index % 4) + 1}`}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6">
            <span className="inline-flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-gold/70">
              <FlameIcon className="h-3.5 w-3.5" /> Fire
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-cream/40">
              <KnifeIcon className="h-3.5 w-3.5" /> Technique
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-cream/40">
              <LeafIcon className="h-3.5 w-3.5" /> Seasonality
            </span>
            <span className="ml-auto font-mono text-[0.5rem] uppercase tracking-[0.2em] text-cream/30">
              A sample of the table
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The Experiences"
              title={
                <>
                  The table
                  <br />
                  <span className="display-italic gold-text">is yours.</span>
                </>
              }
              description="Three ways to bring the chef into your evening. Each one begins with a conversation, not a menu."
            />
            <Link href="/experiences" className="link-arrow shrink-0">
              All experiences <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <ExperienceCard
              number="01"
              title="The Chef's Table"
              description="An intimate, multi-course evening cooked in front of you. One table, one menu, one conversation."
              details={["4–10 guests", "Kathmandu Valley", "Menu designed with you"]}
              icon={<TableIcon className="h-4 w-4" />}
              className="reveal stagger-1"
            />
            <ExperienceCard
              number="02"
              title="Private Dining & Celebrations"
              description="A personal menu for birthdays, anniversaries, and gatherings — in a home, a villa, or a private venue."
              details={["Up to 40 guests", "Nepal & India", "Full service by arrangement"]}
              icon={<FlameIcon className="h-4 w-4" />}
              className="reveal stagger-2"
            />
            <ExperienceCard
              number="03"
              title="Cooking Sessions"
              description="Hands-on lessons in Nepali technique, spice, and seasonality. Learn the why, not just the recipe."
              details={["2–8 guests", "Kathmandu", "Private or small group"]}
              icon={<LeafIcon className="h-4 w-4" />}
              className="reveal stagger-3"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6">
            <p className="eyebrow">Service area</p>
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-cream/50">
              Kathmandu · Nepal · India
            </p>
            <p className="text-xs text-cream/35">
              Based in Kathmandu. Available by arrangement.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-obsidian-soft">
        <div className="container-luxe py-[clamp(5rem,9vw,9rem)]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow reveal">The Story</p>
              <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.8rem,5vw,5rem)]">
                Three chapters.
                <br />
                <span className="display-italic gold-text">One fire.</span>
              </h2>
              <p className="body-copy reveal stagger-2 mt-6 max-w-md">
                From a childhood kitchen in Nepal to private tables across Nepal
                and India — the story is still being written, one evening at a
                time.
              </p>
              <Link href="/story" className="link-arrow reveal stagger-3 mt-7">
                Read the story <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.title}
                  className={`chapter-card reveal stagger-${index + 1}`}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={chapter.image.src}
                      alt={chapter.image.alt}
                      fill
                      sizes="(max-width: 768px) 33vw, 18vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                    <p className="font-mono text-[0.42rem] uppercase tracking-[0.2em] text-gold/70">
                      Chapter 0{index + 1}
                    </p>
                    <p className="mt-1 font-display text-lg text-cream sm:text-xl">
                      {chapter.title}
                    </p>
                    <p className="mt-1 hidden text-[0.65rem] leading-snug text-cream/45 sm:block">
                      {chapter.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="container-luxe">
          <div className="relative overflow-hidden border border-gold/20 bg-obsidian-soft">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.12), transparent 34%), radial-gradient(circle at 20% 90%, rgba(184,115,51,0.08), transparent 36%)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid gap-12 p-[clamp(1.5rem,4vw,4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="eyebrow reveal">The Reservation</p>
                <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)]">
                  Tell us the date.
                  <br />
                  <span className="display-italic gold-text">
                    The chef will design the rest.
                  </span>
                </h2>
                <p className="body-copy reveal stagger-2 mt-6 max-w-xl">
                  Share the occasion, the guests, and the place. Chef Mani will
                  shape a menu around the season, your preferences, and the
                  evening you have in mind.
                </p>
                <div className="reveal stagger-3 mt-8 flex flex-wrap gap-3">
                  <Link href="/reserve" className="btn btn-gold">
                    Request the chef&apos;s table
                    <ArrowRight className="arrow h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp the chef
                  </a>
                </div>
                <p className="reveal stagger-4 mt-6 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-cream/35">
                  {siteConfig.phoneDisplay} · {siteConfig.email}
                </p>
              </div>

              <div className="relative hidden aspect-square lg:block" aria-hidden="true">
                <div className="absolute inset-0 rounded-full border border-gold/15" />
                <div className="absolute inset-[11%] rounded-full border border-gold/20" />
                <div className="absolute inset-[22%] rounded-full border border-gold/25" />
                <div className="absolute inset-[33%] rounded-full border border-gold/30 bg-gold/5 backdrop-blur" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="eyebrow text-[0.45rem]">The chef&apos;s table</p>
                    <p className="mt-3 font-display text-3xl text-cream">
                      One evening
                    </p>
                    <p className="mt-2 font-mono text-[0.45rem] uppercase tracking-[0.2em] text-cream/40">
                      Designed around you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
