import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { LenisProvider } from "@/components/lenis-provider"
import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Brain.2 - Personal AI Agent",
  description: "A secure, personalized ambient AI agent that continuously monitors your context, extracts deep intents, and autonomously executes tasks on your behalf.",
  keywords: ["AI", "Ambient Agent", "Automation", "Productivity", "Second Brain", "Autonomous OS"],
  openGraph: {
    title: "Brain.2 - Your Personal AI Agent",
    description: "Secure, ambient intelligence that works for you.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brain.2 Ambient AI Agent Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain.2 - Your Personal AI Agent",
    description: "Secure, ambient intelligence that works for you.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", fontSans.variable, "dark")}
    >
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
