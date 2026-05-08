"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Palette, 
  Code2, 
  Video, 
  Layers, 
  Shield, 
  Users, 
  Lightbulb,
  Cpu,
  CheckCircle2
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "Motion Graphics", level: 75, icon: Video },
  { name: "Web Development", level: 70, icon: Code2 },
  { name: "3D Modeling", level: 60, icon: Layers },
]

const ethicalResponsibilities = [
  "Maintain integrity in all digital creations",
  "Respect intellectual property rights",
  "Ensure accessibility in design",
  "Protect user privacy and data",
  "Create inclusive content",
]

export function FutureSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".future-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".future-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate career card
      gsap.fromTo(
        ".career-card",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-card",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate skills
      gsap.fromTo(
        ".skill-item",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate skill bars
      const skillBars = document.querySelectorAll(".skill-bar-fill")
      skillBars.forEach((bar) => {
        const target = bar.getAttribute("data-level")
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Animate ethics list
      gsap.fromTo(
        ".ethics-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ethics-container",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="future"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, var(--accent) 0, var(--accent) 1px, transparent 0, transparent 50%)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Floating elements */}
      <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
      <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-accent/60 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-mono mb-4">
            Looking Ahead
          </span>
          <h2 className="future-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Future Self as an <span className="text-accent">IT Professional</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            My vision for growth in the technology and creative industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Dream Career Card */}
          <div className="career-card p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dream Career</h3>
                <p className="text-muted-foreground">My professional aspiration</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                <h4 className="font-semibold text-lg mb-2 text-primary">Graphic Designer</h4>
                <p className="text-muted-foreground text-sm">
                  Creating visual content that communicates messages effectively through typography, imagery, and color theory.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                <h4 className="font-semibold text-lg mb-2 text-accent">Multimedia Specialist</h4>
                <p className="text-muted-foreground text-sm">
                  Combining various media formats to create engaging digital experiences across multiple platforms.
                </p>
              </div>
            </div>

            {/* Role of Technology */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Role of Technology in My Identity</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Technology is the canvas for my creativity. It empowers me to bring ideas to life, 
                connect with others, and continuously evolve as a professional and individual.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            {/* Skills to develop */}
            <div className="skills-container p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Skills to Develop</h3>
              </div>

              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethical Responsibilities */}
            <div className="ethics-container p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Ethical Responsibilities</h3>
              </div>

              <ul className="space-y-3">
                {ethicalResponsibilities.map((item, index) => (
                  <li key={index} className="ethics-item flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
