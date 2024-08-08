import { Link } from 'react-router-dom'
import '../css/components/formbuttons.css'
import { useState } from 'react'

const FormButtons = (props) => {


  return (
    <>
      <div className="form__buttons">
        <button onClick={props.closeLoginForm} type="button" className={props.login ? 'form__register__btn' : 'form__loging__btn' }>Iniciar Seción</button>
        <button onClick={props.closeRegisterForm} type="button" className={props.register ? 'form__register__btn' : 'form__loging__btn' }>Registrarse</button>
      </div>
    </>
  )
}

export default FormButtons