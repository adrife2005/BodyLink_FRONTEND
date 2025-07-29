import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { UserPlus } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nuevo Paciente - BodyLink',
  description: 'Registra un nuevo paciente en tu base de datos',
}

export default function NewPatientPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={UserPlus}
        titulo="Registrar Nuevo Paciente"
        descripcion="Agrega la información básica y datos nutricionales del paciente"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el formulario de registro de pacientes
          </p>
        </div>
      </div>
    </div>
  )
}