"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Edit, Calendar, Phone, Mail, Target, MessageSquare, FileText, Video, Copy, Check } from "lucide-react"

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

interface PatientSummaryProps {
  patient: Patient | null
  isSheetOpen?: boolean
  onSheetOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  variant?: 'card' | 'sheet' // Nueva prop para especificar el tipo
}

export function PatientSummary({ patient, isSheetOpen, onSheetOpenChange, trigger, variant }: PatientSummaryProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isLargeScreen, setIsLargeScreen] = useState(true)
  const [internalSheetOpen, setInternalSheetOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280) // xl breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Solo abrir sheet automáticamente si es la instancia de tipo 'sheet'
  useEffect(() => {
    if (patient && !isLargeScreen && variant === 'sheet') {
      if (onSheetOpenChange) {
        onSheetOpenChange(true)
      } else {
        setInternalSheetOpen(true)
      }
    }
  }, [patient, isLargeScreen, onSheetOpenChange, variant])

  const sheetOpen = isSheetOpen !== undefined ? isSheetOpen : internalSheetOpen
  const handleSheetOpenChange = onSheetOpenChange || setInternalSheetOpen

  if (!patient) {
    return (
      <Card className="h-fit">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center text-muted-foreground">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <p className="text-sm">Selecciona un paciente</p>
            <p className="text-xs mt-1">para ver su información</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const formatDateTime = (date: Date | null) => {
    if (!date) return 'Sin consultas'
    const dateStr = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    })
    const timeStr = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    return `${dateStr} - ${timeStr}`
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  const renderSummaryContent = () => (
    <>
      <CardHeader className="pb-4 bg-muted/30">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-accent text-accent-foreground text-lg font-semibold">
              {getInitials(patient.firstName, patient.lastName)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg">
              {patient.firstName} {patient.lastName}
            </CardTitle>
            <Badge variant="secondary" className="mt-1">
              {patient.status === 'active' ? 'Activo' : 'Archivado'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Información de contacto */}
        <div className="space-y-3">
          <h3 className="mt-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">Contacto</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between group">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{patient.email}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyToClipboard(patient.email, 'email')}
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <div className="flex items-center justify-between group">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{patient.phone}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyToClipboard(patient.phone, 'phone')}
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Información médica */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Información médica</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Última consulta</span>
                <span className="text-foreground font-medium">{formatDateTime(patient.lastConsultation)}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Target className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Objetivo</span>
                <span className="text-foreground">{patient.objective}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Acciones rápidas */}
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-background border border-border h-12 flex flex-col gap-1">
                    <Edit className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Editar información del paciente</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-background border border-border h-12 flex flex-col gap-1">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Agendar nueva cita</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-background border border-border h-12 flex flex-col gap-1">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enviar mensaje</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-background border border-border h-12 flex flex-col gap-1">
                    <FileText className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ver historial médico</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-background border border-border h-12 flex flex-col gap-1">
                    <Video className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Iniciar videollamada</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </>
  )

  return (
    <>
      {/* Sheet para pantallas pequeñas (xl y menores) */}
      <Sheet open={!isLargeScreen && sheetOpen} onOpenChange={handleSheetOpenChange}>
        {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
        <SheetContent className="w-[400px] sm:w-[540px] bg-card border-r border-border p-0">
          <SheetTitle className="sr-only">
            {patient ? `Información de ${patient.firstName} ${patient.lastName}` : "Información del paciente"}
          </SheetTitle>
          <SheetDescription className="sr-only">
            {patient ? "Detalles y resumen del paciente seleccionado" : "Selecciona un paciente para ver su información"}
          </SheetDescription>
          {patient ? (
            <Card className="h-full border-0 shadow-none">
              {renderSummaryContent()}
            </Card>
          ) : (
            <Card className="h-full border-0 shadow-none">
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Selecciona un paciente</p>
                  <p className="text-xs mt-1">para ver su información</p>
                </div>
              </CardContent>
            </Card>
          )}
        </SheetContent>
      </Sheet>

      {/* Card para pantallas grandes (xl y mayores) - solo visible cuando isLargeScreen es true y variant es 'card' */}
      {isLargeScreen && variant === 'card' && (
        <Card className="h-fit">
          {patient ? (
            renderSummaryContent()
          ) : (
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <p className="text-sm">Selecciona un paciente</p>
                <p className="text-xs mt-1">para ver su información</p>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  )
}