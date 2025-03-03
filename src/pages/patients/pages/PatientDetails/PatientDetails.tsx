import PatientSlider from './components/patientSlider/PatientSlider'

import { useParams } from 'react-router'
import { SliderProvider } from './context/SliderContext'
import PatientController from './components/patientController/PatientController'
import getPatient from '@/services/patient/getPatient'

export const PatientDetails = () => {
  const { id } = useParams()

  if (id) {
    const fethPatient = async () => {
      const response = await getPatient(id)

      if (!response.success) {
        console.log(response.message)
        return
      }

      console.log(response.message)
      console.log(response.data)
    }

    fethPatient()
  }

  return (
    <SliderProvider>
      <section>
        <PatientSlider />
        <PatientController />
      </section>
    </SliderProvider>
  )
}
