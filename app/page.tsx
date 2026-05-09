"use client"

import { useRef } from "react"
import SmoothScroll from "./components/SmoothScroll"
import StackScroll from "./components/StackScroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedAbout = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)

  return (
    <main className="h-[300vh]">
      <SmoothScroll />

      <StackScroll stackRef={stackRef}>

        {/* HERO */}
        <section className="z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-10"
            autoPlay muted loop playsInline preload="auto"
          >
            <source src="/videos/enhanced.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          {/* Base layer — matches about page hero structure exactly */}
          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div data-cursor="expand">
              <motion.h1
                className="text-sm sm:text-base md:text-lg font-semibold tracking-widest"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                ANTARIKSHA
              </motion.h1>
              <motion.p
                className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
              >
                DESIGN
                <br />
                THAT
                <br />
                ACTUALLY
                <br />
                WORKS
              </motion.p>
            </div>
          </div>

          {/* Masked layer */}
          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-black tracking-widest">
                ANTARIKSHA
              </h1>
              <p className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                NO
                <br />
                BULLSHIT
                <br />
                JUST
                <br />
                RESULTS
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#1a1a1a] flex items-center">
          {/* Base layer — padding + font scale matches about page exactly */}
          <div className="relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 w-full">
            <p
              data-cursor="expand"
              className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
            >
              WHAT WE STAND FOR
            </p>
            <h1
              data-cursor="expand"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold"
            >
              We produce work with deliberate intent, where each decision
              contributes to a clear outcome. The objective is not volume,
              but precision—delivered with clarity, consistency, and a
              standard to endure.
            </h1>
          </div>

          {/* Masked layer */}
          <div
            ref={maskedAbout}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className="relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 w-full">
              <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#1a1a1a]">
                HOW WE MAKE SHIT WORK
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#1a1a1a]">
                Not here to churn out mediocre work — everything we ship is thought through and built on purpose. More means nothing if it's weak. Clear direction, tight execution, work that holds up.
              </h1>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="z-30 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">
          {/* Base layer — matches about page contact structure */}
          <div className="relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20">
            <p
              data-cursor="expand"
              className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
            >
              GET STARTED
            </p>
            <h1
              data-cursor="expand"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold mb-8 max-w-[900px]"
            >
              We design and build digital experiences that feel effortless,
              intentional, and quietly powerful.
            </h1>
            <div
              data-cursor="expand"
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide"
            >
              <div className="hover:opacity-70 cursor-pointer">See our work →</div>
              <div className="hover:opacity-70 cursor-pointer">Contact us →</div>
            </div>
          </div>

          {/* Masked layer */}
          <div
            ref={maskedContact}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className="text-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20">
              <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#0D0C0B]">
                GET STARTED
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0D0C0B] mb-8 max-w-[900px]">
                We craft visuals that hit and don&apos;t fade out — sharp,
                intentional work that people remember.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                <div className="hover:opacity-70 cursor-pointer">Explore work →</div>
                <div className="hover:opacity-70 cursor-pointer">Get in touch →</div>
              </div>
            </div>
          </div>
        </section>

      </StackScroll>
    </main>
  )
}