import type React from "react"

export default function BackgroundGlow({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <>
      {/* Fixed background covering the entire screen */}
      <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-bg-glow">
        {/* Blue glow - Top left corner */}
        <div className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-2/3 w-2/3 rounded-full bg-primary-glow blur-[150px]" />

        {/* Purple/Red glow - Bottom right corner */}
        <div className="pointer-events-none absolute bottom-0 right-0 translate-y-1/2 h-4/5 w-2/3 lg:w-1/3 rounded-full bg-secondary-glow blur-[140px]" />
      </div>

      {/* Content layer that scrolls normally */}
      <div className="relative min-h-screen w-full">{children}</div>
    </>
  )
}
