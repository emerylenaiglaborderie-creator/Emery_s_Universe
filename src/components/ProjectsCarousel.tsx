import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const VISIBLE = 3

export default function ProjectsCarousel() {
  const [start, setStart] = useState(0)

  const canPrev = start > 0
  const canNext = start + VISIBLE < PROJECTS.length

  return (
    <section className="projects-section" aria-label="Aperçu des projets">

      <div className="carousel">
        <button
          className="carousel-arrow"
          onClick={() => setStart(s => s - 1)}
          disabled={!canPrev}
          aria-label="Précédent"
        >
          &#9664;
        </button>

        <div className="carousel-viewport">
          <ul className="carousel-track" style={{ '--start': start } as React.CSSProperties}>
            {PROJECTS.map((p, i) => (
              <li
                key={p.id}
                className={`project-card${i === start + 1 ? ' project-card--focus' : ''}`}
                aria-hidden={i < start || i >= start + VISIBLE ? true : undefined}
              >
                <Link
                  to={`/projets?projet=${p.id}`}
                  className="project-card-link"
                  tabIndex={i < start || i >= start + VISIBLE ? -1 : undefined}
                >
                  {p.image && <img src={p.image} alt="" loading={i < VISIBLE ? 'eager' : 'lazy'} decoding="async" />}
                  <span className="project-card-title">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
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
