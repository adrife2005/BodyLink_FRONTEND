import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { PatientProps, RegisterPatientProps } from '@/types/patients'
import handleHttpPostRequest from '../client/handleHttpPostRequest'

const registerPatient = async (
  data: RegisterPatientProps
): Promise<SuccessResponseProps<PatientProps> | ErrorResponseProps> => {
  return await handleHttpPostRequest<PatientProps>('/patient/register', {
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

export default registerPatient
