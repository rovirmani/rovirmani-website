"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme"

function MainNav() {
  const pathname = usePathname()
  const routes = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/writing", label: "Writing" },
    { href: "/notes", label: "Notes" },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex h-14 items-center justify-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === route.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default MainNav
