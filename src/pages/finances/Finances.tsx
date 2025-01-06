import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { ChartColumnDecreasing } from 'lucide-react'

export function Finances() {
  return (
    <>
      <SectionHeader
        icon={<ChartColumnDecreasing />}
        title='Mensajes'
        description='Description'
      />
    </>
  )
}
