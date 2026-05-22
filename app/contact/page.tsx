'use client';
import { motion } from "framer-motion";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

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
        "service_mi9d474",   
        "template_86jbs1k",    
        formRef.current,
        "suTIWHtyyTr-YDBWs"      
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

        <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
              <Image
                  src="/team.png"
                  alt="members"
                  fill
                  priority
                  className="hidden md:block -z-10 object-cover object-[center_10%]"
              />
          
              {/* Mobile Image */}
              <Image
                  src="/t.png"
                  alt="member"
                  fill
                  priority
                  className="block md:hidden -z-10 object-cover"
              />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-35">
            <div data-cursor="expand" className="w-full flex flex-col">

              <motion.p
                className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold opacity-60 mb-1 sm:mb-2 text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1 }}
              >
                Antariksha Studio
              </motion.p>

              <div className="flex justify-center w-full">
                {"CONTACT".split("").map((l, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      className="block font-black leading-none"
                      style={{ fontSize: "clamp(2.8rem, 13vw, 22rem)", letterSpacing: "-0.03em" }}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1], delay: 0.15 + i * 0.06 }}
                    >
                      {l}
                    </motion.span>
                  </div>
                ))}
              </div>

              <motion.p
                className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold opacity-60 mt-1 sm:mt-2 text-right"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 1.0, delay: 1.0 }}
              >
                Reach Out · Work Together
              </motion.p>

            </div>
          </div>

          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center px-4 md:px-35"
          >
            <div className="w-full flex flex-col">

              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-black opacity-70 mb-1 sm:mb-2 text-left">
                Antariksha Studio
              </p>

              <div className="flex justify-center w-full">
                {"CONNECT".split("").map((l, i) => (
                  <span
                    key={i}
                    className="block font-black leading-none text-black"
                    style={{ fontSize: "clamp(2.8rem, 13vw, 22rem)", letterSpacing: "-0.03em" }}
                  >
                    {l}
                  </span>
                ))}
              </div>

              <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-black opacity-70 mt-1 sm:mt-2 text-right">
                Reach Out · Build Something
              </p>

            </div>
          </div>
        </section>

        <section className="z-10 stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex items-center overflow-hidden pb-12 md:pb-0 lg:pb-0">
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