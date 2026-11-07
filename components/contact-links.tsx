import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, WhatsAppIcon } from "./icons";

export function ContactLinks({ className }: { className?: string }) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      <a
        href={`tel:${siteConfig.phone}`}
        className="group flex items-center justify-between gap-6 py-5"
      >
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-gold">
          Call
        </span>
        <span className="flex items-center gap-3 text-sm text-cream/70 transition-colors group-hover:text-cream">
          {siteConfig.phoneDisplay}
          <ArrowUpRight className="h-3.5 w-3.5 text-gold/60" />
        </span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-6 py-5"
      >
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-gold">
          WhatsApp
        </span>
        <span className="flex items-center gap-3 text-sm text-cream/70 transition-colors group-hover:text-cream">
          Message the chef
          <WhatsAppIcon className="h-3.5 w-3.5 text-gold/60" />
        </span>
      </a>
      <a
        href={mailtoLink()}
        className="group flex items-center justify-between gap-6 py-5"
      >
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-gold">
          Email
        </span>
        <span className="flex items-center gap-3 text-sm text-cream/70 transition-colors group-hover:text-cream">
          {siteConfig.email}
          <ArrowUpRight className="h-3.5 w-3.5 text-gold/60" />
        </span>
      </a>
    </div>
  );
}
