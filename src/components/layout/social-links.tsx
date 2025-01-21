'use client'

import { Button } from "@/components/ui/button"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import XIcon from '@mui/icons-material/X'
import Link from "next/link"
import type { SVGProps } from 'react'

const SOCIAL_LINKS = [
  {
    href: "https://github.com/rovirmani",
    icon: GitHubIcon,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/rohan-virmani",
    icon: LinkedInIcon,
    label: "LinkedIn"
  },
  {
    href: "https://x.com/rovirmani",
    icon: XIcon,
    label: "X (Twitter)"
  },
  {
    href: "mailto:ro.han@berkeley.edu",
    icon: EmailIcon,
    label: "Email"
  }
] as const;

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <Button key={href} asChild variant="outline" size="icon">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="h-5 w-5" sx={{ fontSize: 'inherit' }} />
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
