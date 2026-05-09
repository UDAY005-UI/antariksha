"use client"
import { useEffect, useRef } from "react"

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const pos = useRef({ x: -9999, y: -9999 })
  const velocity = useRef({ x: 0, y: 0 })
  const size = useRef(0)
  const variantRef = useRef<"default" | "expand" | "expand-sm" | "none">("default")
  const hasEntered = useRef(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    const isHoverDevice = window.matchMedia("(hover: hover)").matches
    if (!isFinePointer || !isHoverDevice) return

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      hasEntered.current = true

      const target = e.target as HTMLElement
      const el = target.closest('[data-cursor]') as HTMLElement | null

      if (!el) {
        variantRef.current = "default"
      } else {
        const type = el.getAttribute("data-cursor")
        if (type === "expand") variantRef.current = "expand"
        else if (type === "expand-sm") variantRef.current = "expand-sm"
        else if (type === "none") variantRef.current = "none"
        else variantRef.current = "default"
      }
    }

    const handleScroll = () => {
      if (cursorRef.current) cursorRef.current.style.display = 'none'
      const el = document.elementFromPoint(mouse.current.x, mouse.current.y)
      if (cursorRef.current) cursorRef.current.style.display = 'block'

      const closest = el?.closest('[data-cursor]') as HTMLElement | null
      if (!closest) {
        variantRef.current = "default"
      } else {
        const type = closest.getAttribute("data-cursor")
        if (type === "expand") variantRef.current = "expand"
        else if (type === "expand-sm") variantRef.current = "expand-sm"
        else if (type === "none") variantRef.current = "none"
        else variantRef.current = "default"
      }
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("scroll", handleScroll, { passive: true })

    let frameId: number

    const loop = () => {
      const dx = mouse.current.x - pos.current.x
      const dy = mouse.current.y - pos.current.y

      velocity.current.x += dx * 0.06
      velocity.current.y += dy * 0.06
      velocity.current.x *= 0.75
      velocity.current.y *= 0.75

      pos.current.x += velocity.current.x
      pos.current.y += velocity.current.y

      let targetSize = 20
      if (variantRef.current === "expand") targetSize = 300
      else if (variantRef.current === "expand-sm") targetSize = 80
      else if (variantRef.current === "none") targetSize = 0

      size.current += (targetSize - size.current) * 0.07

      const x = pos.current.x
      const y = pos.current.y
      const s = size.current

      if (cursorRef.current) {
        const isHidden = variantRef.current === "none"
        const isExpand = variantRef.current === "expand"

        cursorRef.current.style.opacity = !hasEntered.current || isHidden ? "0" : "1"
        cursorRef.current.style.backgroundColor = isExpand ? "transparent" : "#f97316"
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        cursorRef.current.style.width = `${s}px`
        cursorRef.current.style.height = `${s}px`
        cursorRef.current.style.zIndex = "9999"
      }

      document.querySelectorAll<HTMLElement>("section").forEach((sec) => {
        sec.style.setProperty("--cx", "-9999px")
        sec.style.setProperty("--cy", "-9999px")
        sec.style.setProperty("--cr", "0px")
      })

      document.querySelectorAll<HTMLElement>("section").forEach((sec) => {
        const rect = sec.getBoundingClientRect()
        if (
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom
        ) {
          sec.style.setProperty("--cx", `${x - rect.left}px`)
          sec.style.setProperty("--cy", `${y - rect.top}px`)
          sec.style.setProperty("--cr", `${s / 2}px`)
        }
      })

      frameId = requestAnimationFrame(loop)
    }

    frameId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none hidden md:block"
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "#f97316",
        willChange: "transform, width, height, opacity",
        transition: "opacity 0.15s ease",
        zIndex: 9999,
      }}
    />
  )
}