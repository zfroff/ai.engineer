"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { fadeIn } from "@/lib/animation"

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A comprehensive overview of my technical skills and expertise in software development and artificial
            intelligence.
          </p>
        </AnimatedSection>

        {/* Programming Languages */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Programming Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {programmingLanguages.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <skill.icon className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Frameworks & Libraries */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Frameworks & Libraries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frameworks.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <skill.icon className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* AI & Machine Learning */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">AI & Machine Learning</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aiSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <skill.icon className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools & Platforms */}
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mb-8">Tools & Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <skill.icon className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

// Import icons from lucide-react
import {
  Code,
  FileCode,
  Braces,
  Terminal,
  LayoutGrid,
  Layers,
  Cpu,
  Database,
  Brain,
  BarChart,
  GitBranch,
  Cloud,
  Server,
  Box,
  Workflow,
} from "lucide-react"

const programmingLanguages = [
  { name: "JavaScript", icon: FileCode, proficiency: 95 },
  { name: "TypeScript", icon: Code, proficiency: 90 },
  { name: "Python", icon: Braces, proficiency: 85 },
  { name: "Go", icon: Terminal, proficiency: 75 },
]

const frameworks = [
  { name: "React", icon: LayoutGrid, proficiency: 95 },
  { name: "Next.js", icon: Layers, proficiency: 90 },
  { name: "Node.js", icon: Server, proficiency: 85 },
  { name: "Django", icon: Box, proficiency: 80 },
]

const aiSkills = [
  { name: "TensorFlow", icon: Brain, proficiency: 85 },
  { name: "PyTorch", icon: Cpu, proficiency: 80 },
  { name: "NLP", icon: Workflow, proficiency: 90 },
  { name: "Computer Vision", icon: BarChart, proficiency: 75 },
]

const tools = [
  { name: "Git", icon: GitBranch, proficiency: 95 },
  { name: "AWS", icon: Cloud, proficiency: 85 },
  { name: "Docker", icon: Box, proficiency: 90 },
  { name: "SQL", icon: Database, proficiency: 80 },
]

