import { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ProjectModal from '../components/ProjectModal'
import RevealItem from '../components/RevealItem'
import { PROJECTS, EPREUVES, CATEGORIES } from '../data/projects'
import type { Epreuve, Categorie } from '../types/project'

function CardImage({ src }: { src?: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="projet-card-img">
      {src && !loaded && <div className="skeleton" />}
      {src && (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          ref={img => { if (img?.complete) setLoaded(true) }}
          onLoad={() => setLoaded(true)}
          className={loaded ? 'is-loaded' : undefined}
        />
      )}
    </div>
  )
}

export default function Projets() {
  const [filterEpreuve, setFilterEpreuve] = useState<Epreuve | null>(null)
  const [filterCategorie, setFilterCategorie] = useState<Categorie | null>(null)
  // Le projet ouvert est dans l'URL (?projet=id) : lien partageable, et le carrousel de l'accueil peut y pointer
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const selected = PROJECTS.find(p => String(p.id) === searchParams.get('projet')) ?? null

  // Ouvert depuis la grille : on empile une entrée d'historique, pour que « retour » ferme la modale
  const openProject = (id: number) => setSearchParams({ projet: String(id) }, { state: { fromGrid: true } })
  const closeProject = () => {
    if (location.state?.fromGrid) navigate(-1)
    else setSearchParams({}, { replace: true })
  }

  const filtered = PROJECTS.filter(p => {
    if (filterEpreuve && p.epreuve !== filterEpreuve) return false
    if (filterCategorie && p.categorie !== filterCategorie) return false
    return true
  })

  return (
    <div className="projets">
      <Header>
        <Navbar />
      </Header>
      <hr className="divider" />

      <main>
        <p className="projets-intro">
          Voici une sélection de projets réalisés dans le cadre de mon BTS SIO et en dehors.
          Chaque projet reflète mes compétences en développement web et en gestion de systèmes.
        </p>

        <div className="projets-filters" role="group" aria-label="Filtrer les projets">
          <div className="filter-group">
            {EPREUVES.map(e => (
              <button
                key={e}
                className={`filter-btn-epreuve${filterEpreuve === e ? ' filter-btn--active' : ''}`}
                aria-pressed={filterEpreuve === e}
                onClick={() => setFilterEpreuve(filterEpreuve === e ? null : e)}
              >
                {e}
              </button>
            ))}
          </div>
          <div className="filter-group">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`filter-btn-categorie${filterCategorie === c ? ' filter-btn--active' : ''}`}
                aria-pressed={filterCategorie === c}
                onClick={() => setFilterCategorie(filterCategorie === c ? null : c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="projets-empty">Aucun projet ne correspond aux filtres sélectionnés.</p>
        ) : (
          <div className="projets-grid">
            {filtered.map((p, i) => (
              <RevealItem key={p.id} delay={i * 80}>
                <button type="button" className="projet-card" onClick={() => openProject(p.id)}>
                  <CardImage src={p.image} />
                  <div className="projet-card-body">
                    <div className="projet-card-tags">
                      {p.epreuve && <span className="projet-tag-epreuve">{p.epreuve}</span>}
                      <span className="projet-tag-categorie">{p.categorie}</span>
                    </div>
                    <h3 className="projet-card-title">{p.title}</h3>
                    <p className="projet-card-desc">{p.description}</p>
                  </div>
                </button>
              </RevealItem>
            ))}
          </div>
        )}
      </main>

      {selected && (
        <ProjectModal project={selected} onClose={closeProject} />
      )}
    </div>
  )
}
