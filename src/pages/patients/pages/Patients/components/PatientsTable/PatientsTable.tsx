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

import Paginator from '../Paginator/Paginator'
import { Link } from 'react-router-dom'
import useGetPatients from '@/pages/patients/context/useGetPatients'

const actionButtonStyle = {
  padding: '8px 13px',
  borderRadius: 'var(--border-radius-md)',
  backgroundColor: 'var(--border-color)',
}

const formatDate = (date: Date) => {
  const parsedDate = new Date(date)

  if (isNaN(parsedDate.getTime())) {
    return 'Invalid date'
  }

  return parsedDate.toLocaleDateString()
}

export default function PatientsTable() {
  const { patients, loading, activeView, setActiveView } = useGetPatients()

  return (
    <section data-testid='patients-data' className={styles['patients-data']}>
      <div className={styles['patients-selection']}>
        <div>
          <button
            className={`${activeView === 'active' && styles.isActive}`}
            onClick={() => setActiveView('active')}
          >
            Activos
          </button>
          <button
            className={`${activeView === 'archived' && styles.isActive}`}
            onClick={() => setActiveView('archived')}
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
                <td>Acción</td>
              </tr>
            </thead>
            <tbody>
              {loading ?
                <tr>
                  <td colSpan={5}>Cargando...</td>
                </tr>
              : patients.length === 0 ?
                <tr>
                  <td colSpan={5}>No hay pacientes</td>
                </tr>
              : patients.map((patient, index) => (
                  <tr key={index}>
                    <td>
                      <CircleUser color='#19a853' />
                      {patient.full_name}
                    </td>
                    <td>{patient.email}</td>
                    <td>{formatDate(patient.createdAt)}</td>
                    <td>
                      <Link to={`/pacientes/${patient.id}`} key={index}>
                        <CustomButton customStyle={actionButtonStyle}>
                          <Pencil />
                        </CustomButton>
                      </Link>
                      <CustomButton customStyle={actionButtonStyle}>
                        <Archive />
                      </CustomButton>
                      <ChevronRight className={styles.active} height={35} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <Paginator />
      </div>
      <aside>
        <CircleUser width={120} height={120} strokeWidth={1} color='#9ca3af' />
        <p>Selectiona un paciente para ver la información previa</p>
      </aside>
    </section>
  )
}
