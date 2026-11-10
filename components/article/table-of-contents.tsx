"use client";

import { useEffect, useRef, useState } from "react";
import type { ArticleSection } from "@/lib/articles";
import { cn } from "@/lib/utils";

export function TableOfContents({
  sections,
  variant = "both",
}: {
  sections: ArticleSection[];
  variant?: "desktop" | "mobile" | "both";
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const mobileRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const offset = 170;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }

      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const closeMobile = () => {
    mobileRef.current?.removeAttribute("open");
  };

  const showDesktop = variant !== "mobile";
  const showMobile = variant !== "desktop";

  return (
    <>
      {showDesktop ? (
        <aside className="article-toc-desktop" aria-label="On this page">
          <p className="article-toc-title">On this page</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(activeId === section.id && "is-active")}
                  aria-current={activeId === section.id ? "location" : undefined}
                >
                  <span className="article-toc-number">{section.number}</span>
                  <span>{section.shortTitle}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      ) : null}

      {showMobile ? (
        <details className="article-toc-mobile" ref={mobileRef}>
          <summary>
            <span>In this guide</span>
            <span className="article-toc-count">{sections.length} sections</span>
          </summary>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(activeId === section.id && "is-active")}
                  onClick={closeMobile}
                >
                  <span className="article-toc-number">{section.number}</span>
                  <span>{section.shortTitle}</span>
                </a>
              </li>
            ))}
          </ol>
        </details>
      ) : null}
    </>
  );
}
