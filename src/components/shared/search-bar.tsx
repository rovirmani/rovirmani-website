'use client'

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface SearchBarProps {
  className?: string
}

export function SearchBar({ className }: SearchBarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  return (
    <form 
      onSubmit={handleSearch}
      className={cn("relative", className)}
    >
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="h-9 w-[320px] pl-9"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center border border-input rounded h-6 min-w-[32px] bg-background text-xs leading-none pt-[1px] text-muted-foreground">
        ⌘K
      </div>
    </form>
  )
}
