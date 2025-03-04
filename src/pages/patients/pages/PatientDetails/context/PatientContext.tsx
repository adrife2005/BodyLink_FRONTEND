import getPatient from '@/services/patient/getPatient'
import { PatientProps } from '@/types/patients'
import { createContext, useState, useEffect, ReactNode } from 'react'
import { useParams } from 'react-router-dom'

interface PatientContextProps {
  data: PatientProps | null
  loading: boolean
  error: string | null
}

const PatientContext = createContext<PatientContextProps | null>(null)

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const { id } = useParams()
  const [data, setData] = useState<PatientProps | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      const fethPatient = async () => {
        const response = await getPatient(id)

        if (!response.success) {
          setError(response.message)
          return
        }

        setData(response.data)
        setLoading(false)
      }

      fethPatient()
    }
  }, [id])

  return (
    <PatientContext.Provider value={{ data, error, loading }}>
      {children}
    </PatientContext.Provider>
  )
}

export { PatientContext, PatientProvider }
