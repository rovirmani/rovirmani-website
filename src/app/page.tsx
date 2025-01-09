"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import Link from "next/link"

export default function Home() {
  const skills = [
    { name: "TypeScript", description: "Building type-safe applications" },
    { name: "React", description: "Creating interactive user interfaces" },
    { name: "Next.js", description: "Full-stack React applications" },
    { name: "Node.js", description: "Backend development" },
    { name: "Python", description: "Data analysis and automation" },
  ]

  const projects = [
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
  ]

  return (
    <main className="min-h-screen bg-gradient-to-r from-amber-50/80 to-rose-50/80 dark:from-blue-950 dark:to-green-950 pt-20">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
            Hey, I'm Rohan 👋
          </h1>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 mb-8">
            I'm a software engineer passionate about building tools that empower people.
            Currently focused on web development, distributed systems, and AI.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/rovirmani" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://linkedin.com/in/rohanvirmani" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://twitter.com/rovirmani" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="mailto:rohan.virmani@berkeley.edu">
                <EmailIcon className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="max-w-3xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Software Engineer & Developer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400">
                  I'm a software engineer with a passion for building intuitive and impactful applications.
                  My journey in tech started with [Your Background], and I've since worked on various projects
                  ranging from web applications to distributed systems.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  When I'm not coding, you can find me [Your Interests/Hobbies].
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>My professional journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
                    <h3 className="font-medium">Software Engineer</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Company Name • 2023-Present</p>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                      Description of your role and achievements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
                <CardDescription>Tools and technologies I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <HoverCard key={skill.name}>
                      <HoverCardTrigger>
                        <div className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">
                          {skill.name}
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="space-y-2">
                          <h4 className="font-medium">{skill.name}</h4>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {skill.description}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Projects Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
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
        </div>
      </div>
    </main>
  )
}
