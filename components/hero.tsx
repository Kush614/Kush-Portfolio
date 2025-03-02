"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I&apos;m Kush Ise
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Software Development Engineer with expertise in React, Node.js, and full-stack development.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/Kush_Ise_Resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto group transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="https://github.com/Kush614" target="_blank" rel="noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/kush-ise/" target="_blank" rel="noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:kushise27@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-full border bg-gradient-to-b from-primary/20 to-primary/10 p-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
              <img
                src="https://i.imgur.com/4YsxRfo.png"
                alt="Kush Ise"
                width={600}
                height={600}
                className="aspect-square rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={scrollToNextSection}
        >
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

