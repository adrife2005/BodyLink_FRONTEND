import { useContext } from 'react'
import { GetPatientsContext } from './GetPatients'

const useGetPatients = () => {
  const context = useContext(GetPatientsContext)

  if (!context) {
    throw new Error('useGetPatients must be used within an GetPatientsProvider')
  }

  return context
}

export default useGetPatients
