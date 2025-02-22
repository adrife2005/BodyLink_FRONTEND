import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { PatientProps } from '@/types/patients'
import handleHttpGetRequest from '../client/handleHttpGetRequest'

const getPatients = async (
  active: 'active' | 'archived'
): Promise<SuccessResponseProps<PatientProps[]> | ErrorResponseProps> => {
  return await handleHttpGetRequest<PatientProps[]>(
    `/patient/${active}/patients`,
    { credentials: 'include' }
  )
}

export default getPatients
