import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("h-11 w-11 text-gold", className)}
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="56"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      <g
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 84V34l24 32 24-32v50" />
        <path d="M82 84V34h9c8 0 13 5 13 13s-5 13-13 13h-9" />
        <path d="M82 60h9c8 0 14 5 14 12s-6 12-14 12h-9" />
      </g>
      <circle cx="97" cy="24" r="3" fill="#FF7A00" />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
  light = false,
}: {
  className?: string;
  compact?: boolean;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Chef Mani Bista — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoMark className="h-10 w-10 shrink-0 transition-transform duration-700 group-hover:rotate-6 sm:h-11 sm:w-11" />
      {!compact && (
        <span className="hidden flex-col leading-none sm:flex">
          <span
            className={cn(
              "font-mono text-[0.42rem] tracking-[0.36em]",
              light ? "text-copper" : "text-gold/80",
            )}
          >
            CHEF
          </span>
          <span
            className={cn(
              "mt-1 font-display text-[1.05rem] tracking-[0.08em]",
              light ? "text-obsidian" : "text-cream",
            )}
          >
            MANI BISTA
          </span>
          <span
            className={cn(
              "mt-1 font-mono text-[0.36rem] tracking-[0.3em]",
              light ? "text-obsidian/55" : "text-gold/60",
            )}
          >
            KATHMANDU · NEPAL
          </span>
        </span>
      )}
    </Link>
  );
}
