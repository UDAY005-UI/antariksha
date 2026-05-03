'use client';
import { motion } from "framer-motion";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import { useRef } from "react";

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null)

  return (
    <main className="h-[200vh]">
      <SmoothScroll />
      <StackScroll>

        {/* Hero */}
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
                className="text-base sm:text-lg font-semibold"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
              >
                Work With Us
              </motion.h1>
              <motion.p
                className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold opacity-80"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
              >
                LET&apos;S
                <br />
                MAKE
                <br />
                SOMETHING
                <br />
                REAL
              </motion.p>
            </div>
          </div>
          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <h1 className="text-base sm:text-lg font-semibold text-black">Join Us</h1>
              <p className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black">
                MAKE
                <br />
                IT
                <br />
                HAPPEN
                <br />
                NOW
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col justify-center overflow-y-auto">
          <div className="w-full px-6 sm:px-10 md:px-20 lg:px-60 py-20 md:py-0 md:mt-16 flex flex-col md:flex-row gap-8 md:gap-16">

            {/* LEFT */}
            <div data-cursor="none" className="flex-1">
              <p className="text-orange-500 text-sm mb-2">
                Contact Me
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Let&apos;s Create Something Meaningful
              </h2>
              <p className="text-sm mb-6 max-w-md">
                Whether you&apos;re starting from scratch or need a brand refresh,
                I&apos;m here to help bring your vision to life.
              </p>
              <p className="text-xs mb-6">
                Ready to talk? Fill out the form or drop me a message.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div data-cursor="none" className="flex-1 bg-[#1a1a1a] rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 rounded-lg bg-[#2a2a2a] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 rounded-lg bg-[#2a2a2a] outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#2a2a2a] outline-none mb-4"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full p-3 rounded-lg bg-[#2a2a2a] outline-none mb-4"
              />
              <button className="w-full bg-orange-500 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Submit
              </button>
            </div>

          </div>
        </section>

      </StackScroll>
    </main>
  );
}