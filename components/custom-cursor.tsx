"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if device supports hover (not touch-only)
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches)
    }
    
    checkDevice()
    window.addEventListener("resize", checkDevice)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        setIsPointer(
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.closest("button") !== null ||
          hoveredElement.closest("a") !== null
        )
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    if (!isMobile) {
      document.addEventListener("mousemove", updatePosition)
      document.addEventListener("mouseover", updateCursorType)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      window.removeEventListener("resize", checkDevice)
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseover", updateCursorType)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position.x, position.y, isMobile])

  // Don't render on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-foreground transition-all duration-200 ${
            isPointer ? "scale-150" : ""
          }`}
        />
      </div>

      {/* Trailing cursor */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 0.5 : 0,
        }}
      >
        <div className="w-8 h-8 rounded-full border border-foreground/50" />
      </div>
    </>
  )
}
