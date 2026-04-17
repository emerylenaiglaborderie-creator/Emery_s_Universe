import { useState, useEffect, useRef } from 'react'

interface FrameSectionProps {
  title: string
  description: string
  last?: boolean
}

export default function FrameSection({ title, description, last = false }: FrameSectionProps) {
  const [displayedText, setDisplayedText] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          let i = 0
          interval = setInterval(() => {
            setDisplayedText(description.slice(0, i + 1))
            i++
            if (i >= description.length) clearInterval(interval)
          }, 10)
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
    <section className="frame-section" ref={sectionRef}>
      <div className="frame-title">
        <span>{title}</span>
      </div>
      <div className="text-block">{displayedText}</div>
      {!last && <hr className="frame-divider" />}
    </section>
  )
}
