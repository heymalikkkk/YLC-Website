import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredServices = services.slice(0, 6)

export function ServicesPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Logistics Solutions
          </h2>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            From air and sea freight to customs brokerage and warehousing, we offer
            end-to-end logistics services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Card className="group h-full cursor-pointer border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                        {service.title}
                      </h3>
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

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/services">
            <Button size="lg" variant="outline" className="gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
