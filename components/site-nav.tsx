"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useLayoutEffect, useRef, useState } from "react"

const LiquidGlass = dynamic(() => import("liquid-glass-react"), {
  ssr: false,
})

const navLinks = [
  { label: "HOME", href: "/", external: false },
  { label: "PROJECTS", href: "/projects", external: false },
  { label: "X", href: "https://x.com/1zaanq", external: true },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/izaanq/", external: true },
  { label: "GITHUB", href: "https://github.com/IzaanQaiser", external: true },
  { label: "DEVPOST", href: "https://devpost.com/izaanqaiser05", external: true },
  { label: "EMAIL", href: "mailto:i2qaiser@uwaterloo.ca", external: false },
]

export function SiteNav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [navElement, setNavElement] = useState<HTMLElement | null>(null)
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0, visible: false })
  const activeHref = pathname.startsWith("/projects") ? "/projects" : pathname === "/" ? "/" : null

  const setNavRef = useCallback((node: HTMLElement | null) => {
    navRef.current = node
    setNavElement(node)
  }, [])

  useLayoutEffect(() => {
    if (!navElement || !activeHref) {
      setIndicator((current) => ({ ...current, visible: false }))
      return
    }

    const updateIndicator = () => {
      const activeLink = linkRefs.current[activeHref]
      if (!activeLink || !navRef.current) return

      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      setIndicator({
        left: linkRect.left - navRect.left,
        top: linkRect.top - navRect.top,
        width: linkRect.width,
        height: linkRect.height,
        visible: true,
      })
    }

    updateIndicator()
    const resizeObserver = new ResizeObserver(updateIndicator)
    resizeObserver.observe(navElement)

    return () => resizeObserver.disconnect()
  }, [activeHref, navElement])

  return (
    <header className="relative z-50 h-20 overflow-x-clip px-4 md:h-24">
      <LiquidGlass
        className="liquid-navbar"
        displacementScale={0}
        blurAmount={0.4}
        saturation={150}
        aberrationIntensity={0}
        elasticity={0}
        cornerRadius={999}
        padding="6px 8px"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        <nav
          ref={setNavRef}
          aria-label="Primary navigation"
          className="relative flex items-center whitespace-nowrap font-mono text-xs sm:text-sm"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 rounded-full bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_12px_rgba(0,0,0,0.2)] transition-[transform,width,height,opacity] duration-500 ease-out"
            style={{
              width: indicator.width,
              height: indicator.height,
              opacity: indicator.visible ? 1 : 0,
              transform: `translate3d(${indicator.left}px, ${indicator.top}px, 0)`,
            }}
          />

          {navLinks.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/projects" && pathname.startsWith("/projects")
            const linkClassName = `relative z-10 rounded-full px-3 py-2 transition-opacity duration-200 hover:opacity-100 ${
              isActive ? "opacity-100" : "opacity-80"
            }`

            return (
              <span key={link.label} className="flex items-center">
                {index > 0 && (
                  <span aria-hidden="true" className="mx-2 opacity-40 sm:mx-3">
                    //
                  </span>
                )}
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    ref={(node) => {
                      linkRefs.current[link.href] = node
                    }}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={linkClassName}
                  >
                    {link.label}
                  </Link>
                )}
              </span>
            )
          })}
        </nav>
      </LiquidGlass>
    </header>
  )
}
