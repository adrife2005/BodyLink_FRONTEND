import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { CalendarPlus } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nueva Cita - BodyLink',
  description: 'Programa una nueva cita con un paciente',
}

export default function NewAppointmentPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={CalendarPlus}
        titulo="Programar Nueva Cita"
        descripcion="Selecciona paciente, fecha y hora para la consulta"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el sistema de programación de citas
          </p>
        </div>
      </div>
    </div>
  )
}