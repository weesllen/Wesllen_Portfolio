import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"
import { Stacks } from "./components/sections/Stacks"

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
