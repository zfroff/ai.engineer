"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";

// Sample projects data - in a real app, this would come from an API or database
const projects = [
  {
    id: "project-1",
    title: "AI-Powered Chat Application",
    description:
      "A real-time chat application with AI-powered responses and sentiment analysis.",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
    category: "AI",
    demoUrl: "https://example.com/chat",
    githubUrl: "https://github.com/example/chat-app",
  },
  {
    id: "project-2",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration and inventory management.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    category: "Web",
    demoUrl: "https://example.com/shop",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "project-3",
    title: "Mobile Fitness App",
    description:
      "A fitness tracking app with workout plans and progress analytics.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile",
    demoUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/example/fitness-app",
  },
];

// This function tells Next.js which paths to generate at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const projectData = projects.find((p) => p.id === params.id);

    if (projectData) {
      setProject(projectData);
    }

    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button asChild variant="outline">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

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

                <h2>Results</h2>
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
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm text-gray-400">Project Type</h4>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Timeline</h4>
                    <p>3 months</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Role</h4>
                    <p>Lead Developer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {project.demoUrl && (
                    <Button
                      asChild
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
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
