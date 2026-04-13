import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FrameSection from '../components/FrameSection'
import ProjectsCarousel from '../components/ProjectsCarousel'

const FRAMES = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
]

export default function Home() {
  return (
    <div className="home">
      <Header>
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Présentation</Link></li>
            <li><Link to="/projets">Mes projets</Link></li>
            <li><Link to="/cv">Mon CV</Link></li>
          </ul>
        </nav>
      </Header>
      <hr className="divider" />
      <ProjectsCarousel />
      <hr className="divider" />
      {FRAMES.map((f, i) => (
        <FrameSection
          key={f.id}
          description={f.description}
          last={i === FRAMES.length - 1}
        />
      ))}

    </div>
  )
}
