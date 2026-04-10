"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  GraduationCap, 
  Mail, 
  Quote, 
  Heart,
  X,
  Target,
  Rocket,
  Briefcase,
  Code,
  Palette,
  Users,
  Building,
  Zap,
  CheckCircle2,
  TrendingUp,
  Brain,
  Clock,
  BookOpen,
  Dumbbell,
  MessageSquare,
  Lightbulb,
  ArrowUpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const shortTermGoals = [
  { icon: GraduationCap, text: "Complete my IT degree" },
  { icon: Code, text: "Build a professional portfolio website" },
  { icon: Palette, text: "Learn advanced design software" },
  { icon: Briefcase, text: "Gain freelance experience" },
]

const longTermGoals = [
  { icon: Zap, text: "Become a recognized multimedia specialist" },
  { icon: Building, text: "Start my own creative studio" },
  { icon: Users, text: "Mentor aspiring designers" },
  { icon: Rocket, text: "Create impactful digital experiences" },
]

const actionPlan = [
  { icon: BookOpen, title: "Daily Learning", description: "Dedicate 2 hours daily to studying and skill development" },
  { icon: Code, title: "Practice Projects", description: "Build at least one project per month to apply new skills" },
  { icon: Users, title: "Networking", description: "Connect with professionals and join tech communities" },
  { icon: Clock, title: "Time Management", description: "Use productivity techniques to maximize efficiency" },
]

const areasForImprovement = [
  { icon: MessageSquare, title: "Communication Skills", description: "Improve presentation and public speaking abilities" },
  { icon: Brain, title: "Problem Solving", description: "Develop stronger analytical and critical thinking" },
  { icon: Dumbbell, title: "Discipline", description: "Build consistent habits and routines for success" },
  { icon: Lightbulb, title: "Creativity", description: "Expand creative thinking through diverse experiences" },
]

const upgradeStrategies = [
  { icon: TrendingUp, title: "Continuous Learning", description: "Stay updated with latest technologies and trends" },
  { icon: ArrowUpCircle, title: "Seek Feedback", description: "Actively request and implement constructive criticism" },
  { icon: CheckCircle2, title: "Set Milestones", description: "Break big goals into achievable checkpoints" },
  { icon: Heart, title: "Self-Care", description: "Maintain physical and mental health for peak performance" },
]

const letterContent = `Dear Mark Levi,

I want you to know that you are exactly where you need to be right now. Yes, there are moments of doubt, times when you question your path, and days when the challenges seem overwhelming. But remember — every great journey begins with a single step, and you've already taken so many.

You have a unique gift: the ability to see the world through both a creative and technological lens. This combination is rare and powerful. Don't let anyone tell you that you have to choose between art and technology — you are living proof that they can coexist beautifully.

Keep learning, keep creating, and most importantly, keep believing in yourself. The person you are becoming is worth all the effort you're putting in today. Your future self will thank you for the resilience you're showing now.

Remember to take care of yourself along the way. Success means nothing without health and happiness. Celebrate your small wins, learn from your setbacks, and never lose sight of why you started this journey.

You are capable of amazing things. Trust the process.

With belief and encouragement,
Your Present Self`

export function UpgradeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showLetter, setShowLetter] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".upgrade-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".upgrade-title",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate main card
      gsap.fromTo(
        ".upgrade-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".upgrade-card",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const startTyping = useCallback(() => {
    if (isTyping) return
    setIsTyping(true)
    setDisplayedText("")
    
    let index = 0
    typingIntervalRef.current = setInterval(() => {
      if (index < letterContent.length) {
        setDisplayedText(letterContent.slice(0, index + 1))
        index++
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current)
        }
        setIsTyping(false)
      }
    }, 15)
  }, [isTyping])

  const handleOpenLetter = () => {
    setShowLetter(true)
    startTyping()
  }

  const handleCloseLetter = () => {
    setShowLetter(false)
    setDisplayedText("")
    setIsTyping(false)
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current)
    }
  }

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="upgrade"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      
      {/* Glowing lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      
      {/* Floating sparks */}
      <div className="absolute top-24 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDuration: "2.5s" }} />
      <div className="absolute bottom-48 left-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce" style={{ animationDuration: "3s", animationDelay: "0.7s" }} />
      <div className="absolute top-1/2 right-16 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDuration: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-4">
            My Roadmap
          </span>
          <h2 className="upgrade-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-primary">Upgrade</span> Plan
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A strategic approach to becoming Version 2.0 of myself
          </p>
        </div>

        {/* Goals Grid */}
        <div className="upgrade-card grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Short-term Goals */}
          <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Short-term Goals</h3>
                <p className="text-sm text-muted-foreground">Next 1-2 years</p>
              </div>
            </div>
            <ul className="space-y-4">
              {shortTermGoals.map((goal, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <goal.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{goal.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Long-term Goals */}
          <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Long-term Goals</h3>
                <p className="text-sm text-muted-foreground">5-10 years</p>
              </div>
            </div>
            <ul className="space-y-4">
              {longTermGoals.map((goal, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <goal.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90">{goal.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Concrete Action Plan */}
        <div className="upgrade-card max-w-5xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Concrete <span className="text-primary">Action Plan</span>
            </h3>
            <p className="text-muted-foreground">Steps I will take to achieve my goals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actionPlan.map((item, index) => (
              <div key={index} className="p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="upgrade-card max-w-5xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Areas for <span className="text-accent">Improvement</span>
            </h3>
            <p className="text-muted-foreground">Skills and traits I need to develop</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areasForImprovement.map((item, index) => (
              <div key={index} className="p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-colors text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How I Will Upgrade Myself */}
        <div className="upgrade-card max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              How I Will <span className="text-primary">Upgrade</span> Myself
            </h3>
            <p className="text-muted-foreground">My strategies for personal growth</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upgradeStrategies.map((item, index) => (
              <div key={index} className="p-5 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:border-primary/40 transition-colors text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Letter Button */}
        <div className="text-center">
          <Button
            onClick={handleOpenLetter}
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Read Letter to My Present Self
          </Button>
        </div>
      </div>

      {/* Letter Modal */}
      {showLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleCloseLetter}
          />
          
          {/* Letter Card */}
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-auto animate-in zoom-in-95 fade-in duration-300">
            {/* Paper effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-secondary/30 rounded-2xl transform rotate-1 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-secondary/30 rounded-2xl transform -rotate-1 opacity-50" />
            
            {/* Main card */}
            <div className="relative p-6 md:p-10 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-sm shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleCloseLetter}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative elements */}
              <div className="absolute top-6 left-6">
                <Mail className="w-8 h-8 text-primary/30" />
              </div>
              <div className="absolute top-16 right-16">
                <Quote className="w-8 h-8 text-accent/30" />
              </div>

              {/* Letter header */}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Letter to My <span className="text-accent">Present Self</span>
                </h3>
                <p className="text-muted-foreground mt-2">Words of encouragement for the journey ahead</p>
              </div>

              {/* Letter content */}
              <div className="mt-6 min-h-[300px]">
                <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground/90">
                  {displayedText}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
                  )}
                </div>
              </div>

              {/* Footer decoration */}
              {!isTyping && displayedText.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-center gap-2 text-muted-foreground animate-in fade-in duration-500">
                  <Heart className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm">Written with love and hope</span>
                  <Heart className="w-4 h-4 text-accent fill-accent" />
                </div>
              )}

              {/* Corner decorations */}
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/20 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/20 rounded-br-lg" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
