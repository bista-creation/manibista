import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./icons";

export function PlateCard({
  image,
  index,
  title,
  description,
  href = "/menu",
  className,
}: {
  image: SiteImage;
  index: number;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("plate-card group", className)}
      aria-label={`${title} — view the menu`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="plate-card-content">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow text-[0.5rem]">
            Signature plate · {String(index).padStart(2, "0")}
          </p>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <h3 className="display mt-4 text-[clamp(1.6rem,2.2vw,2.25rem)]">
          {title}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/55">
          {description}
        </p>
      </div>
    </Link>
  );
}
