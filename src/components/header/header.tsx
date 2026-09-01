"use client"
import { useTranslations } from "next-intl"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
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

  const sectionIds = SECTIONS.map((s) => s.id)
  const activeSection = useActiveSection(sectionIds, "home")

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-3xl border border-white/20 border-t-white/60 bg-white/10 px-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 dark:border-white/10 dark:border-t-white/30 dark:bg-white/[0.05] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_12px_40px_rgba(0,0,0,0.5)]">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-gradient-brand text-lg font-bold transition-all duration-300 hover:scale-105 hover:brightness-120 sm:text-xl"
        >
          PHUC VU
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
                className={cn(
                  "relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-brand font-semibold"
                    : "text-muted-foreground hover:dark:bg-white/10 hover:bg-black/4 hover:text-foreground",
                )}
              >
                {isActive && (
                  <span
                    className={cn(
                      "absolute inset-0 -z-10 rounded-xl backdrop-blur-md transition-all duration-300",
                      // Light Mode
                      "border border-black/10 border-t-white/80 bg-black/4",
                      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.06)]",
                      // Dark Mode
                      "dark:border-white/15 dark:border-t-white/30 dark:bg-white/10",
                      "dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.25)]",
                    )}
                  />
                )}

                <span className="relative z-10">{t(section.key)}</span>
              </button>
            )
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
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
