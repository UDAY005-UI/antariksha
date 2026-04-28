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
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline preload="auto"
          >
            <source src="/videos/enhanced.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-center justify-center text-cente px-6">
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

          {/* MASKED */}
          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black">
                Your Headline
              </h1>
              <p className="mt-4 text-lg text-black/70">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="z-20 stack-panel absolute inset-0 h-full w-full bg-[#1a1a1a]">
          <div className="flex flex-col p-60">
            <div data-cursor="expand" className="font-bold text-2xl">About Us</div>
            <div data-cursor="expand" className="font-semibold text-3xl md:text-5xl leading-tight">
              We design and build digital experiences with a focus on clarity,
              motion, and detail...
            </div>
          </div>

          {/* MASKED */}
          <div
            ref={maskedAbout}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-start"
          >
            <div className="text-[#1a1a1a] flex flex-col p-60">
              <div className="font-bold text-2xl">About Us</div>
              <div className="font-semibold text-3xl md:text-5xl leading-tight">
                Pellentesque habitant morbi tristique...
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="z-30 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">
          <div className="flex flex-col justify-center items-center p-60">
            <div data-cursor="expand" className="font-bold text-2xl mb-4">Ready to start your journey?</div>
            <div data-cursor="expand" className="font-semibold text-3xl md:text-5xl leading-tight mb-8">
              We design and build digital experiences...
            </div>
            <div className="flex gap-6 text-sm uppercase tracking-wide">
              <div data-cursor="expand" className="cursor-pointer hover:opacity-70">See our work →</div>
              <div data-cursor="expand" className="cursor-pointer hover:opacity-70">Contact us →</div>
            </div>
          </div>

          {/* MASKED */}
          <div
            ref={maskedContact}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className="text-black flex flex-col justify-center items-center p-60 text-center w-full">
              <div className="font-bold text-2xl mb-4">
                Fusce consequat ligula sit amet?
              </div>
              <div className="font-semibold text-3xl md:text-5xl leading-tight mb-8">
                Suspendisse potenti...
              </div>
              <div className="flex gap-6 text-sm uppercase tracking-wide">
                <div className="cursor-pointer hover:opacity-70">Explore work →</div>
                <div className="cursor-pointer hover:opacity-70">Get in touch →</div>
              </div>
            </div>
          </div>
        </section>

      </StackScroll>
    </main>
  )
}