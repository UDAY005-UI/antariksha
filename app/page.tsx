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

          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div data-cursor="expand">
              <motion.h1
                className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                ANTARIKSHA
              </motion.h1>
              <motion.p
                className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold opacity-80 leading-tight"
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

          {/* MASKED */}
          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-black tracking-widest">
                ANTARIKSHA
              </h1>
              <p className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight">
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
        <section className="z-20 stack-panel absolute inset-0 h-full w-full bg-[#1a1a1a]">
          <div className="flex flex-col p-6 sm:p-10 md:p-20 lg:p-32 xl:p-60">
            <div data-cursor="expand" className="font-semibold text-base sm:text-lg xl:text-xl mb-4">
              What We Stand For
            </div>
            <div data-cursor="expand" className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              We produce work with deliberate intent, where each decision contributes to a clear outcome. The objective is not volume, but precision—delivered with clarity, consistency, and a standard to endure.
            </div>
          </div>

          {/* MASKED */}
          <div
            ref={maskedAbout}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-start"
          >
            <div className="text-[#1a1a1a] flex flex-col p-6 sm:p-10 md:p-20 lg:p-32 xl:p-60">
              <div className="font-semibold text-base sm:text-lg xl:text-xl mb-4">
                How We Make Shit Work
              </div>
              <div className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                We&apos;re not here to churn out mediocre stuffs — everything we ship is thought through and built on purpose. More doesn&apos;t mean anything if it&apos;s weak. Clear direction, tight execution, and work that actually holds up.
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="z-30 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center justify-center">
          <div className="flex flex-col justify-center items-center p-6 sm:p-10 md:p-20 lg:p-32 xl:p-60 text-center w-full">
            <div data-cursor="expand" className="font-bold text-lg sm:text-xl md:text-2xl mb-4">
              Ready to start your journey?
            </div>
            <div data-cursor="expand" className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight mb-8 max-w-3xl">
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
            <div className="flex flex-col justify-center items-center p-6 sm:p-10 md:p-20 lg:p-32 xl:p-60 text-center w-full">
              <div className="font-bold text-lg sm:text-xl md:text-2xl mb-4 text-black">
                Want something people watch?
              </div>
              <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight mb-8 text-black max-w-3xl">
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
  )
}