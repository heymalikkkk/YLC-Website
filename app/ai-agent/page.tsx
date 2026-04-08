import type { Metadata } from "next"
import { AIAgentChat } from "@/components/ai-agent-chat"

export const metadata: Metadata = {
  title: "AI Assistant",
  description:
    "Chat with Yokka Logistics Corp.'s AI assistant for instant help with your logistics inquiries, quotes, and service information.",
}

export default function AIAgentPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30 px-4 py-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            AI-Powered Support
          </span>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Yokka Logistics Corp. AI Assistant
          </h1>
          <p className="text-muted-foreground">
            Get instant answers about our services, request quotes, and more. {"I'm"} here to help 24/7.
          </p>
        </div>
      </div>

      {/* Chat Interface */}
      <AIAgentChat />
    </div>
  )
}
