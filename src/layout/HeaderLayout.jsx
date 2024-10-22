import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'


const HeaderLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser =  localStorage.getItem('session')
    if (!getUser) {
      return navigate('/auth/user')
    }
  }, [])

  return (
    <>
      <Header/>
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default HeaderLayout