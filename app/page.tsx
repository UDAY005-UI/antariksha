"use client"

import { useRef } from "react"
import SmoothScroll from "./components/SmoothScroll"
import StackScroll from "./components/StackScroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useNavigate } from "./components/UseNavigate"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null)
  const maskedAbout = useRef<HTMLDivElement>(null)
  const maskedContact = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const aboutFired = useRef(false)
  const contactFired = useRef(false)

  const aboutAccent = useRef<HTMLDivElement>(null)
  const aboutTag = useRef<HTMLParagraphElement>(null)
  const aboutHeading = useRef<HTMLHeadingElement>(null)

  const contactAccent = useRef<HTMLDivElement>(null)
  const contactTag = useRef<HTMLParagraphElement>(null)
  const contactHeading = useRef<HTMLHeadingElement>(null)
  const contactLinks = useRef<HTMLDivElement>(null)

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
    const links = contactLinks.current?.querySelectorAll<HTMLElement>(".cta-link")
    if (links?.length) {
      gsap.fromTo(links,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15, delay: 0.8 }
      )
    }
  }

  function handleScrollProgress(progress: number) {
    const step = 1 / 2
    if (progress >= step * 0.85) animateAbout()
    if (progress >= step * 1.85) animateContact()
  }

  const aboutInnerCls = "relative z-10 px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 w-full"
  const contactInnerCls = "relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20"
  const navigate = useNavigate();
  
  return (
    <main>
      <SmoothScroll />

      <StackScroll stackRef={stackRef} onScrollProgress={handleScrollProgress}>

        <section className="z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-10 rotate-"
            autoPlay muted loop playsInline preload="auto"
          >
            <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1779429724/Creative_air_fryer_recipes_that_are_packed_with_ideas_people_keep_saving_and_clicking_on_lately_for_ideas_worth_saving_right_now_ja6ty9.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div data-cursor="expand">
              <motion.h1
                className="text-[10px] sm:text-xs font-semibold tracking-widest"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                ANTARIKSHA
              </motion.h1>
              <div className="mt-4 leading-none">
                {["DESIGN", "THAT", "ACTUALLY", "WORKS"].map((word, wi) => (
                  <div key={word} className="flex justify-center">
                    {word.split("").map((letter, li) => (
                      <div key={li} className="overflow-hidden">
                        <motion.span
                          className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80"
                          style={{ transformOrigin: "bottom" }}
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1 + wi * 0.12 + li * 0.04,
                          }}
                        >
                          {letter}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <motion.h1
                className="text-[10px] sm:text-xs font-semibold text-black tracking-widest"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                ANTARIKSHA
              </motion.h1>
              <div className="mt-4 leading-none">
                {["STORIES", "THAT", "SOUND", "HUMAN"].map((word, wi) => (
                  <div key={word} className="flex justify-center">
                    {word.split("").map((letter, li) => (
                      <div key={li} className="overflow-hidden">
                        <motion.span
                          className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black"
                          style={{ transformOrigin: "bottom" }}
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1 + wi * 0.12 + li * 0.04,
                          }}
                        >
                          {letter}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">

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
              WHAT WE STAND FOR
            </p>
            <h1
              ref={aboutHeading}
              data-cursor="expand"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold"
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              We produce work with deliberate intent, where each decision
              contributes to a clear outcome. The objective is not volume,
              but precision—delivered with clarity, consistency, and a
              standard to endure.
            </h1>
          </div>

          <div
            ref={maskedAbout}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className={aboutInnerCls}>
              <div className="w-12 h-[2px] bg-[#1a1a1a] mb-6" />
              <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#1a1a1a]">
                HOW WE MAKE SHIT WORK
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#1a1a1a]">
                Not here to churn out mediocre work — everything we ship is thought through and built on purpose. More means nothing if it&apos;s weak. Clear direction, tight execution, work that holds up.
              </h1>
            </div>
          </div>
        </section>

        <section className="z-30 stack-panel absolute inset-0 h-screen w-full bg-[#1a1a1a] flex items-center overflow-hidden">

          <div className={contactInnerCls}>
            <div
              ref={contactAccent}
              className="w-10 h-[2px] bg-orange-500 mb-6"
              style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
            />
            <p
              ref={contactTag}
              data-cursor="expand"
              className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
              style={{ opacity: 0, transform: "translateY(28px)" }}
            >
              GET STARTED
            </p>
            <h1
              ref={contactHeading}
              data-cursor="expand"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold mb-10 max-w-[900px]"
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              We design and build digital experiences that feel effortless,
              intentional, and quietly powerful.
            </h1>
            <div
              ref={contactLinks}
              data-cursor="expand"
              style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm uppercase tracking-widest"
            >
              <div
                onClick={() => navigate("/work")}
                className="cta-link cursor-pointer hover:opacity-70 transition-opacity duration-300"
                style={{ opacity: 0, transform: "translateY(24px)" }}
              >
                See our work →
              </div>
              <div
                onClick={() => navigate("/contact")}
                className="cta-link cursor-pointer hover:opacity-70 transition-opacity duration-300"
                style={{ opacity: 0, transform: "translateY(24px)" }}
              >
                Contact us →
              </div>
            </div>
          </div>

          <div
            ref={maskedContact}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
          >
            <div className={contactInnerCls}>
              <div className="w-10 h-[2px] bg-[#0D0C0B] mb-6" />
              <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#0D0C0B]">
                GET STARTED
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0D0C0B] mb-10 max-w-[900px]">
                We craft visuals that hit and don&apos;t fade out — sharp,
                intentional work that people remember.
              </h1>
              <div
                style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm uppercase tracking-widest"
              >
                <div onClick={() => navigate("/work")} className="cursor-pointer hover:opacity-70 text-black">Explore work →</div>
                <div onClick={() => navigate("/contact")} className="cursor-pointer hover:opacity-70 text-black">Get in touch →</div>
              </div>
            </div>
          </div>
        </section>

      </StackScroll>
    </main>
  )
}