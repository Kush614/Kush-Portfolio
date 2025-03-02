"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Team Solarium - Self-Driving Solar-Electric Car",
      description:
        "Developed an autonomous driving system for a solar electric vehicle, including lane detection, IoT integration, and dynamic path planning. The project was highlighted in EVreporter e-magazine and raised 1.2 lacs INR.",
      technologies: ["OpenCV", "TensorFlow", "Python", "IoT", "Cloud Computing", "Machine Learning"],
      link: "https://linktr.ee/kushise",
      github: "https://linktr.ee/kushise",
      image: "https://i.imgur.com/lIXP6xN.png",
    },
    {
      title: "Tree Counting and Detection Automation using CNN",
      description:
        "Developed an unsupervised machine learning algorithm using CNN to count and track trees in high-resolution satellite and drone images. Achieved 98% accuracy, making it valuable for the palm and agriculture industry.",
      technologies: ["CNN", "Machine Learning", "Image Processing"],
      link: "https://github.com/Kush614/Tree-Counting-using-CNN",
      github: "https://github.com/Kush614/Tree-Counting-using-CNN",
      image: "https://i.imgur.com/Zlg2oRx.png",
    },
    {
      title: "Python Simple Math Interpreter",
      description:
        "Developed an interpreter in Python to evaluate basic math calculations. The project involved lexer and parser components, providing insights into how computers process human-readable text.",
      technologies: ["Python", "Interpreter Design", "Lexical Analysis", "Parsing"],
      link: "https://github.com/Kush614/Simple-Math-python-interpreter",
      github: "https://github.com/Kush614/Simple-Math-python-interpreter",
      image: "https://i.imgur.com/qESceoq.jpeg",
    },
    {
      title: "COVID-19 Detection from X-ray Images",
      description:
        "Developed a project to classify X-ray scans as healthy, pneumonic, or COVID positive. Used ResNet18 network pre-trained on ImageNet and achieved 98% accuracy in COVID detection.",
      technologies: ["Deep Learning", "ResNet18", "Image Classification", "Python"],
      link: "https://github.com/Kush614/Covid-19-detection-with-Pytorch-using-Chest-X-ray",
      github: "https://github.com/Kush614/Covid-19-detection-with-Pytorch-using-Chest-X-ray",
      image: "https://i.imgur.com/k5cV2Yo.png",
    },
    {
      title: "Shoe Shopping Cart",
      description:
        "Built an interactive shopping cart UI using React, allowing users to browse and add/remove shoes from the cart seamlessly. Integrated cart functionality, product filtering, and checkout processes, enhancing user experience.",
      technologies: ["React.js", "JavaScript"],
      link: "https://kushiseringovertask.netlify.app/",
      github: "https://github.com/Kush614/Shoe-Shopping-Cart",
      image: "https://i.imgur.com/KZxUeWm.png",
    },
    {
      title: "Kush.AI",
      description:
        "An AI-powered portfolio chatbot that showcases my skills, projects, and resume, using the Gemini API.",
      technologies: ["React.js", "Next.js", "JavaScript", "API integration"],
      link: "https://github.com/Kush614/Kush-Resume-AI-Assistant-based-Portfolio",
      github: "https://github.com/Kush614/Kush-Resume-AI-Assistant-based-Portfolio",
      image: "https://i.imgur.com/IszDMOq.png",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
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
              Projects
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my recent work and personal projects.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="transition-all duration-300"
            >
              <Card className="overflow-hidden h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden group cursor-pointer relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <Button variant="outline" size="sm" className="bg-background/80 hover:bg-background">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="hover:text-primary transition-colors duration-300 cursor-pointer">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        onClick={() => window.open(`https://www.google.com/search?q=${tech}+programming`, "_blank")}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group transition-all duration-300 hover:border-primary"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.link} target="_blank" rel="noreferrer">
                    <Button size="sm" className="group transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

