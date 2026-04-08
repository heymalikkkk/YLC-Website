import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react"
import { services } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServicePageProps {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.id,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: serviceId } = await params
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: serviceId } = await params
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  
  // Get related services (next 3 services, wrapping around)
  const currentIndex = services.findIndex((s) => s.id === serviceId)
  const relatedServices = [
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
    services[(currentIndex + 3) % services.length],
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
                {service.title}
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-secondary-foreground/70">
                {service.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/quote">
                <Button size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90 sm:w-auto">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/ai-agent">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 sm:w-auto"
                >
                  <MessageSquare className="h-4 w-4" />
                  Talk to AI Agent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Key Benefits
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Discover why businesses choose Yokka Logistics Corp. for their {service.title.toLowerCase()} needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-card-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Related Services
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Explore other logistics solutions that complement {service.title}.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon
              return (
                <Link key={related.id} href={`/services/${related.id}`}>
                  <Card className="group h-full cursor-pointer border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <RelatedIcon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                          {related.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {related.shortDescription}
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
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight text-secondary-foreground sm:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-secondary-foreground/70">
              Let us help you optimize your logistics with our {service.title.toLowerCase()} services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
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
