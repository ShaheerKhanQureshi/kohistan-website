import type React from "react"
import "@/app/globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Rent a Car in Karachi, Lahore, Islamabad | Kohistan Traders Pakistan",
  description:
    "Trusted Rent a Car Service in Pakistan for 10+ years. Wide range of vehicles with/without drivers. Book daily, weekly, monthly, or yearly. Wedding & Tour options available.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kohistan Traders - Rent a Car Service Pakistan" />
        <meta
          property="og:description"
          content="Trusted car rental service across Pakistan. Economy to luxury vehicles, with or without driver."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kohistantraders.com" />
        <meta property="og:image" content="https://kohistantraders.com/og-image.jpg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
