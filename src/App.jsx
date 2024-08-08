import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HeaderLayout from './layout/HeaderLayout'
import Nutricionista from './pages/Nutricionista'
import FormUser from './pages/FormUsers'
import FormProfesionales from './pages/FormProfesionales'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HeaderLayout/>} >
        <Route path="/" element={<Home />} />
        <Route path='/personal' element={<Nutricionista />} />
      </Route>
        <Route path='/auth/user' element={<FormUser/>} />
        <Route path='/auth/profesional' element={<FormProfesionales/>} />
      </>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
