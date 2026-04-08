import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Yokka Logistics Corp.'s comprehensive logistics services including air freight, sea freight, customs brokerage, trucking, and more.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/services-bg.jpg"
            alt="Logistics operations center"
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
              Our Services
            </span>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
              Comprehensive Logistics{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-pretty text-lg text-secondary-foreground/70">
              From air and sea freight to customs brokerage and warehousing, we offer
              end-to-end logistics services tailored to meet your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <Card className="group h-full cursor-pointer border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="mb-2 text-lg font-semibold text-card-foreground">
                          {service.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {service.shortDescription}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Need a Custom Solution?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Our logistics experts are ready to design a tailored solution for your
              specific requirements. Get in touch with us today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
