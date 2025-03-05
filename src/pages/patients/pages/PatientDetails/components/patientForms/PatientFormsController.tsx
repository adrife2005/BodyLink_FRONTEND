import { useSliderContext } from '../../context/useSliderContext'
import styles from './PatientFormsController.module.css'
import AgendarCita from './components/agendarCita/AgendarCita'
import Analisis from './components/analisis/Analisis'
import DatosGenerales from './components/datosGenerales/DatosGenerales'

import DatosPersonales from './components/datosPersonales/DatosPersonales'
import Entregables from './components/entregables/Entregables'
import Mediciones from './components/mediciones/Mediciones'
import PlanAlimentacion from './components/planAlimentacion/PlanAlimentacion'
import PlanFisico from './components/planFisico/PlanFisico'

const PatientFormsController = () => {
  const { currentStep } = useSliderContext()

  const showForm = (): JSX.Element => {
    if (currentStep === 1) {
      return <DatosPersonales />
    } else if (currentStep === 2) {
      return <DatosGenerales />
    } else if (currentStep === 3) {
      return <Mediciones />
    } else if (currentStep === 4) {
      return <PlanAlimentacion />
    } else if (currentStep === 5) {
      return <PlanFisico />
    } else if (currentStep === 6) {
      return <Analisis />
    } else if (currentStep === 7) {
      return <Entregables />
    } else if (currentStep === 8) {
      return <AgendarCita />
    } else {
      return <h1>Error</h1>
    }
  }

  return <div className={styles.wrapper}>{showForm()}</div>
}

export default PatientFormsController
