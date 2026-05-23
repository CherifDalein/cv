import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import {
  education,
  experiences,
  heroFacts,
  languages,
  menu,
  metrics,
  profile,
  skills,
} from "./data/cvData"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-30 bg-[radial-gradient(600px_at_0px_0px,rgba(234,179,8,0.15),transparent_80%)]" />

      <Navbar menu={menu} initials={profile.initials} />
      <Hero profile={profile} facts={heroFacts} />
      <About education={education} languages={languages} metrics={metrics} />
      <Experiences experiences={experiences} />
      <Skills skills={skills} />
      <Contact profile={profile} />
      <Footer initials={profile.initials} name={`${profile.firstName} ${profile.lastName}`} />
    </div>
  )
}

export default App
