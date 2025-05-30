"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SlideInProps {
  children: ReactNode
  direction?: "left" | "right"
  delay?: number
  className?: string
}

export function SlideIn({ children, direction = "left", delay = 0, className }: SlideInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  })

  return (
    <div
      // @ts-ignore - ref is correctly typed but TypeScript doesn't recognize it
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        {
          "opacity-0": !isIntersecting,
          "opacity-100": isIntersecting,
        },
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
