'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>Rohan Virmani</p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/rovirmani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/rohan-virmani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/rovirmani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              X
            </Link>
            <Link
              href="mailto:ro.han@berkeley.edu"
              className="hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
