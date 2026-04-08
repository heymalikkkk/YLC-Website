import {
  Plane,
  Ship,
  FileCheck,
  Truck,
  Anchor,
  Package,
  Home,
  Warehouse,
  MapPin,
  Box,
  Wrench,
  Container,
} from "lucide-react"

export const services = [
  {
    id: "air-freight",
    title: "Air Freight",
    icon: Plane,
    shortDescription: "Fast and reliable air cargo solutions for time-sensitive shipments worldwide.",
    description: "Our air freight services provide fast, reliable transportation for time-sensitive cargo. With partnerships with major airlines and access to global routes, we ensure your shipments arrive on time, every time. From small packages to oversized cargo, we handle it all with precision and care.",
    benefits: [
      "Express delivery options for urgent shipments",
      "Real-time tracking and monitoring",
      "Customs clearance assistance",
      "Temperature-controlled options available",
      "Door-to-airport and airport-to-airport services",
      "Competitive rates with major carriers"
    ]
  },
  {
    id: "sea-freight",
    title: "Sea Freight",
    icon: Ship,
    shortDescription: "Cost-effective ocean shipping for large volume cargo with global coverage.",
    description: "Our sea freight solutions offer cost-effective shipping for large volumes of cargo. Whether you need FCL (Full Container Load) or LCL (Less than Container Load) services, we provide flexible options to meet your needs with extensive port coverage worldwide.",
    benefits: [
      "FCL and LCL shipping options",
      "Competitive ocean freight rates",
      "Global port coverage",
      "Container tracking services",
      "Hazardous cargo handling",
      "Refrigerated container services"
    ]
  },
  {
    id: "customs-brokerage",
    title: "Customs Brokerage",
    icon: FileCheck,
    shortDescription: "Expert customs clearance and compliance services for seamless international trade.",
    description: "Navigate complex customs regulations with ease. Our licensed customs brokers ensure smooth clearance for your imports and exports, minimizing delays and ensuring full compliance with Philippine and international trade regulations.",
    benefits: [
      "Licensed customs broker services",
      "Import and export documentation",
      "Tariff classification assistance",
      "Duty optimization strategies",
      "Compliance consulting",
      "24/7 customs clearance support"
    ]
  },
  {
    id: "trucking",
    title: "Trucking",
    icon: Truck,
    shortDescription: "Reliable ground transportation network covering local and regional routes.",
    description: "Our trucking services provide reliable ground transportation throughout the Philippines and beyond. From local deliveries to long-haul transport, our modern fleet and experienced drivers ensure your cargo reaches its destination safely and on time.",
    benefits: [
      "Modern fleet with GPS tracking",
      "Local and long-haul options",
      "Flexible scheduling",
      "Various truck sizes available",
      "Real-time delivery updates",
      "Experienced and trained drivers"
    ]
  },
  {
    id: "nvocc-agent",
    title: "NVOCC Agent",
    icon: Anchor,
    shortDescription: "Non-Vessel Operating Common Carrier services for ocean freight consolidation.",
    description: "As an NVOCC agent, we provide comprehensive ocean freight consolidation services. We act as carriers without operating vessels, offering competitive rates and flexible scheduling for your shipping needs.",
    benefits: [
      "Consolidation services",
      "Competitive container rates",
      "Flexible booking options",
      "Multi-port coverage",
      "Documentation handling",
      "Cargo insurance options"
    ]
  },
  {
    id: "cargo-consolidation",
    title: "Cargo Consolidation",
    icon: Package,
    shortDescription: "Efficient cargo grouping services to optimize shipping costs and efficiency.",
    description: "Maximize efficiency and reduce costs with our cargo consolidation services. We group multiple smaller shipments into single containers, optimizing space utilization and reducing per-unit shipping costs.",
    benefits: [
      "Cost savings through shared shipping",
      "Regular consolidation schedules",
      "Multiple origin point collection",
      "Secure cargo handling",
      "Transparent pricing",
      "Quality control inspections"
    ]
  },
  {
    id: "door-to-door",
    title: "Door-to-Door",
    icon: Home,
    shortDescription: "Complete logistics solutions from origin to final destination.",
    description: "Our door-to-door service provides complete logistics solutions from pickup at origin to delivery at destination. We handle every aspect of transportation, customs, and local delivery, giving you peace of mind.",
    benefits: [
      "Single point of contact",
      "End-to-end visibility",
      "All-inclusive pricing options",
      "Time-definite delivery",
      "Signature confirmation",
      "Insurance coverage included"
    ]
  },
  {
    id: "warehousing",
    title: "Warehousing",
    icon: Warehouse,
    shortDescription: "Secure storage facilities with inventory management solutions.",
    description: "Our modern warehouse facilities provide secure storage for your goods with comprehensive inventory management. From short-term storage to long-term distribution center solutions, we keep your products safe and accessible.",
    benefits: [
      "Climate-controlled storage",
      "24/7 security monitoring",
      "Inventory management systems",
      "Pick and pack services",
      "Cross-docking capabilities",
      "Bonded warehouse facilities"
    ]
  },
  {
    id: "pick-up-delivery",
    title: "Pick-up & Delivery",
    icon: MapPin,
    shortDescription: "Flexible collection and delivery services for your convenience.",
    description: "Our pick-up and delivery services offer flexible collection and delivery options tailored to your schedule. Whether you need same-day service or scheduled pickups, we accommodate your logistics needs.",
    benefits: [
      "Same-day pickup options",
      "Scheduled collection services",
      "Proof of delivery",
      "SMS/Email notifications",
      "Time-window deliveries",
      "Special handling available"
    ]
  },
  {
    id: "packing-crating",
    title: "Packing & Crating",
    icon: Box,
    shortDescription: "Professional packaging solutions for safe cargo transportation.",
    description: "Protect your valuable cargo with our professional packing and crating services. We use high-quality materials and proven techniques to ensure your goods arrive at their destination in perfect condition.",
    benefits: [
      "Custom crating solutions",
      "Export-grade packaging",
      "Fragile item specialists",
      "Heat-treated wood pallets",
      "Foam and cushioning systems",
      "Repackaging services"
    ]
  },
  {
    id: "project-cargo",
    title: "Project Cargo Handling",
    icon: Wrench,
    shortDescription: "Specialized handling for oversized and heavy-lift cargo projects.",
    description: "Handle complex logistics projects with our specialized project cargo services. We manage oversized, heavy-lift, and out-of-gauge cargo with precision engineering and careful planning.",
    benefits: [
      "Heavy-lift capabilities",
      "Route surveys and planning",
      "Specialized equipment",
      "Engineering consultations",
      "Multi-modal transport coordination",
      "Risk assessment services"
    ]
  },
  {
    id: "stripping-stuffing",
    title: "Stripping & Stuffing",
    icon: Container,
    shortDescription: "Expert container loading and unloading services for optimal cargo handling.",
    description: "Our stripping and stuffing services ensure efficient loading and unloading of containers. Our trained teams maximize container utilization while protecting your cargo during handling.",
    benefits: [
      "Efficient container loading",
      "Cargo inspection services",
      "Lashing and securing",
      "Weight distribution optimization",
      "Photographic documentation",
      "Damage prevention measures"
    ]
  }
]

export type Service = typeof services[number]
