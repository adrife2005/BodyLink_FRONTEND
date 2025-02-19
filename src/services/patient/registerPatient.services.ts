import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { RegisterPatientProps } from '@/types/patients'
import handleHttpPostRequest from '../client/handleHttpPostRequest'

const registerPatient = async (
  data: RegisterPatientProps
): Promise<SuccessResponseProps<RegisterPatientProps> | ErrorResponseProps> => {
  return await handleHttpPostRequest<RegisterPatientProps>(
    '/patient/register',
    { body: JSON.stringify(data) }
  )
}

export default registerPatient
