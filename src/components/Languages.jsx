import Progress from "./Progress"

function Languages({ languages }) {
  return (
    <div className="glass p-6 md:p-8 hover-lift">
      <h3 className="font-serif text-2xl font-bold mb-6">Langues</h3>
      <div className="space-y-4">
        {languages.map((language) => (
          <Progress key={language.label} {...language} />
        ))}
      </div>
    </div>
  )
}

export default Languages
