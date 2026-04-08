import type { Metadata } from "next"
import Link from "next/link"
import { MessageSquare, CheckCircle2 } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free quote for your shipping needs. Air freight, sea freight, trucking, and more.",
}

const benefits = [
  "Free, no-obligation quotes",
  "Response within 24 hours",
  "Competitive pricing",
  "Expert consultation",
  "Flexible solutions",
  "Dedicated support",
]

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Free Quote
            </span>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
              Get Your Shipping{" "}
              <span className="text-primary">Quote Today</span>
            </h1>
            <p className="text-pretty text-lg text-secondary-foreground/70">
              Tell us about your shipment and {"we'll"} provide you with a competitive
              quote tailored to your needs. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
                  Why Request a Quote?
                </h2>
                <ul className="mb-8 flex flex-col gap-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl bg-muted p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    Need Instant Help?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Chat with our AI assistant for quick answers to your logistics
                    questions.
                  </p>
                  <Link href="/ai-agent">
                    <Button variant="outline" className="w-full gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Talk to AI Agent
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="mb-6 text-xl font-bold text-card-foreground">
                    Shipment Details
                  </h2>
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
