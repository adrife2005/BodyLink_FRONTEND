import PatientsTable from './components/PatientsTable/PatientsTable'
import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import SearchPatients from './components/Search/SearchPatients'

import { UsersRound } from 'lucide-react'
import { GetPatientsProvider } from '../../context/GetPatients'

export function Patients() {
  return (
    <GetPatientsProvider>
      <SectionHeader
        icon={<UsersRound aria-label='Pacientes' />}
        title='Pacientes'
        description='Registra, administra y archiva perfiles'
      />
      <SearchPatients />
      <PatientsTable />
    </GetPatientsProvider>
  )
}
