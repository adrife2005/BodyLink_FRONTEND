import { Metadata } from 'next'
import { TitulosSection } from "@/components/titulos-section"
import { DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: 'Finanzas - BodyLink',
  description: 'Gestiona los aspectos financieros de tu consulta nutricional',
}

export default function FinancesPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={DollarSign}
        titulo="Finanzas"
        descripcion="Controla los ingresos, gastos y facturación de tu consulta nutricional"
      />
      
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Próximamente...
          </h2>
          <p className="text-base text-muted-foreground">
            Estamos desarrollando el módulo de gestión financiera
          </p>
        </div>
      </div>
    </div>
  )
}