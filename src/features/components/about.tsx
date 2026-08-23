"use client"
import { useTranslations } from "next-intl"

export default function About() {
  const t = useTranslations("aboutSection")
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center h-screen">
        <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
        <p className="text-gray-600">{t("descriptions")}</p>
      </div>
    </section>
  )
}
