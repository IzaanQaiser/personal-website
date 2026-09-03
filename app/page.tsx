"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getFeaturedProjects, getProjectPrimaryUrl, projectTagStyle } from "@/lib/projects"

const experiences = [
  {
    title: "Software Developer (Incoming)",
    organization: "Knowledge in Development Inc: Language Use Inventory",
    dates: "Sep 2026 – Dec 2026"
  },
  {
    title: "Founding Software Engineer",
    organization: "Pada Guidance",
    dates: "Apr 2026 – Present"
  },
  {
    title: "Software Engineering Intern",
    organization: "Ontario Institute for Cancer Research",
    dates: "Jan 2026 – Apr 2026"
  },
  {
    title: "Full-Stack Software Engineering Intern",
    organization: "Virtek Vision International",
    dates: "May 2025 – Aug 2025"
  },
  {
    title: "Data Engineering Intern",
    organization: "Definity Financial",
    dates: "Sep 2024 – Dec 2024"
  },
  {
    title: "Vice President, Engineering",
    organization: "UW Muslim Students' Association",
    dates: "Sep 2023 – Present"
  },
  {
    title: "Data Analysis Intern",
    organization: "University of Waterloo, Faculty of Engineering Graduate Studies Office",
    dates: "Jan 2024 – Apr 2024"
  }
]

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
    <div className="relative min-h-screen text-zinc-100">
      <div className="relative z-10">
        <div className="p-8 md:p-8 lg:p-16 pb-16">
          <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-center">
          <div>
            <h1
              className="text-4xl md:text-5xl font-mono tracking-tight mb-4 mt-1"
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
          <p>
            Computer Engineering student at the University of Waterloo building production software, agent systems, and data infrastructure.
          </p>
          <p className="text-zinc-400">
            Available for Winter 2027 software engineering internships.
          </p>

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

        {/* Experience Section */}
        <>
        <br />
        <br />

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl md:text-3xl font-mono text-zinc-300 underline decoration-zinc-600 underline-offset-8"
              >
                Experience
              </h2>
              <a
                href="https://www.linkedin.com/in/izaanq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-700 hover:decoration-blue-900 underline-offset-4 text-sm font-mono"
              >
                View All →
              </a>
            </div>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={`${experience.organization}-${experience.dates}`} className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-zinc-100 font-mono text-lg">{experience.title}</h3>
                      <p className="text-zinc-400 text-sm">{experience.organization}</p>
                    </div>
                    <span className="text-zinc-500 text-xs font-mono shrink-0">{experience.dates}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>

        {/* Projects Section */}
        <>
        <br />
        <br />

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl md:text-3xl font-mono text-zinc-300 underline decoration-zinc-600 underline-offset-8"
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
                          href={getProjectPrimaryUrl(project)}
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

        {/* Divider */}
        <>
          <div className="border-t border-zinc-800 my-8"></div>
        </>

        {/* Social Links */}
        <>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono">
            <a
              href="https://x.com/1zaanq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/izaanq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/IzaanQaiser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              GITHUB
            </a>
            <a
              href="https://devpost.com/izaanqaiser05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              DEVPOST
            </a>
            <a
              href="mailto:i2qaiser@uwaterloo.ca"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              EMAIL
            </a>
          </div>
        </>
          </div>
        </div>
      </div>
    </div>
  )
}
