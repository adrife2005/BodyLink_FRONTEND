import { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Nuevo Paciente - BodyLink',
  description: 'Registra un nuevo paciente en tu base de datos',
}

export default function NewPatientPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-6 mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Registrar Nuevo Paciente
            </h1>
            <p className="text-lg text-muted-foreground">
              Agrega la información básica y datos nutricionales del paciente
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-muted-foreground">
              Próximamente...
            </h2>
            <p className="text-base text-muted-foreground">
              Estamos desarrollando el formulario de registro de pacientes
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}