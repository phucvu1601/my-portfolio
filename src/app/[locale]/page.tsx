import BackgroundGlow from "@/components/containers/background-glow"
import Header from "@/components/header/header"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Home from "@/components/sections/home"
import Projects from "@/components/sections/projects"

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
