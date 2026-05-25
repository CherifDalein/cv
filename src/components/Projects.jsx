function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center">

      <h2 className="text-4xl font-bold mb-10">Projets</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {["Morpyam", "BRT Dakar", "Adventure in Wordland"].map((p,i)=>(
          <div key={i}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition text-center">
            {p}
          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects
