import { useState, useMemo } from "react"
import { patientsData } from "../data/patients"
import { Patient } from "../types"

// Función para determinar si un paciente está archivado (última consulta anterior a enero 2024)
const isPatientArchived = (lastConsult: string): boolean => {
  const consultDate = new Date(lastConsult)
  const january2024 = new Date('2024-01-01')
  return consultDate < january2024
}

// Función para formatear el objetivo
const formatObjective = (objective: string): string => {
  const objectiveMap: Record<string, string> = {
    "perdida-peso": "Pérdida de peso",
    "ganancia-muscular": "Ganancia muscular",
    "mejora-salud": "Mejora de salud",
    "control-diabetes": "Control de diabetes",
    "aumento-energia": "Aumento de energía",
    "dieta-equilibrada": "Dieta equilibrada",
    "reduccion-estres": "Reducción de estrés",
    "mejora-digestiva": "Mejora digestiva",
    "entrenamiento-deportivo": "Entrenamiento deportivo",
    "control-peso": "Control de peso"
  }
  return objectiveMap[objective] || objective
}

// Tipo para el paciente transformado
export interface TransformedPatient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  lastConsultation: Date
  objective: string
  status: "active" | "archived"
}

export const usePatients = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("active")
  const [activePage, setActivePage] = useState(1)
  const [archivedPage, setArchivedPage] = useState(1)

  // Transformar datos de pacientes con estado dinámico
  const transformedPatients = useMemo(() => 
    patientsData.map(patient => ({
      id: patient.id.toString(),
      firstName: patient.name.split(' ')[0],
      lastName: patient.name.split(' ').slice(1).join(' '),
      email: patient.email,
      phone: patient.phone,
      lastConsultation: new Date(patient.lastConsult),
      objective: formatObjective(patient.objective),
      status: isPatientArchived(patient.lastConsult) ? "archived" as const : "active" as const
    })), []
  )

  // Filtrar pacientes por estado
  const activePatients = useMemo(() => 
    transformedPatients.filter(patient => patient.status === "active"), 
    [transformedPatients]
  )
  
  const archivedPatients = useMemo(() => 
    transformedPatients.filter(patient => patient.status === "archived"), 
    [transformedPatients]
  )

  // Función para filtrar pacientes por término de búsqueda
  const filterPatients = (patients: TransformedPatient[], searchTerm: string) => {
    if (!searchTerm) return patients
    return patients.filter(patient => {
      const fullName = `${patient.firstName} ${patient.lastName}`.toLowerCase()
      const email = patient.email.toLowerCase()
      const objective = patient.objective.toLowerCase()
      const search = searchTerm.toLowerCase()
      
      return fullName.includes(search) || 
             email.includes(search) || 
             objective.includes(search)
    })
  }

  // Filtrar por término de búsqueda
  const filteredActivePatients = useMemo(() => 
    filterPatients(activePatients, searchTerm),
    [activePatients, searchTerm]
  )

  const filteredArchivedPatients = useMemo(() => 
    filterPatients(archivedPatients, searchTerm),
    [archivedPatients, searchTerm]
  )

  // Calcular total de pacientes mostrados
  const totalPatients = activeTab === "active" 
    ? filteredActivePatients.length 
    : filteredArchivedPatients.length

  // Handlers
  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    // Resetear páginas cuando se busca
    setActivePage(1)
    setArchivedPage(1)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return {
    // Estado
    searchTerm,
    activeTab,
    activePage,
    archivedPage,
    
    // Datos procesados
    filteredActivePatients,
    filteredArchivedPatients,
    totalPatients,
    
    // Handlers
    handleSearchChange,
    handleTabChange,
    setActivePage,
    setArchivedPage
  }
}