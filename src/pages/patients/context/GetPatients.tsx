import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'
import { PatientProps } from '@/types/patients'
import getPatients from '@/services/patient/getPatients'

interface GetPatientsContextProps {
  patients: PatientProps[]
  setPatients: React.Dispatch<React.SetStateAction<PatientProps[]>>

  activeView: 'active' | 'archived'
  setActiveView: React.Dispatch<React.SetStateAction<'active' | 'archived'>>

  loading: boolean

  error: string | null
}

const GetPatientsContext = createContext<GetPatientsContextProps | null>(null)

const GetPatientsProvider = ({ children }: { children: ReactNode }) => {
  const [activeView, setActiveView] = useState<'active' | 'archived'>('active')
  const [patients, setPatients] = useState<PatientProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPatients = useCallback(async () => {
    setLoading(true)
    const apiResponse = await getPatients(activeView)

    if (!apiResponse.success) {
      setError(apiResponse.message)
      setLoading(false)
      return
    }

    setPatients(apiResponse.data)
    setLoading(false)
  }, [activeView])

  useEffect(() => {
    fetchPatients()
  }, [activeView, fetchPatients])

  return (
    <GetPatientsContext.Provider
      value={{
        patients,
        loading,
        error,
        activeView,
        setActiveView,
        setPatients,
      }}
    >
      {children}
    </GetPatientsContext.Provider>
  )
}

export { GetPatientsContext, GetPatientsProvider }
