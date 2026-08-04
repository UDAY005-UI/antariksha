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

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // ── bfcache fix ──────────────────────────────────────────────────
    // Chrome's back-forward cache restores this page as a frozen
    // snapshot on browser back/forward instead of remounting it.
    // React effects, GSAP's ScrollTrigger pins, and Lenis never
    // re-initialize in that case — you get whatever visual state
    // (opacity/position) happened to be mid-animation the instant
    // you navigated away, permanently stuck. Forcing a reload when
    // the page is restored from bfcache guarantees a clean remount
    // with GSAP/Lenis set up correctly again.
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}