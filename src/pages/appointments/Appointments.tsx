import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { CalendarDays } from 'lucide-react'

export function Appointments() {
  return (
    <>
      <SectionHeader
        icon={<CalendarDays />}
        title='Citas'
        description='Descripcion'
      />
    </>
  )
}
