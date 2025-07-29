import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: 'Gestión de Citas - BodyLink',
  description: 'Administra y programa citas con tus pacientes',
}

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={Calendar}
        titulo="Gestión de Citas"
        descripcion="Programa, modifica y gestiona todas las citas con tus pacientes de manera eficiente"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el sistema de gestión de citas y calendario
          </p>
        </div>
      </div>
    </div>
  )
}