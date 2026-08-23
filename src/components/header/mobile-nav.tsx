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

interface Section {
  key: string
  id: string
}

interface MobileNavProps {
  sections: Section[]
  onScrollToSection: (id: string) => void
}

export function MobileNav({ sections, onScrollToSection }: MobileNavProps) {
  const t = useTranslations("header")
  const [open, setOpen] = useState(false)

  const handleSelect = (id: string) => {
    onScrollToSection(id)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-65 sm:w-75">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation options
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSelect(section.id)}
              className="flex h-10 items-center rounded-md px-3 text-left text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t(section.key)}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
