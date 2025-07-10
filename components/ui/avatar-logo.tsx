import { cn } from "@/lib/utils"

interface AvatarLogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function AvatarLogo({ size = "md", className }: AvatarLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base"
  }

  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold",
        sizeClasses[size],
        className
      )}
    >
      BL
    </div>
  )
}