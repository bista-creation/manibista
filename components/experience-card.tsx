import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./icons";

export function ExperienceCard({
  number,
  title,
  description,
  details,
  href = "/experiences",
  icon,
  className,
}: {
  number: string;
  title: string;
  description: string;
  details: string[];
  href?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn("experience-card", className)}>
      <div className="flex items-start justify-between gap-4">
        <span className="card-number">{number}</span>
        <span className="text-gold/60">
          {icon ?? <ArrowUpRight className="h-4 w-4" />}
        </span>
      </div>

      <div>
        <h3 className="display text-[clamp(1.8rem,2.4vw,2.5rem)]">{title}</h3>
        <p className="body-copy mt-4 text-sm">{description}</p>
      </div>

      <ul className="mt-auto space-y-2 border-t border-line pt-5">
        {details.map((detail) => (
          <li
            key={detail}
            className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-cream/45"
          >
            {detail}
          </li>
        ))}
      </ul>

      <Link href={href} className="link-arrow">
        Discover <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
