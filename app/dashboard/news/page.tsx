import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { Newspaper } from "lucide-react"

export const metadata: Metadata = {
  title: 'Noticias - BodyLink',
  description: 'Mantente actualizado con las últimas noticias del sector nutricional',
}

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={Newspaper}
        titulo="Noticias"
        descripcion="Mantente al día con las últimas investigaciones, tendencias y noticias del mundo de la nutrición"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el feed de noticias especializadas
          </p>
        </div>
      </div>
    </div>
  )
}