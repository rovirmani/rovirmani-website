"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

function SpotifyWidget() {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="h-12 w-12 rounded-md bg-muted animate-pulse" />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-1">Currently listening to</p>
          <p className="text-sm font-medium truncate">Not connected yet</p>
          <p className="text-xs text-muted-foreground truncate">Connect Spotify to see what&apos;s playing</p>
        </div>
        <svg className="h-5 w-5 text-muted-foreground flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Hey, I&apos;m Rohan.
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I&apos;m a student at UC Berkeley studying Computer Science. I like building
          things that are useful, exploring new ideas, and occasionally writing about
          what I learn along the way.
        </p>
      </section>

      <section className="mb-16">
        <SpotifyWidget />
      </section>

      <section className="mb-16">
        <h2 className="text-lg font-semibold mb-4">Now</h2>
        <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
          <li>Building projects at the intersection of AI and software systems</li>
          <li>Taking courses in systems, security, and probability</li>
          <li>Exploring prediction markets and quantitative strategies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Recent</h2>
        <div className="space-y-4">
          <Link href="/projects" className="group block">
            <p className="text-sm font-medium group-hover:text-foreground transition-colors">
              Projects &rarr;
            </p>
            <p className="text-sm text-muted-foreground">
              Things I&apos;ve built recently
            </p>
          </Link>
          <Link href="/writing" className="group block">
            <p className="text-sm font-medium group-hover:text-foreground transition-colors">
              Writing &rarr;
            </p>
            <p className="text-sm text-muted-foreground">
              Thoughts and notes on things I find interesting
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}
