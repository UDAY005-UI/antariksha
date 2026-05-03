'use client';
import { useState } from "react";

type LinkItem = {
  label: string;
  maskLabel: string;
  href: string;
  small?: boolean;
};

function HoverLink({ label, maskLabel, href, small = false }: LinkItem) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden cursor-pointer w-full block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#f97316",
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "center",
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 0,
        }}
      />

      <div className={`opacity-0 pointer-events-none select-none flex items-center gap-3 font-semibold px-2 py-1 ${small ? "text-sm" : "text-2xl md:text-3xl lg:text-4xl"}`}>
        <span className={`${small ? "w-1.5 h-1.5" : "w-2 h-2"} rotate-45 shrink-0`} />
        {label}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={`flex items-center gap-3 font-semibold px-2 ${small ? "text-sm" : "text-2xl md:text-3xl lg:text-4xl"}`}>
          <span className={`${small ? "w-1.5 h-1.5" : "w-2 h-2"} bg-orange-500 rotate-45 shrink-0`} />
          {label}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "center",
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={`flex items-center gap-3 font-semibold text-black px-2 ${small ? "text-sm" : "text-2xl md:text-3xl lg:text-4xl"}`}>
          <span className={`${small ? "w-1.5 h-1.5" : "w-2 h-2"} bg-black rotate-45 shrink-0`} />
          {maskLabel}
        </div>
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] px-10 py-16 md:px-20 md:py-24 lg:px-60 lg:py-32">
      <div className="flex flex-col md:flex-row items-start w-full gap-12 md:gap-0">

        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs tracking-[0.3em] mb-10" data-cursor="none">CONNECT</p>
          <p className="text-sm text-neutral-400 text-balance leading-relaxed max-w-xs md:max-w-md" data-cursor="none">
            Antariksha is a creative content studio focused on crafting visuals that
            feel intentional and refined. From concept to final cut, we prioritize
            clarity, consistency, and storytelling that actually resonates.
          </p>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="pl-2 flex-1 flex flex-col md:mt-14">
          <div data-cursor="none" className="space-y-6">
            <HoverLink label="Instagram" maskLabel="Follow along →" href={"https://www.instagram.com/the.antariksha?igsh=MWtyNHI3MTRhdDBhdA=="} />
            <HoverLink label="Facebook" maskLabel="Join the page →" href={""} />
            <HoverLink label="Youtube" maskLabel="Watch our work →" href={"https://youtube.com/@theantariksha_in?si=ygBEwLMzszPamYrA"} />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="pl-2 flex flex-col md:mt-14 gap-8">
          <div data-cursor="none">
            <p className="text-xs tracking-[0.2em] mb-3">Email</p>
            <HoverLink label="antarikshathe@gmail.com" maskLabel="Drop us a line →" small href={"mailto:antarikshathe@gmail.com"} />
          </div>
          <div data-cursor="none">
            <p className="text-xs tracking-[0.2em] mb-3">Phone</p>
            <HoverLink label="+91 97352 81411" maskLabel="Give us a ring →" small href={"tel:+919735281411"} />
          </div>
        </div>

      </div>
    </footer>
  );
}