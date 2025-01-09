'use client'

interface GradientWrapperProps {
  children: React.ReactNode;
}

export function GradientWrapper({ children }: GradientWrapperProps) {
  return (
    <main className="min-h-screen bg-gradient-to-r from-amber-50/80 to-rose-50/80 dark:from-blue-950 dark:to-green-950 pt-20">
      <div className="container px-4 mx-auto">
        {children}
      </div>
    </main>
  );
}
