import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import HeaderLayout from './layout/HeaderLayout';
import Nutricionista from './pages/Nutricionista';
import FormUser from './pages/users/FormUsers';
import FormProfesionales from './pages/professionals/FormProfesionales';
import Nutricionistas from './pages/Nutricionistas';
import Comunidad from './pages/users/Comunidad';
import Ejercisios from './pages/users/Ejercisios';
import Dietas from './pages/users/Dietas';
import NutricionistasDetails from './pages/NutricionistasDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HeaderLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/personal' element={<Nutricionista />} />
          <Route path='/nutricionistas' element={<Nutricionistas />} />
          <Route
            path='/nutricionistas/:id'
            element={<NutricionistasDetails />}
          />
          <Route path='/comunidad' element={<Comunidad />} />
          <Route path='/ejercisios' element={<Ejercisios />} />
          <Route path='/dietas' element={<Dietas />} />
        </Route>
        <Route path='/auth/user' element={<FormUser />} />
        <Route path='/auth/profesional' element={<FormProfesionales />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
