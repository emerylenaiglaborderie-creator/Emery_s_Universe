import { useState, useEffect, useRef } from 'react'
import mascot from '../assets/triangle-splash.png'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      for (const ref of [leftEyeRef, rightEyeRef]) {
        if (!ref.current) continue
        const rect = ref.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx)
        const d = 2
        ref.current.querySelector<HTMLDivElement>('.btt-pupil')!.style.transform =
          `translate(${Math.cos(angle) * d}px, ${Math.sin(angle) * d}px)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <button
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut"
    >
      <div className="btt-mascot-container">
        <img src={mascot} alt="" className="btt-mascot" />
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
