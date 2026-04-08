import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Globe,
  Eye,
  Target,
  Users,
  Shield,
  Lightbulb,
  Heart,
  Award,
  HandHelping,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about YOKKA Logistics Corp., our vision, mission, and core values that drive us to deliver excellence in global logistics.",
}

const coreValues = [
  {
    icon: Globe,
    title: "Global Collaboration",
    description:
      "We foster partnerships across borders, connecting businesses to opportunities worldwide through our extensive network.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "We believe in open communication and honest dealings, keeping our clients informed at every step of their logistics journey.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously seek new ways to improve our services, embracing technology and modern solutions to enhance efficiency.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Service Excellence",
    description:
      "We are committed to delivering the highest quality of service, setting industry standards through our dedication and expertise.",
  },
  {
    icon: HandHelping,
    title: "Social Responsibility",
    description:
      "We recognize our role in the community and strive to conduct business in an environmentally and socially responsible manner.",
  },
]

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "50+", label: "Countries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "10K+", label: "Shipments Delivered" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About YOKKA
            </span>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
              Your Trusted Global{" "}
              <span className="text-primary">Logistics Partner</span>
            </h1>
            <p className="text-pretty text-lg text-secondary-foreground/70">
              YOKKA is an emerging international freight forwarding and brokerage company
              based in the Philippines. We provide total logistics solutions worldwide
              and aim to be at the forefront of global logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Building Strong Partnerships Through Excellence
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                We build strong partnerships through transparency, efficiency, and service
                excellence, supported by a vast global network. Our commitment to
                delivering comprehensive and specialized solutions sets us apart in the
                logistics industry.
              </p>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                With years of experience in freight forwarding, customs brokerage, and
                logistics management, we have developed the expertise and infrastructure
                needed to handle any logistics challenge. Our team of dedicated
                professionals works tirelessly to ensure your cargo reaches its
                destination safely and on time.
              </p>
              <div className="pt-4">
                <Link href="/services">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    Explore Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    index === 0 || index === 3
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p
                    className={`mt-1 text-sm ${
                      index === 0 || index === 3
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <Card className="border-none bg-card shadow-lg">
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Eye className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-card-foreground">
                    Our Vision
                  </h2>
                  <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                    To be the leading global logistics partner delivering comprehensive
                    and specialized solutions. We envision a world where logistics is
                    seamless, efficient, and accessible to businesses of all sizes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-none bg-secondary shadow-lg">
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">
                    Our Mission
                  </h2>
                  <p className="text-pretty text-lg leading-relaxed text-secondary-foreground/70">
                    Empower businesses through efficient logistics, global connections,
                    and a customer-centric approach. We are committed to simplifying
                    complex supply chains and delivering value at every touchpoint.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Values
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Core Values That Define Us
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our values guide every decision we make and every service we provide,
              ensuring we deliver excellence in everything we do.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
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
              Ready to Partner with Us?
            </h2>
            <p className="mb-8 text-secondary-foreground/70">
              Experience the YOKKA difference. Let us handle your logistics needs while
              you focus on growing your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Get a Quote
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
