'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { type ButtonProps } from "@/components/ui/button"

type CommandMenuProps = ButtonProps

export function CommandMenu({ className, ...props }: CommandMenuProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "relative h-9 w-[320px] flex items-center justify-between px-3 text-sm text-muted-foreground",
          className
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span>Search</span>
        </div>
        <div className="flex items-center border rounded h-5 px-1.5 text-[10px] bg-muted">⌘K</div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="max-h-[300px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/"))
              }}
            >
              Home
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/notes"))
              }}
            >
              Notes
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/projects"))
              }}
            >
              Projects
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("https://github.com/rovirmani", "_blank"))
              }}
            >
              GitHub
              <CommandShortcut>⌘G</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("https://linkedin.com/in/rohan-virmani", "_blank"))
              }}
            >
              LinkedIn
              <CommandShortcut>⌘L</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
