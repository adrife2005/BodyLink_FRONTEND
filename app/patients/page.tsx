import { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Pacientes - BodyLink',
  description: 'Información sobre la gestión de pacientes en BodyLink',
}

export default function PatientsLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Gestión de Pacientes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo BodyLink te ayuda a gestionar de manera eficiente toda la información de tus pacientes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Historiales Completos
              </h3>
              <p className="text-muted-foreground">
                Mantén un registro detallado de cada paciente con historial médico, preferencias alimentarias y progreso nutricional.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Seguimiento Personalizado
              </h3>
              <p className="text-muted-foreground">
                Crea planes nutricionales personalizados y realiza un seguimiento del progreso de cada paciente.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="/login" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Comenzar Ahora
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}