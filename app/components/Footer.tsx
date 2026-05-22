'use client';
import { useState, useEffect, useRef } from "react";

type LinkItem = {
  label: string;
  maskLabel: string;
  href: string;
  small?: boolean;
};

function useIsPointerFine() {
  const [isFine, setIsFine] = useState(
    () => typeof window !== "undefined"
      ? window.matchMedia("(pointer: fine)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const handler = (e: MediaQueryListEvent) => setIsFine(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isFine;
}

function HoverLink({ label, maskLabel, href, small = false }: LinkItem) {
  const [hovered, setHovered] = useState(false);
  const isPointerFine = useIsPointerFine();

  const textCls = small ? "text-sm" : "text-2xl md:text-3xl lg:text-4xl";
  const dotCls = small ? "w-1.5 h-1.5" : "w-2 h-2";
  const justifyCls = small ? "justify-center md:justify-start" : "justify-center md:justify-start";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden cursor-pointer w-full block"
      onMouseEnter={() => isPointerFine && setHovered(true)}
      onMouseLeave={() => isPointerFine && setHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#f97316",
          transform: isPointerFine && hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "center",
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        className={`opacity-0 select-none pointer-events-none flex items-center ${justifyCls} gap-3 font-semibold px-2 py-1 ${textCls}`}
      >
        <span className={`${dotCls} rotate-45 shrink-0`} />
        {label}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: isPointerFine && hovered ? 0 : 1,
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
        className={justifyCls}
      >
        <div className={`flex items-center gap-3 font-semibold px-2 ${textCls}`}>
          <span className={`${dotCls} bg-orange-500 rotate-45 shrink-0`} />
          {label}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          transform: isPointerFine && hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "center",
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
        className={justifyCls}
      >
        <div className={`flex items-center gap-3 font-semibold text-black px-2 ${textCls}`}>
          <span className={`${dotCls} bg-black rotate-45 shrink-0`} />
          {maskLabel}
        </div>
      </div>
    </a>
  );
}

function SpotlightText({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setPos(null);

  return (
    <div
      className="relative cursor-default select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="none"
    >
      <p ref={ref} className="text-sm text-neutral-400 leading-relaxed max-w-sm">
        {children}
      </p>
      {pos && (
        <p
          className="absolute inset-0 text-sm text-orange-500 leading-relaxed max-w-sm pointer-events-none"
          style={{
            WebkitMaskImage: `radial-gradient(circle 80px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 80px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
          }}
        >
          {children}
        </p>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] px-10 py-8 md:px-20 md:py-12 lg:px-60 lg:py-18">
      <div className="flex flex-col items-center md:items-start md:flex-row w-full gap-12 md:gap-0">

        <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xs tracking-[0.3em] mb-10" data-cursor="none">CONNECT</p>
          <SpotlightText>
            Antariksha is a creative content studio focused on crafting visuals that feel intentional and refined. From concept to final cut, we prioritize clarity, consistency, and storytelling that actually resonates.
          </SpotlightText>
        </div>

        <div className="w-full md:flex-1 md:pl-2 md:mt-14 flex flex-col items-center md:items-start">
          <div className="w-full max-w-xs md:max-w-none space-y-6" data-cursor="none">
            <HoverLink label="Instagram" maskLabel="Follow along →" href="https://www.instagram.com/the.antariksha?igsh=MWtyNHI3MTRhdDBhdA==" />
            <HoverLink label="Youtube" maskLabel="Watch our work →" href="https://youtube.com/@theantariksha_in?si=ygBEwLMzszPamYrA" />
          </div>
        </div>

        <div className="w-full md:w-auto md:pl-2 md:mt-14 flex flex-col items-center md:items-start gap-8">
          <div className="w-full max-w-xs md:max-w-none" data-cursor="none">
            <p className="text-xs tracking-[0.2em] mb-3 text-center md:text-left">Email</p>
            <HoverLink label="antarikshathe@gmail.com" maskLabel="Drop us a line →" small href="mailto:antarikshathe@gmail.com" />
          </div>
          <div className="w-full max-w-xs md:max-w-none" data-cursor="none">
            <p className="text-xs tracking-[0.2em] mb-3 text-center md:text-left">
              Phone
            </p>

            <div className="space-y-2">
              <HoverLink
                label="+91 97352 81411"
                maskLabel="Give us a ring →"
                small
                href="tel:+919735281411"
              />

              <HoverLink
                label="+91 74394 79293"
                maskLabel="Let's talk →"
                small
                href="tel:+917439479293"
              />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}