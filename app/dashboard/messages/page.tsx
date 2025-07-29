import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: 'Mensajes - BodyLink',
  description: 'Comunícate con tus pacientes y gestiona conversaciones',
}

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={MessageSquare}
        titulo="Mensajes"
        descripcion="Mantén comunicación directa con tus pacientes y gestiona todas las conversaciones"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el sistema de mensajería
          </p>
        </div>
      </div>
    </div>
  )
}