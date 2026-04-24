import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import ProjectModal from '../components/ProjectModal'
import RevealItem from '../components/RevealItem'
import type { Project, Epreuve, Categorie } from '../types/project'

import fateFactoryThumb from '../assets/fate-factory-thumb.jpg'
import itsRainingThumb from '../assets/its-raining-thumb.png'
import imATeapotThumb from '../assets/im-a-teapot.png'
import penseBeteThumb from '../assets/pense-bete-thumb.png'
import GLPIThumb from '../assets/GLPI-thumb.png'

function CardImage({ src, alt }: { src?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="projet-card-img">
      {src && !loaded && <div className="skeleton" />}
      {src && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      )}
    </div>
  )
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Fate Factory',
    image: fateFactoryThumb,
    description: 'Mon premier projet de site web, codé en 2025. Une mécanique simple, mais interactive.',
    categorie: 'Projets Personnels',
    stack: ['HTML', 'CSS', 'JS'],
    githubUrl: 'https://emerylenaiglaborderie-creator.github.io/Fate-Factory/',
    pdfUrl: '',
  },
  {
    id: 2,
    title: 'Its Raining - DEMO',
    image: itsRainingThumb,
    description: 'Une démo de jeu vidéo en cours de création. ',
    categorie: 'Projets Personnels',
    stack: ['C#, Unity2D'],
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Im a Teapot',
    image: imATeapotThumb,
    description: `Projet de site communautaire d'information et d'échange sur les différentes erreurs HTTP. La partie communautaire est en cours de production.`,
    categorie: 'Projets Personnels',
    stack: ['Typescript','Vue', 'Firebase, Node'],
  },
  {
    id: 4,
    title: 'Mini SI - GLPI',
    image: GLPIThumb,
    description: `Mise en place d'un système d'information en mode projet: répondre au besoin d'une entreprise, analyser le processus, réaliser la tache.`,
    epreuve: 'E5',
    categorie: 'Projets Professionnels',
    stack: ['GLPI', 'Windows Server'],
  },
  {
    id: 5,
    title: 'Pense bête liens',
    image: penseBeteThumb,
    description: `Petit projet fait en classe pour s'entrainer à maitriser TypeScript et Vue. Backend en cours de création.`,
    epreuve: 'E6',
    categorie: 'BTS SIO',
    stack: ['TypeScript', 'Vue', 'PostMan'],
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
            <li><NavLink to="/home">Présentation</NavLink></li>
            <li><NavLink to="/projets">Mes projets</NavLink></li>
            <li><NavLink to="/cv">Mon CV</NavLink></li>
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
          {filtered.map((p, i) => (
            <RevealItem key={p.id} delay={i * 80}>
              <div className="projet-card" onClick={() => setSelected(p)}>
                <CardImage src={p.image} alt={p.title} />
                <div className="projet-card-body">
                  <div className="projet-card-tags">
                    {p.epreuve && <span className="projet-tag-epreuve">{p.epreuve}</span>}
                    <span className="projet-tag-categorie">{p.categorie}</span>
                  </div>
                  <h3 className="projet-card-title">{p.title}</h3>
                  <p className="projet-card-desc">{p.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
