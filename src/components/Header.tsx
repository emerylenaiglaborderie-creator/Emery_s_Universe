import mascot from '../assets/triangle.png'
import type { ReactNode } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  large?: boolean
  children?: ReactNode
}

export default function Header({ large = false, children }: HeaderProps) {
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 })
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 })
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      for (const [ref, setter] of [
        [leftEyeRef, setLeftPupil],
        [rightEyeRef, setRightPupil],
      ] as const) {
        if (!ref.current) continue
        const rect = ref.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx)
        const dist = 3
        setter({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <header className={`site-header${large ? ' site-header--large' : ''}`}>
      <h1 className="chalk-title">EMERY'S UNIVERSE</h1>
      <div className="mascot-container" onClick={() => !large && navigate('/')} style={{ cursor: large ? 'default' : 'pointer' }}>
        <img src={mascot} alt="mascot" className="mascot" />
        <div className="eye eye-left" ref={leftEyeRef}>
          <div className="pupil" style={{ transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)` }} />
        </div>
        <div className="eye eye-right" ref={rightEyeRef}>
          <div className="pupil" style={{ transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)` }} />
        </div>
      </div>
      {children}
    </header>
  )
}
