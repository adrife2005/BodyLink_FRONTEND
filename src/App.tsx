import { DashBoardView } from './layouts/dashboard/DashBoardView'
import { HomePage } from './pages/home/Home'
import { Patients } from './pages/patients/pages/Patients/Patients'
import { PatientDetails } from './pages/patients/pages/PatientDetails/PatientDetails'
import { Appointments } from './pages/appointments/Appointments'
import { Finances } from './pages/finances/Finances'
import { Messages } from './pages/messages/Messages'
import { News } from './pages/news/News'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoardView />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/pacientes' element={<Patients />} />
        <Route path='/pacientes/:id' element={<PatientDetails />} />
        <Route path='/citas' element={<Appointments />} />
        <Route path='/finanzas' element={<Finances />} />
        <Route path='/mensajes' element={<Messages />} />
        <Route path='/noticias' element={<News />} />
      </Route>
    </Routes>
  )
}

export default App
