import { DashBoardView } from './layouts/dashboard/DashBoardView'
import { HomePage } from './pages/home/Home'
import { Patients } from './pages/pacients/Patients'
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
        <Route path='/citas' element={<Appointments />} />
        <Route path='/finanzas' element={<Finances />} />
        <Route path='/mensajes' element={<Messages />} />
        <Route path='/noticias' element={<News />} />
      </Route>
    </Routes>
  )
}

export default App
