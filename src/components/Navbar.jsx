function Navbar({ menu, initials }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950/75 backdrop-blur border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl font-bold tracking-tight">
          <span className="text-yellow-500">{initials.charAt(0)}</span>
          {initials.slice(1)}
        </a>
        <ul className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.25em] text-slate-400">
          {menu.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-yellow-500 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
