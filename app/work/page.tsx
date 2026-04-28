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
      "A quiet exploration of internal conflict and solitude. Built through minimal dialogue and visual tension. The film UNO is a very humble effort to show everybody in visual format the representation of that particular said part of us. A demand of each and every person living on the planet waiting to be heard and answered for the questions they themselves have yet to find out. Confrontation to ourselves specifically, in the huge spectrum of our daily lives we meet a lot of people and are engaged in a lot of conflicts and interactions."
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
      setTimeout(() => {
        modalVideoRef.current?.play().catch(() => {})
      }, 100)
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
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

          <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
            <div data-cursor="expand">
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                About Us
              </motion.h1>

              <motion.p
                className="mt-4 text-lg opacity-80"
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
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black">who are we</h1>
              <p className="mt-4 text-lg text-black/70">
                Crafting meaningful digital experiences
              </p>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section className="stack-panel absolute inset-0 h-screen w-full bg-[#0b0b0b] overflow-hidden pt-20 pb-32">

          <div className="px-20 xl:px-60 mb-16">
            <p className="text-xs tracking-[0.3em] mb-4">
              PORTFOLIO
            </p>
          </div>

          <div className="px-20 xl:px-60 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="w-full h-[480px] object-cover grayscale group-hover:grayscale-0 transition duration-700 pointer-events-none"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 pointer-events-none" />

                <div className="absolute bottom-6 left-6 pointer-events-none">
                  <p className="text-xs mb-1 tracking-widest uppercase">
                    {item.type}
                  </p>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* MODAL */}
        {active && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActive(null)
            }}
          >
            <div
              className="relative flex overflow-hidden rounded-2xl shadow-2xl"
              style={{
                width: "78%",
                height: "88vh",
                backgroundColor: "#0f0f0f",
                animation: "scaleIn 0.3s ease"
              }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 z-20 transition text-xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="w-[55%] h-full flex-shrink-0 bg-black">
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

              <div
                className="w-[45%] h-full flex flex-col p-10 overflow-y-auto"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                }}
              >
                <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

                <p className="text-xs mb-4 tracking-[0.25em] uppercase">
                  {active.type}
                </p>

                <h2 className="text-5xl font-semibold mb-8">
                  {active.title}
                </h2>

                <div className="flex gap-5 flex-1 mb-10">
                  <div
                    className="flex-shrink-0 rounded-full"
                    style={{ width: "2px", backgroundColor: "rgba(249,115,22,0.7)" }}
                  />

                  <p
                    className="text-[15px] leading-[1.9]"
                    style={{ fontStyle: "italic" }}
                  >
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

                  {/* CONTACT */}
          <section className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center">
            <div className="relative z-10 flex flex-col justify-center items-center px-60 text-center w-full">
              <div data-cursor="expand" className="font-bold text-2xl mb-4">Ready to start your journey?</div>
              <div data-cursor="expand" className="font-semibold text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
                We design and build digital experiences that feel effortless,
                intentional, and quietly powerful.
              </div>
              <div data-cursor="expand" className="flex gap-6 text-sm uppercase tracking-wide">
                <div className="hover:opacity-70">See our work →</div>
                <div className="hover:opacity-70">Contact us →</div>
              </div>
            </div>
            <div ref={maskedContact} className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center">
              <div className="text-black flex flex-col justify-center items-center px-60 text-center w-full">
                <div className="font-bold text-2xl mb-4">Ready to start your journey?</div>
                <div className="font-semibold text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
                  We design and build digital experiences that feel effortless,
                  intentional, and quietly powerful.
                </div>
                <div className="flex gap-6 text-sm uppercase tracking-wide">
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