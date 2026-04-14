import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ProjectModal from '../components/ProjectModal'
import type { Project, Epreuve, Categorie } from '../types/project'

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Projet 1',
    description: 'Description du projet 1.',
    epreuve: 'E5',
    categorie: 'BTS SIO',
    stack: ['React'],
    githubUrl: '',
    pdfUrl: '',
  },
  {
    id: 2,
    title: 'Projet 2',
    description: 'Description du projet 2.',
    epreuve: 'E6',
    categorie: 'BTS SIO',
    stack: [],
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Projet 3',
    description: 'Description du projet 3.',
    epreuve: null,
    categorie: 'Projets Personnels',
    stack: [],
  },
  {
    id: 4,
    title: 'Projet 4',
    description: 'Description du projet 4.',
    epreuve: null,
    categorie: 'Projets Professionnels',
    stack: [],
  },
  {
    id: 5,
    title: 'Projet 5',
    description: 'Description du projet 5.',
    epreuve: 'E5',
    categorie: 'Projets Personnels',
    stack: [],
  },
]

const EPREUVES: Epreuve[] = ['E5', 'E6']
const CATEGORIES: Categorie[] = ['BTS SIO', 'Projets Personnels', 'Projets Professionnels']

export default function Projets() {
  const [filterEpreuve, setFilterEpreuve] = useState<Epreuve | null>(null)
  const [filterCategorie, setFilterCategorie] = useState<Categorie | null>(null)
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = PROJECTS.filter(p => {
    if (filterEpreuve && p.epreuve !== filterEpreuve) return false
    if (filterCategorie && p.categorie !== filterCategorie) return false
    return true
  })

  return (
    <div className="projets">
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

      <p className="projets-intro">
        Voici une sélection de projets réalisés dans le cadre de mon BTS SIO et en dehors.
        Chaque projet reflète mes compétences en développement web et en gestion de systèmes.
      </p>

      <div className="projets-filters">
        <div className="filter-group">
          {EPREUVES.map(e => (
            <button
              key={e}
              className={`filter-btn-epreuve${filterEpreuve === e ? ' filter-btn--active' : ''}`}
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
          {filtered.map(p => (
            <div key={p.id} className="projet-card" onClick={() => setSelected(p)}>
              <div className="projet-card-img" />
              <div className="projet-card-body">
                <div className="projet-card-tags">
                  {p.epreuve && <span className="projet-tag-epreuve">{p.epreuve}</span>}
                  <span className="projet-tag-categorie">{p.categorie}</span>
                </div>
                <h3 className="projet-card-title">{p.title}</h3>
                <p className="projet-card-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
