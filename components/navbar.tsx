"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/toggle-mode"
import { AvatarLogo } from "@/components/ui/avatar-logo"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <AvatarLogo size="md" />
          <span className="font-bold text-xl">BodyLink</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Inicio
          </Link>
          <Link
            href="/patients"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/patients" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Pacientes
          </Link>
          <Link
            href="/appointments"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/appointments" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Citas
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link href="/login">
            <Button>Iniciar Sesión</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

