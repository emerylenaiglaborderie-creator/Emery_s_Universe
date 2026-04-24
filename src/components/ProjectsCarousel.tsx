import { useState } from 'react'
import fateFactoryThumb from '../assets/fate-factory-thumb.jpg'
import itsRainingThumb from '../assets/its-raining-thumb.png'
import imATeapotThumb from '../assets/im-a-teapot.png'
import penseBeteThumb from '../assets/pense-bete-thumb.png'
import GLPIThumb from '../assets/GLPI-thumb.png'

const PROJECTS = [
  { id: 1, title: 'Fate Factory', image: fateFactoryThumb },
  { id: 2, title: 'Its Raining', image: itsRainingThumb },
  { id: 3, title: 'Im a Teapot', image: imATeapotThumb },
  { id: 4, title: 'Pense Bete', image: penseBeteThumb },
  { id: 5, title: 'SI - GLPI', image: GLPIThumb },
]

const VISIBLE = 3

export default function ProjectsCarousel() {
  const [start, setStart] = useState(0)

  const canPrev = start > 0
  const canNext = start + VISIBLE < PROJECTS.length
  const visible = PROJECTS.slice(start, start + VISIBLE)

  return (
    <section className="projects-section">

      <div className="carousel">
        <button
          className="carousel-arrow"
          onClick={() => setStart(s => s - 1)}
          disabled={!canPrev}
          aria-label="Précédent"
        >
          &#9664;
        </button>

        <div className="carousel-track">
          {visible.map((p, i) => (
            <div key={p.id} className={`project-card${i === 1 ? ' project-card--focus' : ''}`}>
              {p.image && <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow"
          onClick={() => setStart(s => s + 1)}
          disabled={!canNext}
          aria-label="Suivant"
        >
          &#9654;
        </button>
      </div>
    </section>
  )
}
