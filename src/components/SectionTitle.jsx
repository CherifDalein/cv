function SectionTitle({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <div className={`section-line ${centered ? "mx-auto" : ""}`} />
    </div>
  )
}

export default SectionTitle
