"use client"

import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import type { WorkItem } from "../work/data/brand"

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
        flexGrow: item ? (isActive ? 2.4 : 1) : 0,
        flexShrink: item ? 1 : 0,
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
      {!isActive && <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />}

      <AnimatePresence>
        {isActive && item && (
          <motion.div
            key={`label-${item.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 0.22, duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-fit flex flex-col items-center z-20"
          >
            <p className="text-[10px] tracking-widest uppercase text-white/50 mb-1 text-center" data-cursor="none">
              {item.type}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center" data-cursor="none">
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
            <span className="text-[9px] tracking-[0.2em] uppercase text-orange-400 font-medium" data-cursor="none">
              Tap to watch
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!item && <div className="absolute inset-0 rounded-2xl bg-white/[0.03]" />}
    </motion.div>
  )
}

export default function BrandGallery({
  brandName,
  works,
}: {
  brandName: string
  works: WorkItem[]
}) {
  const TOTAL = works.length

  const [active, setActive] = useState<WorkItem | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const maskedHeader = useRef<HTMLDivElement>(null)
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
      if (active) {
        if (e.key === "Escape") setActive(null)
        return
      }
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [index, active])

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden"
      setTimeout(() => modalVideoRef.current?.play().catch(() => {}), 100)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

  const slots = [-1, 0, 1].map((offset) => ({
    offset,
    item: works[index + offset] ?? null,
    isActive: offset === 0,
  }))

  return (
    <div className="w-full h-full flex flex-col">
      {/* ── Header — real animated layer + masked cursor-reveal layer ── */}
      <div className="relative flex flex-col items-center px-4 sm:px-6 md:px-10 xl:px-16 pt-24 pb-4 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left center" }}
          className="w-12 h-[2px] bg-orange-500 mb-4"
          data-cursor="none"
        />
        <motion.p
          data-cursor="none"
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="text-xs tracking-[0.3em] mb-1 text-center"
        >
          {brandName}
        </motion.p>
        <motion.p
          data-cursor="none"
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-sm tabular-nums text-center"
        >
          {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </motion.p>

        <div
          ref={maskedHeader}
          className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex flex-col items-center px-4 sm:px-6 md:px-10 xl:px-16 pt-24 pb-4 text-center"
        >
          <div className="w-12 h-[2px] bg-black mb-4" />
          <p className="text-xs tracking-[0.3em] mb-1 text-black text-center">{brandName}</p>
          <p className="text-sm tabular-nums text-black text-center">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </p>
        </div>
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
        <button
          data-cursor="none"
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
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "22px" : "6px",
                height: "6px",
                backgroundColor: i === index ? "rgb(249,115,22)" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <button
          data-cursor="none"
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

      {active && (
        <div
          data-cursor="none"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null)
          }}
        >
          <div
            className="relative w-full flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl"
            style={{
              maxWidth: "1000px",
              maxHeight: "92vh",
              backgroundColor: "#0f0f0f",
              animation: "scaleIn 0.3s ease",
            }}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-20 text-white/60 hover:text-white text-xl w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="w-full md:w-[55%] flex-shrink-0 bg-black flex items-center justify-center overflow-hidden video-modal-pane">
              <video
                ref={modalVideoRef}
                key={active.id}
                src={active.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-contain block"
              />
            </div>

            <div
              className="w-full md:w-[45%] flex flex-col p-6 sm:p-8 overflow-y-auto"
              style={{ scrollbarWidth: "none", maxHeight: "56vh" }}
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
            .video-modal-pane { height: 220px; }
            @media (min-width: 768px) {
              .video-modal-pane { height: auto; max-height: 88vh; }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}