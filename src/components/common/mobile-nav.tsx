"use client"

import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface Section {
  key: string
  id: string
}

interface MobileNavProps {
  sections: Section[]
  activeSection?: string
  onScrollToSection: (id: string) => void
}

export function MobileNav({
  sections,
  activeSection,
  onScrollToSection,
}: MobileNavProps) {
  const t = useTranslations("header")
  const [open, setOpen] = useState(false)

  const handleSelect = (id: string) => {
    onScrollToSection(id)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon" className="bg-bg-glow">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-65 sm:w-75 bg-bg-glow">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation options
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-2">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleSelect(section.id)}
                style={{ animationDelay: `${150 + index * 80}ms` }}
                className={cn(
                  "flex h-11 items-center rounded-lg px-4 text-left text-base transition-all duration-400 animate-in fade-in slide-in-from-right-2 fill-mode-backwards",
                  isActive
                    ? "text-brand font-bold"
                    : "text-brand/40 font-medium hover:bg-accent hover:text-brand/80 hover:translate-x-1",
                )}
              >
                <span>{t(section.key)}</span>
              </button>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
