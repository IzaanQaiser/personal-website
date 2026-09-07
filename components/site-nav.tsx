"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const socialLinks = [
  { label: "X", href: "https://x.com/1zaanq" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/izaanq/" },
  { label: "GITHUB", href: "https://github.com/IzaanQaiser" },
  { label: "DEVPOST", href: "https://devpost.com/izaanqaiser05" },
  { label: "EMAIL", href: "mailto:i2qaiser@uwaterloo.ca" },
]

export function SiteNav() {
  const pathname = usePathname()
  const showBackToHome = pathname.startsWith("/projects")

  return (
    <header className="relative z-20 px-8 pt-8 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center">
        {showBackToHome ? (
          <Link
            href="/"
            className="justify-self-start whitespace-nowrap font-mono text-xs text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors duration-200 hover:text-blue-900 hover:decoration-blue-900 sm:text-sm"
          >
            ← Back to Home
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}

        <nav
          aria-label="Social links"
          className="flex flex-nowrap justify-center gap-3 whitespace-nowrap font-mono text-xs sm:gap-6 sm:text-sm"
        >
          {socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http")

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors duration-200 hover:text-blue-900 hover:decoration-blue-900"
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <span aria-hidden="true" />
      </div>
    </header>
  )
}
