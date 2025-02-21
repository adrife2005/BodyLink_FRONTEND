import GenericModal from '@/components/_shared/modal/GenericModal'
import { Input } from '@/components/ui/input/Input'
import styles from './RegisterModal.module.css'
import inputs from './register-inputs.json'
import { CustomButton } from '@/components/ui/button/CustomButton'
import { CircleCheckBig } from 'lucide-react'
import {
  btnPrimaryStyles,
  btnSecondaryStyles,
} from '@/components/ui/button/customStyles/buttonStyles'
import { FormEvent } from 'react'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { RegisterPatientProps } from '@/types/patients'
import registerPatient from '@/services/patient/registerPatient.services'

interface Props {
  close: () => void
}

const registerPatientSchema = z.object({
  full_name: z
    .string()
    .min(1, 'El Nombre Completo es obligatorio')
    .max(32, 'El Nombre Completo no puede tener más de 32 caracteres'),
  gender: z.enum(['male', 'female']),
  date_of_birth: z
    .date()
    .min(
      new Date('1900-01-01'),
      'La fecha de nacimiento no puede ser menor a 1900-01-01'
    )
    .max(
      new Date(),
      'La fecha de nacimiento no puede ser mayor a la fecha actual'
    ),
  country: z
    .string()
    .min(1, 'El Pais es obligatorio')
    .max(32, 'El Pais no puede tener más de 32 caracteres'),
  occupacity: z
    .string()
    .min(1, 'La ocupación es obligatoria')
    .max(32, 'La ocupación no puede tener más de 32 caracteres'),
  email: z
    .string()
    .min(1, 'Email es obligatorio')
    .max(50, 'El Email no puede tener mas de 50 caracteres')
    .email('Email es invalido'),
  phone: z
    .number()
    .min(1000000000, 'El número de teléfono es invalido')
    .max(9999999999, 'El número de teléfono es invalido'),
})

export default function RegisterModal({ close }: Props) {
  const submitFormData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const {
      country,
      date_of_birth,
      email,
      full_name,
      gender,
      occupacity,
      phone,
    } = Object.fromEntries(formData) as unknown as RegisterPatientProps

    const patientData = {
      full_name,
      country,
      email,
      gender,
      occupacity,
      phone: Number(phone),
      date_of_birth: new Date(date_of_birth),
    }

    const validate = registerPatientSchema.safeParse(patientData)

    if (!validate.success) {
      return toast.error(validate.error.errors[0].message)
    }

    const apiCall = await registerPatient(validate.data)

    if ('errorCode' in apiCall) {
      return toast.error(apiCall.message)
    }

    toast.success(apiCall.message)
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
        <div>
          <CustomButton
            type='button'
            customStyle={btnSecondaryStyles}
            onClick={close}
          >
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
