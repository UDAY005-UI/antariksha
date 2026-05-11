"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
      infinite: false,
    } as ConstructorParameters<typeof Lenis>[0]);

    lenis.on("scroll", ScrollTrigger.update);

    // ✅ Use requestAnimationFrame directly — most reliable on mobile
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time); // rAF already gives ms, no * 1000 needed
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}