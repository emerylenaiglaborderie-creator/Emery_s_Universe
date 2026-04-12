import Header from '../components/Header'
import FrameSection from '../components/FrameSection'
import ProjectsCarousel from '../components/ProjectsCarousel'

const FRAMES = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    imgAlt: 'Aperçu projet 1',
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    imgAlt: 'Aperçu projet 2',
  },
]

export default function Home() {
  return (
    <div className="home">
      <Header />
      <hr className="divider" />

      {FRAMES.map((f, i) => (
        <FrameSection
          key={f.id}
          description={f.description}
          imgAlt={f.imgAlt}
          last={i === FRAMES.length - 1}
        />
      ))}

      <ProjectsCarousel />
    </div>
  )
}
