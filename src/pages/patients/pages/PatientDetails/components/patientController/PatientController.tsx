import { CustomButton } from '@/components/ui/button/CustomButton'
import styles from './PatientController.module.css'
import {
  btnPrimaryStyles,
  btnSecondaryStyles,
} from '@/components/ui/button/customStyles/buttonStyles'
import { useSliderContext } from '../../context/useSliderContext'

const PatientController = () => {
  const { currentStep, setIncc, setDecc, setFinishedStep, finishedStep } =
    useSliderContext()

  const handleNext = () => {
    setIncc()
    setFinishedStep([...finishedStep, currentStep])
  }

  const handleBack = () => {
    setDecc()
    finishedStep.splice(currentStep)
    setFinishedStep([...finishedStep])
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CustomButton
          disabled={currentStep <= 1}
          customStyle={{
            ...btnPrimaryStyles,
            opacity: `${currentStep <= 1 ? 0.5 : 1}`,
            cursor: `${currentStep < 2 ? 'default' : 'pointer'}`,
          }}
          onClick={handleBack}
        >
          Atras
        </CustomButton>
        <div>
          <CustomButton customStyle={btnSecondaryStyles}>
            Guardar y continuar mas tarde
          </CustomButton>
          <CustomButton
            customStyle={{
              ...btnPrimaryStyles,
              opacity: `${currentStep >= 8 ? 0.5 : 1}`,
            }}
            onClick={handleNext}
          >
            Guardar y siguiente
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default PatientController
