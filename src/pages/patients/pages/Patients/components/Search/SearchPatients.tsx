import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import { Input } from '@/components/ui/input/Input'
import { Label } from '@/components/ui/label/Label'
import labels from '../../filter-labels.json'
import styles from './Search.module.css'
import RegisterModal from '../RegisterModal/RegisterModal'

import { Plus, SlidersHorizontal } from 'lucide-react'

import { useState } from 'react'
import { createPortal } from 'react-dom'

const SearchPatients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section data-testid='searchSection' className={styles['search-section']}>
        <div>
          <Input
            icon='Search'
            type='text'
            width='399px'
            placeholder='Busca Pacientes, Archivos, Etc...'
          />
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
