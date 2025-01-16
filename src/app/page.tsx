"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientWrapper } from "@/components/layout/gradient-wrapper"
import { SocialLinks } from "@/components/shared/social-links"
import { SkillsList } from "@/components/features/skills/skills-list"
import { ProjectsGrid } from "@/components/features/projects/projects-grid"

export default function Home() {
  return (
    <GradientWrapper>
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
          Hey, I'm Rohan 
        </h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 mb-8">
          I'm a student at UC Berkeley studying Computer Science.
        </p>
        <SocialLinks />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="about" className="max-w-3xl mx-auto mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger 
            value="about"
            className="transition-all duration-200 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
          >
            About
          </TabsTrigger>
          <TabsTrigger 
            value="experience"
            className="transition-all duration-200 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger 
            value="skills"
            className="transition-all duration-200 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900 dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
          >
            Skills
          </TabsTrigger>
        </TabsList>
        
        <TabsContent 
          value="about"
          className="mt-6 space-y-6 animate-in slide-in-from-bottom duration-300"
        >
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

        <TabsContent 
          value="experience"
          className="mt-6 space-y-6 animate-in slide-in-from-bottom duration-300"
        >
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

        <TabsContent 
          value="skills"
          className="mt-6 space-y-6 animate-in slide-in-from-bottom duration-300"
        >
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
              <CardDescription>Tools and technologies I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <SkillsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </GradientWrapper>
  )
}
