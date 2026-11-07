import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export const metadata = buildMetadata({
  title: "About Chef Mani Bista | Nepali Chef & Storyteller",
  description:
    "The story of Chef Mani Bista — born in Nepal, shaped by global kitchens, and driven by one belief: food is how we connect. Serving Kathmandu, Nepal, and India.",
  path: "/story",
});

const chapters = [
  {
    number: "01",
    label: "Roots",
    title: "Born in Nepal. Always in the kitchen.",
    copy: "Chef Mani Bista was born and raised in Nepal, where the kitchen was the heart of the home. He learned early that food is never only food — it is memory, generosity, and a way of bringing people together.",
    image: images.overlook,
  },
  {
    number: "02",
    label: "Craft",
    title: "Fifteen years of fire and technique.",
    copy: "Over more than fifteen years in professional kitchens, he developed a style that moves between Nepali ingredients and global technique. His cooking is personal, seasonal, and built around the people at the table.",
    image: images.atWork,
  },
  {
    number: "03",
    label: "Home",
    title: "Kathmandu, and wherever the table is.",
    copy: "Today he is based in Kathmandu, cooking private dinners, chef's table experiences, and cooking sessions across Nepal and India. The kitchen travels with him — but the hospitality stays the same.",
    image: images.temple,
  },
];

const values = [
  {
    title: "Seasonality",
    copy: "The market decides the menu. The best ingredient is the one that is ready now.",
  },
  {
    title: "Precision",
    copy: "Technique in service of flavor, never for its own sake. Every detail has a reason.",
  },
  {
    title: "Generosity",
    copy: "A table should feel abundant, not intimidating. Luxury is being looked after.",
  },
  {
    title: "Connection",
    copy: "The best meals are remembered for the people around them, not just the plate.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Story"
        title={
          <>
            The story behind
            <br />
            <span className="display-italic gold-text">the flavor.</span>
          </>
        }
        description="Born in Nepal. Built in kitchens. Guided by the belief that food is how we connect."
        meta={["Nepal", "15+ years in kitchens", "Kathmandu", "Private chef"]}
      />

      <section className="relative overflow-hidden">
        <div className="container-luxe">
          <div className="relative -mt-4 aspect-[16/9] overflow-hidden border border-line reveal-image lg:aspect-[21/9]">
            <Image
              src={images.temple.src}
              alt={images.temple.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-between gap-4 sm:bottom-10 sm:left-10 sm:right-10 sm:flex-row sm:items-end">
              <p className="max-w-md font-display text-[clamp(1.5rem,2.4vw,2.4rem)] italic leading-snug text-cream/90">
                “Food is a way to tell a story. It changes with each new chapter
                of life.”
              </p>
              <p className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-gold/70">
                Chef Mani Bista
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe space-y-24">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.number}
              className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden border border-line reveal-image">
                  <Image
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 48vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="eyebrow">
                  Chapter {chapter.number} · {chapter.label}
                </p>
                <h2 className="display mt-4 text-[clamp(2.2rem,4vw,4rem)]">
                  {chapter.title}
                </h2>
                <p className="body-copy mt-5 max-w-xl">{chapter.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-obsidian-soft">
        <div className="container-luxe py-[clamp(5rem,9vw,9rem)]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow reveal">Three lights</p>
              <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.6rem,4.6vw,4.8rem)]">
                One chef.
                <br />
                <span className="display-italic gold-text">Many rooms.</span>
              </h2>
              <p className="body-copy reveal stagger-2 mt-5 max-w-md">
                The city, the mountains, and the candlelit table. Three
                atmospheres, one approach: make people feel at home.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[images.chapterCity, images.chapterMountain, images.chapterCandlelight].map(
                (image, index) => (
                  <div
                    key={image.src}
                    className={`chapter-card reveal stagger-${index + 1}`}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 33vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                      <p className="font-mono text-[0.42rem] uppercase tracking-[0.2em] text-gold/70">
                        Light 0{index + 1}
                      </p>
                      <p className="mt-1 font-display text-lg text-cream sm:text-xl">
                        {["City", "Mountain", "Candlelight"][index]}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden border border-line reveal-image">
            <Image
              src={images.portrait.src}
              alt={images.portrait.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 34vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>

          <div>
            <p className="eyebrow reveal">The philosophy</p>
            <h2 className="display reveal stagger-1 mt-5 text-[clamp(2.4rem,4vw,4rem)]">
              Season with
              <br />
              <span className="display-italic gold-text">love.</span>
            </h2>
            <blockquote className="reveal stagger-2 mt-7 border-l border-gold/30 pl-5">
              <p className="font-display text-[clamp(1.5rem,2.4vw,2.2rem)] italic leading-snug text-cream/85">
                “I love food. What I love most is the interaction between
                people. Whether that is cooking with friends or family, teaching
                someone to cook, or that feeling when they try your food.”
              </p>
              <cite className="mt-4 block font-mono text-[0.5rem] uppercase not-italic tracking-[0.22em] text-gold/70">
                Chef Mani Bista
              </cite>
            </blockquote>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`border border-line bg-obsidian-soft p-6 reveal stagger-${index + 1}`}
                >
                  <p className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-gold/70">
                    0{index + 1}
                  </p>
                  <h3 className="display mt-6 text-2xl">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/50">
                    {value.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-line">
        <div className="container-luxe flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow reveal">The next chapter</p>
            <h2 className="display reveal stagger-1 mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5rem)]">
              Bring the story
              <br />
              <span className="display-italic gold-text">to your table.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/reserve" className="btn btn-gold">
              Reserve the chef&apos;s table
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
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Story", path: "/story" },
        ])}
      />
    </>
  );
}
