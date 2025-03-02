"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
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
              Contact
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="transition-all duration-300"
          >
            <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="space-y-4">
                    <Link
                      href="mailto:kushise27@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-md transition-colors duration-300 hover:bg-background"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                          kushise27@gmail.com
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="tel:+19518019702"
                      className="flex items-center gap-3 p-3 rounded-md transition-colors duration-300 hover:bg-background"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                          +1 (951) 801-9702
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold">Connect With Me</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Follow me on social media or check out my work on GitHub.
                    </p>
                    <div className="mt-4 flex gap-4">
                      <Link
                        href="https://linkedin.com/in/kush-ise/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                        <span className="text-sm hover:underline">LinkedIn</span>
                      </Link>
                      <Link
                        href="https://github.com/Kush614"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-colors duration-300"
                      >
                        <Github className="h-5 w-5 text-primary" />
                        <span className="text-sm hover:underline">GitHub</span>
                      </Link>
                    </div>
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
            whileHover={{ scale: 1.02 }}
            className="transition-all duration-300"
          >
            <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`focus:border-primary ${formErrors.name ? "border-red-500" : ""}`}
                      required
                    />
                    {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`focus:border-primary ${formErrors.email ? "border-red-500" : ""}`}
                      required
                    />
                    {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`focus:border-primary ${formErrors.subject ? "border-red-500" : ""}`}
                      required
                    />
                    {formErrors.subject && <p className="text-xs text-red-500 mt-1">{formErrors.subject}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[120px] focus:border-primary ${formErrors.message ? "border-red-500" : ""}`}
                      required
                    />
                    {formErrors.message && <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    className="w-full group transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

