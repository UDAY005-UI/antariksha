import { useState } from "react"

export function FacebookIcon() {
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
        <path
          d="M13.5 9H16V6h-2.5C11.8 6 11 6.8 11 8.5V10H9v3h2v5h3v-5h2.2l.3-3H14V9.2c0-.5.2-.7.7-.7z"
          fill={hovered ? "#000" : "#d5c6ab"}
          style={{ transition: "fill 0.3s ease" }}
        />
      </svg>
    </div>
  )
}