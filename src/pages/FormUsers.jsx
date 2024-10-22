import '../css/components/registeruser.css'
import FormInput from '../components/FormInput'
import { useRef, useState } from 'react'
import FormButtons from '../components/FormButtons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { setToken, getToken } from '../assets/confTokens.js'
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import { toast } from 'react-toastify'

const FormUser = () => {
  const API_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/user' : 'Nothing here yet';

  const [valuesRegister, setValuesRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    height: "",
    weight: ""
  })

  const [valuesLogIn, setValuesLogIn] = useState({
    email: "",
    contraseña: "",
    reafirmarcontraseña: "",
  })


  const [register, setRegister] = useState(true);
  const [login, setLogin] = useState(false);
  const [infoUser, setInfoUser] = useState(false)
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
      id: 3,
      name: "age",
      type: "number",
      errorMessage: "Debes ingresar tu edad",
      label: "Edad",
      required: true
    }
    ,
    {
      id: 4,
      name: "height",
      type: "text",
      errorMessage: "Debes ingresar tu estatura",
      label: "Estatura",
      required: true
    }
    ,
    {
      id: 5,
      name: "weight",
      type: "number",
      errorMessage: "Debes ingresar tu weight",
      label: "Peso",
      required: true
    }
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
      id: 6,
      name: "password",
      type: "password",
      errorMessage: "La contraseña debe tener 8-16 letras y una mayuscula ",
      label: "Contraseña",
      pattern: `^(?=.*[A-Z]).{8,16}$`,
      required: true
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      errorMessage: "La contraseña no es la misma",
      label: "Confirmar Contraseña",
      pattern: valuesRegister.password,
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

    setInfoUser((prev) => !prev);
  }

  const loginUser = (e) => {
    e.preventDefault()

    toast.success('YWESSSS')
    console.log(toast.success('yeess'));
    // const data = new FormData(e.target)
    // const registerData = Object.fromEntries(data.entries())
  }

  const registerFullUser = async (e) => {
    e.preventDefault();

    const newUser = {
      ...valuesRegister
    }

    try {
      const res = await axios.post(API_URI, newUser);
      setToken(await res.data.token)
      toast.success(`Welcome ${await res.data.name} to your dashboard`)
      navigate('/')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className="form__register">
      <ToastContainer />
      <div className="form__register__start">
        <div className="form__register__start__img">
          <img src="../../BodyLinkForm.png" alt="logo" />
        </div>
        <div className="form__register__start__welcome">
          <h3>
            Bienvenido a la plataforma BodyLink.  Aqui podras encontrar planes de nutrición y entrenamiento
            por parte de profesionales certificados en las areas de nutrición y deporte.
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
            <h1>{ !infoUser ? register ? 'Registrate' : 'Iniciar Seción' : "Medidas del cuerpo" }</h1>
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
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormUser