import PatientSlider from './components/patientSlider/PatientSlider'
import patients from '../Patients/components/PatientsTable/patients-table.json'

import { useParams } from 'react-router'
import { SliderProvider } from './context/SliderContext'
import PatientController from './components/patientController/PatientController'

export const PatientDetails = () => {
  const { id } = useParams()

  const findPatient = patients.find(({ name }) => name === id)

  console.log(findPatient)

  return (
    <SliderProvider>
      <section>
        <PatientSlider />
        <PatientController />
      </section>
    </SliderProvider>
  )
}
