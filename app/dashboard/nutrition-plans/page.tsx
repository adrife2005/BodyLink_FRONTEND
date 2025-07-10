import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Planes Nutricionales - BodyLink',
  description: 'Crea y gestiona planes nutricionales personalizados para tus pacientes',
}

export default function NutritionPlansPage() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Planes Nutricionales
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diseña planes nutricionales personalizados basados en las necesidades específicas de cada paciente.
          </p>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-muted-foreground mb-4">
              Próximamente...
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos desarrollando el sistema de creación y gestión de planes nutricionales
            </p>
          </div>
        </div>
    </div>
  )
}