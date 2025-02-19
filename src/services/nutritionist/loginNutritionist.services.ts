import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { LoginNutritionistProps, NutritionistProps } from '@/types/nutritionist'
import handleHttpPostRequest from '../client/handleHttpPostRequest'

const loginNutritionist = async (
  data: LoginNutritionistProps
): Promise<SuccessResponseProps<NutritionistProps> | ErrorResponseProps> => {
  return await handleHttpPostRequest<NutritionistProps>('/nutritionist/login', {
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

export default loginNutritionist
