import mascot from '../assets/triangle.png'

interface HeaderProps {
  large?: boolean
}

export default function Header({ large = false }: HeaderProps) {
  return (
    <header className={`site-header${large ? ' site-header--large' : ''}`}>
      <h1 className="chalk-title">EMERY'S UNIVERSE</h1>
      <img src={mascot} alt="mascot" className="mascot" />
    </header>
  )
}
