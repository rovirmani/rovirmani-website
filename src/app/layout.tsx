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
  description: "Personal website and a collection of my thoughts",
  authors: [{ name: "Rohan Virmani" }],
  metadataBase: new URL("https://rovirmani.dev"),
  openGraph: {
    title: "Rohan Virmani",
    description: "Personal website and a collection of my thoughts",
    url: "https://rovirmani.dev",
    siteName: "Rohan Virmani",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Virmani",
    description: "Personal website and a collection of my thoughts",
  },
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
