import GenericModal from '@/components/_shared/modal/GenericModal'
import { Input } from '@/components/ui/input/Input'
import styles from './RegisterModal.module.css'
import inputs from './register-inputs.json'
import { CustomButton } from '@/components/ui/button/CustomButton'
import { CircleCheckBig } from 'lucide-react'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import { FormEvent } from 'react'

interface Props {
  close: () => void
}

export default function RegisterModal({ close }: Props) {
  const submitFormData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const userData = Object.fromEntries(formData)

    /**
     * TODO: Implement the logic to send the info to the backend
     */
    console.log(userData)
  }

  return (
    <GenericModal title='Registra un paciente!' close={close} blur={true}>
      <form className={styles['register-modal']} onSubmit={submitFormData}>
        <h3>Datos Personales</h3>
        <div className={styles['personal-details']}>
          {inputs.personalInfo.map(input => (
            <Input
              key={input.label}
              icon={input.icon}
              type={input.type}
              width={input.width}
              label={input.label}
              placeholder={input.placeholder}
              property={input.property}
            />
          ))}
        </div>
        <h3>Datos de Contacto</h3>
        <div className={styles['contact-details']}>
          {inputs.contactInfo.map(input => (
            <Input
              key={input.label}
              icon={input.icon}
              type={input.type}
              width={input.width}
              label={input.label}
              placeholder={input.placeholder}
              property={input.property}
            />
          ))}
        </div>
        <label htmlFor='notifications'>
          <input type='checkbox' name='notifications' />
          Acepta recibir notificaciones por correo
        </label>
        <div>
          <CustomButton customStyle={btnPrimaryStyles} onClick={close}>
            Cancelar
          </CustomButton>
          <CustomButton customStyle={btnPrimaryStyles} type='submit'>
            <CircleCheckBig />
            Registrar
          </CustomButton>
        </div>
      </form>
    </GenericModal>
  )
}
