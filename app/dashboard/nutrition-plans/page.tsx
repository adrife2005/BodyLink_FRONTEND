import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { Apple } from "lucide-react"

export const metadata: Metadata = {
  title: 'Planes Nutricionales - BodyLink',
  description: 'Crea y gestiona planes nutricionales personalizados para tus pacientes',
}

export default function NutritionPlansPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={Apple}
        titulo="Planes Nutricionales"
        descripcion="Diseña planes nutricionales personalizados basados en las necesidades específicas de cada paciente"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el sistema de creación y gestión de planes nutricionales
          </p>
        </div>
      </div>
    </div>
  )
}