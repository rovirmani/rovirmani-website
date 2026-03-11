import Link from "next/link"
import { courses } from "@/data/courses"

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Notes</h1>
      <p className="text-muted-foreground mb-12">
        Course and book notes from things I&apos;ve studied.
      </p>

      <div className="space-y-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/notes/${course.id}`}
            className="group block"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-sm font-medium group-hover:text-foreground transition-colors">
                  {course.shortTitle}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {course.description}
                </p>
                {course.authors && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {course.authors.join(", ")}
                  </p>
                )}
              </div>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                {course.type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
