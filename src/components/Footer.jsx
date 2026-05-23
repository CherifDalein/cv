function Footer({ initials, name }) {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="font-serif text-2xl font-bold">
          <span className="text-yellow-500">{initials.charAt(0)}</span>
          {initials.slice(1)}
        </p>
        <p className="text-slate-500 text-sm">2026 {name}. Tous droits reserves.</p>
      </div>
    </footer>
  )
}

export default Footer
