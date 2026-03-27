import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Projets — Studio Meringué',
  description: 'Découvrez nos réalisations en graphisme, identité visuelle, design éditorial et digital. Portfolio de Studio Meringué.',
}

export default function ProjectsPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main className="pt-20">
        {/* Page header */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight max-w-4xl">
              Nos <span className="gradient-text">réalisations</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Chaque projet est une histoire unique. Découvrez comment nous avons
              accompagné nos clients dans la création de leur univers visuel.
            </p>
          </div>
        </section>

        {/* Coming soon */}
        <section className="py-24 flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-px gradient-bg mb-12 mx-auto" />
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Bientôt disponible
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-6">
            Les projets arrivent
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Nous préparons notre portfolio avec soin. Revenez très bientôt pour découvrir nos réalisations.
          </p>
        </section>
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}