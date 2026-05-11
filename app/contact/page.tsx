'use client';
import { motion } from "framer-motion";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Page() {
  const maskedHero = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_mi9d474",    // replace with your EmailJS service ID
        "template_86jbs1k",    // replace with your EmailJS template ID
        formRef.current,
        "suTIWHtyyTr-YDBWs"      // replace with your EmailJS public key
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

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
                Work With Us
              </motion.h1>
              <motion.p
                className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
              >
                LET&apos;S
                <br />MAKE
                <br />SOMETHING
                <br />REAL
              </motion.p>
            </div>
          </div>
          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
          >
            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-black tracking-widest">Join Us</h1>
              <p className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                MAKE
                <br />IT
                <br />HAPPEN
                <br />NOW
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="z-10 stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center overflow-hidden">
          <div className="w-full px-6 sm:px-10 md:px-16 xl:px-40 pt-16 sm:pt-20 flex flex-col md:flex-row gap-8 md:gap-16">

            {/* LEFT */}
            <div data-cursor="none" className="flex-1">
              <p className="text-orange-500 text-xs tracking-[0.3em] mb-4 sm:mb-6">
                CONTACT US
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug mb-4 sm:mb-6">
                Let&apos;s Create Something Meaningful
              </h2>
              <p className="text-sm sm:text-base mb-4 max-w-md opacity-60">
                Whether you&apos;re starting from scratch or need a brand refresh,
                we&apos;re here to help bring your vision to life.
              </p>
              <p className="text-xs opacity-40">
                Ready to talk? Fill out the form or drop us a message.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div data-cursor="none" className="flex-1">
              <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="p-3 rounded-lg bg-[#2a2a2a] outline-none text-sm w-full"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    className="p-3 rounded-lg bg-[#2a2a2a] outline-none text-sm w-full"
                  />
                </div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-lg bg-[#2a2a2a] outline-none text-sm mb-4"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full p-3 rounded-lg bg-[#2a2a2a] outline-none text-sm mb-4 resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full bg-orange-500 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition disabled:opacity-50"
                >
                  {status === "idle" && "Submit"}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "Message Sent ✓"}
                  {status === "error" && "Failed — Try Again"}
                </button>
              </form>
            </div>

          </div>
        </section>

      </StackScroll>
    </main>
  );
}