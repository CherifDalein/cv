import ContactLine from "./ContactLine"

function Hero({ profile, facts }) {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-8 pt-28 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
        <div className="space-y-7 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500/40 text-yellow-500 text-xs uppercase tracking-[0.2em] rounded-full">
            <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            {profile.availability}
          </span>

          <div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-none">
              {profile.firstName}
              <br />
              <span className="text-gradient">{profile.lastName}</span>
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px w-16 bg-yellow-500" />
              <p className="text-xl md:text-2xl text-slate-300 italic font-serif">{profile.role}</p>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Etudiant en Master 2 Informatique, interesse par le genie logiciel et l'intelligence artificielle. Je
            concois des applications web et mobiles avec une approche produit, data et backend fiable.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md text-sm text-slate-400">
            {facts.map((fact) => (
              <InfoLine key={fact} label={fact} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="group px-7 py-4 bg-yellow-500 text-slate-950 font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              Me contacter
              <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
            </a>
            <a
              href={profile.cvPath}
              className="px-7 py-4 border border-slate-700 hover:border-yellow-500 hover:text-yellow-500 transition-colors flex items-center justify-center"
            >
              Telecharger CV
            </a>
          </div>
        </div>

        <div className="space-y-6 reveal-delayed">
          <div className="glass p-6 md:p-8 hover-lift">
            <div className="relative border-2 border-slate-800 bg-slate-950">
              <div className="aspect-square w-full overflow-hidden bg-slate-900">
                <img
                  src={profile.photo}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="glass p-6 md:p-8 space-y-5 hover-lift">
            <h3 className="font-serif text-3xl font-bold">Contact</h3>
            <ContactLine label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactLine label="Telephone" value={profile.phone} href={profile.phoneHref} />
            <ContactLine label="Localisation" value={profile.location} />
            <ContactLine label="Mobilite" value={profile.mobility} />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoLine({ label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
      <span>{label}</span>
    </div>
  )
}

export default Hero
