"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const shipmentTypes = [
  { value: "air", label: "Air Freight" },
  { value: "sea", label: "Sea Freight" },
  { value: "land", label: "Land/Trucking" },
  { value: "multimodal", label: "Multimodal" },
]

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Quote Request Submitted!
        </h3>
        <p className="mb-2 text-muted-foreground">
          Thank you for your request. Our team will review your shipment details and
          provide a competitive quote within 24 hours.
        </p>
        <p className="text-sm text-muted-foreground">
          {"We'll"} contact you at the email address you provided.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Contact Information */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Contact Information
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              required
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+63 XXX XXX XXXX"
              className="bg-background"
            />
          </div>
        </div>
      </div>

      {/* Shipment Details */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Shipment Details
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="shipmentType">Shipment Type *</Label>
            <Select name="shipmentType" required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {shipmentTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="incoterms">Incoterms</Label>
            <Select name="incoterms">
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exw">EXW - Ex Works</SelectItem>
                <SelectItem value="fob">FOB - Free On Board</SelectItem>
                <SelectItem value="cif">CIF - Cost, Insurance & Freight</SelectItem>
                <SelectItem value="ddp">DDP - Delivered Duty Paid</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="origin">Origin *</Label>
            <Input
              id="origin"
              name="origin"
              placeholder="City, Country"
              required
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="destination">Destination *</Label>
            <Input
              id="destination"
              name="destination"
              placeholder="City, Country"
              required
              className="bg-background"
            />
          </div>
        </div>
      </div>

      {/* Cargo Information */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Cargo Information
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              placeholder="e.g., 500"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="volume">Volume (CBM)</Label>
            <Input
              id="volume"
              name="volume"
              type="number"
              placeholder="e.g., 2.5"
              step="0.1"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pieces">Number of Pieces</Label>
            <Input
              id="pieces"
              name="pieces"
              type="number"
              placeholder="e.g., 10"
              className="bg-background"
            />
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="cargoDetails">Cargo Description & Additional Details</Label>
        <Textarea
          id="cargoDetails"
          name="cargoDetails"
          placeholder="Describe your cargo, special handling requirements, preferred shipping dates, or any other relevant information..."
          rows={4}
          className="resize-none bg-background"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="gap-2 bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            Submitting...
          </>
        ) : (
          <>
            Submit Quote Request
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        By submitting this form, you agree to be contacted by our team regarding your quote request.
      </p>
    </form>
  )
}
