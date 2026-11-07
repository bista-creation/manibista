"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onMenu = (event: Event) => {
      const open = (event as CustomEvent<boolean>).detail;
      if (open) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    window.addEventListener("cb:menu", onMenu);

    return () => {
      window.removeEventListener("cb:menu", onMenu);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
