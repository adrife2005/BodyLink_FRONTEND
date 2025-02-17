import { DashBoardView } from '@/layouts/dashboard/DashBoardView'
import { Navigate } from 'react-router-dom'

const AuthUser = () => {
  const isAuth = {}

  return isAuth ? <DashBoardView /> : <Navigate to='/login' replace />
}

export default AuthUser
