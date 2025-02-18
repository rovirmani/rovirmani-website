'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

interface GradientWrapperProps {
  children: React.ReactNode;
}

function GradientWrapperComponent({ children }: GradientWrapperProps) {
  return (
    <main className="min-h-screen bg-gradient-to-r from-amber-50/80 to-rose-50/80 dark:from-blue-950 dark:to-green-950 pt-20">
      <div className="container px-4 mx-auto">
        {children}
      </div>
    </main>
  );
}

export const GradientWrapper = dynamic(() => Promise.resolve(GradientWrapperComponent), {
  ssr: false
});
