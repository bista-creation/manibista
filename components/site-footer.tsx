import Link from "next/link";
import {
  footerNavigation,
  mailtoLink,
  siteConfig,
  whatsappLink,
} from "@/lib/site";
import { Logo } from "./logo";
import { ArrowUpRight, WhatsAppIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-luxe">
        <div className="grid gap-10 border-b border-line py-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:py-20">
          <div className="reveal">
            <p className="eyebrow mb-5">The table is yours</p>
            <p className="display max-w-2xl text-[clamp(2.2rem,4vw,4.5rem)]">
              An evening with the chef,
              <br />
              <span className="display-italic gold-text">designed around you.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/reserve" className="btn btn-gold">
              Reserve the chef&apos;s table
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="body-copy mt-6 max-w-xs text-sm">
              Nepali soul, global technique. Private dining, chef&apos;s table
              experiences, and cooking sessions in Kathmandu, across Nepal, and
              in India.
            </p>
            <p className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-gold/70">
              Available by arrangement
            </p>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.title}>
              <p className="eyebrow mb-5">{group.title}</p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  WhatsApp
                  <ArrowUpRight className="h-3 w-3 text-gold/60" />
                </a>
              </li>
              <li>
                <a href={mailtoLink()} className="footer-link">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-sm text-cream/45">
                Kathmandu 44600, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 text-[0.55rem] uppercase tracking-[0.18em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Chef Mani Bista. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Facebook
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.socials.wordpress}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Journal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
