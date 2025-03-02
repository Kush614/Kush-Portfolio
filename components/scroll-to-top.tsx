"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [toggleVisibility])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

