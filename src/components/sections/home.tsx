"use client"

import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import LanyardSkeleton from "@/components/effects/lanyard-skeleton"
import { useIsMobile } from "@/hooks/use-mobile"

const Lanyard = dynamic(() => import("@/components/effects/lanyard"), {
  ssr: false,
  loading: () => <LanyardSkeleton />,
})

export default function Home() {
  const t = useTranslations("homeSection")
  const isMobile = useIsMobile()
  const { theme } = useTheme()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center px-6 py-16"
    >
      {/* 3D layer */}
      <div className="absolute inset-0 z-0">
        <Lanyard
          frontImage="/lanyard/avatar.jpg"
          backImage={
            theme === "dark"
              ? "/lanyard/back-image-dark.jpg"
              : "/lanyard/back-image-light.jpg"
          }
          cardColor={theme === "dark" ? "#111111" : "#ffffff"}
          anchor={isMobile ? "center" : "right"}
          size={isMobile ? 0.4 : 0.6}
          strapLength={isMobile ? 0.1 : 0.3}
        />
      </div>

      {/* Content layer */}
      <div className="pointer-events-none relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Introduction */}
        <div className="pointer-events-auto order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-base font-medium tracking-wide text-gray-500 dark:text-gray-400 sm:text-lg">
            {t("title")}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Phuc Vu
          </h1>

          <p className="mt-4 text-xl font-medium sm:text-2xl">
            Frontend Developer
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg md:mx-0">
            {t("descriptions")}
          </p>
        </div>

        {/* Space reserved for 3D object */}
        <div className="order-1 h-80 sm:h-100 md:order-2 md:h-125" />
      </div>
    </section>
  )
}
