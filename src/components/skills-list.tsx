'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface Skill {
  name: string;
  description: string;
}

const SKILLS: Skill[] = [
  { name: "TypeScript", description: "Building type-safe applications" },
  { name: "React", description: "Creating interactive user interfaces" },
  { name: "Next.js", description: "Full-stack React applications" },
  { name: "Node.js", description: "Backend development" },
  { name: "Python", description: "Data analysis and automation" },
];

export function SkillsList() {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
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
  );
}
