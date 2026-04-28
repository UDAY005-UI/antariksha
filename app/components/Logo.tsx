"use client"
import { useState } from "react"
import Image from "next/image"

export default function Logo() {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="w-24 h-24 flex items-center justify-center relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Orange circle animation */}
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

            {/* White logo (default) */}
            <Image
                src="/wlogo.png"
                alt="Logo"
                fill
                className="object-contain relative z-10"
                style={{
                    opacity: hovered ? 0 : 1,
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* Black logo (on hover) */}
            <Image
                src="/blogo.png"
                alt="Logo"
                fill
                className="object-contain relative z-10"
                style={{
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />
        </div>
    )
}