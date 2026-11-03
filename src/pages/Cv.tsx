import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function TimelineItem({ children, isLast = false, delay = 0 }: { children: React.ReactNode; isLast?: boolean; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`cv-timeline-item${isLast ? ' cv-timeline-item--last' : ''} reveal${visible ? ' reveal--visible' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

const SKILLS_MAIN = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
const SKILLS_BASES = ['PHP', 'Java', 'Rust', 'LotusScript', 'C#']
const SKILLS_TOOLS = ['React', 'HCL Domino', 'Git', 'VSCode', 'WordPress', 'Firebase']

const SOFT_SKILLS = ['Rigoureuse', 'Curieuse', 'Polyvalente', 'Sens de la communication']

const LANGUES = [
  { lang: 'Anglais', niveau: 'Courant — C1', pct: 90 },
  { lang: 'Espagnol', niveau: 'B1', pct: 50 },
]

const FORMATIONS = [
  {
    period: '2025 – 2027',
    title: 'BTS SIO option SLAM',
    school: 'My Digital School — Rennes',
    desc: 'Solutions Logicielles et Applications Métiers. En alternance chez Orange Business.',
  },
  {
    period: '2024 – Aujourd\'hui',
    title: 'Certification développement fullstack',
    school: 'Codecademy',
    desc: null,
  },
  {
    period: '2019 – 2022',
    title: 'Baccalauréat International Américain',
    school: 'Lycée Alain René Lesage — Vannes',
    desc: null,
  },
]

const EXPERIENCES: { period: string; title: string; company: string; desc: string; tags?: string[] }[] = [
  {
    period: '2026 – Aujourd\'hui',
    title: 'Lead Dev',
    company: 'PowerRig',
    desc: 'Développement frontend d\'une application de calcul de puissance électrique dans le domaine de l\'audiovisuel.',
  },
  {
    period: 'Septembre 2026 – Juillet 2027',
    title: 'Spécialiste logiciel (alternance)',
    company: 'Orange Business — Cesson-Sévigné',
    desc: 'Gestion de projets client, de l\'expression des besoins au développement, jusqu\'à la mise en production et la maintenance.',
    tags: ['LotusScript', 'HCL Domino'],
  },
  {
    period: 'Mars – Juillet 2026',
    title: 'Stagiaire développeuse',
    company: 'TomExplore — Vannes',
    desc: 'Aide à la conception d\'une API et conception d\'une nouvelle fonctionnalité.',
    tags: ['React', 'TypeScript', 'Vite', 'Firebase', 'Docker'],
  },
  {
    period: 'Été 2023',
    title: 'Assistante comptable',
    company: 'Crédit Agricole — Vannes',
    desc: 'Maîtrise Excel.',
    tags: ['Excel'],
  },
]

const PROJETS = [
  {
    year: '2026',
    title: 'Slay Your Enemies',
    desc: 'Site de révisions s\'inspirant des jeux vidéo rétro. V0 en cours de développement.',
    tags: ['TypeScript', 'React', 'Rust', 'Axum'],
    wip: true,
  },
  {
    year: '2026',
    title: 'Site Portfolio V2',
    desc: 'Le site que vous visitez.',
    tags: ['React', 'TypeScript', 'Vite'],
    wip: false,
  },
  {
    year: '2025',
    title: 'Site Portfolio HTML/CSS/JS',
    desc: null,
    tags: ['HTML', 'CSS', 'JavaScript'],
    wip: false,
  },
  {
    year: '2025',
    title: 'Vitrine WordPress',
    desc: null,
    tags: ['WordPress', 'PHP'],
    wip: false,
  },
]

type MobileTab = 'profil' | 'parcours'

export default function Cv() {
  const [mobileTab, setMobileTab] = useState<MobileTab>('parcours')

  return (
    <div className="cv-page">
      <Header>
        <Navbar />
      </Header>

      <hr className="divider" />

      {/* Mobile tabs */}
      <div className="cv-mobile-tabs">
        <button
          className={`cv-tab-btn${mobileTab === 'profil' ? ' cv-tab-btn--active' : ''}`}
          aria-pressed={mobileTab === 'profil'}
          onClick={() => setMobileTab('profil')}
        >
          Profil
        </button>
        <button
          className={`cv-tab-btn${mobileTab === 'parcours' ? ' cv-tab-btn--active' : ''}`}
          aria-pressed={mobileTab === 'parcours'}
          onClick={() => setMobileTab('parcours')}
        >
          Parcours
        </button>
      </div>

      <div className="cv-layout">
        {/* ── SIDEBAR ── */}
        <aside className={`cv-sidebar${mobileTab === 'profil' ? ' cv-sidebar--visible' : ''}`}>

          <section className="cv-section">
            <h2 className="cv-section-title">Compétences</h2>
            <p className="cv-skills-label">Maîtrise</p>
            <div className="cv-tags">
              {SKILLS_MAIN.map(s => (
                <span key={s} className="cv-tag cv-tag--main">{s}</span>
              ))}
            </div>
            <p className="cv-skills-label">Bases</p>
            <div className="cv-tags">
              {SKILLS_BASES.map(s => (
                <span key={s} className="cv-tag cv-tag--base">{s}</span>
              ))}
            </div>
            <p className="cv-skills-label">Outils & Frameworks</p>
            <div className="cv-tags">
              {SKILLS_TOOLS.map(s => (
                <span key={s} className="cv-tag cv-tag--tool">{s}</span>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Soft Skills</h2>
            <div className="cv-tags">
              {SOFT_SKILLS.map(s => (
                <span key={s} className="cv-tag cv-tag--soft">{s}</span>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Langues</h2>
            {LANGUES.map(l => (
              <div key={l.lang} className="cv-langue">
                <div className="cv-langue-header">
                  <span className="cv-langue-name">{l.lang}</span>
                  <span className="cv-langue-niveau">{l.niveau}</span>
                </div>
                <div className="cv-langue-bar">
                  <div className="cv-langue-fill" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Intérêts</h2>
            <ul className="cv-list">
              <li>Codage créatif : projets personnels, démo de jeu vidéo en cours</li>
              <li>Arts : Théâtre, musique, écriture</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Infos</h2>
            <ul className="cv-list">
              <li>Rennes</li>
              <li>Permis B, véhiculée</li>
              <li>
                <a href="https://github.com/emerylenaiglaborderie-creator" target="_blank" rel="noreferrer" className="cv-link">
                  GitHub
                </a>
              </li>
            </ul>
          </section>

        </aside>

        {/* ── MAIN ── */}
        <main className={`cv-main${mobileTab === 'parcours' ? ' cv-main--visible' : ''}`}>

          {/* Accroche */}
          <div className="cv-accroche">
            <p>
              <strong>Développeuse web motivée</strong>, orientée projets, avec une forte envie d'apprendre
              et de contribuer au développement et à la maintenance d'applications métier modernes.
            </p>
            <p>
              En formation <strong>BTS SIO option SLAM</strong> à My Digital School, je suis actuellement en{' '}
              <strong>alternance</strong> en tant que <strong>spécialiste logiciel</strong> chez{' '}
              <strong>Orange Business</strong> à Rennes, avec pour perspective un Bachelor développeur web,
              puis une école d'ingénieurs.
            </p>
          </div>

          {/* Formations */}
          <section className="cv-section">
            <h2 className="cv-section-title cv-section-title--main">Diplômes & Formations</h2>
            <div className="cv-timeline">
              {FORMATIONS.map((f, i) => (
                <TimelineItem key={i} isLast={i === FORMATIONS.length - 1} delay={i * 80}>
                  <div className="cv-timeline-dot" />
                  <div className="cv-timeline-content">
                    <span className="cv-timeline-period">{f.period}</span>
                    <strong className="cv-timeline-title">{f.title}</strong>
                    <span className="cv-timeline-sub">{f.school}</span>
                    {f.desc && <p className="cv-timeline-desc">{f.desc}</p>}
                  </div>
                </TimelineItem>
              ))}
            </div>
          </section>

          {/* Expériences */}
          <section className="cv-section">
            <h2 className="cv-section-title cv-section-title--main">Expériences professionnelles</h2>
            <div className="cv-timeline">
              {EXPERIENCES.map((e, i) => (
                <TimelineItem key={i} isLast={i === EXPERIENCES.length - 1} delay={i * 80}>
                  <div className="cv-timeline-dot cv-timeline-dot--exp" />
                  <div className="cv-timeline-content">
                    <span className="cv-timeline-period">{e.period}</span>
                    <strong className="cv-timeline-title">{e.title}</strong>
                    <span className="cv-timeline-sub">{e.company}</span>
                    <p className="cv-timeline-desc">{e.desc}</p>
                    {e.tags && (
                      <div className="cv-tags" style={{ marginTop: 6 }}>
                        {e.tags.map(t => (
                          <span key={t} className="cv-tag cv-tag--tool">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </TimelineItem>
              ))}
            </div>
          </section>

          {/* Projets */}
          <section className="cv-section">
            <h2 className="cv-section-title cv-section-title--main">Projets</h2>
            <div className="cv-timeline">
              {PROJETS.map((p, i) => (
                <TimelineItem key={i} isLast={i === PROJETS.length - 1} delay={i * 80}>
                  <div className="cv-timeline-dot cv-timeline-dot--project" />
                  <div className="cv-timeline-content">
                    <span className="cv-timeline-period">{p.year}</span>
                    <strong className="cv-timeline-title">
                      {p.title}
                      {p.wip && <span className="cv-wip-badge">En cours</span>}
                    </strong>
                    {p.desc && <p className="cv-timeline-desc">{p.desc}</p>}
                    {p.tags.length > 0 && (
                      <div className="cv-tags" style={{ marginTop: 6 }}>
                        {p.tags.map(t => (
                          <span key={t} className="cv-tag cv-tag--tool">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </TimelineItem>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}
