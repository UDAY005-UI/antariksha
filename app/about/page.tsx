"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import SmoothScroll from "../components/SmoothScroll"
import StackScroll from "../components/StackScroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRouter } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedAbout = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const router = useRouter();
  return (
    <>
      <main className="h-[300vh]">
        <SmoothScroll />

        <StackScroll stackRef={stackRef}>

          {/* HERO — untouched */}
          <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay muted loop playsInline preload="auto"
            >
              <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1778490652/enhanced_mtigi5.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
              <div data-cursor="expand">
                <motion.h1
                  className="text-sm sm:text-base md:text-lg font-semibold tracking-widest"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
                >
                  Our Foundation
                </motion.h1>
                <motion.p
                  className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
                >
                  WHO
                  <br />WE
                  <br />ARE
                  <br />NOW
                </motion.p>
              </div>
            </div>

            <div
              ref={maskedHero}
              className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
            >
              <div>
                <h1 className="text-sm sm:text-base md:text-lg font-semibold text-black tracking-widest">
                  The Way We Work
                </h1>
                <p className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                  FROM
                  <br />THOUGHT
                  <br />TO
                  <br />FRAME
                </p>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center">
            <div className="relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 w-full">
              <p
                data-cursor="expand"
                className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
              >
                ABOUT
              </p>
              <h1
                data-cursor="expand"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold"
              >
                We&apos;re a content studio focused on planning, shooting, and
                editing. Every project is handled with clear direction, structured
                execution, and attention to detail from start to finish.
              </h1>
            </div>

            <div
              ref={maskedAbout}
              className="cursor-text-layer absolute inset-0 w-full h-screen bg-orange-500 flex items-center"
            >
              <div className="relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 w-full">
                <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#0f0f0f]">
                  ABOUT
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0f0f0f]">
                  We operate as a visual production team covering ideation,
                  filming, and post. Each assignment is guided by a defined
                  approach, disciplined workflow, and close oversight throughout.
                </h1>
              </div>
            </div>
          </section>

          {/* CONTACT */}
        <section className="z-10 stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center px-6">
          <div className="relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20">
            <div data-cursor="expand" className="font-bold text-lg sm:text-2xl mb-4">
              Ready to start your journey?
            </div>
            <div data-cursor="expand" className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]">
              We design and build digital experiences that feel effortless,
              intentional, and quietly powerful.
            </div>
            <div style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }} data-cursor="expand" className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
              <div onClick={() => router.push("/work")}  className="hover:opacity-70 cursor-pointer">See our work →</div>
              <div onClick={() => router.push("/contact")}  className="hover:opacity-70 cursor-pointer">Contact us →</div>
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
              <div style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                <div onClick={() => router.push("/work")} >See our work →</div>
                <div onClick={() => router.push("/contact")} >Contact us →</div>
              </div>
            </div>
          </div>
        </section>

        </StackScroll>
      </main>
    </>
  )
}