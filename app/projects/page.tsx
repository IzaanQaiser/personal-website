"use client"

import { useState } from "react"
import { getAllProjectTypes, getProjectPrimaryUrl, projects, projectTagStyle, type ProjectType } from "@/lib/projects"

export default function ProjectsPage() {
  const [selectedType, setSelectedType] = useState<ProjectType | "ALL">("ALL")
  const allTypes = getAllProjectTypes()

  const filteredProjects = selectedType === "ALL" 
    ? projects 
    : projects.filter(project => project.types.includes(selectedType))

  return (
    <div className="relative min-h-screen px-8 pb-16 pt-0 text-zinc-100 md:px-8 lg:px-16">
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-center">
          <div>
            <h1
              className="text-4xl md:text-5xl font-mono tracking-tight mb-4 mt-1 text-center"
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
            className={`rounded px-4 py-2 font-mono text-sm backdrop-blur-xl transition-all duration-200 ${
              selectedType === "ALL"
                ? "bg-white/20 text-zinc-100 shadow-[0_4px_16px_rgba(0,0,0,0.16)]"
                : "bg-white/[0.08] text-zinc-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-white/[0.14]"
            }`}
          >
            ALL
          </button>
          {allTypes.map((type) => {
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded px-4 py-2 font-mono text-sm backdrop-blur-xl transition-all duration-200 ${
                  selectedType === type
                    ? "bg-white/20 text-zinc-100 shadow-[0_4px_16px_rgba(0,0,0,0.16)]"
                    : "bg-white/[0.08] text-zinc-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-white/[0.14]"
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
            const isHackathonWinner = project.hackathonWinner === true
            const primaryUrl = getProjectPrimaryUrl(project)
            return (
              <div
                key={project.id}
                onClick={() => window.open(primaryUrl, '_blank', 'noopener,noreferrer')}
                className={`cursor-pointer rounded-lg p-6 backdrop-blur-xl transition-all duration-200 ${
                  isHackathonWinner 
                    ? 'bg-yellow-300/[0.10] shadow-[0_12px_36px_rgba(234,179,8,0.10)] hover:bg-yellow-300/[0.14]'
                    : 'bg-white/[0.07] shadow-[0_12px_36px_rgba(0,0,0,0.16)] hover:bg-white/[0.11]'
                }`}
              >
                <div className="mb-3">
                  <h3 className="text-lg font-mono text-zinc-100 mb-2">
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={`transition-colors duration-200 ${
                        isHackathonWinner 
                          ? 'hover:text-yellow-400' 
                          : 'hover:text-blue-900'
                      }`}
                    >
                      {project.name}
                      {isHackathonWinner && <span className="ml-2 text-yellow-400">🏆</span>}
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
                  {project.status && (
                    <span>{project.status}</span>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="hover:text-blue-900 transition-colors duration-200"
                    >
                      LIVE DEMO
                    </a>
                  )}
                </div>
                {isHackathonWinner && (
                  <div className="flex justify-center mt-2">
                    <span className="text-xs text-yellow-400 font-mono">
                      HACKATHON WINNER
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
