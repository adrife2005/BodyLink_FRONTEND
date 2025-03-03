import {
  SuccessResponseProps,
  ErrorResponseProps,
} from '@/types/handleResponses'
import { PatientProps } from '@/types/patients'
import handleHttpGetRequest from '../client/handleHttpGetRequest'

const getPatient = async (
  id: string
): Promise<SuccessResponseProps<PatientProps> | ErrorResponseProps> => {
  return await handleHttpGetRequest<PatientProps>(`/patient/${id}`, {
    credentials: 'include',
  })
}

export default getPatient
