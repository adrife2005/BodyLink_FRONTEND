import { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Nueva Cita - BodyLink',
  description: 'Programa una nueva cita con un paciente',
}

export default function NewAppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-6 mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Programar Nueva Cita
            </h1>
            <p className="text-lg text-muted-foreground">
              Selecciona paciente, fecha y hora para la consulta
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-muted-foreground">
              Próximamente...
            </h2>
            <p className="text-base text-muted-foreground">
              Estamos desarrollando el sistema de programación de citas
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}