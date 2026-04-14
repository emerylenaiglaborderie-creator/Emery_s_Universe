import { useState } from 'react'

interface FrameSectionProps {
  title: string
  description: string
  last?: boolean
}

export default function FrameSection({ title, description, last = false }: FrameSectionProps) {
  const [open, setOpen] = useState(false)

  return (
    <section className="frame-section">
      <div className="frame-title" onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        <span className={`frame-arrow${open ? ' frame-arrow--open' : ''}`}>▸</span>
      </div>
      {open && <div className="text-block">{description}</div>}
      {!last && <hr className="frame-divider" />}
    </section>
  )
}
