import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { UsersRound } from 'lucide-react'

export function Pacients() {
  return (
    <>
      <SectionHeader
        icon={<UsersRound />}
        title='Pacientes'
        description='Registra, administra y archiva perfiles'
      />
    </>
  )
}
