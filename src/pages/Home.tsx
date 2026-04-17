import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import FrameSection from '../components/FrameSection'
import ProjectsCarousel from '../components/ProjectsCarousel'

const FRAMES = [
  {
    id: 1,
    title: 'Qui suis-je ?',
    description:
      `Je suis une personne créative dans l'âme. Du haut de mes 21 ans, j'ai pratiqué le théâtre, écrit des pièces, des nouvelles, des poèmes, étudié la littérature anglaise et française, appris à dessiner, à me servir d'instruments, à chanter... Toujours à la recherche de nouvelles manières de créer, j'ai découvert la programmation en janvier dernier. Depuis, je me forme continuellement afin de maitriser ce domaine. Dans le cadre de mon BTS SIO, j'apprends les fondamentaux de l'informatique. Sur internet et dans les livres, j'apprends de manière complémentaire l'art du développement.`
  },
  {
    id: 2,
    title: 'Mon parcours',
    description:
      `Après avoir passé un baccalauréat en section internationale américaine, j'ai passé deux années en licence d'anglais. J'ai aussi pris part au cursus Acting in English aux Cours Florent Paris. D'un point de vue professionnelle, je dispose d'une experience assez polyvalente qui m'a permis de poser un premier pied dans le monde du travail. J'ai été assistante saisonnière en comptabilité au Crédit Agricole Morbihan. J'ai ensuite enseigné l'anglais en tant qu'intervenant.e chez Les Petits Bilingues. Aujourd'hui, je travaille en tant que stagiaire chez TomExplore, en développement web.`
  },
]

export default function Home() {
  return (
    <div className="home">
      <div className="home-fold">
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
        <ProjectsCarousel />
      </div>
      <hr className="divider" />
      {FRAMES.map((f, i) => (
        <FrameSection
          key={f.id}
          title={f.title}
          description={f.description}
          last={i === FRAMES.length - 1}
        />
      ))}

    </div>
  )
}
