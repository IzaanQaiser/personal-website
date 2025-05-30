"use client"

import { SlideIn } from "@/components/slide-in"
import Link from "next/link"

export default function TerminalWorkflows() {
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
            <h1 className="text-3xl md:text-4xl font-mono tracking-tight">Why I switched to terminal workflows</h1>
            <p className="text-zinc-400 font-mono text-sm">Oct 2024 • 5 min read</p>
          </div>
        </SlideIn>

        <SlideIn delay={200}>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The terminal isn't just a tool—it's a philosophy. It represents the idea that the most powerful interfaces
              are often the simplest ones.
            </p>

            <p>
              When I first started using the command line, it felt intimidating. All those cryptic commands, no visual
              cues, just a blinking cursor waiting for input.
            </p>

            <p>
              But once you learn the language, something magical happens. You realize that GUIs are often just pretty
              wrappers around terminal commands. The terminal is where the real power lives.
            </p>

            <p>
              Git becomes faster. File manipulation becomes precise. System monitoring becomes transparent. You're not
              clicking through menus—you're speaking directly to your computer.
            </p>

            <p>
              The aesthetic matters too. There's something deeply satisfying about a clean terminal with perfect
              typography, minimal colors, and efficient workflows. It feels like you're working with the machine, not
              against it.
            </p>

            <p>
              Modern terminals have evolved beautifully. Tools like iTerm2, Alacritty, and Wezterm offer incredible
              customization while maintaining that essential simplicity.
            </p>

            <p>
              The terminal taught me that the best tools get out of your way. They don't distract with unnecessary
              visual elements. They just work, efficiently and reliably.
            </p>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
