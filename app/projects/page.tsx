"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { staggerContainer, fadeIn } from "@/lib/animation"

const categories = ["All", "AI", "Web", "Mobile", "Data Science"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore my portfolio of software and AI projects. Each project represents a unique challenge and solution.
          </p>
        </AnimatedSection>

        {/* Filter Categories */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", 0.2)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-900 rounded-lg overflow-hidden card-hover border border-gray-800"
            >
              <div className="relative h-56">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=${project.title}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button asChild variant="link" className="p-0 text-purple-500 hover:text-purple-400">
                    <Link href={`/projects/${project.id}`}>
                      Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const projects = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot Platform",
    description: "An intelligent conversational AI platform with natural language understanding capabilities.",
    technologies: ["React", "Node.js", "TensorFlow", "NLP"],
    category: "AI",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/ai-chatbot",
  },
  {
    id: "image-recognition",
    title: "Image Recognition API",
    description: "A computer vision API that can identify objects, scenes, and activities in images.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
    category: "AI",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/image-recognition",
  },
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates.",
    technologies: ["D3.js", "React", "GraphQL", "TypeScript"],
    category: "Data Science",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/data-viz",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    category: "Web",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "mobile-fitness",
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
    category: "Mobile",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/fitness-app",
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engine",
    description: "AI-powered recommendation system for personalized content and product suggestions.",
    technologies: ["Python", "TensorFlow", "Flask", "AWS"],
    category: "AI",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/recommendation-engine",
  },
]

