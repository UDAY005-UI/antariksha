"use client";

import { useLayoutEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackScroll({
  children,
  stackRef,
  onScrollTriggerReady,
}: {
  children: React.ReactNode
  stackRef?: RefObject<HTMLDivElement | null>
  onScrollTriggerReady?: () => void
}) {
  const internalRef = useRef<HTMLDivElement | null>(null)
  const containerRef = (stackRef ?? internalRef) as RefObject<HTMLDivElement>

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".stack-panel")
      const isMobile = window.innerWidth < 768

      panels.forEach((panel, i) => {
        if (i !== 0) gsap.set(panel, { yPercent: 100 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (panels.length - 1)}`,
          scrub: isMobile ? 0.3 : 1,   // tighter scrub on mobile
          pin: true,
          anticipatePin: 1,
          onRefresh() {
            onScrollTriggerReady?.()
          },
        },
      })

      panels.forEach((panel, i) => {
        if (i === 0) return
        tl.to(panel, { yPercent: 0, ease: "none" })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-black"
      style={{ height: "100dvh", willChange: "transform", transform: "translateZ(0)" }}
    >
      {children}
    </div>
  )
}