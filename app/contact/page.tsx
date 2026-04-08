import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with YOKKA Logistics Corp. Contact us for inquiries, quotes, or any logistics-related questions.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Unit 5, 9/F, 68 Sky 1 Tower", "Dasmariñas St., Manila", "Philippines"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(02) 8244-6734"],
    link: "tel:+6328244-6734",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["admin@yokka.com.ph"],
    link: "mailto:admin@yokka.com.ph",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM"],
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,48,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,48,41,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Contact Us
            </span>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
              {"Let's Connect"}
            </h1>
            <p className="text-pretty text-lg text-secondary-foreground/70">
              Have questions about our services? Need a quote? {"We're"} here to help.
              Reach out to us and {"we'll"} get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                  Get in Touch
                </h2>
                <p className="text-pretty text-muted-foreground">
                  Our team is ready to assist you with any inquiries. Feel free to
                  contact us through any of the following channels or use the form to
                  send us a message.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.title} className="border-border/50 bg-card">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-card-foreground">
                            {item.title}
                          </h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-sm text-muted-foreground transition-colors hover:text-primary"
                            >
                              {item.details.join(", ")}
                            </a>
                          ) : (
                            <div className="text-sm text-muted-foreground">
                              {item.details.map((detail, index) => (
                                <p key={index}>{detail}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-muted-foreground/30" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="mb-6 text-xl font-bold text-card-foreground">
                    Send us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
