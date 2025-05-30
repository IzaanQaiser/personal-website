"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-16 lg:p-24">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-mono tracking-tight">Izaan Qaiser</h1>
          <p className="text-zinc-400 font-mono text-sm">Waterloo, CAN {currentTime}</p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            I'm a 20 year old developer and problem-solver based in Waterloo, CAN. Currently working at{" "}
            <a
              href="#"
              className="underline decoration-zinc-600 hover:decoration-zinc-400 transition-colors duration-200 underline-offset-4"
            >
              VIRTEK VISION
            </a>{" "}
            and building{" "}
            <a
              href="#"
              className="underline decoration-zinc-600 hover:decoration-zinc-400 transition-colors duration-200 underline-offset-4"
            >
              THINKBACK.AI
            </a>{" "}
            on weekends.
          </p>

          <p>
            I'm passionate about creating digital experiences that feel intuitive, delightful, and meaningful. When I'm
            not designing, you'll find me exploring new coffee shops or hiking the Bay Area trails.
          </p>

          <p>
            Always excited to connect with fellow creators;{" "}
            <a
              href="mailto:hello@mayachen.com"
              className="underline decoration-zinc-600 hover:decoration-zinc-400 transition-colors duration-200 underline-offset-4"
            >
              drop me a line
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="underline decoration-zinc-600 hover:decoration-zinc-400 transition-colors duration-200 underline-offset-4"
            >
              book some time
            </a>
            .
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-12"></div>

        {/* Social Links */}
        <div className="flex gap-6 text-sm font-mono">
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-100 underline decoration-zinc-700 hover:decoration-zinc-500 transition-colors duration-200 underline-offset-4"
          >
            TWITTER
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-100 underline decoration-zinc-700 hover:decoration-zinc-500 transition-colors duration-200 underline-offset-4"
          >
            DRIBBBLE
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-100 underline decoration-zinc-700 hover:decoration-zinc-500 transition-colors duration-200 underline-offset-4"
          >
            LINKEDIN
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-100 underline decoration-zinc-700 hover:decoration-zinc-500 transition-colors duration-200 underline-offset-4"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  )
}
