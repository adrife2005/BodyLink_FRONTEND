import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { Label } from '@/components/ui/label/Label'
import { UsersRound, SlidersHorizontal } from 'lucide-react'
import styles from './Pacients.module.css'
import labels from './filter-labels.json'
import { Input } from '@/components/ui/input/Input'

export function Pacients() {
  return (
    <>
      <SectionHeader
        icon={<UsersRound />}
        title='Pacientes'
        description='Registra, administra y archiva perfiles'
      />
      <section className={styles['search-section']}>
        <Input
          icon='Search'
          type='text'
          placeholder='Busca clientes, Archivos, Etc...'
        />
        <div className={styles.filter}>
          <SlidersHorizontal />
        </div>
        <p>354 resultados</p>
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
    </>
  )
}
