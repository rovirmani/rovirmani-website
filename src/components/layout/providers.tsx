'use client'

import { ThemeProvider } from "@/components/theme"
import { motion, AnimatePresence } from "framer-motion"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
