import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface BadgeConfig {
  label: string
  className: string
}

interface StatusBadgeProps {
  config: BadgeConfig
  className?: string
}

export function StatusBadge({ config, className }: StatusBadgeProps) {
  return (
    <Badge 
      variant="outline" 
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  )
}