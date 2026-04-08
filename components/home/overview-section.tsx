import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Global network spanning 50+ countries",
  "24/7 customer support and tracking",
  "Licensed customs brokerage services",
  "Competitive rates and flexible solutions",
]

export function OverviewSection() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="inline-block w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About YOKKA
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Trusted Global{" "}
              <span className="text-primary">Logistics Partner</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              We build strong partnerships through transparency, efficiency, and service 
              excellence, supported by a vast global network. Our commitment to delivering 
              comprehensive and specialized solutions sets us apart in the logistics industry.
            </p>
            
            <ul className="flex flex-col gap-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" className="group gap-2 bg-primary hover:bg-primary/90">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-secondary p-6">
                  <p className="text-4xl font-bold text-primary">12+</p>
                  <p className="mt-1 text-sm text-secondary-foreground/70">Years of Excellence</p>
                </div>
                <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                  <p className="text-4xl font-bold">500+</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">Happy Clients</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="rounded-2xl bg-card border border-border p-6">
                  <p className="text-4xl font-bold text-foreground">24/7</p>
                  <p className="mt-1 text-sm text-muted-foreground">Support Available</p>
                </div>
                <div className="rounded-2xl bg-secondary p-6">
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="mt-1 text-sm text-secondary-foreground/70">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
