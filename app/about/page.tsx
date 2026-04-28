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
            <div className="relative z-10 flex h-full items-center justify-center text-centerpx-6">
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
            <div ref={maskedHero} className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-black">who are we</h1>
                <p className="mt-4 text-lg text-black/70">Crafting meaningful digital experiences</p>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center">
            <div className="relative z-10 px-60 w-full">
              <p data-cursor="expand" className="text-xs tracking-[0.3em] mb-8">ABOUT</p>
              <h1 data-cursor="expand" className="text-[72px] leading-[1.05] font-semibold max-w-[1100px]">
                Over a decade of experience
                in interactive design and
                working with some of the most
                talented people in the business
              </h1>
            </div>
            <div ref={maskedAbout} className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center">
              <div className="px-60 w-full">
                <p className="text-xs tracking-[0.3em] mb-8">ABOUT</p>
                <h1 className="text-[72px] leading-[1.05] font-semibold text-[#0f0f0f] max-w-[1100px]">
                  Over a decade of experience
                  in interactive design and
                  working with some of the most
                  talented people in the business
                </h1>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">
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
    </>
  )
}