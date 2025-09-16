"use client"

import { useEffect, useState } from "react"

const achievements = [
  "5X HACKATHON WINNER",
  "FULL-STACK DEVELOPER @ VIRTEK VISION",
  "DATA ENGINEER @ DEFINITY",
  "DATA ANALYST @ THE UNIVERSITY OF WATERLOO",
  "AI DEVELOPER @ OUTLIER",
  "5+ YEARS OF EXPERIENCE",
  "UWATERLOO PRESIDENTS SCHOLARSHIP RECIPIENT",
  "5X HACKATHON WINNER",
  "FULL-STACK DEVELOPER @ VIRTEK VISION",
  "DATA ENGINEER @ DEFINITY",
  "DATA ANALYST @ THE UNIVERSITY OF WATERLOO",
  "AI DEVELOPER @ OUTLIER",
  "5+ YEARS OF EXPERIENCE",
  "UWATERLOO PRESIDENTS SCHOLARSHIP RECIPIENT"
]

export function AchievementsCarousel() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full overflow-hidden bg-zinc-900 border-t border-b border-zinc-800 mt-8">
      <div className="flex animate-scroll hover:pause-scroll">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="text-zinc-300 font-mono text-sm md:text-base tracking-wider whitespace-nowrap flex-shrink-0 mr-16"
          >
            {achievement}
          </div>
        ))}
      </div>
    </div>
  )
}
