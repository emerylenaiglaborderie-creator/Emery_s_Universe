import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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
  const modalRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = `modal-title-${project.id}`

  // Échap pour fermer + focus piégé dans la modale
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusables = modalRef.current.querySelectorAll<HTMLElement>('a[href], button, iframe')
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Bloque le scroll de la page, place le focus dans la modale puis le rend à l'élément d'origine
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
      previouslyFocused?.focus()
    }
  }, [])

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Fermer">✕</button>

        {/* Image */}
        <div className="modal-img">
          {project.image ? (
            <>
              {!imgLoaded && <div className="skeleton" />}
              <img
                key={project.id}
                src={project.image}
                alt=""
                decoding="async"
                ref={img => { if (img?.complete) setImgLoaded(true) }}
                onLoad={() => setImgLoaded(true)}
                className={imgLoaded ? 'is-loaded' : undefined}
              />
            </>
          ) : (
            <span>Aperçu à venir</span>
          )}
        </div>

        <div className="modal-body">
          {/* En-tête : titre + liens */}
          <div className="modal-header">
            <h2 className="modal-title" id={titleId}>{project.title}</h2>
            <div className="modal-links">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="modal-link">
                  Voir la démo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-link">
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="modal-tags">
            {project.epreuve && <span className="projet-tag-epreuve">{project.epreuve}</span>}
            <span className="projet-tag-categorie">{project.categorie}</span>
          </div>

          {/* Description */}
          <p className="modal-desc">{project.description}</p>

          {/* Stack technique */}
          {project.stack.length > 0 && (
            <div className="modal-stack">
              <h3 className="modal-section-title">Stack technique</h3>
              <ul className="modal-stack-icons">
                {project.stack.map(tech => (
                  <li key={tech} className="stack-icon" title={tech}>
                    {STACK_ICONS[tech.toLowerCase()]
                      ? <img src={STACK_ICONS[tech.toLowerCase()]} alt={tech} />
                      : <span className="stack-icon-fallback">{tech}</span>
                    }
                  </li>
                ))}
              </ul>
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
    </div>,
    document.body
  )
}
