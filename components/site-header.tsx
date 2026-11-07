"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { mailtoLink, navigation, siteConfig, whatsappLink } from "@/lib/site";
import { Logo, LogoMark } from "./logo";
import { ArrowUpRight, CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

const mobileNavigation = navigation.filter((item) => item.href !== "/reserve");

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    if (restoreFocus) {
      menuButtonRef.current?.focus();
    }

    setOpen(false);
  }, []);

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

    return () => {
      if (open) {
        window.dispatchEvent(new CustomEvent("cb:menu", { detail: false }));
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onDesktop);

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktop);
    };
  }, [open, closeMenu]);

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
            aria-haspopup="dialog"
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

      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn("mobile-menu lg:hidden", open && "is-open")}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        data-lenis-prevent
      >
        <div className="mobile-menu-atmosphere" aria-hidden="true">
          <LogoMark className="mobile-menu-watermark" />
        </div>

        <div className="mobile-menu-shell container-luxe">
          <div className="mobile-menu-top">
            <Link
              href="/"
              className="mobile-menu-brand"
              aria-label="Chef Mani Bista — home"
              onClick={() => closeMenu()}
            >
              <LogoMark className="h-10 w-10 shrink-0" />
              <span className="mobile-menu-brand-text">
                <span className="mobile-menu-brand-kicker">Chef</span>
                <span className="mobile-menu-brand-name">Mani Bista</span>
                <span className="mobile-menu-brand-place">
                  Kathmandu · Nepal
                </span>
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              className="menu-button menu-button-close"
              aria-label="Close menu"
              onClick={() => closeMenu(true)}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mobile-menu-body">
            <p className="eyebrow mobile-menu-kicker">The experience</p>

            <nav className="mobile-menu-nav" aria-label="Mobile navigation">
              {mobileNavigation.map((item, index) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn("mobile-menu-link", active && "is-active")}
                    aria-current={active ? "page" : undefined}
                    onClick={() => closeMenu()}
                  >
                    <span className="mobile-menu-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mobile-menu-label">{item.label}</span>
                    <span className="mobile-menu-arrow">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/reserve"
              className="btn btn-gold mobile-menu-cta"
              onClick={() => closeMenu()}
            >
              Reserve the table
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mobile-menu-foot">
            <p className="eyebrow">Kathmandu · Nepal · India</p>

            <div className="mobile-menu-contact">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-whatsapp"
                onClick={() => closeMenu()}
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp the chef
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={mailtoLink()} onClick={() => closeMenu()}>
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => closeMenu()}
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="mobile-menu-meta">
              <span>Private chef · By arrangement</span>
              <span className="mobile-menu-socials">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
