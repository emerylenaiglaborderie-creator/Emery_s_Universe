import { useEffect, useState } from 'react'
import type { Project } from '../types/project'

// Ajoute ici les icônes de stack au fur et à mesure que tu les déposes dans assets/
// Exemple : import reactIcon from '../assets/stack/react.svg'
// puis dans STACK_ICONS : { react: reactIcon }
const STACK_ICONS: Record<string, string> = {
  react: new URL('../assets/react.svg', import.meta.url).href,
}

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        {/* Image */}
        <div className="modal-img">
          {project.image ? (
            <>
              {!imgLoaded && <div className="skeleton" />}
              <img
                key={project.id}
                src={project.image}
                alt={project.title}
                onLoad={() => setImgLoaded(true)}
                style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.3s', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </>
          ) : (
            <span>Aperçu à venir</span>
          )}
        </div>

        <div className="modal-body">
          {/* En-tête : titre + lien GitHub */}
          <div className="modal-header">
            <h2 className="modal-title">{project.title}</h2>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="modal-github"
                aria-label="Voir sur GitHub"
              >
                {/* Remplace par <img src={githubIcon} /> quand tu auras assets/github.svg */}
                <span className="modal-github-placeholder">GitHub</span>
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="modal-tags">
            {project.epreuve && <span className="projet-tag">{project.epreuve}</span>}
            <span className="projet-tag">{project.categorie}</span>
          </div>

          {/* Description */}
          <p className="modal-desc">{project.description}</p>

          {/* Stack technique */}
          {project.stack.length > 0 && (
            <div className="modal-stack">
              <h3 className="modal-section-title">Stack technique</h3>
              <div className="modal-stack-icons">
                {project.stack.map(tech => (
                  <div key={tech} className="stack-icon" title={tech}>
                    {STACK_ICONS[tech.toLowerCase()]
                      ? <img src={STACK_ICONS[tech.toLowerCase()]} alt={tech} />
                      : <span className="stack-icon-fallback">{tech}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documentation PDF */}
          {project.pdfUrl && (
            <div className="modal-pdf">
              <h3 className="modal-section-title">Documentation</h3>
              <iframe
                src={project.pdfUrl}
                title={`Documentation ${project.title}`}
                className="modal-pdf-viewer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
