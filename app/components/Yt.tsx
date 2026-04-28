"use client"
import { useState } from "react"

export function YouTubeIcon() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="w-10 h-10 flex items-center justify-center relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute rounded-full bg-orange-500"
        style={{
          width: "110%",
          height: "110%",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
          transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />
      <svg viewBox="0 0 24 24" className="relative w-full h-full z-10">
        <polygon
          points="8,8 18,12 8,16"
          fill={hovered ? "#000" : "#d5c6ab"}
          style={{ transition: "fill 0.3s ease" }}
        />
      </svg>
    </div>
  )
}
