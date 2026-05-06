"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Logo() {
    const [hovered, setHovered] = useState(false)
    const isMouse = useRef(false)

    useEffect(() => {
        isMouse.current =
            window.matchMedia("(pointer: fine)").matches &&
            window.matchMedia("(hover: hover)").matches
    }, [])

    return (
        <div
            className="w-24 h-24 flex items-center justify-center relative"
            onMouseEnter={() => { if (isMouse.current) setHovered(true) }}
            onMouseLeave={() => { if (isMouse.current) setHovered(false) }}
        >
            <div
                className="logo-hover-circle absolute rounded-full bg-orange-500"
                style={{
                    width: "110%",
                    height: "110%",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
                    transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
            />

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