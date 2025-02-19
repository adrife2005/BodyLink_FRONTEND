import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { LoginPatientProps } from '@/types/patients'
import handleHttpPostRequest from './client/handleHttpPostRequest'

const loginPatient = async (
  data: LoginPatientProps
): Promise<SuccessResponseProps<LoginPatientProps> | ErrorResponseProps> => {
  return await handleHttpPostRequest<LoginPatientProps>('/nutritionist/login', {
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

export default loginPatient
