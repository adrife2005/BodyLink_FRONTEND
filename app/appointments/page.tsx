import { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Citas - BodyLink',
  description: 'Sistema de gestión de citas para nutricionistas profesionales',
}

export default function AppointmentsLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Gestión de Citas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organiza tu agenda de manera eficiente con nuestro sistema de gestión de citas diseñado para nutricionistas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Agenda Inteligente
              </h3>
              <p className="text-muted-foreground">
                Programa citas de manera automática evitando conflictos de horarios y optimizando tu tiempo.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Recordatorios Automáticos
              </h3>
              <p className="text-muted-foreground">
                Envía recordatorios automáticos a tus pacientes para reducir las ausencias y mejorar la puntualidad.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Historial de Consultas
              </h3>
              <p className="text-muted-foreground">
                Mantén un registro completo de todas las consultas realizadas con notas y seguimiento.
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