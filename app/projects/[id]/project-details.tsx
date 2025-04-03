"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectDetails({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Button
          asChild
          variant="ghost"
          className="mb-8"
          onClick={() => router.back()}
        >
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>

        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="text-sm bg-purple-900/30 text-purple-400 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={`/placeholder.svg?height=800&width=1200&text=${project.title}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <h2>Project Overview</h2>
                <p>{project.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
                  aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
                  auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
                  eget ultricies nisl nisl eget nisl.
                </p>

                <h2>Challenges</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
                  aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
                  auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
                  eget ultricies nisl nisl eget nisl.
                </p>

                <h2>Solutions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
                  aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
                  auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
                  eget ultricies nisl nisl eget nisl.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                <div className="space-y-4">
                  {project.demoUrl && (
                    <Button asChild className="w-full">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
