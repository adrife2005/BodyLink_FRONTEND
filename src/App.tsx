import { HomePage } from './pages/home/Home'
import { Patients } from './pages/patients/pages/Patients/Patients'
import { PatientDetails } from './pages/patients/pages/PatientDetails/PatientDetails'
import { Appointments } from './pages/appointments/Appointments'
import { Finances } from './pages/finances/Finances'
import { Messages } from './pages/messages/Messages'
import { News } from './pages/news/News'
import { Route } from 'react-router-dom'
import RoutesWithNotFound from './components/routesWithNotFound/RoutesWithNotFound'
import AuthUser from './guard/AuthUser'

function App() {
  return (
    <RoutesWithNotFound>
      <Route path='/login' element={<h1>Login page</h1>} />
      <Route path='/register' element={<h1>Register page</h1>} />
      <Route element={<AuthUser />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/pacientes' element={<Patients />} />
        <Route path='/pacientes/:id' element={<PatientDetails />} />
        <Route path='/citas' element={<Appointments />} />
        <Route path='/finanzas' element={<Finances />} />
        <Route path='/mensajes' element={<Messages />} />
        <Route path='/noticias' element={<News />} />
      </Route>
    </RoutesWithNotFound>
  )
}

export default App
