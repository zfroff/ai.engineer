import { notFound } from "next/navigation";
import ProjectDetails from "./project-details";

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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
