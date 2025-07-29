"use client"

import { useState } from "react"
import { TitulosSection } from "@/components/titulos-section"
import { PatientsHeader } from "@/components/patients-header"
import { PatientsTable } from "@/components/patients-table"
import { PatientSummary } from "@/components/patient-summary"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { usePatients } from "@/features/patients/hooks/use-patients"

// Tipo Patient para consistencia con los componentes
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

export default function PatientsPage() {
  const {
    searchTerm,
    activeTab,
    activePage,
    archivedPage,
    filteredActivePatients,
    filteredArchivedPatients,
    totalPatients,
    handleSearchChange,
    handleTabChange,
    setActivePage,
    setArchivedPage
  } = usePatients()

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const currentPatients = activeTab === 'active' ? filteredActivePatients : filteredArchivedPatients

  const handlePatientSelect = (patient: Patient) => {
    // Si es el mismo paciente y el sheet está cerrado, o es un paciente diferente
    const shouldOpenSheet = window.innerWidth < 1280 && (!isSheetOpen || selectedPatient?.id !== patient.id)
    
    setSelectedPatient(patient)
    
    // Siempre abrir el sheet en pantallas pequeñas cuando se selecciona un paciente
    if (window.innerWidth < 1280) {
      setIsSheetOpen(true)
    }
  }

  return (
    <div className="space-y-6">
      <TitulosSection 
        icon={Users}
        titulo="Pacientes"
        descripcion="Gestiona y organiza la información de tus pacientes"
      />
      
      <PatientsHeader 
        totalPatients={totalPatients}
        onSearchChange={handleSearchChange}
      />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-60">
          <TabsTrigger value="active" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Activos
          </TabsTrigger>
          <TabsTrigger value="archived" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Archivados
          </TabsTrigger>
        </TabsList>
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-6 xl:space-y-0 space-y-4">
          <div className="xl:col-span-2">
            <TabsContent value="active" className="space-y-4 mt-0">
              <div className="space-y-4">
                <PatientsTable
                  patients={filteredActivePatients}
                  searchTerm={searchTerm}
                  currentPage={activePage}
                  onPageChange={setActivePage}
                  onPatientSelect={handlePatientSelect}
                  selectedPatient={selectedPatient}
                />

              </div>
            </TabsContent>
            
            <TabsContent value="archived" className="space-y-4 mt-0">
              <div className="space-y-4">
                <PatientsTable
                  patients={filteredArchivedPatients}
                  searchTerm={searchTerm}
                  currentPage={archivedPage}
                  onPageChange={setArchivedPage}
                  onPatientSelect={handlePatientSelect}
                  selectedPatient={selectedPatient}
                />

              </div>
            </TabsContent>
          </div>
          
          {/* Panel de resumen en xl+ */}
          <div className="hidden xl:block">
            <PatientSummary patient={selectedPatient} variant="card" />
          </div>
        </div>
      </Tabs>
      
      {/* PatientSummary para sheet en pantallas xl- - solo cuando hay paciente seleccionado */}
      {selectedPatient && (
        <div className="xl:hidden">
          <PatientSummary 
            patient={selectedPatient} 
            variant="sheet" 
            isSheetOpen={isSheetOpen}
            onSheetOpenChange={setIsSheetOpen}
          />
        </div>
      )}
    </div>
  )
}