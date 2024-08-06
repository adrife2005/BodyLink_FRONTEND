import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HeaderLayout from './layout/HeaderLayout'
import Nutricionista from './pages/Nutricionista'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderLayout/>} >
        <Route path="/" element={<Home />} />
        <Route path='/personal' element={<Nutricionista/>} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
