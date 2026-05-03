"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import SmoothScroll from "../components/SmoothScroll"
import StackScroll from "../components/StackScroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedAbout = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <main className="h-[300vh]">
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
                  className="text-base sm:text-lg md:text-xl font-semibold"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
                >
                  Our Foundation
                </motion.h1>
                <motion.p
                  className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold opacity-80"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
                >
                  WHO
                  <br />
                  WE
                  <br />
                  ARE
                  <br />
                  NOW
                </motion.p>
              </div>
            </div>
            <div ref={maskedHero} className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6">
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-semibold text-black">The Way We Work</h1>
                <p className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black">
                  FROM
                  <br />
                  THOUGHT
                  <br />
                  TO
                  <br />
                  FRAME
                </p>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center">
            <div className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-60 w-full">
              <p data-cursor="expand" className="text-base sm:text-lg md:text-xl font-semibold">ABOUT</p>
              <h1 data-cursor="expand" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
                We&apos;re a content studio focused on planning, shooting, and editing. Every project is handled with clear direction, structured execution, and attention to detail from start to finish.
              </h1>
            </div>
            <div ref={maskedAbout} className="cursor-text-layer absolute inset-0 w-full h-screen bg-orange-500 flex items-center text-start">
              <div className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-60 w-full">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-[#0f0f0f]">ABOUT</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-[#0f0f0f]">
                  We operate as a visual production team covering ideation, filming, and post. Each assignment is guided by a defined approach, disciplined workflow, and close oversight throughout.
                </h1>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="z-30 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center justify-center">
            <div className="flex flex-col justify-center items-center p-6 sm:p-10 md:p-20 lg:p-60 text-center w-full">
              <div data-cursor="expand" className="font-bold text-lg sm:text-xl md:text-2xl mb-4">Ready to start your journey?</div>
              <div data-cursor="expand" className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight mb-8">
                We design and build digital experiences...
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm uppercase tracking-wide items-center">
                <div data-cursor="expand" className="cursor-pointer hover:opacity-70">See our work →</div>
                <div data-cursor="expand" className="cursor-pointer hover:opacity-70">Contact us →</div>
              </div>
            </div>
            <section
              ref={maskedContact}
              className="cursor-text-layer absolute inset-0 h-screen w-full bg-orange-500 flex items-center justify-center z-30"
            >
              <div className="flex flex-col justify-center items-center p-6 sm:p-10 md:p-20 lg:p-60 text-center w-full">
                <div className="font-bold text-lg sm:text-xl md:text-2xl mb-4 text-black">
                  Want something people watch?
                </div>
                <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight mb-8 text-black">
                  We craft visuals that hit and don&apos;t fade out...
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm uppercase tracking-wide text-black items-center">
                  <div className="cursor-pointer hover:opacity-70">Explore work →</div>
                  <div className="cursor-pointer hover:opacity-70">Get in touch →</div>
                </div>
              </div>
            </section>
          </section>

        </StackScroll>
      </main>
    </>
  )
}