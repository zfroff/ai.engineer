"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { fadeIn } from "@/lib/animation"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Experience</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A timeline of my professional journey, education, and achievements in software development and AI.
          </p>
        </AnimatedSection>

        {/* Work Experience */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <Briefcase className="mr-2 h-6 w-6 text-purple-500" />
            Work Experience
          </h2>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div key={index} variants={fadeIn("up", index * 0.1)} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  {/* Timeline for desktop */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="h-full w-0.5 bg-gray-800 absolute right-4 top-0"></div>
                    <div className="flex items-center justify-end h-8">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2.5"></div>
                      <span className="text-gray-400 text-sm">{job.period}</span>
                    </div>
                  </div>

                  {/* Timeline for mobile */}
                  <div className="md:hidden absolute left-0 top-0 h-full">
                    <div className="h-full w-0.5 bg-gray-800 absolute left-0 top-0"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full absolute -left-1 top-1.5"></div>
                  </div>
                  <span className="md:hidden text-gray-400 text-sm mb-2 block">{job.period}</span>

                  {/* Content */}
                  <div className="md:col-span-4 bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <h4 className="text-purple-500 mb-4">{job.company}</h4>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <GraduationCap className="mr-2 h-6 w-6 text-purple-500" />
            Education
          </h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeIn("up", index * 0.1)} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  {/* Timeline for desktop */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="h-full w-0.5 bg-gray-800 absolute right-4 top-0"></div>
                    <div className="flex items-center justify-end h-8">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2.5"></div>
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                  </div>

                  {/* Timeline for mobile */}
                  <div className="md:hidden absolute left-0 top-0 h-full">
                    <div className="h-full w-0.5 bg-gray-800 absolute left-0 top-0"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full absolute -left-1 top-1.5"></div>
                  </div>
                  <span className="md:hidden text-gray-400 text-sm mb-2 block">{edu.period}</span>

                  {/* Content */}
                  <div className="md:col-span-4 bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <h4 className="text-purple-500 mb-4">{edu.institution}</h4>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.fields.map((field) => (
                        <span key={field} className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications & Awards */}
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <Award className="mr-2 h-6 w-6 text-purple-500" />
            Certifications & Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-purple-500 mb-4">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-gray-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

const workExperience = [
  {
    title: "Senior AI Engineer",
    company: "TechInnovate AI",
    period: "2021 - Present",
    description:
      "Leading the development of AI-powered solutions for enterprise clients. Designing and implementing machine learning models for natural language processing and computer vision applications.",
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "DataViz Solutions",
    period: "2018 - 2021",
    description:
      "Developed interactive data visualization dashboards and analytics tools. Implemented front-end interfaces and back-end APIs for processing large datasets.",
    technologies: ["React", "Node.js", "D3.js", "GraphQL", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "WebTech Innovations",
    period: "2016 - 2018",
    description:
      "Built responsive web applications and e-commerce platforms. Collaborated with design and product teams to implement new features and improve user experience.",
    technologies: ["JavaScript", "React", "Express.js", "PostgreSQL", "Redis"],
  },
]

const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    institution: "Stanford University",
    period: "2014 - 2016",
    description:
      "Specialized in machine learning algorithms and neural networks. Conducted research on natural language processing and computer vision applications.",
    fields: ["Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "MIT",
    period: "2010 - 2014",
    description:
      "Focused on algorithms, data structures, and software engineering principles. Participated in hackathons and coding competitions.",
    fields: ["Algorithms", "Data Structures", "Software Engineering", "Mathematics"],
  },
]

const certifications = [
  {
    title: "TensorFlow Developer Certification",
    issuer: "Google",
    year: "2022",
    description:
      "Professional certification demonstrating proficiency in building and training neural networks using TensorFlow.",
  },
  {
    title: "AWS Certified Machine Learning Specialist",
    issuer: "Amazon Web Services",
    year: "2021",
    description:
      "Advanced certification validating expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
  },
  {
    title: "Professional Data Scientist",
    issuer: "DataCamp",
    year: "2020",
    description: "Certification covering data manipulation, visualization, machine learning, and statistical analysis.",
  },
  {
    title: "Innovation Award",
    issuer: "AI Summit",
    year: "2019",
    description: "Recognized for developing an innovative AI solution for healthcare diagnostics.",
  },
]

