'use client';
import { useState } from "react";

type LinkItem = {
  label: string;
  maskLabel: string;
  small?: boolean;
};

function HoverLink({ label, maskLabel, small = false }: LinkItem) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orange fill */}
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

      {/* Ghost — holds height */}
      <div className={`opacity-0 pointer-events-none select-none flex items-center gap-3 font-semibold px-2 py-1 ${small ? "text-sm" : "text-4xl"}`}>
        <span className={`${small ? "w-1.5 h-1.5" : "w-2 h-2"} rotate-45 shrink-0`} />
        {label}
      </div>

      {/* Base text — fades out on hover */}
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
        <div className={`flex items-center gap-3 font-semibold px-2 ${small ? "text-sm" : "text-4xl"}`}>
          <span className={`${small ? "w-1.5 h-1.5" : "w-2 h-2"} bg-orange-500 rotate-45 shrink-0`} />
          {label}
        </div>
      </div>

      {/* Masked text — different text, scaleY from center on hover */}
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
        <div className={`flex items-center gap-3 font-semibold text-black px-2 ${small ? "text-sm" : "text-4xl"}`}>
          <span className={`${small ? "w-1.5 h-1.5" : "w-2 h-2"} bg-black rotate-45 shrink-0`} />
          {maskLabel}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] px-60 py-32">
<div className="flex items-start w-full">

  {/* LEFT COLUMN */}
  <div className="flex-1 flex flex-col">
    <p className="text-xs tracking-[0.3em] mb-10">CONNECT</p>
    <div className="space-y-6">
      <HoverLink label="Dribbble" maskLabel="See our shots →" />
      <HoverLink label="Youtube" maskLabel="Watch our work →" />
      <HoverLink label="Linkedin" maskLabel="Let's connect →" />
    </div>
  </div>

  {/* MIDDLE COLUMN */}
  <div className="pl-2 flex-1 flex flex-col mt-[3.5rem]">
    <div className="space-y-6">
      <HoverLink label="Instagram" maskLabel="Follow along →" />
      <HoverLink label="Facebook" maskLabel="Join the page →" />
      <HoverLink label="Behance" maskLabel="View projects →" />
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="pl-2 flex flex-col mt-[3.5rem] gap-8">
    <div>
      <p className="text-xs tracking-[0.2em] mb-3">Email</p>
      <HoverLink label="yourmail@gmail.com" maskLabel="Drop us a line →" small />
    </div>
    <div>
      <p className="text-xs tracking-[0.2em] mb-3">Phone</p>
      <HoverLink label="+91 12345 67890" maskLabel="Give us a ring →" small />
    </div>
  </div>

</div>
    </footer>
  );
}