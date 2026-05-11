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
  | 'reseaux-sociaux'

export interface Project {
  slug: string
  title: string
  client: string
  category: ProjectCategory
  categoryLabel: string
  year: string
  excerpt: string
  coverImage: string
  description: string
  challenge: string
  solution: string
  result: string
  images: string[]
  services: string[]
  featured: boolean
  tags?: string[]
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
    category: 'reseaux-sociaux',
    categoryLabel: 'Réseaux Sociaux',
    year: '2024',
    excerpt: 'Identité visuelle et supports réseaux sociaux pour une soirée électro psychédélique à Bordeaux.',
    description: 'Synaps, collectif bordelais, organisait une soirée à L\'Entrepôt avec comme seule direction créative : le nom "Mystic Temple" et une esthétique psychédélique. Carte blanche totale.',
    challenge: 'Créer un univers visuel fort et cohérent sur plusieurs formats (bannière Facebook, posts et story Instagram) à partir d\'un nom seul, sans brief visuel ni charte existante.',
    solution: 'Parti pris sur un fond marbled liquide rose-violet, une illustration de temple générée en 3D, et une typographie extra-bold condensée blanche pour un contraste maximal. Déclinaison systématique sur tous les formats avec une cohérence immédiate.',
    result: 'Ensemble de visuels déployés sur les réseaux de Synaps et L\'Entrepôt pour la soirée du 16 février 2024.',
    coverImage: '/images/projects/mystic-temple/01.jpg',
    images: [
      '/images/projects/mystic-temple/01.jpg',
      '/images/projects/mystic-temple/02.jpg',
      '/images/projects/mystic-temple/03.jpg',
      '/images/projects/mystic-temple/04.jpg',
    ],
    services: ['Direction artistique', 'Conception graphique', 'Réseaux sociaux'],
    featured: true,
  },
  {
    slug: 'diabolo-records',
    title: 'Diabolo Records',
    client: 'Diabolo Records',
    category: 'identite-visuelle',
    categoryLabel: 'Identité Visuelle',
    year: '2022',
    excerpt: 'Identité visuelle complète pour une boutique de vinyles et concept-bar autour de la musique.',
    description: 'Diabolo Records est une boutique de vinyles doublée d\'un concept-bar, un lieu de vie autour de la musique qui ouvre ses portes en décembre 2023. Le projet couvre l\'intégralité de l\'identité : logo, icônes, communication d\'ouverture, menu bar, réseaux sociaux et produits dérivés.',
    challenge: 'Créer une identité forte ancrée dans l\'univers du vinyle et du rock, suffisamment flexible pour habiller aussi bien les supports print que digitaux, les affiches événementielles et les goodies.',
    solution: 'Un logotype construit autour d\'une tête de lecture stylisée intégrée dans le "o" de Diabolo, avec une palette rouge-noir-blanc à l\'esprit rock. Le symbole de la platine traverse tous les supports comme un fil conducteur graphique, décliné en demi-ton sur les affiches d\'ouverture.',
    result: 'Identité déployée sur l\'ensemble des supports pour l\'ouverture du 18 décembre 2023 : affiches, menu, réseaux sociaux, stickers et produits dérivés.',
    coverImage: '/images/projects/diabolo-records/07.jpg',
    images: [
      '/images/projects/diabolo-records/01.jpg',
      '/images/projects/diabolo-records/02.jpg',
      '/images/projects/diabolo-records/03.jpg',
      '/images/projects/diabolo-records/04.jpg',
      '/images/projects/diabolo-records/05.jpg',
      '/images/projects/diabolo-records/06.jpg',
      '/images/projects/diabolo-records/07.jpg',
    ],
    services: ['Logo', 'Charte graphique', 'Affiches', 'Menu', 'Réseaux sociaux', 'Produits dérivés'],
    featured: true,
  },
  {
    slug: 'oue',
    title: 'OUE',
    client: 'Projet personnel',
    category: 'ux-ui',
    categoryLabel: 'UX/UI Design',
    year: '2025',
    excerpt: 'Application de streaming musical avec suivi d\'actualités artistiques et réservation de concerts en ligne.',
    description: 'OUE est une application mobile de streaming musical pensée pour les mélomanes qui ne fréquentent pas les réseaux sociaux. En plus d\'écouter de la musique, l\'utilisateur peut suivre l\'actualité de ses artistes favoris et réserver des billets de concerts directement depuis l\'app.',
    challenge: 'Les plateformes de streaming existantes ne permettent pas de suivre facilement l\'actualité des artistes ni de réserver des concerts sans passer par des applications tierces. Il manquait un outil tout-en-un centré sur l\'expérience musicale complète.',
    solution: 'Une interface dark mode épurée avec une identité visuelle forte autour du logo OUE en typographie bulle violet-fuchsia. Navigation par onglets claire (Accueil, Recherche, Bibliothèque, Concerts, Paramètres), avec une fonctionnalité de géolocalisation des concerts à proximité filtrée par artistes favoris.',
    result: 'Prototype complet couvrant 5 écrans principaux : accueil personnalisé, recherche par genre, bibliothèque d\'artistes favoris, concerts à proximité avec réservation intégrée, et paramètres utilisateur.',
    coverImage: '/images/projects/oue/cover.jpg',
    images: [
      '/images/projects/oue/01.jpg',
      '/images/projects/oue/02.jpg',
      '/images/projects/oue/03.jpg',
      '/images/projects/oue/04.jpg',
      '/images/projects/oue/05.jpg',
      '/images/projects/oue/06.jpg',
    ],
    services: ['UX Design', 'UI Design', 'Prototypage', 'Design System'],
    featured: true,
  },
  {
    slug: 'the-heartmakers',
    title: 'The Heartmakers',
    client: 'Projet scolaire',
    category: 'ux-ui',
    categoryLabel: 'UX/UI Design',
    year: '2025',
    excerpt: 'Refonte et identité visuelle d\'un site communautaire dédié aux passionnés de loisirs créatifs.',
    description: 'The Heartmakers est un projet scolaire de refonte d\'un site e-commerce existant, enrichi d\'une dimension communautaire à la manière de Pinterest. La plateforme permet aux passionnés de loisirs créatifs de partager leurs créations, découvrir des inspirations, et s\'inscrire à des ateliers créatifs partout en France.',
    challenge: 'Repartir d\'un site e-commerce existant pour le transformer en plateforme communautaire complète, en créant de A à Z une identité visuelle cohérente et chaleureuse qui reflète l\'univers du fait-main et du DIY.',
    solution: 'Une identité visuelle rose et rouge aux formes rondes et ludiques, avec un logo typographique expressif et un système d\'icônes maison (cœur, smiley, maison, fleur). Le site couvre l\'accueil communautaire, une page événements géolocalisés sur carte de France, un profil utilisateur avec galerie de créations, et une page contact.',
    result: 'Prototype desktop complet couvrant 6 pages : splash screen, accueil, événements avec réservation, profil utilisateur, qui sommes-nous et contact. Identité visuelle intégralement créée pour le projet.',
    coverImage: '/images/projects/the-heartmakers/cover.jpg',
    images: [
      '/images/projects/the-heartmakers/01.jpg',
      '/images/projects/the-heartmakers/02.jpg',
      '/images/projects/the-heartmakers/03.jpg',
      '/images/projects/the-heartmakers/04.jpg',
      '/images/projects/the-heartmakers/05.jpg',
      '/images/projects/the-heartmakers/06.jpg',
    ],
    services: ['UX Design', 'UI Design', 'Identité visuelle', 'Prototypage'],
    featured: true,
  },
]

// ─────────────────────────────────────────────────────────────
//  Catégories
// ─────────────────────────────────────────────────────────────
export const categories = [
  { slug: 'tous', label: 'Tous les projets' },
  { slug: 'identite-visuelle', label: 'Identité Visuelle' },
  { slug: 'ux-ui', label: 'UX/UI Design' },
  { slug: 'affiche', label: 'Affiches' },
  { slug: 'reseaux-sociaux', label: 'Réseaux Sociaux' },
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
