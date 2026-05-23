import Education from "./Education"
import Languages from "./Languages"
import SectionTitle from "./SectionTitle"

function About({ education, languages, metrics }) {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="A propos" title="Qui suis-je ?" />
        <div className="grid lg:grid-cols-5 gap-10 md:gap-12 mt-12">
          <div className="lg:col-span-3 space-y-6 text-slate-300">
            <p className="text-xl md:text-2xl font-serif leading-relaxed">
              Je suis etudiant en Master 2 Informatique a l'Universite Clermont Auvergne, avec un profil oriente genie
              logiciel, web/mobile, data et intelligence artificielle.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Mon parcours combine la conception d'applications React, Flutter, Node.js, Laravel et Spring Boot avec des
              projets IA autour du RAG, des embeddings, de la recherche semantique et des API backend robustes.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-8 text-center">
              {metrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Education education={education} />
            <Languages languages={languages} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ value, label, className = "" }) {
  return (
    <div className={className}>
      <p className="metric">{value}</p>
      <p className="metric-label">{label}</p>
    </div>
  )
}

export default About
