"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme"

function MainNav() {
  const pathname = usePathname()
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/writing",
      label: "Writing",
    },
    {
      href: "/notes",
      label: "Notes",
    },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Navigation Links */}
          <div className="flex-1" /> {/* Left spacer */}
          <div className="flex justify-center space-x-12">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href 
                    ? "text-black dark:text-white" 
                    : "text-muted-foreground dark:text-gray-400"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
