import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  meta?: string[];
  className?: string;
}) {
  return (
    <section className={cn("page-hero", className)}>
      <div className="page-hero-glow" />
      <div className="container-luxe relative">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="display reveal stagger-1 mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)]">
          {title}
        </h1>
        <p className="lede reveal stagger-2 mt-8 max-w-2xl">{description}</p>
        {meta?.length ? (
          <div className="reveal stagger-3 mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-5">
            {meta.map((item) => (
              <span
                key={item}
                className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-cream/45"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
