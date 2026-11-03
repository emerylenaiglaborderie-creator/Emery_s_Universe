import { useState, useEffect, useRef } from 'react'
import mascot from '../assets/triangle-splash.webp'
import { useTrackingEyes } from '../hooks/useTrackingEyes'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)
  useTrackingEyes([leftEyeRef, rightEyeRef], 2)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={scrollTop}
      aria-label="Retour en haut"
      tabIndex={visible ? 0 : -1}
    >
      <div className="btt-mascot-container">
        <img src={mascot} alt="" className="btt-mascot" width={48} height={48} />
        <div className="btt-eye btt-eye-left" ref={leftEyeRef}>
          <div className="btt-pupil" />
        </div>
        <div className="btt-eye btt-eye-right" ref={rightEyeRef}>
          <div className="btt-pupil" />
        </div>
      </div>
    </button>
  )
}
