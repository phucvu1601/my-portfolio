import BackgroundGlow from "@/components/containers/background-glow"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
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
      <Footer />
    </BackgroundGlow>
  )
}
