"use client"

import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import StackScroll from "../components/StackScroll"
import SmoothScroll from "../components/SmoothScroll"
import { useRouter } from "next/navigation"

type WorkItem = {
  id: number
  title: string
  type: string
  video: string
  description: string
}

const works: WorkItem[] = [
  {
    id: 1,
    title: "COZY CRUMBS",
    type: "BRAND REEL — 2026",
    video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489915/cozy1_dohodp.mp4",
    description:
      "A rapid-cut brand reel for Cozy Crumbs — a homegrown cake and dessert studio based out of Lake Market, Kolkata. Fast edits locked to rhythm, warm tones, close-up textures. Built to sell the feeling before the product.",
  },
  {
    id: 2,
    title: "COZY CRUMBS",
    type: "VOICEOVER REEL — 2026",
    video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489944/cozy2_avnonw.mp4",
    description:
      "A voiceover-led brand film for Cozy Crumbs — a homegrown cake and dessert studio based out of Lake Market, Kolkata. Slow, deliberate cuts paired with a narrative voice. Built to tell the story behind every bake.",
  },
  {
    id: 3,
    title: "THE WAFFLE HOUSE",
    type: "BRAND REEL — 2026",
    video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489906/waffle_hu9qkh.mp4",
    description:
      "A rapid-cut brand reel for The Waffle House — a dessert spot serving freshly made waffles with bold toppings and honest flavour. Quick edits, warm textures, and an appetite for the unapologetically indulgent.",
  },
  {
    id: 4,
    title: "TANDOOR HOUSE",
    type: "VOICEOVER REEL — 2026",
    video: "https://res.cloudinary.com/dthpzuhja/video/upload/v1778489939/tandoor_wpqqvu.mp4",
    description:
      "A voiceover-led brand film for Tandoor House — a Kolkata institution at Lake Market, Kalighat. Smoky, loud, and unapologetically real.",
  },
]

const TOTAL = works.length
type Dir = 1 | -1

const videoVariants: Variants = {
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

const videoEnterTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0, 1],
}

