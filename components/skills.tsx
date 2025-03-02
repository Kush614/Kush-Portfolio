"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      id: "languages",
      label: "Languages",
      skills: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
      id: "frameworks",
      label: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Material-UI", "Redux", "React Bootstrap", "Spring Boot", "Flask"],
    },
    {
      id: "databases",
      label: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL"],
    },
    {
      id: "tools",
      label: "Tools & Technologies",
      skills: ["Git", "Kafka", "Socket.IO", "RESTful APIs"],
    },
  ]

  const handleSkillClick = (skill: string) => {
    window.open(`https://www.google.com/search?q=${skill}+programming`, "_blank")
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
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
              Skills
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical expertise and proficiencies.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-muted"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => handleSkillClick(skill)}
                          >
                            <Badge className="px-3 py-1 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

