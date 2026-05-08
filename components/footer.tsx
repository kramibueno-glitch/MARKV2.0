"use client"

import { Sparkles, Heart, Github, Facebook, Instagram, Mail, Phone } from "lucide-react"

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/kramibueno-glitch" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585918837203" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ark.levii/" },
]

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">
              Mark Levi<span className="text-primary"> 2.0</span>
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-6">
            <a 
              href="mailto:marklevicasillan234@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>marklevicasillan234@gmail.com</span>
            </a>
            <a 
              href="tel:09812359236"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>09812359236</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground mb-6 max-w-md">
            Where Technology Meets Creativity. Always learning, always creating, always evolving.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Mark Levi I. Casillan. Made with
            <Heart className="w-4 h-4 text-accent fill-accent" />
            and lots of code.
          </p>

          {/* Version badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-card/50 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Version 2.0
          </div>
        </div>
      </div>
    </footer>
  )
}
