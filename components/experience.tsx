"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { PlaceholderLogo } from "./placeholder-logo"

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Jio Platforms Limited",
      location: "Mumbai, India",
      duration: "Dec 2023 – Jul 2024",
      duties: [
        "Developed and optimized UI components in React for order Jio Tira, JioQuest applications.",
        "Integrated Jio Pay API for secure payment processing, enhancing user trust and payment reliability.",
        "Led development of a comprehensive product portal managing frontend and backend operations.",
        "Developed APIs with Node.js and Express, along with a React-based admin portal for managing brands, products, and user roles.",
        "Implemented a centralized catalog system with MongoDB, enhancing data analysis and decision-making.",
        "Developed both the frontend and backend for key features like dynamic form generation, real-time validation, and interactive dashboards, which increased operational efficiency by 30%.",
        "Integrated Google Maps API for location-based store audits, improving accuracy and boosting user engagement by 25%.",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "SQL", "Material UI", "Redux", "PostgreSQL"],
      link: "https://www.jio.com/",
    },
    {
      title: "Software Development Engineer Intern",
      company: "Maharashtra Metro Rail Corporation Limited",
      location: "Pune, India",
      duration: "Jul 2023 – Nov 2023",
      duties: [
        "Developed and integrated a QR code-based ticketing system for a smartphone passenger app, enabling secure and efficient access for Pune Metro users.",
        "Designed RESTful APIs for secure communication between the ticketing system and backend databases, ensuring reliable data flow and transaction security.",
        "Utilized both MySQL (relational) and MongoDB (NoSQL) databases to handle robust data storage and management needs, enhancing system reliability.",
        "Integrated various payment gateways to support multiple payment options, facilitating smooth and flexible transactions for users.",
      ],
      technologies: ["RESTful APIs", "MySQL", "MongoDB", "Payment Gateway APIs"],
      link: "https://www.punemetrorail.org/",
    },
    {
      title: "Software Development Engineer (SDE) Intern",
      company: "Avalon Hacks",
      location: "",
      duration: "Jan 2022 – May 2022",
      duties: [
        "Developed an Edtech company's course website using MongoDB, React, Node.js, MySQL, and Postgres.",
        "Launched an online testing platform, starting with 40 users and later scaling up by 100%. Implemented MERN stack and Node.js for API development to ensure seamless data integration.",
        "Innovated a high-capacity bulk mailer project, facilitating the efficient dispatch of up to 1000 emails at once using cloud servers.",
      ],
      technologies: ["MongoDB", "React", "Node.js", "MySQL", "Postgres", "MERN Stack"],
      link: "#",
    },
    {
      title: "Research and Development Engineer",
      company: "Team Solarium",
      location: "Pune, India",
      duration: "Dec 2020 – Dec 2021",
      duties: [
        "Spearheaded the implementation of autonomous driving for our solar electric vehicle, employing OpenCV, a stereo camera, and Nvidia Jetson Nano.",
        "Developed a cutting-edge lane detection system using Python's TensorFlow models and applied transfer learning for an Advanced Driver Assistant System.",
        "Integrated IoT, Cloud Computing, and machine learning to optimize vehicle performance, achieving real-time feedback on the IBM Cloud.",
        "Applied algorithms in dynamic path planning like A* and Dijkstra, allowing the vehicle to detect obstacles and navigate independently.",
        "Team Solarium, highlighted in EVreporter e-magazine, received acclaim for our on-campus project—a Self-Driving Solar-Electric Car designed to cover 16,000 kms.",
        "As a team member, I contributed to raising 1.2 lacs INR for the Team Solarium Project.",
      ],
      technologies: ["OpenCV", "TensorFlow", "Python", "IoT", "Cloud Computing", "Machine Learning"],
      link: "#",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
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
              Experience
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey in software development.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="transition-all duration-300"
            >
              <Link href={experience.link} target="_blank" rel="noreferrer" className="block">
                <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <PlaceholderLogo letter={experience.company[0]} />
                        <div>
                          <CardTitle>{experience.title}</CardTitle>
                          <p className="text-sm text-muted-foreground group-hover:text-primary flex items-center">
                            {experience.company}
                            <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                        </div>
                      </div>
                      <Badge>{experience.duration}</Badge>
                    </div>
                    {experience.location && <p className="text-sm text-muted-foreground mt-1">{experience.location}</p>}
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-2 text-sm">
                      {experience.duties.map((duty, index) => (
                        <li key={index}>{duty}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          onClick={(e) => {
                            e.preventDefault()
                            window.open(`https://www.google.com/search?q=${tech}+programming`, "_blank")
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
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

