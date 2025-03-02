"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              About Me
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who I Am</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Software Development Engineer with experience in building full-stack applications and a passion for
              creating efficient, user-friendly solutions.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="transition-all duration-300"
          >
            <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Education</h3>
                  <div className="space-y-4">
                    <Link href="https://www.ucr.edu/" target="_blank" rel="noreferrer" className="block group">
                      <div className="transition-colors duration-300 hover:bg-muted/50 p-3 rounded-md">
                        <h4 className="font-medium group-hover:text-primary flex items-center">
                          University of California Riverside
                          <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-muted-foreground">Master of Science in Computer Science</p>
                        <p className="text-sm text-muted-foreground">Sep. 2024 – Dec 2025</p>
                      </div>
                    </Link>
                    <Link href="http://www.unipune.ac.in/" target="_blank" rel="noreferrer" className="block group">
                      <div className="transition-colors duration-300 hover:bg-muted/50 p-3 rounded-md">
                        <h4 className="font-medium group-hover:text-primary flex items-center">
                          Savitribai Phule Pune University
                          <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-muted-foreground">Bachelor of Engineering in Computer Engineering</p>
                        <p className="text-sm text-muted-foreground">Aug. 2019 – Jul 2023</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="transition-all duration-300"
          >
            <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="space-y-2">
                    <Link
                      href="tel:+19518019702"
                      className="text-sm block p-3 rounded-md transition-colors duration-300 hover:bg-muted/50"
                    >
                      <span className="font-medium">Phone:</span> +1 (951) 801-9702
                    </Link>
                    <Link
                      href="mailto:kushise27@gmail.com"
                      className="text-sm block p-3 rounded-md transition-colors duration-300 hover:bg-muted/50"
                    >
                      <span className="font-medium">Email:</span> kushise27@gmail.com
                    </Link>
                    <Link
                      href="https://linkedin.com/in/kush-ise/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm block p-3 rounded-md transition-colors duration-300 hover:bg-muted/50"
                    >
                      <span className="font-medium">LinkedIn:</span>{" "}
                      <span className="text-primary hover:underline">linkedin.com/in/kush-ise/</span>
                    </Link>
                    <Link
                      href="https://github.com/Kush614"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm block p-3 rounded-md transition-colors duration-300 hover:bg-muted/50"
                    >
                      <span className="font-medium">GitHub:</span>{" "}
                      <span className="text-primary hover:underline">github.com/Kush614</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

