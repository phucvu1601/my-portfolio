"use client"
import { useEffect, useState } from "react"

export function useActiveSection(
  sectionIds: string[],
  initialSection: string = "",
) {
  const [activeSection, setActiveSection] = useState<string>(initialSection)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section crosses the 50% line in the middle of the viewport
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // Shrink the observed area down to a single line at the vertical center of the viewport
        rootMargin: "-50% 0px -50% 0px",
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}
