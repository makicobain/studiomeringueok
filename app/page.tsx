import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Hero } from '@/components/home/hero'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { ServicesPreview } from '@/components/home/services-preview'
import { CTASection } from '@/components/home/cta-section'
import { TeamGrid } from '@/components/team/team-grid'

export default function HomePage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main>
        <Hero />
        <FeaturedProjects />
        <ServicesPreview />

        {/* Section équipe */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              L'équipe
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
              Celles et ceux qui<br />
              <span className="gradient-text">font le studio</span>
            </h2>
          </div>
          <TeamGrid />
        </section>

        <CTASection />
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}
