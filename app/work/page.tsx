"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import StackScroll from "../components/StackScroll"
import SmoothScroll from "../components/SmoothScroll"

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
    title: "UNO",
    type: "SHORT FILM — 2025",
    video: "/videos/cozyCrumbs.mp4",
    description:
      "A quiet exploration of internal conflict and solitude. Built through minimal dialogue and visual tension. The film UNO is a very humble effort to show everybody in visual format the representation of that particular said part of us. A demand of each and every person living on the planet waiting to be heard and answered for the questions they themselves have yet to find out."
  },
  {
    id: 2,
    title: "Deshlai",
    type: "SHORT FILM — 2025",
    video: "/videos/cozyCrumbs.mp4",
    description:
      "A fleeting narrative about connection, memory, and the moments that pass unnoticed. Sometimes I think that amidst those conflicts and constant interactions there is no time for us to confront ourselves of the various things we do and the countless routines we make our mental and physical body exercise in."
  }
]

export default function Page() {
  const [active, setActive] = useState<WorkItem | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("modal-open")
      setTimeout(() => modalVideoRef.current?.play().catch(() => {}), 100)
    } else {
      document.body.style.overflow = ""
      document.body.classList.remove("modal-open")
    }
    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("modal-open")
    }
  }, [active])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <SmoothScroll />

      <StackScroll stackRef={stackRef}>

        {/* HERO */}
        <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline preload="auto"
          >
            <source src="/videos/enhanced.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-center justify-center text-center px-6 pt-16 sm:pt-20">
            <div data-cursor="expand">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                About Us
              </motion.h1>
              <motion.p
                className="mt-4 text-base sm:text-lg opacity-80"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
              >
                Crafting meaningful digital experiences
              </motion.p>
            </div>
          </div>

          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6 pt-16 sm:pt-20"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">who are we</h1>
              <p className="mt-4 text-base sm:text-lg text-black/70">
                Crafting meaningful digital experiences
              </p>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section className="stack-panel absolute inset-0 w-full bg-[#0b0b0b] min-h-screen h-auto overflow-y-auto">
          <div className="px-6 sm:px-10 md:px-16 xl:px-40 pt-28 pb-40 md:pb-52">

            <p className="text-xs tracking-[0.3em] mb-10">PORTFOLIO</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {works.map((item) => (
                <div
                  key={item.id}
                  className="relative group overflow-hidden cursor-pointer"
                  onClick={() => setActive(item)}
                >
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full lg:h-130 h-55 md:h-90 object-cover grayscale group-hover:grayscale-0 transition duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 pointer-events-none">
                    <p className="text-xs mb-1 tracking-widest uppercase">{item.type}</p>
                    <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* MODAL */}
        {active && (
          <div data-cursor="none"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActive(null)
            }}
          >
            <div
              className="relative w-full flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl"
              style={{
                maxWidth: "1000px",
                maxHeight: "88vh",
                backgroundColor: "#0f0f0f",
                animation: "scaleIn 0.3s ease"
              }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 text-xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>

              {/* Video */}
              <div className="w-full md:w-[55%] h-[220px] sm:h-[280px] md:h-auto flex-shrink-0 bg-black">
                <video
                  ref={modalVideoRef}
                  key={active.id}
                  src={active.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div
                className="w-full md:w-[45%] flex flex-col p-6 sm:p-8 overflow-y-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <p className="text-xs mb-3 tracking-[0.25em] uppercase">{active.type}</p>
                <h2 className="text-2xl sm:text-4xl font-semibold mb-6">{active.title}</h2>
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 rounded-full"
                    style={{ width: "2px", backgroundColor: "rgba(249,115,22,0.7)" }}
                  />
                  <p className="text-sm sm:text-[15px] leading-[1.9] italic">{active.description}</p>
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

        {/* CONTACT */}
        <section className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center px-6">
          <div className="relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20">
            <div data-cursor="expand" className="font-bold text-lg sm:text-2xl mb-4">
              Ready to start your journey?
            </div>
            <div data-cursor="expand" className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
              We design and build digital experiences that feel effortless,
              intentional, and quietly powerful.
            </div>
            <div data-cursor="expand" className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
              <div className="hover:opacity-70 cursor-pointer">See our work →</div>
              <div className="hover:opacity-70 cursor-pointer">Contact us →</div>
            </div>
          </div>

          <div
            ref={maskedContact}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className="text-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20">
              <div className="font-bold text-lg sm:text-2xl mb-4">Ready to start your journey?</div>
              <div className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
                We design and build digital experiences that feel effortless,
                intentional, and quietly powerful.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                <div>See our work →</div>
                <div>Contact us →</div>
              </div>
            </div>
          </div>
        </section>

      </StackScroll>
    </main>
  )
}