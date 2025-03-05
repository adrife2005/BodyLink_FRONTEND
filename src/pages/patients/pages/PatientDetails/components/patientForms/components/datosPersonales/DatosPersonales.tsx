import {
  AtSign,
  Calendar,
  MapPin,
  PersonStanding,
  Smartphone,
  UserPen,
  File,
  FileInput,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react'

import styles from './DatosPersonales.module.css'
import { usePatientContext } from '../../../../context/userPatientContext'
import { useState } from 'react'

const formatDate = (date: Date) => {
  const parsedDate = new Date(date)

  if (isNaN(parsedDate.getTime())) {
    return 'Invalid date'
  }

  return formatedToUse(parsedDate.toLocaleDateString())
}

const formatedToUse = (dateString: string): string => {
  const [month, day, year] = dateString.split('/').map(Number)

  const formattedDate = new Date(year, month - 1, day)
    .toISOString()
    .split('T')[0]

  return formattedDate
}

const DatosPersonales = () => {
  const { data, setData, loading } = usePatientContext()
  const [toggle, setToggle] = useState(false)

  if (loading) {
    return (
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <div className={styles.wrapper}>
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
                  value={data.full_name}
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
                  value={formatDate(data.date_of_birth)}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
          </div>
          <div className={styles['personal-details']}>
            <div className={styles.form_wrapper}>
              <label htmlFor='genero'>Genero</label>
              <div className={styles.input}>
                <div>
                  <PersonStanding />
                </div>
                <select name='gender'>
                  {data.gender === 'male' ? 'Masculino' : 'Femenino'}
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
                  value={data.country}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
          </div>
          <div className={styles['personal-details']}>
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
                  value={data.occupacity}
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
                  value={data.email}
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
                  value={data.phone}
                  onChange={onChangeEvent}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className={styles.container}>
          <h2>Archivos del paciente</h2>
          {data.customFields && data.customFields.length > 0 ?
            data.customFields.map((archivo, index) => (
              <div key={index} className={styles['personal-details']}>
                <div className={styles.form_wrapper}>
                  <div className={styles.input}>
                    <div>
                      <File />
                    </div>
                    <input
                      id='full_name'
                      type='text'
                      name='full_name'
                      value={archivo.name}
                      onChange={onChangeEvent}
                    />
                  </div>
                </div>
                <div className={styles.form_wrapper}>
                  <div className={styles.input}>
                    <div>
                      <File />
                    </div>
                    <input
                      id='full_name'
                      type='text'
                      name='full_name'
                      value={archivo.name}
                      onChange={onChangeEvent}
                    />
                  </div>
                </div>
              </div>
            ))
          : null}
          <div className={styles.archivos}>
            <FileInput color='#19a853' />
            <span>Sube archivos del paciente</span>
            <p>Máximo 10MB, Formato PDF</p>
          </div>
        </div>
        <div className={styles.container}>
          <h2>Preferencias de la App del paciente</h2>
          <div className={styles.wrapper_preferencias}>
            <div className={styles.preferencias}>
              <span>Acceso a la App</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
            <div className={styles.preferencias}>
              <span>Enviar y recibir mensaje</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
            <div className={styles.preferencias}>
              <span>Acceso a la App</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
            <div className={styles.preferencias}>
              <span>Agendar consultas</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
            <div className={styles.preferencias}>
              <span>Ver el PDF de nutrición</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
            <div className={styles.preferencias}>
              <span>Ver el PDF de entrenamiento</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
            <div className={styles.preferencias}>
              <span>Subir estudios en PDF</span>
              {toggle ?
                <ToggleLeft color='#19a853' onClick={() => setToggle(false)} />
              : <ToggleRight onClick={() => setToggle(true)} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatosPersonales
