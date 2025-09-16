"use client"

import { SlideIn } from "@/components/slide-in"
import { AchievementsCarousel } from "@/components/achievements-carousel"
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Achievements Carousel Banner */}
      <AchievementsCarousel />
      
      <div className="p-8 md:p-8 lg:p-16 pb-16">
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
              I'm a 2nd year Computer Engineering student at the University of Waterloo, currently building{" "}
              <a
                href="https://thinkback.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-600 hover:decoration-blue-900 hover:text-blue-900 transition-colors duration-200 underline-offset-4"
              >
                thinkback
              </a>{" "}
              and{" "}
              <a
                href="https://speedthreads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-600 hover:decoration-blue-900 hover:text-blue-900 transition-colors duration-200 underline-offset-4"
              >
                speedthreads
              </a>{" "}
              — two future unicorn startups that I'm excited to see grow.
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

        {/* Experience Section */}
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
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-zinc-100 font-mono text-lg">Software Engineer</h3>
                    <p className="text-zinc-400 text-sm">Virtek Vision International</p>
                  </div>
                  <span className="text-zinc-500 text-xs font-mono">May 2025 – Aug 2025</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono">Technologies: React Native, TypeScript, JavaScript, C#, RabbitMQ, REST API, SQL, Playwright</p>
                <p className="text-zinc-400 text-sm">Rebuilt prototype into stable cross-platform app, reducing crashes by 95% for F1 and BMW.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-zinc-100 font-mono text-lg">Data Engineer</h3>
                    <p className="text-zinc-400 text-sm">Definity</p>
                  </div>
                  <span className="text-zinc-500 text-xs font-mono">Sep 2024 – Dec 2024</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono">Technologies: Python, Airflow, BigQuery, Google Cloud</p>
                <p className="text-zinc-400 text-sm">Engineered optimized DAG reducing pipeline latency by 91% and increased data throughput by 3x.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-zinc-100 font-mono text-lg">Data Analyst</h3>
                    <p className="text-zinc-400 text-sm">University of Waterloo</p>
                  </div>
                  <span className="text-zinc-500 text-xs font-mono">Jan 2024 – Apr 2024</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono">Technologies: Python, Pandas, numpy, JavaScript</p>
                <p className="text-zinc-400 text-sm">Built Python data pipeline achieving 23.5x speedup and optimized website cutting load times by 59%.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-zinc-100 font-mono text-lg">AI Developer</h3>
                    <p className="text-zinc-400 text-sm">Outlier</p>
                  </div>
                  <span className="text-zinc-500 text-xs font-mono">Nov 2024 – Present</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono">Technologies: AI/ML, Python, C#, Machine Learning</p>
                <p className="text-zinc-400 text-sm">Developing AI solutions and machine learning models for various applications in a remote contract role.

</p>
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
              href="https://x.com/1zaanq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-900 underline decoration-zinc-700 hover:decoration-blue-900 transition-colors duration-200 underline-offset-4"
            >
              TWITTER/X
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
          </div>
        </>

        {/* Website Inspiration */}
        <>
          <div className="flex justify-center mt-8">
            <a
              href="https://roozbehali.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 text-xs font-mono transition-colors duration-200"
            >
              website inspiration
            </a>
          </div>
        </>
        </div>
      </div>
    </div>
  )
}
