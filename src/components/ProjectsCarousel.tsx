import { useState } from 'react'
import fateFactoryThumb from '../assets/fate-factory-thumb.jpg'

const PROJECTS = [
  { id: 1, title: 'Projet 1', image: fateFactoryThumb },
  { id: 2, title: 'Projet 2' },
  { id: 3, title: 'Projet 3' },
  { id: 4, title: 'Projet 4' },
  { id: 5, title: 'Projet 5' },
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
          {visible.map(p => (
            <div key={p.id} className="project-card">
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
