import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatWidget } from "@/components/ai-chat-widget"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "Yokka Logistics Corp. | Global Freight Forwarding & Logistics",
    template: "%s | Yokka Logistics Corp.",
  },
  description:
    "Yokka Logistics Corp. is an emerging international freight forwarding and brokerage company based in the Philippines. We provide total logistics solutions worldwide.",
  keywords: [
    "freight forwarding",
    "logistics",
    "customs brokerage",
    "air freight",
    "sea freight",
    "trucking",
    "Philippines logistics",
    "international shipping",
  ],
  authors: [{ name: "Yokka Logistics Corp." }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Yokka Logistics Corp.",
    title: "Yokka Logistics Corp. | Global Freight Forwarding & Logistics",
    description:
      "Your trusted partner for comprehensive logistics solutions worldwide.",
  },
}

export const viewport: Viewport = {
  themeColor: "#FF3029",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AIChatWidget />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
