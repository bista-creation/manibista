import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, ArrowUpRight, FlameIcon, LeafIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Signature Menu | Chef Mani Bista",
  description:
    "Explore Chef Mani Bista's seasonal, ingredient-led menu — Nepali produce, global technique, and a personal fine-dining point of view. Private dining across Nepal and India.",
  path: "/menu",
});

const courses = [
  {
    number: "I",
    title: "Smoke, citrus, mountain herbs",
    description:
      "Charred aromatics, preserved citrus, timur, and wild greens. A bright, smoky opening that wakes up the table.",
    ingredients: "Charred aromatics · Preserved citrus · Timur · Wild greens",
    image: images.plateOne,
  },
  {
    number: "II",
    title: "Earth, fire, slow time",
    description:
      "Root vegetables, black garlic, toasted spice, and ember oil. Deep, warm, and built around patience.",
    ingredients: "Root vegetables · Black garlic · Toasted spice · Ember oil",
    image: images.plateTwo,
  },
  {
    number: "III",
    title: "The centerpiece",
    description:
      "A seasonal main, finished at the table. The ingredient changes with the market; the intention does not.",
    ingredients: "Seasonal main · Market vegetables · Pan jus · Fresh herbs",
    image: images.plateThree,
  },
  {
    number: "IV",
    title: "Sweet, warm, familiar",
    description:
      "Jaggery, cardamom, cultured cream, and toasted grains. A quiet ending with a Nepali accent.",
    ingredients: "Jaggery · Cardamom · Cultured cream · Toasted grains",
    image: images.plateFour,
  },
];

const menuSections = [
  {
    name: "The Signature Progression",
    description:
      "A sample four-course progression. The final menu is designed around the guest, the season, and the occasion.",
    courses: courses.map((course) => ({
      name: `Course ${course.number}`,
      description: `${course.title}. ${course.description}`,
    })),
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title={
          <>
            A menu written
            <br />
            <span className="display-italic gold-text">by memory.</span>
          </>
        }
        description="Seasonal, ingredient-led, and designed around the guest. The menu is a conversation — with the market, the season, and the people at the table."
        meta={["Seasonal", "Ingredient-led", "Private dining", "Kathmandu · Nepal · India"]}
      />

      <section className="section">
        <div className="container-luxe">
          <div className="grid gap-5 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div
                key={course.number}
                className={`reveal stagger-${(index % 4) + 1}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <Image
                    src={course.image.src}
                    alt={course.image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-gold">
                    Course {course.number}
                  </p>
                </div>
                <p className="mt-4 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-cream/35">
                  A sample of the progression
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 space-y-20">
            {courses.map((course, index) => (
              <article
                key={course.number}
                className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden border border-line reveal-image",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <Image
                    src={course.image.src}
                    alt={course.image.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
                </div>

                <div className={cn(index % 2 === 1 && "lg:order-1")}>
                  <p className="eyebrow">Course {course.number}</p>
                  <h2 className="display mt-4 text-[clamp(2.2rem,4vw,4rem)]">
                    {course.title}
                  </h2>
                  <p className="body-copy mt-5 max-w-xl">{course.description}</p>
                  <p className="mt-6 border-t border-line pt-4 font-mono text-[0.55rem] uppercase leading-relaxed tracking-[0.18em] text-cream/40">
                    {course.ingredients}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border border-gold/20 bg-obsidian-soft p-[clamp(1.5rem,3vw,3rem)]">
            <p className="eyebrow">A note from the chef</p>
            <p className="mt-4 max-w-3xl font-display text-[clamp(1.6rem,2.8vw,2.6rem)] leading-snug text-cream/85">
              “This is a sample progression, not a script. The final menu is
              written with you — around the season, your table, and what looks
              best on the day.”
            </p>
            <p className="mt-5 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-gold/70">
              Chef Mani Bista
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight border-y border-line bg-obsidian-soft">
        <div className="container-luxe grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <LeafIcon className="h-4 w-4 text-gold" />
              <p className="eyebrow">Dietary notes</p>
            </div>
            <h2 className="display mt-5 text-[clamp(2rem,3.5vw,3.5rem)]">
              Every table is different.
            </h2>
            <p className="body-copy mt-4 max-w-lg">
              Vegetarian, vegan, gluten-free, and allergy-aware menus are
              available with advance notice. Tell the chef what you need — the
              menu is built around you, not the other way around.
            </p>
          </div>
          <div className="reveal stagger-1">
            <div className="flex items-center gap-3">
              <FlameIcon className="h-4 w-4 text-gold" />
              <p className="eyebrow">Pairings</p>
            </div>
            <h2 className="display mt-5 text-[clamp(2rem,3.5vw,3.5rem)]">
              A progression to match.
            </h2>
            <p className="body-copy mt-4 max-w-lg">
              Wine, sake, and zero-proof pairings can be arranged. The chef will
              suggest a progression that follows the menu, the season, and the
              mood of the evening.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow reveal">The next step</p>
              <h2 className="display reveal stagger-1 mt-5 max-w-3xl text-[clamp(2.8rem,5vw,5rem)]">
                Let&apos;s write
                <br />
                <span className="display-italic gold-text">your menu.</span>
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
        </div>
      </section>

      <JsonLd data={menuSchema(menuSections)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />
    </>
  );
}
