import BackgroundGlow from "@/components/containers/background-glow"
import Header from "@/components/header/header"
import About from "@/features/components/about"
import Contact from "@/features/components/contact"
import Home from "@/features/components/home"
import Projects from "@/features/components/projects"

export default function Portfolio() {
  return (
    <BackgroundGlow>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </BackgroundGlow>
  )
}
