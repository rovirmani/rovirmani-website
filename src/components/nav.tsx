"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

function MainNav() {
  const pathname = usePathname()
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/notes",
      label: "Notes",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-50/80 to-green-50/80 backdrop-blur-sm border-b">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-center">
          <div className="flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href ? "text-black" : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
