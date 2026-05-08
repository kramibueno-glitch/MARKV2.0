"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const isDark = resolvedTheme === "dark"

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulseSpeed: number
      pulseOffset: number

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth)
        this.y = Math.random() * (canvas?.height || window.innerHeight)
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.6 + 0.2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseOffset = Math.random() * Math.PI * 2
        
        const colors = isDark 
          ? ["147, 51, 234", "139, 92, 246", "168, 85, 247", "192, 132, 252"]
          : ["124, 58, 237", "139, 92, 246", "167, 139, 250", "196, 181, 253"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(time: number) {
        this.x += this.speedX
        this.y += this.speedY

        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const force = (150 - distance) / 150
          this.x -= dx * force * 0.02
          this.y -= dy * force * 0.02
        }

        // Pulse effect
        this.opacity = 0.3 + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          if (this.y < 0) this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        )
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`)
        gradient.addColorStop(1, `rgba(${this.color}, 0)`)
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Core
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity + 0.2})`
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < Math.min(particleCount, 150); i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      if (!ctx) return
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3
            const lineColor = isDark ? "147, 51, 234" : "124, 58, 237"
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    let time = 0
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time += 1

      particles.forEach((particle) => {
        particle.update(time)
        particle.draw()
      })

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      initParticles()
    })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted, resolvedTheme])

  if (!mounted) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: resolvedTheme === "dark" 
              ? "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
            animationDuration: "4s"
          }}
        />
        <div 
          className="absolute top-1/2 -right-32 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: resolvedTheme === "dark"
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            animationDuration: "5s",
            animationDelay: "1s"
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: resolvedTheme === "dark"
              ? "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
            animationDuration: "6s",
            animationDelay: "2s"
          }}
        />
      </div>
    </>
  )
}
