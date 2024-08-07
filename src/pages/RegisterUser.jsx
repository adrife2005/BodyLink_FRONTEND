import '../css/components/registeruser.css'
import FormInput from '../components/FormInput'
import { useRef, useState } from 'react'
import FormButtons from '../components/FormButtons'

const RegisterUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    edad: "",
    altura: "",
    peso: "",
    contraseña: "",
    reafirmarcontraseña: "",
  })

  const inputs = [
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
    // {
    //   id: 3,
    //   name: "edad",
    //   type: "number",
    //   errorMessage: "Debes ingresar tu edad",
    //   label: "Edad",
    //   required: true
    // }
    // ,
    // {
    //   id: 4,
    //   name: "estatura",
    //   type: "text",
    //   errorMessage: "Debes ingresar tu estatura",
    //   label: "Estatura",
    //   required: true
    // }
    // ,
    // {
    //   id: 5,
    //   name: "peso",
    //   type: "text",
    //   errorMessage: "Debes ingresar tu peso",
    //   label: "Peso",
    //   required: true
    // }
    ,
    {
      id: 6,
      name: "contraseña",
      type: "password",
      errorMessage: "La contraseña debe tener 8-16 letras y una mayuscula ",
      label: "Contraseña",
      pattern: `^(?=.*[A-Z]).{8,16}$`,
      required: true
    },
    {
      id: 7,
      name: "reafirmarcontraseña",
      type: "password",
      errorMessage: "La contraseña no es la misma",
      label: "Confirmar Contraseña",
      pattern: values.contraseña,
      required: true
    }
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const registerUser = (e) => {
    e.preventDefault()

    // const data = new FormData(e.target)
    // const registerData = Object.fromEntries(data.entries())
  }



  return (
    <div className="form__register">
      <form onSubmit={registerUser} className='form__register__submit'>
        <div className="form__register__title">
          <h1>Registrate</h1>
          <img src="../../public/BodyLink.png" alt="logo" />
        </div>
        <FormButtons/>
        {
          inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[[input.name]]} onChange={onChange} />
          ))
        }
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegisterUser