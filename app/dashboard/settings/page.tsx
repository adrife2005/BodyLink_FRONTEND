import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { Settings } from "lucide-react"

export const metadata: Metadata = {
  title: 'Configuración - BodyLink',
  description: 'Configura tu perfil y preferencias de la aplicación',
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={Settings}
        titulo="Configuración"
        descripcion="Personaliza tu perfil, preferencias de la aplicación y configuraciones de la cuenta"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el panel de configuración
          </p>
        </div>
      </div>
    </div>
  )
}