import { useState } from 'react'
import { z } from 'zod'
import styles from '../AuthLogin.module.css'
import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import { Input } from '@/components/ui/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import loginNutritionist from '@/services/nutritionist/loginNutritionist.services'
import useAuthNutritionist from '@/context/auth/Nutritionist/useAuthNutritionist'

const authLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'El email es obligatorio')
    .email('Favor de ingresar un correo valido'),
  password: z.string().min(1, 'El password es obligatorio'),
})

const AuthLoginHandleForm = () => {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  )
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const { setAccount } = useAuthNutritionist()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const loginData = Object.fromEntries(formData)

    const validate = authLoginSchema.safeParse(loginData)

    if (!validate.success) {
      const formattedErrors = validate.error.format()

      setErrors({
        email: formattedErrors.email?._errors[0],
        password: formattedErrors.password?._errors[0],
      })
      return
    }

    setErrors({})

    const response = await loginNutritionist(validate.data)

    if (!response.success) {
      if (response.errorCode === 'UNAUTHORIZED') {
        return toast.error('Email o contraseña incorrectos', {
          id: response.errorCode,
        })
      }
      return toast.error('Favor de escribir correctamente las credenciales', {
        id: response.errorCode,
      })
    }

    if (response.success && response.data) {
      toast.success('Bienvenido de vuelta', { id: response.data.email })
      setAccount(response.data)
      navigate('/')
      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.controller}>
        <Input
          label='Email'
          type='text'
          width='100%'
          property='email'
          icon='Mail'
          placeholder='ej. usuario@example.com'
        />
        {errors.email && (
          <span className={styles.controller_error}>{errors.email}</span>
        )}
      </div>
      <div className={styles.controller}>
        <Input
          label='Contraseña'
          type='password'
          width='100%'
          property='password'
          icon='Lock'
          placeholder='************'
        />
        {errors.password && (
          <span className={styles.controller_error}>{errors.password}</span>
        )}
      </div>
      <div className={styles.controller_last}>
        <label>
          <input
            type='checkbox'
            checked={checked}
            onChange={() => setChecked(prev => !prev)}
          />
          <span className={styles.checkbox}></span>
          Recuerdame
        </label>
        <span>
          <Link to='/recover-password'>¿Olvidate tu contraseña?</Link>
        </span>
      </div>
      <CustomButton customStyle={btnPrimaryStyles} type='submit'>
        Iniciar Sesión
      </CustomButton>
    </form>
  )
}

export default AuthLoginHandleForm
