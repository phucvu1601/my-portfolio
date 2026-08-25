"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { routing } from "@/i18n/routing"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Automatically redirect to the default locale (e.g., /vi or /en)
    router.replace(`/${routing.defaultLocale}`)
  }, [router])

  return null
}
