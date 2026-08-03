"use client"

import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion"
import { useRef, useState } from "react"
import StackScroll from "../components/StackScroll"
import SmoothScroll from "../components/SmoothScroll"
import Image from "next/image"
import gsap from "gsap"
import { useNavigate } from "../components/UseNavigate"
import { brands } from "./data/brand"

type Dir = 1 | -1

const imageVariants: Variants = {
  enter: (dir: Dir) => ({
    x: dir > 0 ? "40%" : "-40%",
    opacity: 0,
    scale: 1.06,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: Dir) => ({
    x: dir > 0 ? "-25%" : "25%",
    opacity: 0,
    scale: 0.97,
  }),
}

const imageEnterTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0, 1],
}

function BrandCarouselCard({
  brand,
  isActive,
  direction,
  onClick,
}: {
  brand: (typeof brands)[number] | null
  isActive: boolean
  direction: Dir
  onClick: () => void
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      animate={{
        flexGrow: isActive ? 2.4 : 1,
        opacity: brand ? (isActive ? 1 : 0.5) : 0,
        scale: isActive ? 1 : 0.93,
      }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0, 1] }}
      className="relative h-full overflow-hidden rounded-2xl cursor-pointer flex-1 min-w-0"
      onClick={onClick}
    >
      <AnimatePresence custom={direction} mode="popLayout">
        {brand && (
          <motion.div
            key={brand.id}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={imageEnterTransition}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            {!imgError ? (
              <Image
                src={brand.coverImage}
                alt=""
                fill
                onError={() => setImgError(true)}
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/20">{brand.name.charAt(0)}</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />
      {!isActive && <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />}

<AnimatePresence>
  {isActive && brand && (
    <motion.div
      key={`label-${brand.id}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ delay: 0.22, duration: 0.35, ease: "easeOut" }}
      className="absolute bottom-5 left-1/2 -translate-x-1/2 w-fit flex flex-col items-center z-20"
    >
      <p className="text-[10px] tracking-widest uppercase text-orange-400/80 mb-1 text-center" data-cursor="none">
        {brand.works.length} {brand.works.length === 1 ? "Work" : "Works"}
      </p>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center" data-cursor="none"> 
        {brand.name}
      </h2>
    </motion.div>
  )}
</AnimatePresence>

      <AnimatePresence>
        {isActive && brand && (
          <motion.div
            key={`tap-${brand.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.28, duration: 0.3 }}
            className="absolute top-4 right-4 z-20"
          >
            <span className="text-[9px] tracking-[0.2em] uppercase text-orange-400 font-medium" data-cursor="none">
              Tap to view
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!brand && <div className="absolute inset-0 rounded-2xl bg-white/[0.03]" />}
    </motion.div>
  )
}

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const gridFired = useRef(false)
  const gridAccent = useRef<HTMLDivElement>(null)
  const gridTag = useRef<HTMLParagraphElement>(null)
  const gridCount = useRef<HTMLParagraphElement>(null)

  const contactFired = useRef(false)
  const contactAccent = useRef<HTMLDivElement>(null)
  const contactTag = useRef<HTMLDivElement>(null)
  const contactHeading = useRef<HTMLDivElement>(null)
  const contactLinks = useRef<HTMLDivElement>(null)

  const TOTAL_BRANDS = brands.length
  const [brandIndex, setBrandIndex] = useState(0)
  const [brandDirection, setBrandDirection] = useState<Dir>(1)

  const handleBrandNext = () => {
    if (brandIndex >= TOTAL_BRANDS - 1) return
    setBrandDirection(1)
    setBrandIndex((i) => i + 1)
  }

  const handleBrandPrev = () => {
    if (brandIndex <= 0) return
    setBrandDirection(-1)
    setBrandIndex((i) => i - 1)
  }

  const brandTouchStartX = useRef<number | null>(null)
  const onBrandTouchStart = (e: React.TouchEvent) => {
    brandTouchStartX.current = e.touches[0].clientX
  }
  const onBrandTouchEnd = (e: React.TouchEvent) => {
    if (brandTouchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - brandTouchStartX.current
    if (Math.abs(dx) > 50) {
      if (dx < 0) handleBrandNext()
      else handleBrandPrev()
    }
    brandTouchStartX.current = null
  }

  const brandSlots = [-1, 0, 1].map((offset) => ({
    offset,
    brand: brands[brandIndex + offset] ?? null,
    isActive: offset === 0,
  }))

  function animateGrid() {
    if (gridFired.current) return
    gridFired.current = true
    gsap.fromTo(gridAccent.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "expo.out", transformOrigin: "left center" })
    gsap.fromTo(gridTag.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.25 })
    gsap.fromTo(gridCount.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.4 })
  }

  function animateContact() {
    if (contactFired.current) return
    contactFired.current = true
    gsap.fromTo(contactAccent.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "expo.out", transformOrigin: "left center" })
    gsap.fromTo(contactTag.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.25 })
    gsap.fromTo(contactHeading.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", delay: 0.45 })
    gsap.fromTo(contactLinks.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.8 })
  }

  function handleScrollProgress(progress: number) {
    const step = 1 / 2
    if (progress >= step * 1.0) animateGrid()
    if (progress >= step * 1.95) animateContact()
  }

  const contactInnerCls =
    "relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20"

  return (
    <main className="bg-[#0b0b0b]">
      <SmoothScroll />
      <StackScroll stackRef={stackRef} onScrollProgress={handleScrollProgress}>

        {/* ── Section 1 — Hero ───────────────────────────────────────────── */}
        <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
          <Image src="/work.png" alt="members" fill priority className="hidden md:block -z-10 object-cover object-[center_30%]" />
          <Image src="/work2.png" alt="member" fill priority className="block md:hidden -z-10 object-cover" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full px-8 md:px-35 pb-20 sm:pb-16 md:pb-14 items-end">
            <div className="w-full h-full flex flex-col justify-between sm:flex-none sm:h-auto sm:justify-normal sm:block">
              <div className="pt-24 sm:pt-0">
                <motion.h1
                  data-cursor="expand"
                  className="text-[10px] sm:text-xs font-semibold tracking-widest text-left mb-2 md:mb-4 w-fit"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.0, ease: [0.25, 0.1, 0, 1] }}
                >
                  Our Work
                </motion.h1>
                <div className="flex justify-start">
                  {"SHOT".split("").map((l, i) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        data-cursor="expand"
                        className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1], delay: 0.1 + i * 0.07 }}
                      >
                        {l}
                      </motion.span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-start">
                  {"IN".split("").map((l, i) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        data-cursor="expand"
                        className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1], delay: 0.38 + i * 0.07 }}
                      >
                        {l}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-3 sm:pb-0 sm:mt-0">
                <div className="flex justify-end">
                  {"GOLDEN".split("").map((l, i, arr) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        data-cursor="expand"
                        className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1], delay: 0.55 + (arr.length - 1 - i) * 0.07 }}
                      >
                        {l}
                      </motion.span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  {"HOUR".split("").map((l, i, arr) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        data-cursor="expand"
                        className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1], delay: 0.9 + (arr.length - 1 - i) * 0.07 }}
                      >
                        {l}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-end px-8 md:px-35 pb-20 sm:pb-16 md:pb-14"
          >
            <div className="w-full">
              <h1 className="text-[10px] sm:text-xs font-semibold text-black tracking-widest text-left mb-2 md:mb-4">
                The Craft
              </h1>
              <div className="flex justify-start">
                {"SEEN".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">{l}</span>
                ))}
              </div>
              <div className="flex justify-start mb-3 md:mb-0">
                {"IN".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">{l}</span>
                ))}
              </div>
              <div className="flex justify-end">
                {"MOTION".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">{l}</span>
                ))}
              </div>
              <div className="flex justify-end">
                {"FIRST".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2 — Portfolio carousel ────────────────────────────── */}
        <section className="stack-panel absolute inset-0 w-full bg-[#0b0b0b] flex flex-col">

          {/* header — reduced top padding */}
          <div className="flex flex-col items-center self-center w-fit pt-12 pb-6 flex-shrink-0">
            <div
              ref={gridAccent}
              className="w-12 h-[2px] bg-orange-500 mb-3"
              style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
              data-cursor="none"
            />
            <p
              ref={gridTag}
              className="text-xs tracking-[0.3em] mb-1"
              style={{ opacity: 0, transform: "translateY(28px)" }}
              data-cursor="none"
            >
              PORTFOLIO
            </p>
            <p
              ref={gridCount}
              className="text-sm tabular-nums"
              style={{ opacity: 0, transform: "translateY(28px)" }}
              data-cursor="none"
            >
              {String(brands.length).padStart(2, "0")} BRANDS
            </p>
          </div>

          {/* cards — constrained so bottom never bleeds into next section */}
          <div
            className="flex-1 min-h-0 flex items-stretch gap-3 px-4 sm:px-6 md:px-10 xl:px-16 mb-4 overflow-hidden"
            style={{ maxHeight: "calc(80svh - 100px)" }}
            onTouchStart={onBrandTouchStart}
            onTouchEnd={onBrandTouchEnd}
          >
            {brandSlots.map(({ offset, brand, isActive }) => (
              <BrandCarouselCard
                key={offset}
                brand={brand}
                isActive={isActive}
                direction={brandDirection}
                onClick={() => {
                  if (!brand) return
                  if (isActive) {
                    navigate(`/work/${brand.slug}`)
                  } else {
                    setBrandDirection(offset as Dir)
                    setBrandIndex((i) => i + offset)
                  }
                }}
              />
            ))}
          </div>

          {/* dots + arrows — tighter padding */}
          <div className="flex items-center justify-center gap-4 py-3 flex-shrink-0">
            <button
              data-cursor="none"
              onClick={handleBrandPrev}
              disabled={brandIndex === 0}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm hover:border-orange-500 hover:text-orange-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div data-cursor="none" className="flex gap-2">
              {brands.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setBrandDirection(i > brandIndex ? 1 : -1)
                    setBrandIndex(i)
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === brandIndex ? "22px" : "6px",
                    height: "6px",
                    backgroundColor: i === brandIndex ? "rgb(249,115,22)" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <button
              data-cursor="none"
              onClick={handleBrandNext}
              disabled={brandIndex === TOTAL_BRANDS - 1}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm hover:border-orange-500 hover:text-orange-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>

        {/* ── Section 3 — Contact ────────────────────────────────────────── */}
        <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center px-6">
          <div className={contactInnerCls}>
            <div
              ref={contactAccent}
              className="w-10 h-[2px] bg-orange-500 mb-6"
              style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
            />
            <div
              ref={contactTag}
              data-cursor="expand"
              className="font-bold text-lg sm:text-2xl mb-4"
              style={{ opacity: 0, transform: "translateY(28px)" }}
            >
              Ready to start your journey?
            </div>
            <div
              ref={contactHeading}
              data-cursor="expand"
              className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]"
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              We design and build digital experiences that feel effortless, intentional, and quietly powerful.
            </div>
            <div
              ref={contactLinks}
              data-cursor="expand"
              style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none", opacity: 0, transform: "translateY(24px)" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide"
            >
              <div onClick={() => navigate("/work")} className="hover:opacity-70 cursor-pointer">See our work →</div>
              <div onClick={() => navigate("/contact")} className="hover:opacity-70 cursor-pointer">Contact us →</div>
            </div>
          </div>

          <div ref={maskedContact} className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center">
            <div className={contactInnerCls}>
              <div className="w-10 h-[2px] bg-[#141414] mb-6" />
              <div className="font-bold text-lg sm:text-2xl mb-4 text-black">Crafted for modern brands.</div>
              <div className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px] text-black">
                Every project is shaped through strategy, design, and execution that speaks with clarity.
              </div>
              <div
                style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide text-black"
              >
                <div onClick={() => navigate("/work")} className="cursor-pointer">Explore work →</div>
                <div onClick={() => navigate("/contact")} className="cursor-pointer">Get in touch →</div>
              </div>
            </div>
          </div>
        </section>

      </StackScroll>
    </main>
  )
}