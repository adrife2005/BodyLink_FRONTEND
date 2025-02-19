import useAuthNutritionist from '@/context/auth/Nutritionist/useAuthNutritionist'
import { DashBoardView } from '@/layouts/dashboard/DashBoardView'
import { Navigate } from 'react-router-dom'

const AuthUser = () => {
  const { account, error, isLoading } = useAuthNutritionist()

  if (isLoading) {
    return null
  }

  if (!account && error) {
    return <Navigate to='/login' replace />
  }

  return <DashBoardView />
}

export default AuthUser
