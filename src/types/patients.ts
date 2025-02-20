interface RegisterPatientProps {
  full_name: string
  date_of_birth: Date
  gender: 'male' | 'female'
  country: string
  occupation: string
  email: string
  phone: number
}

export type { RegisterPatientProps }
