import RegisterModal from './components/RegisterModal'
import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { Label } from '@/components/ui/label/Label'
import { Input } from '@/components/ui/input/Input'
import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'

import { UsersRound, SlidersHorizontal, Plus } from 'lucide-react'
import styles from './Patients.module.css'
import labels from './filter-labels.json'

import { useState } from 'react'
import { createPortal } from 'react-dom'

export function Patients() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleRegisterModal = (value: boolean) => {
    setIsModalOpen(value)
  }

  return (
    <>
      <SectionHeader
        icon={<UsersRound aria-label='Pacientes' />}
        title='Pacientes'
        description='Registra, administra y archiva perfiles'
      />
      <section data-testid='searchSection' className={styles['search-section']}>
        <div>
          <Input
            icon='Search'
            type='text'
            width='399px'
            placeholder='Busca clientes, Archivos, Etc...'
          />
          <div className={styles.filter}>
            <SlidersHorizontal aria-label='filter' />
          </div>
          <p>354 resultados</p>
        </div>
        <CustomButton
          className={btnPrimaryStyles}
          onClick={() => toggleRegisterModal(true)}
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
          <RegisterModal close={() => toggleRegisterModal(false)} />,
          document.body
        )}
    </>
  )
}
