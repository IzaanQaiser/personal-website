"use client"

import { SlideIn } from "@/components/slide-in"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [currentTime, setCurrentTime] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  // Prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-16 lg:p-24 pb-16">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <SlideIn>
          <div className="space-y-2">
            <h1
              className="text-4xl md:text-5xl font-mono tracking-tight"
              style={{
                textShadow:
                  "0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 90px rgba(255, 255, 255, 0.1)",
              }}
            >
              Izaan Qaiser
            </h1>
            <p className="text-zinc-400 font-mono text-sm">Waterloo, CAN {currentTime}</p>
          </div>
        </SlideIn>

        {/* Main Content */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <SlideIn delay={100}>
            <p>
              I'm a 20 year old developer and problem-solver based in Waterloo, CAN. Currently working at{" "}
              <a
                href="#"
                className="underline decoration-zinc-600 hover:decoration-blue-900 hover:text-blue-900 transition-colors duration-200 underline-offset-4"
              >
                VIRTEK VISION
              </a>{" "}
              and building{" "}
              <a
                href="#"
                className="underline decoration-zinc-600 hover:decoration-blue-900 hover:text-blue-900 transition-colors duration-200 underline-offset-4"
              >
                THINKBACK.AI
              </a>{" "}
              on weekends.
            </p>
          </SlideIn>

          <SlideIn delay={200}>
            <p>
              I'm passionate about creating digital experiences that feel intuitive, delightful, and meaningful. When
              I'm not designing, you'll find me exploring new coffee shops or hiking the Bay Area trails.
            </p>
          </SlideIn>

          <SlideIn delay={300}>
            <p>
              Always excited to connect with fellow creators;{" "}
              <a
                href="mailto:hello@mayachen.com"
                className="underline decoration-zinc-600 hover:decoration-blue-900 hover:text-blue-900 transition-colors duration-200 underline-offset-4"
              >
                drop me a line
              </a>{" "}
              or{" "}
              <a
                href="#"
                className="underline decoration-zinc-600 hover:decoration-blue-900 hover:text-blue-900 transition-colors duration-200 underline-offset-4"
              >
                book some time
              </a>
              .
            </p>
          </SlideIn>
        </div>

        {/* Projects Section */}
        <SlideIn delay={400}>
          <div className="space-y-4">
            <h2
              className="text-2xl md:text-3xl font-mono text-zinc-300 underline decoration-zinc-600 underline-offset-8"
              style={{
                textShadow:
                  "0 0 25px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.3), 0 0 75px rgba(255, 255, 255, 0.1)",
              }}
            >
              Projects
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <a
                    href="#"
                    className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                  >
                    THINKBACK.AI
                  </a>
                  <p className="text-zinc-400 text-sm mt-1">AI-powered reflection platform for personal growth</p>
                </div>
                <span className="text-zinc-500 text-xs font-mono">2024</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <a
                    href="#"
                    className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                  >
                    PORTFOLIO V3
                  </a>
                  <p className="text-zinc-400 text-sm mt-1">Minimal personal website built with Next.js</p>
                </div>
                <span className="text-zinc-500 text-xs font-mono">2024</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <a
                    href="#"
                    className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                  >
                    TASK FLOW
                  </a>
                  <p className="text-zinc-400 text-sm mt-1">Productivity app for developers and creators</p>
                </div>
                <span className="text-zinc-500 text-xs font-mono">2023</span>
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Blog Section */}
        <SlideIn delay={500}>
          <div className="space-y-4">
            <h2
              className="text-2xl md:text-3xl font-mono text-zinc-300 underline decoration-zinc-600 underline-offset-8"
              style={{
                textShadow:
                  "0 0 25px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.3), 0 0 75px rgba(255, 255, 255, 0.1)",
              }}
            >
              Recent Thoughts
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <Link
                  href="/blog/building-with-constraints"
                  className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                >
                  Building with constraints
                </Link>
                <span className="text-zinc-500 text-xs font-mono">Dec 2024</span>
              </div>

              <div className="flex justify-between items-start">
                <Link
                  href="/blog/minimal-design"
                  className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                >
                  The art of minimal design
                </Link>
                <span className="text-zinc-500 text-xs font-mono">Nov 2024</span>
              </div>

              <div className="flex justify-between items-start">
                <Link
                  href="/blog/terminal-workflows"
                  className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                >
                  Why I switched to terminal workflows
                </Link>
                <span className="text-zinc-500 text-xs font-mono">Oct 2024</span>
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Divider */}
        <SlideIn delay={600}>
          <div className="border-t border-zinc-800 my-8"></div>
        </SlideIn>

        {/* Social Links */}
        <SlideIn delay={700}>
          <div className="flex gap-6 text-sm font-mono">
            <a
              href="#"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              TWITTER
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              DRIBBBLE
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              LINKEDIN
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              GITHUB
            </a>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
