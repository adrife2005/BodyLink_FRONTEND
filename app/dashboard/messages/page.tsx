import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mensajes - BodyLink',
  description: 'Comunícate con tus pacientes y gestiona conversaciones',
}

export default function MessagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Mensajes
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mantén comunicación directa con tus pacientes y gestiona todas las conversaciones.
        </p>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-muted-foreground mb-4">
            Próximamente...
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos desarrollando el sistema de mensajería
          </p>
        </div>
      </div>
    </div>
  )
}