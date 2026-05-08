"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // 3D Tilt effect for the hero image
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !imageRef.current) return
    
    const rect = imageContainerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    gsap.to(imageRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!imageRef.current) return
    
    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [])

  useEffect(() => {
    setMounted(true)
    
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".hero-title span",
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power4.out",
          delay: 0.3
        }
      )

      // Animate subtitle
      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          delay: 1
        }
      )

      // Animate description
      gsap.fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          delay: 1.3
        }
      )

      // Animate button
      gsap.fromTo(
        ".hero-button",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          delay: 1.6
        }
      )

      // Animate hero image
      gsap.fromTo(
        ".hero-image",
        { x: 50, opacity: 0, scale: 0.95 },
        { 
          x: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2, 
          ease: "power3.out",
          delay: 0.5
        }
      )

      // Floating particles
      gsap.to(".floating-particle", {
        y: -30,
        x: "random(-20, 20)",
        opacity: "random(0.3, 1)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Hero Image with 3D Tilt */}
          <div 
            ref={imageContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hero-image relative w-full max-w-xl lg:max-w-2xl order-1 lg:order-2 cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            <div 
              ref={imageRef}
              className="relative aspect-video rounded-2xl overflow-hidden glow-border transition-shadow hover:shadow-[0_0_40px_var(--glow-primary)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/images/hero-profile.png"
                alt="Mark Levi Casillan - System Upgrade Version 2.0"
                fill
                className="object-cover"
                priority
              />
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-xl">
            {/* Version badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">Version 2.0</span>
            </div>

            {/* Main title */}
            <h1 
              ref={titleRef}
              className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 overflow-hidden"
            >
              <span className="inline-block">System</span>{" "}
              <span className="inline-block text-primary glow-text">Upgrade</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-6">
              Mark Levi Casillan <span className="text-primary">Version 2.0</span>
            </p>

            {/* Description */}
            <p className="hero-description text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-10">
              Hello! I am <span className="text-foreground font-medium">Mark Levi Casillan</span>, 
              and this website presents my journey of understanding myself. This project shows who I was in the past, 
              who I am today, and who I want to become in the future. As a student and future IT professional, 
              I believe that life is like a system that can always be improved. This is my Version 2.0, 
              where I reflect, grow, and prepare myself for a better future.
            </p>

            {/* CTA Button */}
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="hero-button group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full glow-border"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Me Holistically
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
