import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Get Started Today
          </span>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
            Ready to Streamline Your{" "}
            <span className="text-primary">Logistics?</span>
          </h2>
          <p className="mb-8 text-pretty text-lg text-secondary-foreground/70">
            Whether you need a quick quote or want to discuss your logistics requirements 
            with our AI assistant, we are here to help you find the perfect solution.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote">
              <Button size="lg" className="group w-full gap-2 bg-primary hover:bg-primary/90 sm:w-auto">
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/ai-agent">
              <Button size="lg" variant="outline" className="w-full gap-2 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 sm:w-auto">
                <MessageSquare className="h-4 w-4" />
                Chat with AI Agent
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-secondary-foreground/50">
            No commitment required. Get your quote in minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
