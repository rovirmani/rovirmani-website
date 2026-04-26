import Link from "next/link"

const projects = [
  {
    title: "Telegraph Polymarket",
    description: "Prediction market trading and analysis tools.",
    href: "https://github.com/rovirmani/telegraph-polymarket",
    tags: ["Python", "Trading"],
  },
  {
    title: "Kalshi Experiment",
    description: "Exploring event contract markets and strategies.",
    href: "https://github.com/rovirmani/kalshi-experiment",
    tags: ["Python", "Finance"],
  },
  {
    title: "Epic Shelter",
    description: "A project for finding and managing shelter resources.",
    href: "https://github.com/rovirmani/epic-shelter",
    tags: ["TypeScript", "Next.js"],
  },
  {
    title: "Sync Tasks",
    description: "Task synchronization across platforms.",
    href: "https://github.com/rovirmani/sync-tasks",
    tags: ["TypeScript"],
  },
  {
    title: "Hungry Monkey",
    description: "A fun side project.",
    href: "https://github.com/rovirmani/hungry-monkey",
    tags: ["JavaScript"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-muted-foreground mb-12">
        A collection of things I&apos;ve built. Some useful, some just for fun.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-sm font-medium group-hover:text-foreground transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0 mt-0.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
