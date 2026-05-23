import SectionTitle from "./SectionTitle"

function Contact({ profile }) {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <SectionTitle eyebrow="Contact" title="Travaillons Ensemble" centered />
        <p className="mt-10 text-xl md:text-2xl text-slate-300 font-serif italic">
          Interesse par mon profil ? Contacte-moi pour discuter d'un stage, d'une alternance ou d'un projet.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="px-9 py-4 bg-yellow-500 text-slate-950 font-bold hover:bg-yellow-400 transition-colors"
          >
            Envoyer un email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-9 py-4 border-2 border-slate-700 font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors"
          >
            Voir mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
