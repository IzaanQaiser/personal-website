"use client"

import { useEffect, useState } from "react"

const achievements = [
  "5X HACKATHON WINNER",
  "COMPUTER ENGINEERING @ WATERLOO",
  "FOUNDING SOFTWARE ENGINEER @ PADA GUIDANCE",
  "SOFTWARE ENGINEERING @ OICR",
  "SOFTWARE ENGINEERING @ VIRTEK VISION",
  "DATA ENGINEERING @ DEFINITY",
  "VP ENGINEERING @ UW MSA",
  "SOFTWARE DEVELOPER @ LANGUAGE USE INVENTORY",
  "AVAILABLE WINTER 2027",
  "5X HACKATHON WINNER",
  "COMPUTER ENGINEERING @ WATERLOO",
  "FOUNDING SOFTWARE ENGINEER @ PADA GUIDANCE",
  "SOFTWARE ENGINEERING @ OICR",
  "SOFTWARE ENGINEERING @ VIRTEK VISION",
  "DATA ENGINEERING @ DEFINITY",
  "VP ENGINEERING @ UW MSA",
  "SOFTWARE DEVELOPER @ LANGUAGE USE INVENTORY",
  "AVAILABLE WINTER 2027"
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
