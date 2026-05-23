function ContactLine({ label, value, href }) {
  const content = (
    <>
      <span className="text-xs text-slate-500 uppercase tracking-[0.14em]">{label}</span>
      <span className="text-slate-200 group-hover:text-yellow-500 transition-colors">{value}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="group flex flex-col gap-1">
        {content}
      </a>
    )
  }

  return <div className="flex flex-col gap-1">{content}</div>
}

export default ContactLine
