"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { MoreVertical, Edit, Calendar, Archive } from "lucide-react"

interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  lastConsultation: Date | null
  objective: string
  status: 'active' | 'archived'
}

interface PatientsTableProps {
  patients: Patient[]
  searchTerm: string
  currentPage: number
  onPageChange: (page: number) => void
  onPatientSelect?: (patient: Patient) => void
  selectedPatient?: Patient | null
  itemsPerPage?: number
}

export function PatientsTable({ 
  patients, 
  searchTerm, 
  currentPage, 
  onPageChange,
  onPatientSelect,
  selectedPatient,
  itemsPerPage = 10 
}: PatientsTableProps) {
  
  // Filtrar pacientes basado en el término de búsqueda
  const filteredPatients = patients.filter(patient => {
    const fullName = `${patient.firstName} ${patient.lastName}`.toLowerCase()
    const email = patient.email.toLowerCase()
    const objective = patient.objective.toLowerCase()
    const search = searchTerm.toLowerCase()
    
    return fullName.includes(search) || 
           email.includes(search) || 
           objective.includes(search)
  })

  // Calcular paginación
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPatients = filteredPatients.slice(startIndex, endIndex)

  // Función para renderizar los elementos de paginación
  const renderPaginationItems = () => {
    const items = []
    
    // Si hay 7 páginas o menos, mostrar todas
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
         items.push(
           <PaginationItem key={i}>
             <PaginationLink
               onClick={() => onPageChange(i)}
               isActive={currentPage === i}
               className={cn(
                 "cursor-pointer border border-border",
                 currentPage === i && "bg-accent"
               )}
             >
               {i}
             </PaginationLink>
           </PaginationItem>
         )
       }
    } else {
      // Lógica para muchas páginas con elipsis
      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 || 
          i === totalPages || 
          (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
          items.push(
             <PaginationItem key={i}>
               <PaginationLink
                 onClick={() => onPageChange(i)}
                 isActive={currentPage === i}
                 className={cn(
                   "cursor-pointer border border-border",
                   currentPage === i && "bg-accent"
                 )}
               >
                 {i}
               </PaginationLink>
             </PaginationItem>
           )
        } else if (i === currentPage - 2 || i === currentPage + 2) {
          items.push(
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }
      }
    }
    
    return items
  }

  const formatDate = (date: Date | null) => {
    if (!date) return 'Sin consultas'
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }) + ' • ' + date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  const handleAction = (action: string, patientId: string) => {
    console.log(`Acción: ${action} para paciente: ${patientId}`)
    // Aquí se implementará la lógica para cada acción
  }

  const handlePatientSelect = (patient: Patient) => {
    if (onPatientSelect) {
      onPatientSelect(patient)
    }
  }

  if (currentPatients.length === 0) {
    return (
      <div className="flex items-center justify-center h-32 border border-border rounded-lg">
        <p className="text-muted-foreground">
          {searchTerm ? 'No se encontraron pacientes que coincidan con la búsqueda' : 'No hay pacientes registrados'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-card border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-background rounded-lg border-b border-border">
              <TableHead className="text-clamp-xs font-semibold rounded-ss-lg min-w-[170px]">Paciente</TableHead>
              <TableHead className="text-clamp-xs font-semibold hidden lg:table-cell xl:hidden xxl:table-cell max-w-[180px]">Email</TableHead>
              <TableHead className="text-clamp-xs font-semibold min-w-[124px]">Última consulta</TableHead>
              <TableHead className="text-clamp-xs font-semibold min-w-[184px]">Objetivo</TableHead>
              <TableHead className="text-clamp-xs font-semibold rounded-se-lg text-right pr-4">Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPatients.map((patient) => {
              const isSelected = selectedPatient?.id === patient.id
              return (
                <TableRow 
                  key={patient.id} 
                  className={`border-b cursor-pointer transition-colors ${
                    isSelected 
                      ? 'border-accent dark:bg-accent/15 dark:hover:bg-accent/15 bg-accent/45 hover:bg-accent/45' 
                      : 'border-border dark:hover:bg-muted/50 hover:bg-muted'
                  }`}
                  onClick={() => handlePatientSelect(patient)}
                >
                  <TableCell className="text-clamp-xs font-medium min-w-[170px]">
                    {patient.firstName} {patient.lastName}
                  </TableCell>
                  <TableCell className="text-clamp-xs text-muted-foreground hidden msm:table-cell md:hidden lg:table-cell xl:hidden xxl:table-cell max-w-[180px] truncate">
                    {patient.email}
                  </TableCell>
                  <TableCell className="text-clamp-xs text-muted-foreground min-w-[124px]">
                    {formatDate(patient.lastConsultation)}
                  </TableCell>
                  <TableCell className="text-clamp-xs min-w-[184px]">
                    <Badge variant="secondary" className="bg-muted text-muted-foreground text-clamp-xs">
                      {patient.objective}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-clamp-xs text-right pr-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="h-8 w-8 p-0 hover:bg-muted"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="border-border">
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAction('edit', patient.id)
                          }}
                          className="cursor-pointer"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Editar perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAction('reschedule', patient.id)
                          }}
                          className="cursor-pointer"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Reprogramar
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAction('archive', patient.id)
                          }}
                          className="cursor-pointer"
                        >
                          <Archive className="mr-2 h-4 w-4" />
                          {patient.status === 'active' ? 'Archivar paciente' : 'Desarchivar paciente'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      {/* Paginador refactorizado */}
      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                  className={cn(
                    "cursor-pointer",
                    currentPage === 1 && "pointer-events-none opacity-50"
                  )}
                />
              </PaginationItem>
              
              {renderPaginationItems()}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                  className={cn(
                    "cursor-pointer",
                    currentPage === totalPages && "pointer-events-none opacity-50"
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}