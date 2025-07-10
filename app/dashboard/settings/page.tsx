import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Configuración - BodyLink',
  description: 'Configura tu perfil y preferencias de la aplicación',
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Configuración
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Personaliza tu perfil, preferencias de la aplicación y configuraciones de la cuenta.
        </p>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-muted-foreground mb-4">
            Próximamente...
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos desarrollando el panel de configuración
          </p>
        </div>
      </div>
    </div>
  )
}