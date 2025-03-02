import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Kush Ise | Software Engineer",
  description: "Portfolio of Kush Ise, Software Development Engineer",
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <MainNav />
            <ModeToggle />
          </div>
        </header>
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Kush Ise. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/kush-ise/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Kush614"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

