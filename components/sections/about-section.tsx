"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Heart, 
  Wallet, 
  Sparkles as SparklesIcon, 
  HeartHandshake, 
  Monitor,
  Dumbbell,
  Church,
  MessageCircleHeart,
  Globe
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const holisticSelfData = [
  {
    title: "Physical Self",
    icon: Dumbbell,
    description: "I believe in maintaining a healthy body as the foundation for a creative mind. Regular exercise and proper nutrition fuel my productivity.",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary"
  },
  {
    title: "Material / Economic Self",
    icon: Wallet,
    description: "I value financial literacy and responsible resource management. Building wealth to support my creative pursuits and future endeavors.",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent"
  },
  {
    title: "Spiritual Self",
    icon: Church,
    description: "My faith grounds me and provides purpose. I find strength in spiritual practices that guide my decisions and creative expression.",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary"
  },
  {
    title: "Love Language",
    icon: MessageCircleHeart,
    description: "Quality Time and Words of Affirmation. I express love through meaningful conversations and dedicated presence with loved ones.",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent"
  },
  {
    title: "Digital Self",
    icon: Globe,
    description: "My online presence reflects my passion for technology and creativity. I curate a digital identity that showcases my work and values.",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary"
  }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        ".about-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate cards with stagger
      gsap.fromTo(
        ".holistic-card",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".holistic-cards-container",
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
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent/40 rounded-full animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-4">
            Who I Am
          </span>
          <h2 className="about-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Holistic <span className="text-primary">Self</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Understanding myself through different dimensions that shape who I am
          </p>
        </div>

        {/* Cards grid */}
        <div className="holistic-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {holisticSelfData.map((item, index) => (
            <div
              key={item.title}
              className={`holistic-card group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
