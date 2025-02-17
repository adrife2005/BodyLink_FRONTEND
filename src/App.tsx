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
import { PublicRoutes, PrivateRoutes } from './types/routes'

function App() {
  return (
    <RoutesWithNotFound>
      <Route path={PublicRoutes.login} element={<h1>Login page</h1>} />
      <Route path={PublicRoutes.register} element={<h1>Register page</h1>} />
      <Route element={<AuthUser />}>
        <Route path={PrivateRoutes.root} element={<HomePage />} />
        <Route path={PrivateRoutes.pacientes} element={<Patients />} />
        <Route
          path={`${PrivateRoutes.pacientes}/:id`}
          element={<PatientDetails />}
        />
        <Route path={PrivateRoutes.citas} element={<Appointments />} />
        <Route path={PrivateRoutes.finanzas} element={<Finances />} />
        <Route path={PrivateRoutes.mensajes} element={<Messages />} />
        <Route path={PrivateRoutes.noticias} element={<News />} />
      </Route>
    </RoutesWithNotFound>
  )
}

export default App
