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
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".stack-panel");

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

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
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