import Header from '../components/Header'
import Navbar from '../components/Navbar'
import FrameSection from '../components/FrameSection'
import ProjectsCarousel from '../components/ProjectsCarousel'
import RevealItem from '../components/RevealItem'
import cvPicture from '../assets/cvPicture.webp'

const FRAMES = [
  {
    id: 1,
    title: 'Qui suis-je ?',
    description:
      `Je suis une personne créative dans l'âme. Du haut de mes 22 ans, j'ai pratiqué le théâtre, écrit des pièces, des nouvelles, des poèmes, étudié la littérature anglaise et française, appris à dessiner, à me servir d'instruments, à chanter... Toujours à la recherche de nouvelles manières de créer, j'ai découvert la programmation en 2024. Depuis, je me forme continuellement afin de maitriser ce domaine. Dans le cadre de mon BTS SIO, j'apprends les fondamentaux de l'informatique. Sur internet et dans les livres, j'apprends de manière complémentaire l'art du développement.`
  },
  {
    id: 2,
    title: 'Mon parcours',
    description:
      `Après avoir passé un baccalauréat en section internationale américaine, j'ai passé deux années en licence d'anglais. J'ai aussi pris part au cursus Acting in English aux Cours Florent Paris. D'un point de vue professionnel, je dispose d'une expérience assez polyvalente qui m'a permis de poser un premier pied dans le monde du travail. J'ai été assistante saisonnière en comptabilité au Crédit Agricole Morbihan. J'ai ensuite enseigné l'anglais en tant qu'intervenant.e chez Les Petits Bilingues. Au printemps 2026, j'ai effectué un stage en développement web chez TomExplore. Aujourd'hui, je suis en alternance chez Orange Business en tant que spécialiste logiciel, et lead dev frontend sur PowerRig, une application de calcul de puissance électrique pour l'audiovisuel. La suite : un Bachelor développeur web, puis une école d'ingénieurs.`
  },
]

export default function Home() {
  return (
    <div className="home">
      <div className="home-fold">
        <Header>
          <Navbar />
        </Header>
        <hr className="divider" />
        <ProjectsCarousel />
      </div>
      <hr className="divider" />

      <main>
        <RevealItem>
          <section className="about-section">
            <div className="about-photo-wrapper">
              <img src={cvPicture} alt="Portrait d'Emery" className="about-photo" width={180} height={240} decoding="async" />
            </div>
            <div className="about-text">
              <p className="about-name">Emery</p>
              <p className="about-role">Développeuse web &amp; créative</p>
              <p className="about-location">Rennes · BTS SIO SLAM · Alternance Orange Business</p>
            </div>
          </section>
        </RevealItem>

        <hr className="divider" />
        {FRAMES.map((f, i) => (
          <FrameSection
            key={f.id}
            title={f.title}
            description={f.description}
            last={i === FRAMES.length - 1}
          />
        ))}
      </main>
    </div>
  )
}
