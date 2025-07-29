import { TitulosSection } from "@/components/titulos-section"
import { LayoutDashboard } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={LayoutDashboard}
        titulo="Dashboard Principal"
        descripcion="Resumen general de tu consulta nutricional"
      />
      
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-muted-foreground">Próximamente...</h2>
          <p className="text-base text-muted-foreground">Estamos desarrollando el dashboard principal</p>
        </div>
      </div>
    </div>
  )
}