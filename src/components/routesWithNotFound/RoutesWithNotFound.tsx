import { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const RoutesWithNotFound = ({ children }: { children: ReactNode }) => {
  return (
    <Routes>
      <Route path='*' element={<Navigate to='/404' />} />
      <Route path='/404' element={<h1>Route Not Found</h1>} />
      {children}
    </Routes>
  )
}

export default RoutesWithNotFound
