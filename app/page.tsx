import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { OverviewSection } from "@/components/home/overview-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <OverviewSection />
      <CTASection />
    </>
  )
}
