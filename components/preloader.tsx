"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LogoMark } from "./logo";

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const alreadySeen = sessionStorage.getItem("cb-intro") === "1";

    if (reduceMotion || alreadySeen) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    const counter = { value: 0 };
    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        sessionStorage.setItem("cb-intro", "1");
        document.body.style.overflow = "";
        setDone(true);
      },
    });

    timelineRef.current = timeline;

    timeline
      .to(barRef.current, { scaleX: 1, duration: 1.15 })
      .to(
        counter,
        {
          value: 100,
          duration: 1.15,
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.textContent = String(
                Math.round(counter.value),
              ).padStart(2, "0");
            }
          },
        },
        0,
      )
      .to(overlay, {
        autoAlpha: 0,
        y: -24,
        duration: 0.65,
        delay: 0.12,
      });

    return () => {
      timeline.kill();
      document.body.style.overflow = "";
    };
  }, []);

  function skip() {
    timelineRef.current?.kill();
    sessionStorage.setItem("cb-intro", "1");
    document.body.style.overflow = "";
    setDone(true);
  }

  if (done) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="preloader"
      role="status"
      aria-label="Preparing the Chef Mani Bista experience"
    >
      <div className="preloader-inner">
        <LogoMark className="preloader-mark h-20 w-20" />
        <p className="preloader-label">Mise en place</p>
        <div className="preloader-bar">
          <div ref={barRef} className="preloader-bar-fill" />
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="preloader-label">Preparing the table</span>
          <span ref={countRef} className="preloader-count">
            00
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={skip}
        className="absolute bottom-8 right-8 font-mono text-[0.55rem] uppercase tracking-[0.25em] text-cream/40 transition-colors hover:text-gold"
      >
        Skip intro
      </button>
    </div>
  );
}
