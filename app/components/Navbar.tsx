'use client';
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Logo from "./Logo";
import { YouTubeIcon } from "./Yt";
import { FacebookIcon } from "./Fb";
import { InstagramIcon } from "./Insta";
import { useAudio } from "./Audio";

function SlideText({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        overflow: "hidden",
        position: "relative",
        lineHeight: 1.2,
        verticalAlign: "bottom",
      }}
    >
      <span
        style={{
          display: "block",
          transform: hovered ? "translateY(-100%)" : "translateY(0%)",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {label}
      </span>
      <span
        aria-hidden
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          textAlign: "right",
          transform: hovered ? "translateY(0%)" : "translateY(100%)",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {label}
      </span>
    </span>
  );
}

function SlideToggleText({ textA, textB, active }: { textA: string; textB: string; active: boolean }) {
  const [key, setKey] = useState(0);
  const [label, setLabel] = useState(active ? textA : textB);
  const prevActive = useRef(active);

  useEffect(() => {
    if (prevActive.current === active) return;
    prevActive.current = active;
    setKey(k => k + 1);
    setLabel(active ? textA : textB);
  }, [active, textA, textB]);

  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        position: "relative",
        lineHeight: 1.2,
        verticalAlign: "bottom",
        width: "3.5ch",      // fixed width — never reflows
        flexShrink: 0,     // won't shrink inside flex parent
      }}
    >
      <span
        key={key}
        style={{
          display: "block",
          animation: key === 0 ? "none" : "slideUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {label}
      </span>

      <style>{`
        @keyframes slideUpIn {
          from { transform: translateY(110%); }
          to   { transform: translateY(0%);   }
        }
      `}</style>
    </span>
  );
}

function SoundToggle() {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
      className="text-sm font-bold tracking-wide"
    >
      {/* This span never moves — isolated from the toggle */}
      <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>Sound</span>
      <SlideToggleText textA="ON" textB="OFF" active={isPlaying} />
    </button>
  );
}

export default function Navbar() {
  const router = useRouter();

  const links = [
    { label: "About",   path: "/about"   },
    { label: "Team",    path: "/team"    },
    { label: "Work",    path: "/work"    },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full h-full flex items-start justify-between p-12 z-50 pointer-events-none">

      {/* LEFT */}
      <div className="flex flex-col justify-between h-full pointer-events-auto">
        <div data-cursor="none" onClick={() => router.push("/")}><Logo /></div>
        <div data-cursor="none" className="flex flex-col gap-4">
          <YouTubeIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-between h-full text-right pointer-events-auto">
        <div className="flex flex-col gap-2">
          {links.map(({ label, path }) => (
            <div
              key={label}
              data-cursor="none"
              className="font-bold cursor-pointer"
              onClick={() => router.push(path)}
            >
              <SlideText label={label} />
            </div>
          ))}
        </div>

        <div data-cursor="none" className="-rotate-90 origin-right -translate-y-18">
          <SoundToggle />
        </div>
      </div>
    </nav>
  );
}