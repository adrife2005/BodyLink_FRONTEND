import '../css/components/registeruser.css'
import FormInput from '../components/FormInput'
import { useRef, useState } from 'react'
import FormButtons from '../components/FormButtons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const FormProfesionales = () => {
  const [valuesRegister, setValuesRegister] = useState({
    name: "",
    email: "",
    estudios: "",
    contraseña: "",
    reafirmarcontraseña: "",
  })

  const [valuesLogIn, setValuesLogIn] = useState({
    email: "",
    contraseña: "",
    reafirmarcontraseña: "",
  })


  const [register, setRegister] = useState(true);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate()


  const closeLoginForm = () => {
    setRegister(false)
    setLogin(true)
  }

  const closeRegisterForm = () => {
    setRegister(true)
    setLogin(false)
  }

  const inputsRegister = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage: "El nombre debe tener de 3 letras como minimo y no debe incluir ningun caracter especial!",
      label: "Nombre Completo",
      pattern: `^.{3,}$`,
      required: true
    },    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Debes ingresar un email correcto",
      patter: `/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/`,
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "estudios",
      type: "file",
      errorMessage: "Debes ingresar tu reconocimiento",
      label: "Estudios",
      accept: "image/jpeg, image/png, image/jpg",
      required: true
    },
    {
      id: 4,
      name: "contraseña",
      type: "password",
      errorMessage: "La contraseña debe tener 8-16 letras y una mayuscula ",
      label: "Contraseña",
      pattern: `^(?=.*[A-Z]).{8,16}$`,
      required: true
    },
    {
      id: 5,
      name: "reafirmarcontraseña",
      type: "password",
      errorMessage: "La contraseña no es la misma",
      label: "Confirmar Contraseña",
      pattern: valuesRegister.contraseña,
      required: true
    }
  ]

  const inputsLogIn = [
      {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "Debes ingresar un email correcto",
      patter: `/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/`,
      label: "Email",
      required: true
    },
    {
      id: 2,
      name: "contraseña",
      type: "password",
      errorMessage: "La contraseña debe tener 8-16 letras y una mayuscula ",
      label: "Contraseña",
      pattern: `^(?=.*[A-Z]).{8,16}$`,
      required: true
    },
    {
      id: 3,
      name: "reafirmarcontraseña",
      type: "password",
      errorMessage: "La contraseña no es la misma",
      label: "Confirmar Contraseña",
      pattern: valuesLogIn.contraseña,
      required: true
    }
  ]

  const onChangeRegister = (e) => {
    setValuesRegister({...valuesRegister, [e.target.name]: e.target.value})
  }

  const onChangeLogIn = (e) => {
    setValuesLogIn({ ...valuesLogIn , [e.target.name]: e.target.value});
  }

  const registerUser = (e) => {
    e.preventDefault()

    // const data = new FormData(e.target)
    // const registerData = Object.fromEntries(data.entries())
    navigate('/profesionales')
  }

  const loginUser = (e) => {
    e.preventDefault()

    // const data = new FormData(e.target)
    // const registerData = Object.fromEntries(data.entries())
    navigate('/profesionales')
  }


  return (
    <div className="form__register">
    <div className="form__register__start">
      <div className="form__register__start__img">
        <img src="../../BodyLink.png" alt="logo" />
      </div>
      <div className="form__register__start__welcome">
        <h3>
          Bienvenido a BodyLink. Aqui podras ofrecer tus planes de nutrición y entrenamiento a los usuarios.
        </h3>
      </div>
      <div className="form__register__start__questions">
        <Link to='/auth/user' className='form__register__start__btn'>Usuario</Link>
        <Link to='/auth/profesional' className='form__register__start__btn'>Profesional</Link>
      </div>
      </div>
      <div className="form__register__form">
        <form onSubmit={register ? registerUser : loginUser} className='form__register__submit'>
          <div className="form__register__title">
            <h1>{register ? 'Registrate' : 'Iniciar Seción'}</h1>
            <p>Favor de ingresar correctamente tus datos.</p>
          </div>
          <FormButtons closeLoginForm={closeLoginForm} closeRegisterForm={ closeRegisterForm} register={register} login={login} />
          {
            register ?
            inputsRegister.map((input) => (
              <FormInput key={input.id} {...input} value={valuesRegister[[input.name]]} onChange={onChangeRegister} />
            )) : inputsLogIn.map((input) => (
              <FormInput key={input.id} {...input} value={valuesLogIn[[input.name]]} onChange={onChangeLogIn} />
            ))
          }
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
  </div>
  )
}

export default FormProfesionales