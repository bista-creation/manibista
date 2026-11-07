import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/icons";
import { LogoMark } from "@/components/logo";

export const metadata = buildMetadata({
  title: "Page not found | Chef Mani Bista",
  description:
    "This course is not on the menu. Return to the Chef Mani Bista experience.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32">
      <div className="page-hero-glow" />
      <div className="container-luxe relative">
        <LogoMark className="h-16 w-16" />
        <p className="eyebrow mt-10">404 · Off the menu</p>
        <h1 className="display mt-5 max-w-4xl text-[clamp(3rem,8vw,7rem)]">
          This course isn&apos;t
          <br />
          <span className="display-italic gold-text">on the menu.</span>
        </h1>
        <p className="lede mt-7 max-w-xl">
          The page you were looking for has moved, or it was never part of this
          evening. Let&apos;s return you to the table.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-gold">
            Return home <ArrowRight className="arrow h-4 w-4" />
          </Link>
          <Link href="/reserve" className="btn btn-ghost">
            Reserve the chef&apos;s table
          </Link>
        </div>
      </div>
    </section>
  );
}
