import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { routing } from "@/i18n/routing"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Phuc Vu | Front-End Developer Portfolio",
  description:
    "Personal portfolio of Phuc Vu - A Front-End Developer specializing in building modern, high-performance web applications with React, Next.js, TypeScript, and Tailwind CSS.",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
