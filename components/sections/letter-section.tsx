"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Quote, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const letterContent = `Dear Mark Levi,

I want you to know that you are exactly where you need to be right now. Yes, there are moments of doubt, times when you question your path, and days when the challenges seem overwhelming. But remember — every great journey begins with a single step, and you've already taken so many.

You have a unique gift: the ability to see the world through both a creative and technological lens. This combination is rare and powerful. Don't let anyone tell you that you have to choose between art and technology — you are living proof that they can coexist beautifully.

Keep learning, keep creating, and most importantly, keep believing in yourself. The person you are becoming is worth all the effort you're putting in today. Your future self will thank you for the resilience you're showing now.

Remember to take care of yourself along the way. Success means nothing without health and happiness. Celebrate your small wins, learn from your setbacks, and never lose sight of why you started this journey.

You are capable of amazing things. Trust the process.

With belief and encouragement,
Your Present Self`

export function LetterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".letter-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".letter-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate letter card
      gsap.fromTo(
        ".letter-card",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".letter-card",
            start: "top 75%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Start typing effect when card enters view
              if (!isTyping) {
                setIsTyping(true)
                typeText()
              }
            }
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isTyping])

  const typeText = () => {
    let index = 0
    const interval = setInterval(() => {
      if (index < letterContent.length) {
        setDisplayedText(letterContent.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 15) // Speed of typing
  }

  return (
    <section
      ref={sectionRef}
      id="letter"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-mono mb-4">
            A Personal Message
          </span>
          <h2 className="letter-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Letter to My <span className="text-accent">Present Self</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Words of encouragement for the journey ahead
          </p>
        </div>

        {/* Letter Card */}
        <div className="max-w-3xl mx-auto">
          <div className="letter-card relative">
            {/* Paper effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-secondary/30 rounded-2xl transform rotate-1 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-secondary/30 rounded-2xl transform -rotate-1 opacity-50" />
            
            {/* Main card */}
            <div className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-sm shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6">
                <Mail className="w-8 h-8 text-primary/30" />
              </div>
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-accent/30" />
              </div>

              {/* Letter content */}
              <div className="mt-8">
                <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground/90">
                  {displayedText}
                  {displayedText.length < letterContent.length && (
                    <span className="typing-cursor" />
                  )}
                </div>
              </div>

              {/* Footer decoration */}
              <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm">Written with love and hope</span>
                <Heart className="w-4 h-4 text-accent fill-accent" />
              </div>

              {/* Corner decorations */}
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/20 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/20 rounded-br-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
