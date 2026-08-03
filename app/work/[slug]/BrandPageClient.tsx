"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import StackScroll from "../../components/StackScroll"
import SmoothScroll from "../../components/SmoothScroll"
import BrandGallery from "../../components/BrandGallery"
import Image from "next/image"
import type { Brand } from "../data/brand"

export default function BrandPageClient({ brand }: { brand: Brand }) {
  const maskedHero = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)

  return (
    <main className="bg-[#0b0b0b]">
      <SmoothScroll />
      <StackScroll stackRef={stackRef}>
        <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
          <Image src={brand.coverImage} alt={brand.name} fill priority className="object-cover -z-10" />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full px-8 md:px-35 pb-20 sm:pb-16 md:pb-14 items-center justify-center text-center sm:items-end sm:justify-start sm:text-left">
            <div className="w-full flex flex-col items-center sm:items-start">
              <motion.h1
                data-cursor="expand"
                className="text-[10px] sm:text-xs font-semibold tracking-widest mb-2 md:mb-4 w-fit"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: [0.25, 0.1, 0, 1] }}
              >
                Case Study
              </motion.h1>
              <div className="overflow-hidden">
                <motion.span
                  data-cursor="expand"
                  className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-90 leading-none text-center sm:text-left"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1], delay: 0.1 }}
                >
                  {brand.name}
                </motion.span>
              </div>
            </div>
          </div>

          <div
            ref={maskedHero}
            className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-8 md:px-35 pb-20 sm:pb-16 md:pb-14 sm:items-end sm:justify-start sm:text-left"
          >
            <div className="w-full flex flex-col items-center sm:items-start">
              <h1 className="text-[10px] sm:text-xs font-semibold tracking-widest text-black mb-2 md:mb-4 w-fit">
                Case Study
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-none">
                {brand.name}
              </h1>
            </div>
          </div>
        </section>

        <section className="stack-panel absolute inset-0 w-full bg-[#0b0b0b] flex flex-col">
          <BrandGallery brandName={brand.name} works={brand.works} />
        </section>
      </StackScroll>
    </main>
  )
}