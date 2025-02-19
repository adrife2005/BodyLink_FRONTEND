import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'
import { LoginNutritionistProps } from '@/types/nutritionist'
import handleHttpPostRequest from '../client/handleHttpPostRequest'

const loginNutritionist = async (
  data: LoginNutritionistProps
): Promise<
  SuccessResponseProps<LoginNutritionistProps> | ErrorResponseProps
> => {
  return await handleHttpPostRequest<LoginNutritionistProps>(
    '/nutritionist/login',
    {
      body: JSON.stringify(data),
      credentials: 'include',
    }
  )
}

export default loginNutritionist
