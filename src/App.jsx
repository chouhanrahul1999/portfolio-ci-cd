import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experince'
import Contact from './components/sections/Contact'
import About from './components/sections/About'
import ProjectDetail from './components/pages/ProjectDetail'
import { projects } from './data/projects'

function App() {
  const Portfolio = () => (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:projectId" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
