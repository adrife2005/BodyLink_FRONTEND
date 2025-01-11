import RegisterModal from './components/RegisterModal'
import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { Label } from '@/components/ui/label/Label'
import { Input } from '@/components/ui/input/Input'
import { CustomButton } from '@/components/ui/button/CustomButton'

import {
  UsersRound,
  SlidersHorizontal,
  Plus,
  ArrowUpDown,
  Grid2x2,
  CircleUser,
  Pencil,
  Archive,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'
import styles from './Patients.module.css'
import labels from './filter-labels.json'
import patients from './patients-table.json'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'

export function Patients() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeView, setActiveView] = useState('Activos')
  const actionButtonStyle = {
    padding: '8px 13px',
    borderRadius: 'var(--border-radius-md)',
    backgroundColor: 'var(--border-color)',
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
      <section data-testid='patients-data' className={styles['patients-data']}>
        <main className={styles['patients-selection']}>
          <div>
            <button
              className={`${activeView === 'Activos' && styles.isActive}`}
              onClick={() => setActiveView('Activos')}
            >
              Activos
            </button>
            <button
              className={`${activeView === 'Archivados' && styles.isActive}`}
              onClick={() => setActiveView('Archivados')}
            >
              Archivados
            </button>
          </div>
          <div>
            <div>
              <div>
                <span>Vista por pagina</span>
                <select defaultValue='6'>
                  <option value='1'>1</option>
                  <option value='1'>2</option>
                  <option value='1'>3</option>
                  <option value='1'>4</option>
                  <option value='1'>5</option>
                  <option value='1'>6</option>
                  <option value='1'>7</option>
                  <option value='1'>8</option>
                  <option value='1'>9</option>
                  <option value='1'>10</option>
                </select>
              </div>
              <Grid2x2 />
            </div>
            <table className={styles['patients-table']}>
              <thead>
                <tr>
                  <td>
                    Paciente
                    <ArrowUpDown />
                  </td>
                  <td>
                    e-Mail
                    <ArrowUpDown />
                  </td>
                  <td>
                    Ultima consulta
                    <ArrowUpDown />
                  </td>
                  <td>
                    Objetivo
                    <ArrowUpDown />
                  </td>
                  <td>Acción</td>
                </tr>
              </thead>
              <tbody>
                {patients.map(patient => (
                  <tr key={patient.objective}>
                    <td>
                      <CircleUser color='#19a853' />
                      {patient.name}
                    </td>
                    <td>{patient.email}</td>
                    <td>{patient.lastAppointment}</td>
                    <td>{patient.objective}</td>
                    <td>
                      <CustomButton customStyle={actionButtonStyle}>
                        <Pencil />
                      </CustomButton>
                      <CustomButton customStyle={actionButtonStyle}>
                        <Archive />
                      </CustomButton>
                      <ChevronRight height={35} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <aside>
          <CircleUser
            width={120}
            height={120}
            strokeWidth={1}
            color='#9ca3af'
          />
          <p>Selectiona un paciente para ver la información previa</p>
        </aside>
        <footer>
          <div>
            <ChevronLeft />
          </div>
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div>
            <ChevronRight />
          </div>
        </footer>
      </section>
      {isModalOpen &&
        createPortal(
          <RegisterModal close={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  )
}
