"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Yokka Logistics Corp."
            width={50}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-foreground">YOKKA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/ai-agent">
            <Button variant="ghost" size="sm">
              AI Assistant
            </Button>
          </Link>
          <Link href="/quote">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Yokka Logistics Corp."
                  width={50}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xl font-bold tracking-tight text-foreground">YOKKA</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/ai-agent" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    AI Assistant
                  </Button>
                </Link>
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
