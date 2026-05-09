// ─────────────────────────────────────────────────────────────
//  STUDIO MERINGUÉ — Données projets
//  Pour ajouter un projet : copier le bloc "TEMPLATE" ci-dessous,
//  remplir les champs, déposer les images dans /public/images/projects/[slug]/
// ─────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'identite-visuelle'
  | 'ux-ui'
  | 'affiche'
  | 'editorial'
  | 'motion'
  | 'packaging'
  | 'digital'

export interface Project {
  // ── Obligatoire ──────────────────────────────────────────
  slug: string           // URL du projet : /projets/[slug]  ex: "mon-projet"
  title: string          // Titre affiché
  client: string         // Nom du client
  category: ProjectCategory
  categoryLabel: string  // Libellé affiché (ex: "Identité Visuelle")
  year: string           // ex: "2024"
  excerpt: string        // Courte description (1-2 phrases, visible dans la grille)
  coverImage: string     // Image principale : "/images/projects/[slug]/cover.jpg"

  // ── Fiche projet (case study) ────────────────────────────
  description: string    // Contexte complet
  challenge: string      // Le défi / la problématique
  solution: string       // Notre approche
  result: string         // Résultat

  // ── Galerie ──────────────────────────────────────────────
  // Mettre 1 à N images : "/images/projects/[slug]/01.jpg", "02.jpg"…
  images: string[]

  // ── Métadonnées ──────────────────────────────────────────
  services: string[]     // ex: ["Logo", "Charte graphique", "Typographie"]
  featured: boolean      // true = affiché sur la page d'accueil (max 3-4)
  tags?: string[]        // Optionnel, mots-clés supplémentaires
}

// ─────────────────────────────────────────────────────────────
//  TEMPLATE — Copier ce bloc pour ajouter un projet
// ─────────────────────────────────────────────────────────────
//
//  {
//    slug: 'nom-du-projet',
//    title: 'Nom du projet',
//    client: 'Nom du client',
//    category: 'identite-visuelle',
//    categoryLabel: 'Identité Visuelle',
//    year: '2024',
//    excerpt: 'Une phrase qui résume le projet en quelques mots.',
//    description: 'Le contexte complet du projet, 2-4 phrases.',
//    challenge: 'La problématique ou le défi posé.',
//    solution: "L'approche créative ou technique adoptée.",
//    result: 'Ce que le projet a produit comme résultat concret.',
//    coverImage: '/images/projects/nom-du-projet/cover.jpg',
//    images: [
//      '/images/projects/nom-du-projet/01.jpg',
//      '/images/projects/nom-du-projet/02.jpg',
//    ],
//    services: ['Logo', 'Charte graphique'],
//    featured: false,
//    tags: [],
//  },
//
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // Ajouter tes projets ici ↓
]

// ─────────────────────────────────────────────────────────────
//  Catégories — Filtre sur la page /projets
//  Ajouter / retirer une catégorie selon tes besoins
// ─────────────────────────────────────────────────────────────
export const categories = [
  { slug: 'tous', label: 'Tous les projets' },
  { slug: 'identite-visuelle', label: 'Identité Visuelle' },
  { slug: 'ux-ui', label: 'UX/UI Design' },
  { slug: 'affiche', label: 'Affiches' },
  { slug: 'editorial', label: 'Éditorial' },
  { slug: 'motion', label: 'Motion' },
  { slug: 'packaging', label: 'Packaging' },
  { slug: 'digital', label: 'Digital' },
]

// ─────────────────────────────────────────────────────────────
//  Helpers (ne pas modifier)
// ─────────────────────────────────────────────────────────────
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'tous') return projects
  return projects.filter((p) => p.category === category)
}
