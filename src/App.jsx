import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Activity from './components/sections/Activity'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activity />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
