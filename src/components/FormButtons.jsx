import { Link } from 'react-router-dom'
import '../css/components/formbuttons.css'
import { useState } from 'react'

const FormButtons = () => {
  const [user, setUser] = useState(false);
  const [profesional, setProfesional] = useState(false)

  return (
    <>
      <div className="form__buttons">
        <button onClick={() => setUser(prev => !prev)} type="button" className='form__loging__btn'>Usuario</button>
        <button onClick={() => setProfesional(prev => !prev)} type="button" className='form__register__btn'>Profesional</button>
      </div>
    </>
  )
}

export default FormButtons