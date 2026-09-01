"use client"
import { useTranslations } from "next-intl"
import { useActiveSection } from "@/hooks/use-active-section" // Thay đổi đường dẫn import cho đúng
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

  // Lấy danh sách IDs và truyền vào Hook
  const sectionIds = SECTIONS.map((s) => s.id)
  const activeSection = useActiveSection(sectionIds, "home")

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
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold underline underline-offset-4"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t(section.key)}
              </button>
            )
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <LocaleSelector />
          <ThemeButton />
          <MobileNav
            sections={SECTIONS}
            activeSection={activeSection}
            onScrollToSection={scrollToSection}
          />
        </div>
      </nav>
    </header>
  )
}
