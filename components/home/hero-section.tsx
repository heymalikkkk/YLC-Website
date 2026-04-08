"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Shield, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const heroImages = [
  {
    src: "/images/hero-shipping.jpg",
    alt: "Container ship sailing across the ocean at sunset",
  },
  {
    src: "/images/hero-airfreight.jpg",
    alt: "Cargo airplane flying above the clouds",
  },
  {
    src: "/images/hero-warehouse.jpg",
    alt: "Modern logistics warehouse with organized inventory",
  },
  {
    src: "/images/hero-global.jpg",
    alt: "Global shipping network visualization",
  },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Global Logistics Partner
              </span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
              Delivering Excellence{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Worldwide
              </span>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-secondary-foreground/80">
              YOKKA is an emerging international freight forwarding and brokerage company 
              based in the Philippines. We provide total logistics solutions worldwide and 
              aim to be at the forefront of global logistics.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/quote">
                <Button size="lg" className="group gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/ai-agent">
                <Button size="lg" variant="outline" className="gap-2 border-secondary-foreground/30 bg-secondary-foreground/5 text-secondary-foreground backdrop-blur-sm hover:bg-secondary-foreground/10">
                  <Play className="h-4 w-4" />
                  Talk to AI Agent
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-secondary-foreground/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-secondary-foreground/60">Countries Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-secondary-foreground/60">Shipments Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99%</p>
                <p className="text-sm text-secondary-foreground/60">On-Time Delivery</p>
              </div>
            </div>
          </div>

          {/* Feature Cards - Right Side */}
          <div className="relative hidden lg:flex lg:flex-col lg:gap-4">
            {/* Image Indicator Dots */}
            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImage
                      ? "w-8 bg-primary"
                      : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Floating Cards */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-secondary-foreground">Secure Shipping</p>
                  <p className="text-sm text-secondary-foreground/60">End-to-end cargo protection</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-secondary-foreground">Fast Delivery</p>
                  <p className="text-sm text-secondary-foreground/60">Express air & sea freight</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-secondary-foreground">24/7 Support</p>
                  <p className="text-sm text-secondary-foreground/60">Global customer assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