function CarouselCard({
  item,
  isActive,
  direction,
  onClick,
}: {
  item: WorkItem | null
  isActive: boolean
  direction: Dir
  onClick: () => void
}) {
  return (
    <motion.div
      animate={{
        flexGrow: isActive ? 2.4 : 1,
        opacity: item ? (isActive ? 1 : 0.5) : 0,
        scale: isActive ? 1 : 0.93,
      }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0, 1] }}
      className="relative h-full overflow-hidden rounded-2xl cursor-pointer flex-1 min-w-0"
      onClick={onClick}
    >
      <AnimatePresence custom={direction} mode="popLayout">
        {item && (
          <motion.div
            key={item.id}
            custom={direction}
            variants={videoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={videoEnterTransition}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />
      {!isActive && (
        <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />
      )}

      <AnimatePresence>
        {isActive && item && (
          <motion.div
            key={`label-${item.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 0.22, duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-6 left-6 z-20"
          >
            <p className="text-[10px] tracking-widest uppercase text-white/50 mb-1">
              {item.type}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              {item.title}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && item && (
          <motion.div
            key={`tap-${item.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.28, duration: 0.3 }}
            className="absolute top-5 right-5 z-20"
          >
            <span className="text-[9px] tracking-[0.2em] uppercase text-orange-400 font-medium">
              Tap to watch
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!item && (
        <div className="absolute inset-0 rounded-2xl bg-white/[0.03]" />
      )}
    </motion.div>
  )
}

export default function Page() {
  const [active, setActive] = useState<WorkItem | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)

  const router = useRouter();
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<Dir>(1)

  const handleNext = () => {
    if (index >= TOTAL - 1) return
    setDirection(1)
    setIndex((i) => i + 1)
  }

  const handlePrev = () => {
    if (index <= 0) return
    setDirection(-1)
    setIndex((i) => i - 1)
  }

  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) {
      if (dx < 0) handleNext()
      else handlePrev()
    }
    touchStartX.current = null
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (active) { if (e.key === "Escape") setActive(null); return }
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [index, active])

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden"
      setTimeout(() => modalVideoRef.current?.play().catch(() => { }), 100)
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [active])

  const slots = [-1, 0, 1].map((offset) => ({
    offset,
    item: works[index + offset] ?? null,
    isActive: offset === 0,
  }))

  return (
    <main className="bg-[#0b0b0b]">
      <SmoothScroll />
      <StackScroll stackRef={stackRef}>

        <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline preload="auto"
          >
            <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1778490652/enhanced_mtigi5.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-end px-8 md:px-35 pb-20 sm:pb-16 md:pb-14">
            <div className="w-full">

              <motion.h1 data-cursor="expand"
                className="text-sm sm:text-base md:text-lg font-semibold tracking-widest text-left mb-2 md:mb-4 w-fit"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: [0.25, 0.1, 0, 1] }}
              >
                Our Work
              </motion.h1>

              <div className="flex justify-start">
                {"SHOT".split("").map((l, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span data-cursor="expand"
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

              <div className="flex justify-start mb-3 md:mb-0">
                {"IN".split("").map((l, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span data-cursor="expand"
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

              <div className="flex justify-end">
                {"GOLDEN".split("").map((l, i, arr) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span data-cursor="expand"
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
                    <motion.span data-cursor="expand"
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

          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-end px-8 md:px-35 pb-20 sm:pb-16 md:pb-14"
          >
            <div className="w-full">
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-black tracking-widest text-left mb-2 md:mb-4">
                The Craft
              </h1>

              <div className="flex justify-start">
                {"LIGHT".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                    {l}
                  </span>
                ))}
              </div>

              <div className="flex justify-start mb-3 md:mb-0">
                {"YEARS".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                    {l}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                {"IN".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                    {l}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                {"MAKING".split("").map((l, i) => (
                  <span key={i} className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="stack-panel absolute inset-0 w-full bg-[#0b0b0b] flex flex-col"
        >
          <div className="px-6 sm:px-10 md:px-16 xl:px-24 pt-24 pb-4">
            <p className="text-xs tracking-[0.3em] text-white/40 mb-1">PORTFOLIO</p>
            <p className="text-white/50 text-sm tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
            </p>
          </div>

          <div
            className="flex-1 flex items-stretch gap-3 px-4 sm:px-6 md:px-10 xl:px-16 pb-4 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {slots.map(({ offset, item, isActive }) => (
              <CarouselCard
                key={offset}
                item={item}
                isActive={isActive}
                direction={direction}
                onClick={() => {
                  if (!item) return
                  if (isActive) {
                    setActive(item)
                  } else {
                    setDirection(offset as Dir)
                    setIndex((i) => i + offset)
                  }
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 py-5">
            <button data-cursor="none"
              onClick={handlePrev}
              disabled={index === 0}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm hover:border-orange-500 hover:text-orange-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div data-cursor="none" className="flex gap-2">
              {works.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "22px" : "6px",
                    height: "6px",
                    backgroundColor: i === index ? "rgb(249,115,22)" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <button data-cursor="none"
              onClick={handleNext}
              disabled={index === TOTAL - 1}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm hover:border-orange-500 hover:text-orange-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>

        <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center px-6">
          <div className="relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20">
            <div data-cursor="expand" className="font-bold text-lg sm:text-2xl mb-4">
              Ready to start your journey?
            </div>
            <div data-cursor="expand" className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
              We design and build digital experiences that feel effortless,
              intentional, and quietly powerful.
            </div>
            <div style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }} data-cursor="expand" className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
              <div onClick={() => router.push("/work")} className="hover:opacity-70 cursor-pointer">See our work →</div>
              <div onClick={() => router.push("/contact")} className="hover:opacity-70 cursor-pointer">Contact us →</div>
            </div>
          </div>
          <div
            ref={maskedContact}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className="text-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20">
              <div className="font-bold text-lg sm:text-2xl mb-4">Crafted for modern brands.</div>
              <div className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
                Every project is shaped through strategy,
                design, and execution that speaks with clarity.
              </div>
              <div style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                <div onClick={() => router.push("/work")} >Explore work →</div>
                <div onClick={() => router.push("/contact")} >Get in touch →</div>
              </div>
            </div>
          </div>
        </section>

      </StackScroll>

      {active && (
        <div
          data-cursor="none"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setActive(null) }}
        >
          <div
            className="relative w-full flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl"
            style={{
              maxWidth: "1000px",
              maxHeight: "88vh",
              backgroundColor: "#0f0f0f",
              animation: "scaleIn 0.3s ease",
            }}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-20 text-white/60 hover:text-white text-xl w-8 h-8 flex items-center justify-center transition-colors"
            >✕</button>

            <div className="w-full md:w-[55%] h-[220px] sm:h-[280px] md:h-auto flex-shrink-0 bg-black">
              <video
                ref={modalVideoRef}
                key={active.id}
                src={active.video}
                autoPlay muted loop playsInline controls
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full md:w-[45%] flex flex-col p-6 sm:p-8 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              <p className="text-xs mb-3 tracking-[0.25em] uppercase text-white/50">{active.type}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{active.title}</h2>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-px rounded-full bg-orange-500/70" />
                <p className="text-sm sm:text-[15px] leading-[1.9] italic text-white/80">
                  {active.description}
                </p>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.96); }
              to   { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </main>
  )
}