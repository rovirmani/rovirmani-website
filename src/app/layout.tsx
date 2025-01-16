import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import MainNav from "@/components/layout/nav"
import Footer from "@/components/layout/footer"
import BackToTop from "@/components/layout/back-to-top"
import Providers from "@/components/layout/providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rohan Virmani",
  description: "Personal website and digital garden",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Providers>
          <MainNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
