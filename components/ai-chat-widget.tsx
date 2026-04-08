"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const quickPrompts = [
  "Get a Quote",
  "Track Shipment",
  "Ask Services",
]

const aiResponses: Record<string, string> = {
  "get a quote": "I'd be happy to help you get a quote! You can fill out our quote form at /quote, or tell me about your shipment requirements:\n\n- What type of cargo are you shipping?\n- Origin and destination?\n- Approximate weight/volume?\n\nI'll help guide you through the process!",
  "track shipment": "I apologize, but shipment tracking is currently not available through this chat interface. Please contact our customer service team directly at (02) 8244-6734 or email admin@yokka.com.ph with your tracking number for shipment status updates.\n\nWe're working on adding this feature soon!",
  "ask services": "YOKKA offers comprehensive logistics solutions:\n\n✈️ **Air Freight** - Fast global delivery\n🚢 **Sea Freight** - Cost-effective ocean shipping\n📋 **Customs Brokerage** - Expert clearance\n🚛 **Trucking** - Reliable ground transport\n⚓ **NVOCC Agent** - Consolidation services\n📦 **Cargo Consolidation** - Optimize costs\n🏠 **Door-to-Door** - Complete solutions\n🏭 **Warehousing** - Secure storage\n\nWhich service would you like to know more about?",
  default: "Thank you for your message! I'm YOKKA's AI assistant, here to help with your logistics inquiries.\n\nI can help you with:\n- Getting a shipping quote\n- Learning about our services\n- General logistics questions\n\nHow can I assist you today?",
}

function getAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return aiResponses["get a quote"]
  }
  if (lowerMessage.includes("track") || lowerMessage.includes("tracking") || lowerMessage.includes("shipment status")) {
    return aiResponses["track shipment"]
  }
  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you")) {
    return aiResponses["ask services"]
  }
  if (lowerMessage.includes("air") || lowerMessage.includes("flight")) {
    return "Our **Air Freight** service offers fast and reliable cargo transportation worldwide. We partner with major airlines to ensure your time-sensitive shipments arrive on schedule.\n\nKey features:\n- Express delivery options\n- Real-time tracking\n- Temperature-controlled options\n\nWould you like a quote for air freight?"
  }
  if (lowerMessage.includes("sea") || lowerMessage.includes("ocean") || lowerMessage.includes("ship")) {
    return "Our **Sea Freight** service provides cost-effective ocean shipping for large volumes. We offer both FCL (Full Container Load) and LCL (Less than Container Load) options.\n\nBenefits:\n- Competitive rates\n- Global port coverage\n- Container tracking\n\nShall I help you get a sea freight quote?"
  }
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! Welcome to YOKKA Logistics. 👋\n\nI'm your AI assistant, ready to help with:\n- Shipping quotes\n- Service information\n- General inquiries\n\nHow can I assist you today?"
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
    return "You can reach YOKKA Logistics through:\n\n📍 **Address:** Unit 5, 9/F, 68 Sky 1 Tower, Dasmariñas St., Manila\n📞 **Phone:** (02) 8244-6734\n📧 **Email:** admin@yokka.com.ph\n\nOur team is ready to assist you with all your logistics needs!"
  }
  
  return aiResponses.default
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm YOKKA's AI assistant. How can I help you with your logistics needs today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">YOKKA Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Always here to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-2 text-sm",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    )}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button
              onClick={() => handleSend()}
              size="icon"
              className="h-10 w-10 shrink-0 rounded-full"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
