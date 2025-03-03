import styles from './PatientFormsController.module.css'

import DatosPersonales from './components/datosPersonales/DatosPersonales'

const PatientFormsController = () => {
  return (
    <div className={styles.wrapper}>
      <DatosPersonales />
    </div>
  )
}

export default PatientFormsController
