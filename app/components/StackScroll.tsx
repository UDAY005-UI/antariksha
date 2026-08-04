"use client";
import { useLayoutEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function StackScroll({
  children,
  stackRef,
  onScrollTriggerReady,
  onScrollProgress,
}: {
  children: React.ReactNode;
  stackRef?: RefObject<HTMLDivElement | null>;
  onScrollTriggerReady?: () => void;
  onScrollProgress?: (progress: number) => void;
}) {
  const internalRef = useRef<HTMLDivElement | null>(null);
  const containerRef = (stackRef ?? internalRef) as RefObject<HTMLDivElement>;

  useLayoutEffect(() => {
    let ctx: gsap.Context | undefined;
    let cancelled = false;

    const timer = setTimeout(() => {
      if (cancelled || !containerRef.current) return;

      ctx = gsap.context(() => {
        // IMPORTANT: query panels scoped to THIS container only.
        // gsap.utils.toArray(".stack-panel") queries the whole document,
        // which picks up leftover/other-page panels during route
        // transitions and causes pin/removeChild crashes on back-nav.
        const panels = gsap.utils.toArray<HTMLElement>(
          containerRef.current!.querySelectorAll(".stack-panel")
        );

        if (panels.length === 0) return;

        panels.forEach((panel, i) => {
          if (i !== 0) gsap.set(panel, { yPercent: 100 });
        });

        const totalScroll = window.innerHeight * (panels.length - 1);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalScroll}`,
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onRefresh() {
              onScrollTriggerReady?.();
            },
            onUpdate(self) {
              onScrollProgress?.(self.progress);
            },
          },
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          tl.to(panel, { yPercent: 0, ease: "none" });
        });

        ScrollTrigger.refresh();
      }, containerRef);
    }, 100);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      // ctx.revert() properly unwinds everything THIS context created:
      // kills its ScrollTriggers, unpins, and removes GSAP's pin-spacer
      // wrapper divs so React's DOM tree matches what it expects again.
      // We do NOT additionally call ScrollTrigger.getAll().forEach(kill)
      // here — that would kill triggers belonging to other component
      // instances (e.g. a page transitioning in concurrently) and can
      // leave a stray pin-spacer behind, which is what was causing the
      // "Failed to execute 'removeChild' on 'Node'" crash on back-nav.
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-black"
      style={{ height: "100dvh" }}
    >
      {children}
    </div>
  );
}