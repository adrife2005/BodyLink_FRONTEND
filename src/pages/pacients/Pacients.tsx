import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { Label } from '@/components/ui/label/Label'
import { UsersRound, Search, SlidersHorizontal } from 'lucide-react'
import styles from './Pacients.module.css'
import labels from './filter-labels.json'

export function Pacients() {
  return (
    <>
      <SectionHeader
        icon={<UsersRound />}
        title='Pacientes'
        description='Registra, administra y archiva perfiles'
      />
      <section className={styles['search-section']}>
        <div className={styles.searchBar}>
          <div>
            <Search />
          </div>
          <input type='text' placeholder='Busca clientes, Archivos, Etc...' />
        </div>
        <div className={styles.filter}>
          <SlidersHorizontal />
        </div>
        <p>354 resultados</p>
      </section>
      <section className={styles['filter-labels']}>
        {labels.map(label => (
          <Label text={label.text} color={label.color} icon={label.icon} />
        ))}
      </section>
    </>
  )
}
