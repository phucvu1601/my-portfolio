"use client"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("homeSection")
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-lg">{t("title")}</p>

        <h1 className="text-5xl font-bold">Phuc Vu</h1>

        <p className="mt-4 text-2xl">Frontend Developer</p>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          {t("descriptions")}
        </p>
      </div>
    </section>
  )
}
