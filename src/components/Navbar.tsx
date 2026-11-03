import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/home', label: 'Présentation' },
  { to: '/projets', label: 'Mes projets' },
  { to: '/cv', label: 'Mon CV' },
]

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigation principale">
      <ul>
        {LINKS.map(l => (
          <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
        ))}
      </ul>
    </nav>
  )
}
