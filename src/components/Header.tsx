import mascot from '../assets/triangle-splash.webp'
import type { ReactNode } from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTrackingEyes } from '../hooks/useTrackingEyes'

const TITLE = "EMERY'S UNIVERSE"

interface HeaderProps {
  large?: boolean
  animateTitle?: boolean
  children?: ReactNode
}

export default function Header({ large = false, animateTitle = false, children }: HeaderProps) {
  const [displayedTitle, setDisplayedTitle] = useState(animateTitle ? '' : TITLE)
  const [titleDone, setTitleDone] = useState(!animateTitle)
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)
  useTrackingEyes([leftEyeRef, rightEyeRef], 3)

  useEffect(() => {
    if (!animateTitle) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedTitle(TITLE)
      setTitleDone(true)
      return
    }
    let i = 0
    const iv = setInterval(() => {
      i++
      setDisplayedTitle(TITLE.slice(0, i))
      if (i >= TITLE.length) { clearInterval(iv); setTitleDone(true) }
    }, 75)
    return () => clearInterval(iv)
  }, [animateTitle])

  const mascotEl = (
    <>
      <img src={mascot} alt="" className="mascot" width={400} height={400} />
      <div className="eye eye-left" ref={leftEyeRef}>
        <div className="pupil" />
      </div>
      <div className="eye eye-right" ref={rightEyeRef}>
        <div className="pupil" />
      </div>
    </>
  )

  return (
    <header className={`site-header${large ? ' site-header--large' : ''}`}>
      <h1 className="chalk-title" aria-label={TITLE}>
        <span aria-hidden>{displayedTitle}</span>
        {!titleDone && <span className="chalk-title-cursor" aria-hidden>|</span>}
      </h1>
      {large ? (
        <div className="mascot-container">{mascotEl}</div>
      ) : (
        <Link to="/" className="mascot-container mascot-container--link" aria-label="Retour à l'écran d'accueil">
          {mascotEl}
        </Link>
      )}
      {children}
    </header>
  )
}
