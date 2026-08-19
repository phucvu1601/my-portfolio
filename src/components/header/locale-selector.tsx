"use client"

import { Check, Globe } from "lucide-react"
import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "@/i18n/navigation"
import { LOCALES_AVAILABLE } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export function LocaleSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const changeLocale = (newLocale: string) => {
    if (newLocale === locale) return
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="bg-background w-32"
      >
        {LOCALES_AVAILABLE.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => changeLocale(l)}
            className={cn(
              "flex cursor-pointer justify-between",
              l === locale ? "bg-accent font-medium" : "",
            )}
          >
            {l.toUpperCase()}
            {l === locale && <Check />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
