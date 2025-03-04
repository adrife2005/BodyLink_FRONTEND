import getPatient from '@/services/patient/getPatient'
import { PatientProps } from '@/types/patients'
import { createContext, useState, useEffect, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
interface PatientContextProps {
  data: PatientProps
  setData: React.Dispatch<React.SetStateAction<PatientProps>>
  loading: boolean
  error: string | null
}

const PatientContext = createContext<PatientContextProps | null>(null)

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const { id } = useParams()
  const [data, setData] = useState<PatientProps>({
    country: '',
    createdAt: new Date(),
    date_of_birth: new Date(),
    email: '',
    full_name: '',
    gender: 'male',
    id: '',
    is_active: true,
    nutritionist_id: '',
    occupacity: '',
    phone: 0,
    updatedAt: new Date(),
    customFields: [],
  })
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
    <PatientContext.Provider value={{ data, setData, error, loading }}>
      {children}
    </PatientContext.Provider>
  )
}

export { PatientContext, PatientProvider }
