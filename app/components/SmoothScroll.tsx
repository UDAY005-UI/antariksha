"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // was 0.5 — way too short, barely noticeable
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: true,      // ← this is what you're missing
      wheelMultiplier: 0.3,
      touchMultiplier: 0.4,   // lower = more drag/resistance on touch
    } as ConstructorParameters<typeof Lenis>[0]);

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return null;
}