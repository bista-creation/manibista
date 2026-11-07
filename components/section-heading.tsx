import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 className="display text-[clamp(2.6rem,5vw,5rem)]">{title}</h2>
      {description ? <p className="lede mt-6">{description}</p> : null}
    </div>
  );
}
