import { Link } from 'react-router-dom'
import styles from './AuthLogin.module.css'
import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnSecondaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import AuthLoginHandleForm from './components/AuthLoginHandleForm'

const AuthLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <Link to='/'>
            <CustomButton type='button' customStyle={btnSecondaryStyles}>
              Regresar
            </CustomButton>
          </Link>
          <div>
            <h1>
              Bienvenido a <span>BodyLink</span>!
            </h1>
            <p>Inicia sesión en tu cuenta</p>
          </div>
          <AuthLoginHandleForm />
          <p className={styles.footer}>
            Todavia no tienes una cuenta?{' '}
            <Link to='/register'>Registrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthLogin
