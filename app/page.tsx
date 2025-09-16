"use client"

import { SlideIn } from "@/components/slide-in"
import { useEffect, useState } from "react"
import Link from "next/link"
import { getFeaturedProjects, projectTagStyle, type Project } from "@/lib/projects"

export default function Home() {
  const [currentTime, setCurrentTime] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const featuredProjects = getFeaturedProjects()

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-8 lg:p-16 pb-16">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-center">
          <div>
            <h1
              className="text-4xl md:text-5xl font-mono tracking-tight mb-4 mt-1"
              style={{
                textShadow:
                  "0 0 15px rgba(255, 255, 255, 0.6), 0 0 90px rgba(255, 255, 255, 0.3), 0 0 90px rgba(255, 255, 255, 0.1)",
              }}
            >
              Izaan Qaiser
            </h1>
            <div className="flex justify-center">
            <p className="text-zinc-400 font-mono text-sm">Waterloo, CAN {currentTime}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <>
            <p>
              I'm a 20 year old Computer Engineering student at the University of Waterloo. I'm currently working as a Software Developerat{" "}
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
          </>

          {/* <>
            <p>
              I'm passionate about creating digital experiences that feel intuitive, delightful, and meaningful. When
              I'm not designing, you'll find me exploring new coffee shops or hiking the Bay Area trails.
            </p>
          </>

          <>
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
          </> */}
        </div>

        {/* Projects Section */}
        <>
        <br />
        <br />

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl md:text-3xl font-mono text-zinc-300 underline decoration-zinc-600 underline-offset-8"
                style={{
                  textShadow:
                    "0 0 25px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.3), 0 0 75px rgba(255, 255, 255, 0.1)",
                }}
              >
                Projects
              </h2>
              <Link
                href="/projects"
                className="text-zinc-500 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-700 hover:decoration-blue-900 underline-offset-4 text-sm font-mono"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-8">
              {featuredProjects.map((project) => {
                return (
                  <div key={project.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-100 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-600 hover:decoration-blue-900 underline-offset-4"
                        >
                          {project.name}
                        </a>
                        <div className="flex gap-1 flex-wrap">
                          {project.types.map((type) => (
                            <span
                              key={type}
                              className={`px-2 py-1 text-xs font-mono rounded border ${projectTagStyle.bgColor} ${projectTagStyle.color}`}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-2 mb-2">
                        <p className="text-zinc-500 text-xs font-mono">
                          {project.technologies.join(' • ')}
                        </p>
                      </div>
                      <p className="text-zinc-400 text-sm">{project.description}</p>
                    </div>
                    <span className="text-zinc-500 text-xs font-mono ml-4">{project.year}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </>

        {/* Blog Section */}
        <>
        <br />
        <br />

          <div>
            <h2
              className="text-2xl md:text-3xl font-mono text-zinc-300 underline decoration-zinc-600 underline-offset-8 mb-6"
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
        </>

        {/* Divider */}
        <>
          <div className="border-t border-zinc-800 my-8"></div>
        </>

        {/* Social Links */}
        <>
          <div className="flex justify-center gap-6 text-sm font-mono">
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
        </>
      </div>
    </div>
  )
}
