import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import { Label } from '@/components/ui/label/Label'
import labels from '../../filter-labels.json'
import styles from './Search.module.css'
import RegisterModal from '../RegisterModal/RegisterModal'

import { Plus, Search, SlidersHorizontal } from 'lucide-react'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import useGetPatients from '@/pages/patients/context/useGetPatients'

const SearchPatients = () => {
  const { patients, setPatients, originalPatients } = useGetPatients()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchPatient, setSearchPatient] = useState('')

  useEffect(() => {
    if (searchPatient === '') {
      return setPatients(originalPatients)
    }
    const sortPatients = patients
      .filter(patient =>
        patient.full_name.toLowerCase().includes(searchPatient.toLowerCase())
      )
      .sort((a, b) => a.full_name.localeCompare(b.full_name))

    setPatients(sortPatients)
  }, [searchPatient])

  return (
    <>
      <section data-testid='searchSection' className={styles['search-section']}>
        <div>
          <div className={styles.form_wrapper}>
            <div className={styles.input}>
              <div>
                <Search />
              </div>
              <input
                id='search'
                type='text'
                name='search'
                placeholder='Buscar Pacientes, Archivos, Etc...'
                value={searchPatient}
                onChange={e => setSearchPatient(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.filter}>
            <SlidersHorizontal aria-label='filter' />
          </div>
          <p>354 resultados</p>
        </div>
        <CustomButton
          customStyle={btnPrimaryStyles}
          onClick={() => setIsModalOpen(true)}
        >
          <Plus />
          Registrar paciente
        </CustomButton>
      </section>
      <section className={styles['filter-labels']}>
        {labels.map((label, index) => (
          <Label
            text={label.text}
            color={label.color}
            icon={label.icon}
            key={index}
          />
        ))}
      </section>
      {isModalOpen &&
        createPortal(
          <RegisterModal close={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  )
}

export default SearchPatients
