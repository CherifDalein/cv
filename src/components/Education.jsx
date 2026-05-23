function Education({ education }) {
  return (
    <div className="glass p-6 md:p-8 hover-lift">
      <h3 className="font-serif text-2xl font-bold mb-6">Formation</h3>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={item.degree} className={`pl-4 border-l-2 ${index === 0 ? "border-yellow-500" : "border-slate-700"}`}>
            <p className="font-semibold text-slate-200">{item.degree}</p>
            <p className="text-slate-400 text-sm mt-1">{item.school}</p>
            <p className="text-yellow-500 text-xs uppercase tracking-[0.14em] mt-1">{item.period}</p>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
