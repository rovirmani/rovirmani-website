import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import MainNav from "@/components/layout/nav"
import Footer from "@/components/layout/footer"
import Providers from "@/components/layout/providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rohan Virmani",
  description: "Software engineer, builder, student at UC Berkeley.",
  authors: [{ name: "Rohan Virmani" }],
  metadataBase: new URL("https://rovirmani.dev"),
  openGraph: {
    title: "Rohan Virmani",
    description: "Software engineer, builder, student at UC Berkeley.",
    url: "https://rovirmani.dev",
    siteName: "Rohan Virmani",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Virmani",
    description: "Software engineer, builder, student at UC Berkeley.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <Providers>
          <MainNav />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
