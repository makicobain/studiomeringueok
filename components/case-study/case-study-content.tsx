'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Project, projects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/project-card'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseStudyContentProps {
  project: Project
}

// ── Lightbox ────────────────────────────────────────────────
function Lightbox({
  images,
  initialIndex,
  title,
  onClose,
}: {
  images: string[]
  initialIndex: number
  title: string
  onClose: () => void
}) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Bouton fermer */}
      <button
        className="absolute top-6 right-6 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors text-foreground"
        onClick={onClose}
        aria-label="Fermer"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Compteur */}
      {images.length > 1 && (
        <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
          {current + 1} / {images.length}
        </span>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={`${title} - Image ${current + 1}`}
          width={1400}
          height={900}
          className="object-contain w-full max-h-[85vh] rounded-lg"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Navigation (si plusieurs images) */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors text-foreground"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-4 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors text-foreground"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  )
}

// ── Galerie adaptative ───────────────────────────────────────
function GalleryLayout({
  images,
  title,
  onImageClick,
}: {
  images: string[]
  title: string
  onImageClick: (index: number) => void
}) {
  if (images.length === 0) return null

  const imgClass = "object-cover hover:scale-105 transition-transform duration-700 cursor-zoom-in"

  if (images.length === 1) {
    return (
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted" onClick={() => onImageClick(0)}>
        <Image src={images[0]} alt={`${title} - Image 1`} fill className={imgClass} />
      </div>
    )
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, i) => (
          <div key={image} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted" onClick={() => onImageClick(i)}>
            <Image src={image} alt={`${title} - Image ${i + 1}`} fill className={imgClass} />
          </div>
        ))}
      </div>
    )
  }

  if (images.length === 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 relative aspect-[16/7] rounded-lg overflow-hidden bg-muted" onClick={() => onImageClick(0)}>
          <Image src={images[0]} alt={`${title} - Image 1`} fill className={imgClass} />
        </div>
        {images.slice(1).map((image, i) => (
          <div key={image} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted" onClick={() => onImageClick(i + 1)}>
            <Image src={image} alt={`${title} - Image ${i + 2}`} fill className={imgClass} />
          </div>
        ))}
      </div>
    )
  }

  // 4 images ou plus
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 relative aspect-[16/7] rounded-lg overflow-hidden bg-muted" onClick={() => onImageClick(0)}>
        <Image src={images[0]} alt={`${title} - Image 1`} fill className={imgClass} />
      </div>
      {images.slice(1).map((image, i) => (
        <div
          key={image}
          className={cn(
            'relative rounded-lg overflow-hidden bg-muted',
            images.length % 2 === 0 && i === images.length - 2
              ? 'md:col-span-2 aspect-[16/7]'
              : 'aspect-[4/3]'
          )}
          onClick={() => onImageClick(i + 1)}
        >
          <Image src={image} alt={`${title} - Image ${i + 2}`} fill className={imgClass} />
        </div>
      ))}
    </div>
  )
}

// ── Composant principal ──────────────────────────────────────
export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in')
        })
      },
      { threshold: 0.1 }
    )
    const elements = contentRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2)

  return (
    <div ref={contentRef}>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          initialIndex={lightboxIndex}
          title={project.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full gradient-bg text-background mb-6">
                {project.categoryLabel}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{project.excerpt}</p>
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

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted cursor-zoom-in"
            onClick={() => setLightboxIndex(0)}
          >
            <Image src={project.coverImage} alt={project.title} fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
          </div>
        </div>
      </section>

      {/* Texte */}
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

      {/* Galerie */}
      {project.images.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <GalleryLayout
              images={project.images}
              title={project.title}
              onImageClick={(i) => setLightboxIndex(i)}
            />
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
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Vous avez un projet similaire ?</h2>
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
