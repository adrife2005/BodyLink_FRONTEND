import { useContext } from 'react'
import { AuthNutritionistContext } from './AuthNutritionist'

const useAuthNutritionist = () => {
  const context = useContext(AuthNutritionistContext)

  if (!context) {
    throw new Error(
      'useAuthNutritionist must be used within an AuthNutritionistProvider'
    )
  }

  return context
}

export default useAuthNutritionist
