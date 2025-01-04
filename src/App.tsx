import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  Citas,
  Finanzas,
  Mensajes,
  Noticias,
  Pacientes,
} from './pages';
import { DashBoardView } from './layouts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoardView />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/citas' element={<Citas />} />
        <Route path='/finanzas' element={<Finanzas />} />
        <Route path='/mensajes' element={<Mensajes />} />
        <Route path='/noticias' element={<Noticias />} />
      </Route>
    </Routes>
  );
}

export default App;
