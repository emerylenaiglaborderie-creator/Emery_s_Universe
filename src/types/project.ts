export type Epreuve = 'E5' | 'E6'
export type Categorie = 'BTS SIO' | 'Projets Personnels' | 'Projets Professionnels'

export interface Project {
  id: number
  title: string
  description: string
  epreuve?: Epreuve
  categorie: Categorie
  stack: string[]
  githubUrl?: string
  image?: string
  pdfUrl?: string
}
