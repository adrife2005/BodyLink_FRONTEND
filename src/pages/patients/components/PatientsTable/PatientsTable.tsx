import { Label } from '@/components/ui/label/Label'
import { CustomButton } from '@/components/ui/button/CustomButton'
import {
  ArrowUpDown,
  Grid2x2,
  CircleUser,
  Pencil,
  Archive,
  ChevronRight,
} from 'lucide-react'
import styles from './PatientsTable.module.css'
import patients from './patients-table.json'
import objectives from './objectives'

import { useState } from 'react'
import Paginator from '../Paginator/Paginator'

export default function PatientsTable() {
  const [activeView, setActiveView] = useState('Activos')
  const actionButtonStyle = {
    padding: '8px 13px',
    borderRadius: 'var(--border-radius-md)',
    backgroundColor: 'var(--border-color)',
  }

  return (
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
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>
                    <CircleUser color='#19a853' />
                    {patient.name}
                  </td>
                  <td>{patient.email}</td>
                  <td>{patient.lastAppointment}</td>
                  <td>
                    <Label
                      text={patient.objective}
                      customStyle={{
                        backgroundColor: objectives[patient.objective],
                      }}
                    />
                  </td>
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
        <CircleUser width={120} height={120} strokeWidth={1} color='#9ca3af' />
        <p>Selectiona un paciente para ver la información previa</p>
      </aside>
      <Paginator />
    </section>
  )
}
