import { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Gestión de Pacientes - BodyLink',
  description: 'Administra y gestiona todos tus pacientes en un solo lugar',
}

export default function PatientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Gestión de Pacientes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Administra expedientes, seguimientos nutricionales y planes personalizados para cada paciente.
          </p>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-muted-foreground mb-4">
              Próximamente...
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos desarrollando las herramientas de gestión de pacientes
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}