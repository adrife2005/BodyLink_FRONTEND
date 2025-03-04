import PatientSlider from './components/patientSlider/PatientSlider'

import { SliderProvider } from './context/SliderContext'
import PatientController from './components/patientController/PatientController'
import PatientFormsController from './components/patientForms/PatientFormsController'
import { PatientProvider } from './context/PatientContext'

export const PatientDetails = () => {
  return (
    <SliderProvider>
      <PatientProvider>
        <section>
          <PatientSlider />
          <PatientFormsController />
          <PatientController />
        </section>
      </PatientProvider>
    </SliderProvider>
  )
}
