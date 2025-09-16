"use client"

import { useState } from "react"
import Link from "next/link"
import { projects, projectTagStyle, getAllProjectTypes, type Project, type ProjectType } from "@/lib/projects"

export default function ProjectsPage() {
  const [selectedType, setSelectedType] = useState<ProjectType | "ALL">("ALL")
  const allTypes = getAllProjectTypes()

  const filteredProjects = selectedType === "ALL" 
    ? projects 
    : projects.filter(project => project.types.includes(selectedType))

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-8 lg:p-16 pb-16">
      <div className="max-w-4xl mx-auto space-y-8">
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
              Projects
            </h1>
            <div className="flex justify-center">
              <p className="text-zinc-400 font-mono text-sm">A collection of my work across different domains</p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedType("ALL")}
            className={`px-4 py-2 text-sm font-mono rounded border transition-colors duration-200 ${
              selectedType === "ALL"
                ? "bg-zinc-800 text-zinc-100 border-zinc-600"
                : "bg-zinc-900/50 text-zinc-400 border-zinc-700 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            ALL
          </button>
          {allTypes.map((type) => {
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm font-mono rounded border transition-colors duration-200 ${
                  selectedType === type
                    ? `${projectTagStyle.bgColor} ${projectTagStyle.color} border-current`
                    : "bg-zinc-900/50 text-zinc-400 border-zinc-700 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                {type}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-mono text-zinc-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-900 transition-colors duration-200"
                    >
                      {project.name}
                    </a>
                  </h3>
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
                
                <div className="ml-2 mb-3">
                  <p className="text-zinc-500 text-xs font-mono">
                    {project.technologies.join(' • ')}
                  </p>
                </div>
                
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>{project.year}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-900 transition-colors duration-200"
                    >
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Back to Home */}
        <div className="flex justify-center pt-8">
          <Link
            href="/"
            className="text-zinc-400 hover:text-blue-900 transition-colors duration-200 underline decoration-zinc-700 hover:decoration-blue-900 underline-offset-4 font-mono"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
