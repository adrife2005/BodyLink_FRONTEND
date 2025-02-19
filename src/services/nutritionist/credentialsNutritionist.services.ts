import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { NutritionistProps } from '@/types/nutritionist'
import handleHttpGetRequest from '../client/handleHttpGetRequest'

const getCredentialsNutritionist = async (): Promise<
  SuccessResponseProps<NutritionistProps> | ErrorResponseProps
> => {
  return await handleHttpGetRequest<NutritionistProps>('/nutritionist', {
    credentials: 'include',
  })
}

export default getCredentialsNutritionist
