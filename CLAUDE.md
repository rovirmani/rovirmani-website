# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 15 and React 19. Features a modern design with shadcn/ui components, MDX for content, Supabase authentication, particle animations, and Vercel Analytics. Currently on the `deepseek-refactor` branch.

## Tech Stack

- **Language**: TypeScript
- **Framework**: Next.js 15 + React 19
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Auth**: Supabase
- **Animations**: Framer Motion, @tsparticles
- **Analytics**: Vercel Analytics
- **Image Optimization**: Sharp
- **Theme**: next-themes (dark mode support)
- **Package Manager**: npm

## Project Structure

```
rovirmani/
├── package.json                 # Dependencies (Next.js 15, React 19, shadcn/ui)
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── components.json              # shadcn/ui component config
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint 9 flat config
├── .eslintrc.json               # ESLint TypeScript rules
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── (routes)/                # Additional pages
├── components/                  # React components
│   ├── ui/                      # shadcn/ui components
│   └── (custom)/                # Custom components
├── lib/                         # Utility functions
├── public/                      # Static assets
└── .github/workflows/
    └── claude.yml               # Claude Code Actions workflow
```

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev                      # http://localhost:3000

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Add shadcn/ui component
npx shadcn@latest add <component>
```

## Environment & Config

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>

# Vercel Analytics (auto-configured on Vercel)
```

- Store in `.env.local` (gitignored)
- Public vars use `NEXT_PUBLIC_` prefix

## Code Style & Standards

- **ESLint 9** flat config with TypeScript strict rules
- React hooks validation enabled
- Import ordering enforced
- TypeScript strict mode
- shadcn/ui conventions: components in `components/ui/`, customizable via Tailwind
- Tailwind CSS utility-first approach

## Architecture Notes

- Next.js 15 App Router with React Server Components
- shadcn/ui provides accessible, customizable UI primitives (not a component library -- copy-paste pattern)
- Supabase handles authentication and any backend data
- @tsparticles renders configurable particle animations
- Framer Motion provides page transitions and scroll animations
- Intersection Observer for lazy loading and scroll-triggered effects
- MDX for content pages (blog posts, project descriptions)
- Dark mode via next-themes with system preference detection

## Troubleshooting

- Build errors with React 19: Some packages may not yet support React 19 -- check peer dependencies
- shadcn/ui component errors: Ensure `components.json` paths match project structure
- Supabase auth issues: Verify environment variables in `.env.local`
- Tailwind not applying: Check `tailwind.config.ts` content paths include all component directories
- Note: GitHub reports dependency vulnerabilities -- run `npm audit` to review
