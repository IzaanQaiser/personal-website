"use client"

import { SlideIn } from "@/components/slide-in"
import Link from "next/link"

export default function BuildingWithConstraints() {
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
            <h1 className="text-3xl md:text-4xl font-mono tracking-tight">Building with constraints</h1>
            <p className="text-zinc-400 font-mono text-sm">Dec 2024 • 3 min read</p>
          </div>
        </SlideIn>

        <SlideIn delay={200}>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Constraints aren't limitations—they're creative catalysts. When you remove infinite possibilities, you
              force yourself to be more intentional with every decision.
            </p>

            <p>
              In design, constraints might be a limited color palette, a specific grid system, or a tight deadline. In
              code, it could be performance budgets, accessibility requirements, or legacy browser support.
            </p>

            <p>
              The magic happens when you stop seeing these as obstacles and start seeing them as design principles. They
              guide you toward solutions you might never have discovered otherwise.
            </p>

            <p>
              This website is a perfect example. The constraint was simple: create something minimal, fast, and
              premium-feeling. No complex animations, no unnecessary features, no visual clutter.
            </p>

            <p>
              The result? A site that loads instantly, feels intentional, and puts content first. Sometimes the best way
              forward is to deliberately limit your options.
            </p>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
