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
import { useState } from 'react'
import {
  getPagePerView,
  setPagePerView,
} from '../../localStorage/getPagePerView'

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
  const [sliceTable, setSliceTable] = useState(getPagePerView())
  const [currentPage, setCurrentPage] = useState(1)

  const handlePagePerView = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSliceTable(Number(event.target.value))
    setPagePerView(event.target.value)
  }

  const startIndex = (currentPage - 1) * sliceTable
  const currentPageData = patients.slice(startIndex, startIndex + sliceTable)
  const totalPages = Math.ceil(patients.length / sliceTable)

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
              <select defaultValue={sliceTable} onChange={handlePagePerView}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
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
                <tr className={styles.loading}>
                  <td></td>
                </tr>
              : patients.length === 0 ?
                <tr>
                  <td colSpan={5}>No hay pacientes</td>
                </tr>
              : currentPageData.map((patient, index) => (
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
        <Paginator
          length={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <aside>
        <CircleUser width={120} height={120} strokeWidth={1} color='#9ca3af' />
        <p>Selectiona un paciente para ver la información previa</p>
      </aside>
    </section>
  )
}
