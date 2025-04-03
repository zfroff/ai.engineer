"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Brain, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { textVariant } from "@/lib/animation";
import { AnimatedSectionProps } from "./types";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="max-w-3xl"
          >
            <motion.h1
              variants={textVariant(0.1)}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Building the Future with{" "}
              <span className="gradient-text">AI & Software</span>
            </motion.h1>

            <motion.p
              variants={textVariant(0.3)}
              className="text-xl text-gray-300 mb-8"
            >
              Software engineer specializing in artificial intelligence, machine
              learning, and full-stack development. Creating intelligent
              solutions for complex problems.
            </motion.p>

            <motion.div
              variants={textVariant(0.5)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-600 text-white hover:bg-purple-600/10"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1"
            >
              <motion.div
                animate={{ height: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1 bg-purple-500 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button
              asChild
              variant="ghost"
              className="text-purple-500 hover:text-purple-400"
            >
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-900 rounded-lg overflow-hidden card-hover border border-gray-800"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=${project.title}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-purple-500 hover:text-purple-400"
                  >
                    <Link href={`/projects/${project.id}`}>
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Overview Section */}
      <AnimatedSection className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-6">
                <Code className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Software Development
              </h3>
              <p className="text-gray-400 mb-4">
                Expert in full-stack development with modern frameworks and
                languages.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• React, Next.js, TypeScript</li>
                <li>• Node.js, Python, Go</li>
                <li>• Cloud Architecture</li>
                <li>• Microservices</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-6">
                <Brain className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Artificial Intelligence
              </h3>
              <p className="text-gray-400 mb-4">
                Specialized in building and deploying AI models for real-world
                applications.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Machine Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Generative AI</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-6">
                <Sparkles className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Product Development
              </h3>
              <p className="text-gray-400 mb-4">
                End-to-end product development with a focus on user experience.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• UX/UI Design</li>
                <li>• Product Strategy</li>
                <li>• Agile Methodologies</li>
                <li>• Technical Leadership</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/skills">
                Explore All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate on your next project and bring your ideas to
              life with cutting-edge technology.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

const featuredProjects = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot Platform",
    description:
      "An intelligent conversational AI platform with natural language understanding capabilities.",
    technologies: ["React", "Node.js", "TensorFlow", "NLP"],
  },
  {
    id: "image-recognition",
    title: "Image Recognition API",
    description:
      "A computer vision API that can identify objects, scenes, and activities in images.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
  },
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with real-time updates.",
    technologies: ["D3.js", "React", "GraphQL", "TypeScript"],
  },
];
