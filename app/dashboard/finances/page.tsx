import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finanzas - BodyLink',
  description: 'Gestiona los aspectos financieros de tu consulta nutricional',
}

export default function FinancesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Finanzas
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Controla los ingresos, gastos y facturación de tu consulta nutricional.
        </p>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-muted-foreground mb-4">
            Próximamente...
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos desarrollando el módulo de gestión financiera
          </p>
        </div>
      </div>
    </div>
  )
}