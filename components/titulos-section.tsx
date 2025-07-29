import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TitulosSectionProps {
  icon: LucideIcon
  titulo: string
  descripcion: string
  className?: string
}

export function TitulosSection({ 
  icon: Icon, 
  titulo, 
  descripcion, 
  className 
}: TitulosSectionProps) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-start gap-2">
        <div className="bg-card border border-border rounded-lg p-3 flex-shrink-0">
          <Icon className="h-6 w-6 text-foreground" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-clamp-xl font-bold text-foreground leading-none">
            {titulo}
          </h1>
          <p className="text-clamp-xs text-muted-foreground leading-none">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  )
}