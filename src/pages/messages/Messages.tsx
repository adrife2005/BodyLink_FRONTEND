import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { MessageSquare } from 'lucide-react'

export function Messages() {
  return (
    <>
      <SectionHeader
        icon={<MessageSquare />}
        title='Mensajes'
        description='Description'
      />
    </>
  )
}
