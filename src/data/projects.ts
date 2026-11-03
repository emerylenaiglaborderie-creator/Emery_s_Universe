import type { Project, Epreuve, Categorie } from '../types/project'

import fateFactoryThumb from '../assets/fate-factory-thumb.webp'
import itsRainingThumb from '../assets/its-raining-thumb.webp'
import imATeapotThumb from '../assets/im-a-teapot.webp'
import penseBeteThumb from '../assets/pense-bete-thumb.webp'
import GLPIThumb from '../assets/GLPI-thumb.webp'
import powerRigThumb from '../assets/powerrig-thumb.webp'
import slayYourEnemiesThumb from '../assets/slay-your-enemies-thumb.webp'

// Source unique des projets : utilisée par la page Projets et le carrousel de l'accueil
export const PROJECTS: Project[] = [
  {
    id: 6,
    title: 'PowerRig',
    image: powerRigThumb,
    description: `Application de calcul de puissance électrique dans le domaine de l'audiovisuel. J'y suis lead dev et je m'occupe du développement frontend. Projet confidentiel : la stack et le code ne sont pas publics.`,
    categorie: 'Projets Professionnels',
    stack: [],
  },
  {
    id: 7,
    title: 'Slay Your Enemies',
    image: slayYourEnemiesThumb,
    description: `Site de révisions s'inspirant des jeux vidéo rétro : cours, fiches, échéances, et un dragon à faire grandir en révisant régulièrement. V0 en cours de développement.`,
    categorie: 'Projets Personnels',
    stack: ['TypeScript', 'React', 'Rust', 'Axum'],
    githubUrl: 'https://github.com/emerylenaiglaborderie-creator/slay-your-enemies-bts',
  },
  {
    id: 1,
    title: 'Fate Factory',
    image: fateFactoryThumb,
    description: 'Mon premier projet de site web, codé en 2025. Une mécanique simple, mais interactive.',
    categorie: 'Projets Personnels',
    stack: ['HTML', 'CSS', 'JS'],
    demoUrl: 'https://emerylenaiglaborderie-creator.github.io/Fate-Factory/',
  },
  {
    id: 2,
    title: 'Its Raining - DEMO',
    image: itsRainingThumb,
    description: 'Une démo de jeu vidéo en cours de création.',
    categorie: 'Projets Personnels',
    stack: ['C#', 'Unity2D'],
  },
  {
    id: 3,
    title: 'Im a Teapot',
    image: imATeapotThumb,
    description: `Projet de site communautaire d'information et d'échange sur les différentes erreurs HTTP. La partie communautaire est en cours de production.`,
    categorie: 'Projets Personnels',
    stack: ['TypeScript', 'Vue', 'Firebase', 'Node'],
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

export const EPREUVES: Epreuve[] = ['E5', 'E6']
export const CATEGORIES: Categorie[] = ['BTS SIO', 'Projets Personnels', 'Projets Professionnels']
