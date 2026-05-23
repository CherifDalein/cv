function Progress({ label, level, value }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <span className="text-slate-300">{label}</span>
        <span className="text-yellow-500 text-xs uppercase tracking-[0.1em]">{level}</span>
      </div>
      <div className="h-1.5 bg-slate-800">
        <div className="h-full bg-yellow-500" style={{ width: value }} />
      </div>
    </div>
  )
}

export default Progress
