"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig, whatsappLink } from "@/lib/site";
import { Logo } from "./logo";
import { ArrowUpRight, CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("cb:menu", { detail: open }));

    if (open) {
      closeButtonRef.current?.focus();
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.dispatchEvent(new CustomEvent("cb:menu", { detail: false }));
    };
  }, [open]);

  return (
    <>
      <header className={cn("site-header", scrolled && "is-scrolled")}>
        <div className="container-luxe flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav
            className="hidden items-center gap-9 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname === item.href && "text-cream",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <Link
              href="/reserve"
              className="btn btn-gold !min-h-10 !px-5 !py-2.5 text-[0.55rem]"
            >
              Reserve
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-menu is-open lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-luxe flex h-full flex-col justify-between py-8">
            <div className="flex justify-end">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  setOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="menu-button"
                aria-label="Close menu"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-link flex items-baseline gap-4"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-[0.55rem] tracking-[0.3em] text-gold/60">
                    0{index + 1}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-4 border-t border-line pt-6">
              <p className="eyebrow">Kathmandu · Nepal · India</p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                WhatsApp the chef <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-cream/60"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="block text-sm text-cream/60"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
