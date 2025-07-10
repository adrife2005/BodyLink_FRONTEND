import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Noticias - BodyLink',
  description: 'Mantente actualizado con las últimas noticias del sector nutricional',
}

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Noticias
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mantente al día con las últimas investigaciones, tendencias y noticias del mundo de la nutrición.
        </p>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-muted-foreground mb-4">
            Próximamente...
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos desarrollando el feed de noticias especializadas
          </p>
        </div>
      </div>
    </div>
  )
}