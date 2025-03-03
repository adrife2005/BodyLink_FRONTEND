import PatientSlider from './components/patientSlider/PatientSlider'

import { SliderProvider } from './context/SliderContext'
import PatientController from './components/patientController/PatientController'
import PatientFormsController from './components/patientForms/PatientFormsController'

export const PatientDetails = () => {
  return (
    <SliderProvider>
      <section>
        <PatientSlider />
        <PatientFormsController />
        <PatientController />
      </section>
    </SliderProvider>
  )
}
