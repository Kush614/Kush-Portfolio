"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav() {
  const [activeSection, setActiveSection] = React.useState("")

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2 group">
        <span className="font-bold text-xl group-hover:text-primary transition-colors duration-300">Kush Ise</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={cn(
              "transition-colors hover:text-primary relative py-2",
              activeSection === item.href.substring(1)
                ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                : "text-foreground/60",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

