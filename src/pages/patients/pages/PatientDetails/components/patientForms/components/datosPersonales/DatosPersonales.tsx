import { useEffect, useState } from 'react'
import {
  AtSign,
  Calendar,
  MapPin,
  PersonStanding,
  Smartphone,
  UserPen,
} from 'lucide-react'

import styles from './DatosPersonales.module.css'
import { useParams } from 'react-router-dom'
import getPatient from '@/services/patient/getPatient'
import { PatientProps } from '@/types/patients'

const DatosPersonales = () => {
  const { id } = useParams()
  const [values, setValues] = useState<PatientProps | null>()
  const [error, setError] = useState<string | null>(null)

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    if (values) {
      setValues({
        ...values,
        [name]: value,
      })
    }
  }

  useEffect(() => {
    if (id) {
      const fethPatient = async () => {
        const response = await getPatient(id)

        if (!response.success) {
          setError(response.message)
          return
        }

        setValues(response.data)
      }

      fethPatient()
    }
  }, [id])

  if (error) {
    return
  }

  return (
    <div>
      <div className={styles.container}>
        <h2>Datos Personales</h2>
        <form>
          <div className={styles['personal-details']}>
            <div className={styles.form_wrapper}>
              <label htmlFor='full_name'>Nombre Completo</label>
              <div className={styles.input}>
                <div>
                  <UserPen />
                </div>
                <input
                  id='full_name'
                  type='text'
                  name='full_name'
                  value={values?.full_name}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
            <div className={styles.form_wrapper}>
              <label htmlFor='date_of_birth'>Fecha de nacimiento</label>
              <div className={styles.input}>
                <div>
                  <Calendar />
                </div>
                <input
                  id='date_of_birth'
                  type='date'
                  name='date_of_birth'
                  value={values?.email}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
            <div className={styles.form_wrapper}>
              <label htmlFor='genero'>Genero</label>
              <div className={styles.input}>
                <div>
                  <PersonStanding />
                </div>
                <select name='gender'>
                  {values?.gender === 'male' ? 'Masculino' : 'Femenino'}
                  <option value='male'>Masculino</option>
                  <option value='female'>Femenino</option>
                </select>
              </div>
            </div>
            <div className={styles.form_wrapper}>
              <label htmlFor='full_name'>Pais de origen</label>
              <div className={styles.input}>
                <div>
                  <MapPin />
                </div>
                <input
                  id='country'
                  type='text'
                  name='country'
                  value={values?.country}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
            <div className={styles.form_wrapper}>
              <label htmlFor='occupacity'>Ocupación</label>
              <div className={styles.input}>
                <div>
                  <UserPen />
                </div>
                <input
                  id='occupacity'
                  type='text'
                  name='occupacity'
                  value={values?.occupacity}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
          </div>
          <h3>Datos de Contacto</h3>
          <div className={styles['contact-details']}>
            <div className={styles.form_wrapper}>
              <label htmlFor='email'>Email</label>
              <div className={styles.input}>
                <div>
                  <AtSign />
                </div>
                <input
                  id='email'
                  type='text'
                  name='email'
                  value={values?.email}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
            <div className={styles.form_wrapper}>
              <label htmlFor='phone'>Teléfono Movil</label>
              <div className={styles.input}>
                <div>
                  <Smartphone />
                </div>
                <input
                  id='phone'
                  type='number'
                  name='phone'
                  value={values?.phone}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DatosPersonales
