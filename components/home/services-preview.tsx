'use client'

import { useEffect, useRef } from 'react'
import { Palette, BookOpen, Monitor, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Identité Visuelle',
    description: 'Logo, charte graphique, système de marque complet pour affirmer votre singularité.',
  },
  {
    icon: BookOpen,
    title: 'Design Éditorial',
    description: 'Mise en page, direction artistique de publications, livres et magazines.',
  },
  {
    icon: Monitor,
    title: 'Digital',
    description: 'Web design, interfaces utilisateur, présence digitale cohérente.',
  },
  {
    icon: Sparkles,
    title: 'Direction Artistique',
    description: 'Accompagnement créatif global, de la conception à la réalisation.',
  },
]

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('.service-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Expertises
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            Ce que nous<br />
            <span className="gradient-text">faisons le mieux</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-item relative p-8 rounded-lg bg-background border border-border"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-1">
                <div className="inline-flex p-3 rounded-lg bg-secondary mb-6">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-item {
          opacity: 0;
          transform: translateY(2rem);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .service-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}