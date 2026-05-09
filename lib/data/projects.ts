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
  {
    slug: 'mystic-temple',
    title: 'Mystic Temple',
    client: 'Synaps',
    category: 'affiche',
    categoryLabel: 'Affiches',
    year: '2024',
    excerpt: 'Identité visuelle et supports réseaux sociaux pour une soirée électro psychédélique à Bordeaux.',
    description: 'Synaps, collectif bordelais, organisait une soirée à L\'Entrepôt avec comme seule direction créative : le nom "Mystic Temple" et une esthétique psychédélique. Carte blanche totale.',
    challenge: 'Créer un univers visuel fort et cohérent sur plusieurs formats (bannière Facebook, posts et story Instagram) à partir d\'un nom seul, sans brief visuel ni charte existante.',
    solution: 'Parti pris sur un fond marbled liquide rose-violet, une illustration de temple générée en 3D, et une typographie extra-bold condensée blanche pour un contraste maximal. Déclinaison systématique sur tous les formats avec une cohérence immédiate.',
    result: 'Ensemble de visuels déployés sur les réseaux de Synaps et L\'Entrepôt pour la soirée du 16 février 2024.',
    coverImage: '/images/projects/mystic-temple/cover.jpg',
    images: [
      '/images/projects/mystic-temple/01.jpg',
      '/images/projects/mystic-temple/02.jpg',
      '/images/projects/mystic-temple/03.jpg',
      '/images/projects/mystic-temple/04.jpg',
    ],
    services: ['Direction artistique', 'Conception graphique', 'Réseaux sociaux'],
    featured: true,
  },
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
