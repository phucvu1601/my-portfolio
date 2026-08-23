"use client"
import { useTranslations } from "next-intl"
import { LocaleSelector } from "./locale-selector"
import { MobileNav } from "./mobile-nav"
import { ThemeButton } from "./theme-button"

const SECTIONS = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "projects", id: "projects" },
  { key: "contact", id: "contact" },
]

export default function Header() {
  const t = useTranslations("header")

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-lg font-bold sm:text-xl"
        >
          Phuc Vu
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t(section.key)}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <LocaleSelector />
          <ThemeButton />
          {/* Mobile Navigation */}
          <MobileNav sections={SECTIONS} onScrollToSection={scrollToSection} />
        </div>
      </nav>
    </header>
  )
}
