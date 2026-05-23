import SectionTitle from "./SectionTitle"

function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Expertise" title="Competences Techniques" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((group) => (
            <article key={group.title} className={`glass p-6 md:p-8 border-l-4 hover-lift ${group.color}`}>
              <h3 className="font-serif text-2xl font-bold mb-6">{group.title}</h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center group">
                    <span className="text-slate-300">{item}</span>
                    <span className="h-px flex-1 ml-4 bg-slate-800 group-hover:bg-yellow-500/30 transition-colors" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
