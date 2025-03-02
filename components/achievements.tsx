"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Achievements() {
  const achievements = [
    {
      title: "Finalist in India's National Toy-Hackathon Grand Finale",
      description:
        "Created 'Anantha' app with Flutter and Firebase for sharing audio content like folksongs and podcasts to promote creative expression.",
      date: "Jun 2021",
      link: "https://drive.google.com/file/d/11F7Mp4WLbpwewqSsru6HinF9ccXGdSYZ/view",
    },
    {
      title: "1st Place RSTE Saur Urja Vehicle Challenge Season 5.0",
      description:
        "Developed an Advanced Driver Assistance System with lane detection using TensorFlow, real-time IoT and AI integration on IBM Cloud, and dynamic path planning (A*, Dijkstra) for autonomous navigation in a solar electric vehicle for 1000 mi.",
      date: "Feb 2022",
      link: "https://drive.google.com/file/d/1rPtIqovfSCsfcFn0L03yzY4ojiZeazp3/view",
    },
    {
      title: "Published Research Paper",
      description:
        '"Tree Counting and Detection Automation using CNN," achieving 98% accuracy in automating tree counting and tracking from satellite images for agricultural use.',
      date: "May 2023",
      link: "https://www.ijert.org/tree-counting-and-detection-automation-using-cnn-2",
    },
  ]

  return (
    <section id="achievements" className="py-16 md:py-24">
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
              Achievements
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Accomplishments</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Notable achievements and recognition in my career.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="transition-all duration-300"
            >
              <Link href={achievement.link} target="_blank" rel="noreferrer" className="block">
                <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{achievement.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center text-sm text-primary hover:underline">
                        View More <ExternalLink className="ml-1 h-3 w-3 animate-pulse" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

