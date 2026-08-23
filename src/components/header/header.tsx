"use client"
import { useTranslations } from "next-intl"
import { LocaleSelector } from "./locale-selector"
import { ThemeSelector } from "./theme-selector"

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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold"
        >
          Phuc Vu
        </button>

        <div className="flex items-center gap-6">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
            >
              {t(section.key)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LocaleSelector />
          <ThemeSelector />
        </div>
      </nav>
    </header>
  )
}
