"use client"

import { SlideIn } from "@/components/slide-in"
import Link from "next/link"

export default function MinimalDesign() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-16 lg:p-24 pb-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <SlideIn>
          <Link
            href="/"
            className="text-zinc-400 hover:text-blue-900 transition-colors duration-200 font-mono text-sm underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
          >
            ← Back
          </Link>
        </SlideIn>

        <SlideIn delay={100}>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-mono tracking-tight">The art of minimal design</h1>
            <p className="text-zinc-400 font-mono text-sm">Nov 2024 • 4 min read</p>
          </div>
        </SlideIn>

        <SlideIn delay={200}>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Minimal design isn't about removing everything until nothing is left. It's about removing everything until
              only the essential remains.
            </p>

            <p>
              Every element that survives the cutting process becomes more important. Every pixel of whitespace becomes
              intentional. Every interaction becomes meaningful.
            </p>

            <p>
              The challenge isn't in what you add—it's in what you have the courage to remove. Most designs fail not
              because they lack features, but because they lack focus.
            </p>

            <p>
              When you strip away the unnecessary, what remains has room to breathe. Users can focus on what matters.
              The experience becomes effortless.
            </p>

            <p>
              Minimal design is ultimately about respect—respect for your users' time, attention, and intelligence. It's
              about trusting that less can indeed be more.
            </p>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
