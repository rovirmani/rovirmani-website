'use client'

import { Button } from "@/components/ui/button"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import XIcon from '@mui/icons-material/X'
import Link from "next/link"

const SOCIAL_LINKS = [
  {
    href: "https://github.com/rovirmani",
    icon: GitHubIcon,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/rohanvirmani",
    icon: LinkedInIcon,
    label: "LinkedIn"
  },
  {
    href: "https://x.com/rovirmani",
    icon: XIcon,
    label: "X (X (Twitter))"
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
            <Icon className="w-5 h-5" />
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
