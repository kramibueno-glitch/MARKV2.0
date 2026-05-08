"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FutureSection } from "@/components/sections/future-section"
import { UpgradeSection } from "@/components/sections/upgrade-section"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { BackgroundEffects } from "@/components/background-effects"

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <BackgroundEffects />
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <FutureSection />
        <UpgradeSection />
        <Footer />
      </main>
    </>
  )
}
