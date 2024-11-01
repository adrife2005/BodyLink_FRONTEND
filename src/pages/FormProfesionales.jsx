import '../css/components/registeruser.css'
import FormInput from '../components/FormInput'
import { useRef, useState } from 'react'
import FormButtons from '../components/FormButtons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {setToken} from '../assets/confTokens.js'
import { toast } from 'react-toastify'
import Loading from '../components/Loading.jsx'


const FormProfesionales = () => {
  const API_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/professional' : 'Nothing here yet';
  const API_URI_LOGIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/professional/login' : 'Nothing here yet';

  const [valuesRegister, setValuesRegister] = useState({
    name: "",
    email: "",
    university: "",
    experience: "",
    title: "",
    password: "",
    confirmPassword: "",
  })

  const [valuesLogIn, setValuesLogIn] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [register, setRegister] = useState(true);
  const [login, setLogin] = useState(false);
  const [infoUser, setInfoUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()


  const closeLoginForm = () => {
    setRegister(false)
    setLogin(true)
  }

  const closeRegisterForm = () => {
    setRegister(true)
    setLogin(false)
  }

  const inputsInfo = [
    {
      id: 1,
      name: "university",
      type: "text",
      errorMessage: "Debes ingresar la universidad donde egresaste",
      label: "Universidad",
      required: true
    },
    {
      id: 2,
      name: "experience",
      type: "number",
      errorMessage: "Debes ingresar tus años de experiencia",
      label: "Experiencia",
      required: true
    },
    {
      id: 3,
      name: "title",
      type: "file",
      errorMessage: "Debes ingresar tu reconocimiento",
      label: "Estudios",
      accept: "image/jpeg, image/png, image/jpg",
      required: true
    },
  ]

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
      id: 4,
      name: "password",
      type: "password",
      errorMessage: "La contraseña debe tener 8-16 letras y una mayuscula ",
      label: "Contraseña",
      pattern: `^(?=.*[A-Z]).{8,16}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
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
      name: "password",
      type: "password",
      errorMessage: "La contraseña debe tener 8-16 letras y una mayuscula ",
      label: "Contraseña",
      pattern: `^(?=.*[A-Z]).{8,16}$`,
      required: true
    },
    {
      id: 3,
      name: "confirmPassword",
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

    setInfoUser((prev) => !prev);
  }

  const loginUser = async (e) => {
    e.preventDefault()

    setIsLoading(true);

    const loginProfessional = {
      ...valuesLogIn
    }

    try {
      const res = await axios.post(API_URI_LOGIN, loginProfessional)
      setToken(await res.data.token)
      navigate('/')
      setIsLoading(false)
    } catch (error) {
      toast.error('Something went wrong, pls be sure that you enter your right credentials')
      setIsLoading(false)
    }
  }

  const registerFullUser = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const newProfessional = {
      ...valuesRegister
    }

    try {
      const res = await axios.post(API_URI, newProfessional)
      setToken(await res.data.token)
      navigate('/professional')
      setIsLoading(false)
    } catch (error) {
      toast.error('Something went wrong, pls be sure that you enter your right credentials')
      setIsLoading(false)
    }

  }


  return (
    <div className="form__register">
    <div className="form__register__start">
      <div className="form__register__start__img">
        <img src="../../BodyLinkForm.png" alt="logo" />
      </div>
      <div className="form__register__start__welcome">
        <h3>
          Bienvenido a la plataforma BodyLink. Aqui podras ofrecer tus planes de nutrición y entrenamiento a los usuarios.
        </h3>
      </div>
      <div className="form__register__start__questions">
        <Link to='/auth/user' className='form__register__start__btn'>Usuario</Link>
        <Link to='/auth/profesional' className='form__register__start__btn'>Profesional</Link>
      </div>
      </div>
      <div className="form__register__form">
        <form onSubmit={!infoUser ? register ? registerUser : loginUser : registerFullUser} className='form__register__submit'>
            <div className="form__register__title">
              <h1>{ !infoUser ? register ? 'Registrate' : 'Iniciar Seción' : "Datos Personales" }</h1>
              <p>Favor de ingresar correctamente tus datos.</p>
            </div>
            <FormButtons closeLoginForm={closeLoginForm} closeRegisterForm={ closeRegisterForm} register={register} login={login} />
            {
              !infoUser
                ?

                  register ?
                  inputsRegister.map((input) => (
                    <FormInput key={input.id} {...input} value={valuesRegister[[input.name]]} onChange={onChangeRegister} />
                  )) : inputsLogIn.map((input) => (
                    <FormInput key={input.id} {...input} value={valuesLogIn[[input.name]]} onChange={onChangeLogIn} />
                  ))

                :
                inputsInfo.map((input) => (
                  <FormInput key={input.id} {...input} value={valuesRegister[[input.name]]} onChange={onChangeRegister} /> ))
            }
          <button className='btn' type="submit">{ isLoading ? <Loading/> : 'Submit'}</button>
          </form>
      </div>
  </div>
  )
}

export default FormProfesionales