import { useContext } from 'react'
import { PatientContext } from './PatientContext'

export const useSliderContext = () => {
  const context = useContext(PatientContext)

  if (!context) {
    throw new Error('usePatientContext must be used within a PatientProvider')
  }

  return context
}
