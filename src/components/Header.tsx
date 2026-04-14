import mascot from '../assets/triangle.png'
import type { ReactNode } from 'react'

interface HeaderProps {
  large?: boolean
  children?: ReactNode
}

export default function Header({ large = false, children }: HeaderProps) {
  return (
    <header className={`site-header${large ? ' site-header--large' : ''}`}>
      <h1 className="chalk-title">EMERY'S UNIVERSE</h1>
      <img src={mascot} alt="mascot" className="mascot" />
      {children}
    </header>
  )
}
