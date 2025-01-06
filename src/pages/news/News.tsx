import { SectionHeader } from '@/components/_shared/sectionHeader/SectionHeader'
import { Newspaper } from 'lucide-react'

export function News() {
  return (
    <>
      <SectionHeader
        icon={<Newspaper />}
        title='Noticias'
        description='Enterate todo lo que esta pasando en BodyLink, mejora como profesional y participa en la comunidad'
      />
    </>
  )
}
