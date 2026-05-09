'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Project, projects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/project-card'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseStudyContentProps {
  project: Project
}

// Mise en page de galerie selon le nombre d'images
function GalleryLayout({ images, title }: { images: string[]; title: string }) {
  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted">
        <Image src={images[0]} alt={`${title} - Image 1`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    )
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, i) => (
          <div key={image} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <Image src={image} alt={`${title} - Image ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    )
  }

  if (images.length === 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Première image prend toute la largeur */}
        <div className="md:col-span-2 relative aspect-[16/7] rounded-lg overflow-hidden bg-muted">
          <Image src={images[0]} alt={`${title} - Image 1`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        {images.slice(1).map((image, i) => (
          <div key={image} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <Image src={image} alt={`${title} - Image ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    )
  }

  // 4 images ou plus : grille 2 colonnes, première pleine largeur
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 relative aspect-[16/7] rounded-lg overflow-hidden bg-muted">
        <Image src={images[0]} alt={`${title} - Image 1`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
      </div>
      {images.slice(1).map((image, i) => (
        <div
          key={image}
          className={cn(
            'relative rounded-lg overflow-hidden bg-muted',
            // Si le dernier élément est seul sur sa rangée (nombre impair après la 1ère), pleine largeur
            images.length % 2 === 0 && i === images.length - 2
              ? 'md:col-span-2 aspect-[16/7]'
              : 'aspect-[4/3]'
          )}
        >
          <Image src={image} alt={`${title} - Image ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      ))}
    </div>
  )
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = contentRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Projets similaires (même catégorie, hors projet actuel)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2)

  return (
    <div ref={contentRef}>
      {/* Hero */}
      <section className="relative">
        {/* Retour */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
        </div>

        {/* En-tête du projet */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full gradient-bg text-background mb-6">
                {project.categoryLabel}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.excerpt}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Client</p>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Année</p>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="px-3 py-1 text-sm border border-border rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Contenu textuel */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="font-serif text-3xl font-medium mb-6">Contexte</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 mb-16" style={{ transitionDelay: '100ms' }}>
            <h2 className="font-serif text-3xl font-medium mb-6">Le défi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 mb-16" style={{ transitionDelay: '200ms' }}>
            <h2 className="font-serif text-3xl font-medium mb-6">Notre approche</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            <h2 className="font-serif text-3xl font-medium mb-6">Résultat</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.result}</p>
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      {project.images.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <GalleryLayout images={project.images} title={project.title} />
          </div>
        </section>
      )}

      {/* Projets similaires */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">Projets similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">Discutons de vos ambitions créatives.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 gradient-bg text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}
