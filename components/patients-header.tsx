"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Search, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

interface PatientsHeaderProps {
  totalPatients: number
  onSearchChange?: (searchTerm: string) => void
}

export function PatientsHeader({ totalPatients, onSearchChange }: PatientsHeaderProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onSearchChange?.(value)
  }

  const handleNewPatient = () => {
    router.push("/dashboard/patients/new")
  }

  return (
    <div className="space-y-4">
      {/* Layout para pantallas grandes (LG+) */}
      <div className="hidden lg:flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Buscador */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por Nombre, Apellido, eMail..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          {/* Separador vertical */}
          <Separator orientation="vertical" className="h-8" />
          
          {/* Resultado de pacientes */}
          <div className="text-clamp-sm text-muted-foreground whitespace-nowrap">
            {totalPatients} {totalPatients === 1 ? 'paciente' : 'pacientes'} encontrados
          </div>
        </div>
        
        {/* Botón de nuevo paciente - alineado a la derecha */}
        <Button onClick={handleNewPatient} className="h-12 text-clamp-sm dark:text-foreground text-background">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Paciente
        </Button>
      </div>

      {/* Layout para pantallas medianas y pequeñas (MD y abajo) */}
      <div className="lg:hidden space-y-4">
        {/* Buscador 100% ancho */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por Nombre, Apellido, eMail..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 h-12 w-full"
          />
        </div>
        
        {/* Resultado de pacientes */}
        <div className="text-clamp-sm text-muted-foreground">
          {totalPatients} {totalPatients === 1 ? 'paciente' : 'pacientes'} encontrados
        </div>
        
        {/* Botón solo ícono alineado a la derecha */}
        <div className="flex justify-end">
          <Button onClick={handleNewPatient} size="icon" className="h-12 w-12">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}