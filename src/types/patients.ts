interface RegisterPatientProps {
  full_name: string
  date: Date
  gender: 'Masculino' | 'Femenino'
  country: string
  occupation: string
  email: string
  phone: number
}

export type { RegisterPatientProps }
