'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
              Projets<br />
              <span className="gradient-text">sélectionnés</span>
            </h2>
          </div>
          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity"
          >
            Voir tous les projets
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Coming soon */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-px gradient-bg mb-12 mx-auto" />
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Bientôt disponible
          </p>
          <h3 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-6">
            Les projets arrivent
          </h3>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Nous préparons notre portfolio avec soin. Revenez très bientôt pour découvrir nos réalisations.
          </p>
        </div>
      </div>
    </section>
  )
}