import Link from "next/link"
import { ArrowRight, Play, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
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

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-secondary-foreground/70">
              YOKKA is an emerging international freight forwarding and brokerage company 
              based in the Philippines. We provide total logistics solutions worldwide and 
              aim to be at the forefront of global logistics.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/quote">
                <Button size="lg" className="group gap-2 bg-primary hover:bg-primary/90">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/ai-agent">
                <Button size="lg" variant="outline" className="gap-2 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
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

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" style={{ animationDuration: "60s" }} />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm" />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30">
                  <Globe className="h-16 w-16" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Secure</p>
                  <p className="text-sm text-muted-foreground">Shipping</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Fast</p>
                  <p className="text-sm text-muted-foreground">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
