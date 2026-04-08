"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Send, Bot, User, FileText, MessageSquare, HelpCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const quickPrompts = [
  {
    icon: FileText,
    label: "Get a Quote",
    prompt: "Get a Quote",
  },
  {
    icon: MessageSquare,
    label: "Track Shipment",
    prompt: "Track Shipment",
  },
  {
    icon: HelpCircle,
    label: "Ask Services",
    prompt: "Ask Services",
  },
]

const aiResponses: Record<string, string> = {
  "get a quote": `I'd be happy to help you get a quote! You can fill out our detailed quote form for a comprehensive quote, or tell me about your shipment requirements here:

**What I need to know:**
- What type of cargo are you shipping?
- Origin and destination locations?
- Approximate weight and volume?
- Preferred shipping mode (Air/Sea/Land)?

You can also go directly to our quote page for a detailed quote request.

[Get a Detailed Quote](/quote)`,

  "track shipment": `I apologize, but **shipment tracking is currently not available** through this chat interface.

To track your shipment, please contact our customer service team directly:

**Phone:** (02) 8244-6734
**Email:** admin@yokka.com.ph

Our team will be happy to provide you with real-time updates on your shipment status. Please have your tracking number or booking reference ready.

We're working on adding a self-service tracking feature soon!`,

  "ask services": `YOKKA offers comprehensive logistics solutions to meet all your shipping needs:

**Transportation Services:**
- **Air Freight** - Fast global delivery for time-sensitive cargo
- **Sea Freight** - Cost-effective ocean shipping (FCL/LCL)
- **Trucking** - Reliable ground transportation

**Specialized Services:**
- **Customs Brokerage** - Expert clearance and compliance
- **NVOCC Agent** - Ocean freight consolidation
- **Cargo Consolidation** - Optimize shipping costs

**Value-Added Services:**
- **Door-to-Door** - Complete logistics solutions
- **Warehousing** - Secure storage facilities
- **Packing & Crating** - Professional packaging
- **Project Cargo** - Heavy-lift and oversized cargo

Which service would you like to know more about?`,

  default: `Hello! I'm YOKKA's AI assistant, here to help with your logistics inquiries.

**I can help you with:**
- Getting shipping quotes
- Learning about our services
- General logistics questions
- Connecting you with our team

**Quick Actions:**
- Type "quote" to start a quote request
- Type "services" to see our full service list
- Type "contact" for our contact information

How can I assist you today?`,
}

function getAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate")) {
    return aiResponses["get a quote"]
  }
  if (lowerMessage.includes("track") || lowerMessage.includes("tracking") || lowerMessage.includes("shipment status") || lowerMessage.includes("where is my")) {
    return aiResponses["track shipment"]
  }
  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you") || lowerMessage.includes("what can you")) {
    return aiResponses["ask services"]
  }
  if (lowerMessage.includes("air") || lowerMessage.includes("flight") || lowerMessage.includes("plane")) {
    return `Our **Air Freight** service offers fast and reliable cargo transportation worldwide.

**Key Features:**
- Express delivery options for urgent shipments
- Real-time tracking and monitoring
- Temperature-controlled options available
- Door-to-airport and airport-to-airport services
- Partnerships with major airlines

Air freight is ideal for time-sensitive cargo, high-value goods, and perishables.

Would you like a quote for air freight? Just let me know your origin, destination, and cargo details!`
  }
  if (lowerMessage.includes("sea") || lowerMessage.includes("ocean") || lowerMessage.includes("ship") || lowerMessage.includes("container")) {
    return `Our **Sea Freight** service provides cost-effective ocean shipping for large volumes.

**Key Features:**
- FCL (Full Container Load) options
- LCL (Less than Container Load) consolidation
- Global port coverage
- Container tracking services
- Hazardous and refrigerated cargo handling

Sea freight is perfect for bulk shipments, heavy cargo, and non-urgent deliveries.

Would you like a sea freight quote? Tell me about your cargo and route!`
  }
  if (lowerMessage.includes("customs") || lowerMessage.includes("clearance") || lowerMessage.includes("import") || lowerMessage.includes("export")) {
    return `Our **Customs Brokerage** service ensures smooth clearance for your imports and exports.

**What We Offer:**
- Licensed customs broker services
- Import/export documentation
- Tariff classification assistance
- Duty optimization strategies
- Compliance consulting
- 24/7 customs clearance support

We navigate complex regulations so you don't have to worry about delays or compliance issues.

Need help with customs clearance? I can connect you with our experts!`
  }
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("good morning") || lowerMessage.includes("good afternoon")) {
    return `Hello! Welcome to YOKKA Logistics.

I'm your AI assistant, ready to help with:
- Shipping quotes and inquiries
- Service information
- General logistics questions

What can I help you with today?`
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("address") || lowerMessage.includes("location")) {
    return `You can reach YOKKA Logistics through:

**Address:**
Unit 5, 9/F, 68 Sky 1 Tower
Dasmariñas St., Manila, Philippines

**Phone:** (02) 8244-6734
**Email:** admin@yokka.com.ph

**Business Hours:**
Monday - Friday, 9:00 AM - 6:00 PM

Our team is ready to assist you with all your logistics needs!

[Visit Contact Page](/contact)`
  }
  if (lowerMessage.includes("warehouse") || lowerMessage.includes("storage")) {
    return `Our **Warehousing** services provide secure storage solutions.

**Facilities Include:**
- Climate-controlled storage
- 24/7 security monitoring
- Inventory management systems
- Pick and pack services
- Cross-docking capabilities
- Bonded warehouse facilities

We can handle short-term storage or long-term distribution needs. Would you like more details?`
  }
  if (lowerMessage.includes("truck") || lowerMessage.includes("delivery") || lowerMessage.includes("land")) {
    return `Our **Trucking** services cover local and regional ground transportation.

**Fleet Features:**
- Modern vehicles with GPS tracking
- Local and long-haul options
- Various truck sizes available
- Experienced and trained drivers
- Real-time delivery updates

We ensure your cargo reaches its destination safely and on time. Need trucking services?`
  }
  if (lowerMessage.includes("thank")) {
    return `You're welcome! Is there anything else I can help you with?

Remember, you can always:
- Request a quote at any time
- Ask about specific services
- Get our contact information

I'm here to assist!`
  }

  return aiResponses.default
}

export function AIAgentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hello! I'm YOKKA's AI assistant.

I can help you with:
- **Getting quotes** for your shipments
- **Learning about services** we offer
- **Answering questions** about logistics

Use the quick actions below or type your question to get started!`,
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (message?: string) => {
    const messageText = message || input.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(messageText),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Simple markdown rendering for links
  const renderContent = (content: string) => {
    // Handle links [text](/url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = content.split(linkRegex)
    
    const elements: React.ReactNode[] = []
    for (let i = 0; i < parts.length; i += 3) {
      if (parts[i]) {
        elements.push(<span key={`text-${i}`}>{parts[i]}</span>)
      }
      if (parts[i + 1] && parts[i + 2]) {
        elements.push(
          <Link
            key={`link-${i}`}
            href={parts[i + 2]}
            className="inline-flex items-center gap-1 text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {parts[i + 1]}
            <ArrowRight className="h-3 w-3" />
          </Link>
        )
      }
    }
    
    return elements.length > 0 ? elements : content
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-4",
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {message.role === "user" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-5 py-4",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {renderContent(message.content)}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl bg-muted px-5 py-4">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-background px-4 py-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Quick Prompts */}
          <div className="mb-4 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => {
              const Icon = prompt.icon
              return (
                <button
                  key={prompt.label}
                  onClick={() => handleSend(prompt.prompt)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {prompt.label}
                </button>
              )
            })}
          </div>

          {/* Input */}
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button
              onClick={() => handleSend()}
              size="lg"
              className="h-12 w-12 shrink-0 rounded-full p-0"
              disabled={!input.trim()}
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            This is a simulated AI assistant. For complex inquiries, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
