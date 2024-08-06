import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HeaderLayout from './layout/HeaderLayout'
import Nutricionista from './pages/Nutricionista'
import LogInUser from './pages/LogInUser'
import RegisterUser from './pages/RegisterUser'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HeaderLayout/>} >
        <Route path="/" element={<Home />} />
        <Route path='/personal' element={<Nutricionista />} />
      </Route>
        <Route path='/auth/register' element={<RegisterUser/>} />
        <Route path='/auth/login' element={<LogInUser/>} />
      </>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
