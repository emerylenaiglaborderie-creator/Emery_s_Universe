import { useState, useEffect, useRef } from 'react'

interface FrameSectionProps {
  title: string
  description: string
  last?: boolean
}

export default function FrameSection({ title, description, last = false }: FrameSectionProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          setVisible(true)
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplayedText(description)
            return
          }
          let i = 0
          interval = setInterval(() => {
            i += 2
            setDisplayedText(description.slice(0, i))
            if (i >= description.length) clearInterval(interval)
          }, 12)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [description])

  return (
    <section className={`frame-section reveal${visible ? ' reveal--visible' : ''}`} ref={sectionRef}>
      <h2 className="frame-title">{title}</h2>
      {/* Le texte complet réserve la place (pas de saut de mise en page) et reste lisible par les lecteurs d'écran */}
      <div className="text-block">
        <p className="text-block-full">{description}</p>
        <p className="text-block-typed" aria-hidden>{displayedText}</p>
      </div>
      {!last && <hr className="frame-divider" />}
    </section>
  )
}
