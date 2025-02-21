interface RegisterPatientProps {
  full_name: string
  date_of_birth: Date
  gender: 'male' | 'female'
  country: string
  occupacity: string
  email: string
  phone: number
}

interface PatientProps {
  id: string
  full_name: string
  gender: 'male' | 'female'
  date_of_birth: Date
  country: string
  occupacity: string
  email: string
  phone: number
  is_active: boolean
  nutritionist_id: string
  customFields?: {
    [key: string]: string
  }[]
  createdAt: Date
  updatedAt: Date
}

export type { RegisterPatientProps, PatientProps }
