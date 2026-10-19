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
      <DropdownMenuTrigger
        asChild
        className="data-[state=open]:bg-primary-glow/30 data-[state=open]:text-brand"
      >
        <Button variant="ghostOutline" size="icon">
          <Globe />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="bg-transparent w-32"
      >
        {LOCALES_AVAILABLE.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => changeLocale(l)}
            className={cn(
              "flex cursor-pointer justify-between focus:bg-accent/80 focus:text-brand not-data-[variant=destructive]:focus:**:text-brand",
              l === locale
                ? "bg-accent/80 text-brand hover:text-brand font-medium"
                : "",
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
