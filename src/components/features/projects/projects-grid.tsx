'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

interface Project {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const PROJECTS: Project[] = [
  {
    title: "Digital Garden",
    description: "A collection of my notes and thoughts on computer science",
    link: "/notes",
    icon: "📚",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    link: "#",
    icon: "💻",
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((project) => (
        <Card key={project.title} className="hover:shadow-lg transition-shadow">
          <Link href={project.link}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{project.icon} {project.title}</span>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  );
}
