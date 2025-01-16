'use client'

import { SocialLinks } from "@/components/shared/social-links"

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
      <div className="container flex items-center justify-center h-16 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Built with{" "}
          <a 
            href="https://nextjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Next.js
          </a>
          ,{" "}
          <a 
            href="https://tailwindcss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Tailwind
          </a>
          , and{" "}
          <a 
            href="https://ui.shadcn.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            shadcn/ui
          </a>
          .{" "}
          <a 
            href="https://github.com/rovirmani/rovirmani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Source code
          </a>
        </p>
      </div>
    </footer>
  )
}
