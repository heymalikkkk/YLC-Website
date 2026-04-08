import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Store,
  Factory,
  ShoppingCart,
  Boxes,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "Tailored logistics solutions for retail, manufacturing, e-commerce, and distribution industries.",
}

const industries = [
  {
    id: "retail",
    title: "Retail",
    icon: Store,
    description:
      "Streamline your retail supply chain with our comprehensive logistics solutions. We help retailers manage inventory efficiently, reduce costs, and ensure products reach stores on time.",
    features: [
      "Multi-channel fulfillment",
      "Inventory management",
      "Last-mile delivery solutions",
      "Returns processing",
      "Seasonal demand handling",
      "Store replenishment services",
    ],
    image: "retail",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Keep your production lines running smoothly with reliable supply chain management. Our manufacturing logistics solutions ensure just-in-time delivery of raw materials and components.",
    features: [
      "Just-in-time delivery",
      "Raw material sourcing",
      "Production line supply",
      "Quality control checkpoints",
      "Vendor managed inventory",
      "Cross-border manufacturing support",
    ],
    image: "manufacturing",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingCart,
    description:
      "Scale your online business with flexible e-commerce logistics. From warehousing to last-mile delivery, we provide end-to-end solutions for online retailers.",
    features: [
      "Order fulfillment services",
      "Same-day delivery options",
      "Real-time tracking integration",
      "Return management",
      "Multi-marketplace support",
      "International shipping",
    ],
    image: "ecommerce",
  },
  {
    id: "distribution",
    title: "Distribution",
    icon: Boxes,
    description:
      "Optimize your distribution network with our strategic logistics solutions. We help distributors reach more customers efficiently while reducing operational costs.",
    features: [
      "Network optimization",
      "Cross-docking services",
      "Regional distribution",
      "Temperature-controlled logistics",
      "Bulk shipping solutions",
      "Distribution center management",
    ],
    image: "distribution",
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions-bg.jpg"
            alt="Shipping port at dusk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/95" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Industry Solutions
            </span>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
              Tailored Solutions for{" "}
              <span className="text-primary">Every Industry</span>
            </h1>
            <p className="text-pretty text-lg text-secondary-foreground/70">
              We understand that different industries have unique logistics challenges.
              Our specialized solutions are designed to address the specific needs of
              your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-24">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const isReversed = index % 2 !== 0

              return (
                <div
                  key={industry.id}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex flex-col gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      {industry.title}
                    </h2>
                    <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link href="/quote">
                        <Button className="gap-2 bg-primary hover:bg-primary/90">
                          Get a Quote
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                          <Icon className="h-16 w-16 text-primary" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight text-secondary-foreground sm:text-3xl">
              {"Don't See Your Industry?"}
            </h2>
            <p className="mb-8 text-secondary-foreground/70">
              We serve businesses across all sectors. Contact us to discuss how we can
              create a custom logistics solution for your industry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/ai-agent">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  Talk to AI Agent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
