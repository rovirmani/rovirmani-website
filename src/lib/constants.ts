// Navigation
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/notes', label: 'Notes' }
] as const;

// Social Links Configuration
export const SOCIAL_LINKS = [
  {
    href: "https://github.com/rovirmani",
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/rohan-virmani",
    label: "LinkedIn"
  }
] as const;

// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: 'system',
  storageKey: 'theme',
} as const;

// Feature Flags
export const FEATURES = {
  enableBlog: false,
  enablePortfolio: true,
  enableNotes: true,
} as const;
