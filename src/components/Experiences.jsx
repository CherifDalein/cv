import SectionTitle from "./SectionTitle"

function Experiences({ experiences }) {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Parcours" title="Experiences et Projets" />
        <div className="mt-12 grid lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }) {
  return (
    <article className="glass p-6 md:p-8 hover-lift border-t-2 border-yellow-500/70">
      <div className="flex items-center justify-between gap-4 mb-5">
        <p className="text-yellow-500 uppercase tracking-[0.2em] text-xs">{experience.period}</p>
        <p className="text-slate-500 text-xs uppercase tracking-[0.16em]">{experience.type}</p>
      </div>
      <h3 className="font-serif text-2xl mb-5 leading-tight">{experience.title}</h3>
      <ul className="space-y-3 text-slate-400 leading-relaxed">
        {experience.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-px w-4 shrink-0 bg-yellow-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Experiences
