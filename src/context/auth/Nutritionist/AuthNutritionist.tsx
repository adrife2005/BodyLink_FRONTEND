import getCredentialsNutritionist from '@/services/nutritionist/credentialsNutritionist.services'
import { NutritionistProps } from '@/types/nutritionist'
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react'
interface AuthNutritionistContextProps {
  account: NutritionistProps | null
  setAccount: Dispatch<SetStateAction<NutritionistProps | null>>
  isLoading: boolean
  error: string | null
}

const AuthNutritionistContext =
  createContext<AuthNutritionistContextProps | null>(null)

const AuthNutritionistProvider = ({ children }: { children: ReactNode }) => {
  const [nutritionist, setNutritionist] = useState<NutritionistProps | null>(
    null
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const getNutritionist = useCallback(async () => {
    try {
      const response = await getCredentialsNutritionist()

      if (!response.success) {
        setError(response.message)
        return
      }

      setNutritionist(response.data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getNutritionist()
  }, [getNutritionist])

  return (
    <AuthNutritionistContext.Provider
      value={{
        account: nutritionist,
        setAccount: setNutritionist,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthNutritionistContext.Provider>
  )
}

export { AuthNutritionistContext, AuthNutritionistProvider }
