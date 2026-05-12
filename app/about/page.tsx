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
  const router = useRouter()

  const aboutFired   = useRef(false)
  const contactFired = useRef(false)

  const aboutAccent  = useRef<HTMLDivElement>(null)
  const aboutTag     = useRef<HTMLParagraphElement>(null)
  const aboutHeading = useRef<HTMLHeadingElement>(null)

  const contactAccent  = useRef<HTMLDivElement>(null)
  const contactTag     = useRef<HTMLDivElement>(null)
  const contactHeading = useRef<HTMLDivElement>(null)
  const contactLinks   = useRef<HTMLDivElement>(null)

  function animateAbout() {
    if (aboutFired.current) return
    aboutFired.current = true

    gsap.fromTo(aboutAccent.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "expo.out", transformOrigin: "left center" }
    )
    gsap.fromTo(aboutTag.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.25 }
    )
    gsap.fromTo(aboutHeading.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", delay: 0.45 }
    )
  }

  function animateContact() {
    if (contactFired.current) return
    contactFired.current = true

    gsap.fromTo(contactAccent.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "expo.out", transformOrigin: "left center" }
    )
    gsap.fromTo(contactTag.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.25 }
    )
    gsap.fromTo(contactHeading.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", delay: 0.45 }
    )
    gsap.fromTo(contactLinks.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
    )
  }

  function handleScrollProgress(progress: number) {
    const step = 1 / 2
    if (progress >= step * 0.85) animateAbout()
    if (progress >= step * 1.85) animateContact()
  }

  const aboutInnerCls = "relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 w-full"
  const contactInnerCls = "relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 xl:px-60 text-center w-full pt-16 sm:pt-20"

  return (
    <>
      <main className="h-[300vh]">
        <SmoothScroll />

        <StackScroll stackRef={stackRef} onScrollProgress={handleScrollProgress}>

          <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay muted loop playsInline preload="auto"
            >
              <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1778490652/enhanced_mtigi5.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-end px-8 sm:px-6 md:px-35 pb-20 sm:pb-16 md:pb-14">
              <div className="w-full flex flex-col">
                <motion.p data-cursor="expand"
                  className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 md:mb-5 opacity-70 text-left w-fit"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.4, ease: [0.25, 0.1, 0, 1] }}
                >
                  Our Foundation
                </motion.p>

                <div className="overflow-hidden mb-4 sm:mb-1 md:mb-0 w-fit self-start">
                  <motion.p data-cursor="expand"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none opacity-80"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1], delay: 0.1 }}
                  >
                    WHO
                  </motion.p>
                </div>

                <div className="overflow-hidden mb-4 sm:mb-1 md:mb-0 w-fit self-center">
                  <motion.p data-cursor="expand"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none opacity-80"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1], delay: 0.22 }}
                  >
                    WE ARE
                  </motion.p>
                </div>

                <div className="overflow-hidden w-fit self-end">
                  <motion.p data-cursor="expand"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none opacity-80"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1], delay: 0.34 }}
                  >
                    NOW
                  </motion.p>
                </div>
              </div>
            </div>

            <div
              ref={maskedHero}
              className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-end px-8 sm:px-6 md:px-35 pb-20 sm:pb-16 md:pb-14"
            >
              <div className="w-full">
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 md:mb-5 text-black opacity-70 text-left">
                  The Way We Work
                </p>
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-black text-left mb-2 sm:mb-1 md:mb-0">
                  FROM
                </p>
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-black text-center mb-2 sm:mb-1 md:mb-0">
                  THOUGHT TO
                </p>
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-black text-right">
                  FRAME
                </p>
              </div>
            </div>
          </section>

          <section className="stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">

            <div className={aboutInnerCls}>
              <div
                ref={aboutAccent}
                className="w-12 h-[2px] bg-orange-500 mb-6"
                style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
              />
              <p
                ref={aboutTag}
                data-cursor="expand"
                className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
                style={{ opacity: 0, transform: "translateY(28px)" }}
              >
                ABOUT
              </p>
              <h1
                ref={aboutHeading}
                data-cursor="expand"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold"
                style={{ opacity: 0, transform: "translateY(50px)" }}
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
              <div className={aboutInnerCls}>
                <div className="w-12 h-[2px] bg-[#0f0f0f] mb-6" />
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

          <section className="z-10 stack-panel absolute inset-0 h-screen w-full bg-[#1a1a1a] flex items-center px-6">

            <div className={contactInnerCls}>
              <div
                ref={contactAccent}
                className="w-10 h-[2px] bg-orange-500 mb-6"
                style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
              />
              <div
                ref={contactTag}
                data-cursor="expand"
                className="font-bold text-lg sm:text-2xl mb-4"
                style={{ opacity: 0, transform: "translateY(28px)" }}
              >
                Ready to start your journey?
              </div>
              <div
                ref={contactHeading}
                data-cursor="expand"
                className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px]"
                style={{ opacity: 0, transform: "translateY(60px)" }}
              >
                We design and build digital experiences that feel effortless,
                intentional, and quietly powerful.
              </div>
              <div
                ref={contactLinks}
                data-cursor="expand"
                style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none", opacity: 0, transform: "translateY(24px)" }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide"
              >
                <div onClick={() => router.push("/work")} className="hover:opacity-70 cursor-pointer">See our work →</div>
                <div onClick={() => router.push("/contact")} className="hover:opacity-70 cursor-pointer">Contact us →</div>
              </div>
            </div>

            <div
              ref={maskedContact}
              className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
            >
              <div className={contactInnerCls}>
                <div className="w-10 h-[2px] bg-[#0D0C0B] mb-6" />
                <div className="font-bold text-lg sm:text-2xl mb-4 text-black">
                  Designed to leave impact.
                </div>
                <div className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-8 max-w-[900px] text-black">
                  We create digital experiences that balance creativity,
                  clarity, and technology with purposeful execution.
                </div>
                <div
                  style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide text-black"
                >
                  <div onClick={() => router.push("/work")}>Explore work →</div>
                  <div onClick={() => router.push("/contact")}>Get in touch →</div>
                </div>
              </div>
            </div>
          </section>

        </StackScroll>
      </main>
    </>
  )
}